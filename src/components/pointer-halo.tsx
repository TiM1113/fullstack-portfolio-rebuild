"use client";

import { useEffect, useEffectEvent } from "react";

export function PointerHalo() {
  const applyPointerPosition = useEffectEvent(
    (x: number, y: number, opacity: number) => {
      const root = document.documentElement;
      root.style.setProperty("--pointer-x", `${x}px`);
      root.style.setProperty("--pointer-y", `${y}px`);
      root.style.setProperty("--pointer-opacity", opacity.toString());
    }
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const defaultX = window.innerWidth * 0.34;
    const defaultY = Math.min(window.innerHeight * 0.58, 560);

    if (!finePointerQuery.matches || reducedMotionQuery.matches) {
      applyPointerPosition(defaultX, defaultY, 0);
      return;
    }

    let frameId = 0;
    let nextX = defaultX;
    let nextY = defaultY;
    let nextOpacity = 0.22;

    const flush = () => {
      frameId = 0;
      applyPointerPosition(nextX, nextY, nextOpacity);
    };

    const schedule = () => {
      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(flush);
    };

    const handleMove = (event: PointerEvent) => {
      nextX = event.clientX;
      nextY = event.clientY;
      nextOpacity = 0.78;
      schedule();
    };

    const handleLeave = () => {
      nextX = defaultX;
      nextY = defaultY;
      nextOpacity = 0.18;
      schedule();
    };

    const handleResize = () => {
      nextX = Math.min(nextX, window.innerWidth);
      nextY = Math.min(nextY, window.innerHeight);
      schedule();
    };

    applyPointerPosition(defaultX, defaultY, nextOpacity);
    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("blur", handleLeave);
    window.addEventListener("resize", handleResize);
    document.documentElement.addEventListener("pointerleave", handleLeave);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("blur", handleLeave);
      window.removeEventListener("resize", handleResize);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return <div aria-hidden="true" className="pointer-halo" />;
}
