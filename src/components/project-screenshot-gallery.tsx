"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, MoonStar, SunMedium } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { Project } from "@/data/site-content";
import { cn } from "@/lib/utils";

function getThemeLabel(theme: "light" | "dark" | undefined) {
  return theme === "dark" ? "Dark theme" : "Light theme";
}

export function ProjectScreenshotGallery({ project }: { project: Project }) {
  const screenshots = project.screenshots ?? [];
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const activeShot = screenshots[activeIndex] ?? screenshots[0];
  const canGoBackward = activeIndex > 0;
  const canGoForward = activeIndex < screenshots.length - 1;

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(index, screenshots.length - 1));
    const left = track.clientWidth * nextIndex;

    track.scrollTo({
      left,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    if (!screenshots.length) {
      return;
    }

    const track = trackRef.current;

    if (!track) {
      return;
    }

    let frame = 0;

    const syncIndex = () => {
      frame = window.requestAnimationFrame(() => {
        const width = track.clientWidth || 1;
        const nextIndex = Math.round(track.scrollLeft / width);
        setActiveIndex((previous) =>
          previous === nextIndex
            ? previous
            : Math.max(0, Math.min(nextIndex, screenshots.length - 1))
        );
      });
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(frame);
      syncIndex();
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    syncIndex();

    return () => {
      window.cancelAnimationFrame(frame);
      track.removeEventListener("scroll", handleScroll);
    };
  }, [screenshots.length]);

  if (!screenshots.length || !activeShot) {
    return null;
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") {
      return;
    }

    const track = trackRef.current;

    if (!track) {
      return;
    }

    dragStateRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: track.scrollLeft,
      moved: false,
    };

    track.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (!track || !dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();
    const delta = event.clientX - dragState.startX;
    if (Math.abs(delta) > 8) {
      dragStateRef.current.moved = true;
    }
    track.scrollLeft = dragState.startScrollLeft - delta;
  };

  const endPointerDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const dragState = dragStateRef.current;

    if (!track || dragState.pointerId !== event.pointerId) {
      return;
    }

    dragStateRef.current = {
      active: false,
      pointerId: -1,
      startX: 0,
      startScrollLeft: 0,
      moved: false,
    };

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
  };

  const handleStageClick = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    if (dragStateRef.current.moved) {
      dragStateRef.current.moved = false;
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const midpoint = bounds.left + bounds.width / 2;

    if (event.clientX < midpoint) {
      scrollToIndex(activeIndex - 1);
      return;
    }

    scrollToIndex(activeIndex + 1);
  };

  return (
    <section className="overflow-hidden rounded-[2rem] border border-[color:var(--surface-outline)] bg-[color:var(--surface-panel)] shadow-[0_24px_56px_rgba(2,6,23,0.18)]">
      <div className="flex flex-col gap-5 px-5 py-5 sm:px-6">
        <div className="max-w-3xl">
          <p className="section-label">Interactive walkthrough</p>
          <h2 className="mt-3 text-xl font-semibold tracking-[-0.05em] sm:text-2xl">
            Swipe through the live product, including light and dark theme states.
          </h2>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            Start on the homepage, move through menu browsing and auth, then
            compare the dark theme versions in the same flow.
          </p>
        </div>

        <div
          className="group/stage relative overflow-hidden rounded-[1.65rem] border border-[color:var(--surface-outline)] bg-[#0b111b]"
          onClick={handleStageClick}
        >
          <div className="pointer-events-none absolute right-4 top-4 z-20 opacity-100 transition md:opacity-0 md:group-hover/stage:opacity-100 md:group-focus-within/stage:opacity-100">
            <span className="rounded-full border border-white/10 bg-[rgba(6,10,17,0.72)] px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
              {activeIndex + 1} / {screenshots.length}
            </span>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-1/2 items-center justify-start md:flex">
            <div className="flex h-full w-full items-center bg-[linear-gradient(90deg,rgba(2,6,23,0.18),transparent_52%)] pl-5 opacity-0 transition group-hover/stage:opacity-100 group-focus-within/stage:opacity-100">
              <span
                className={cn(
                  "inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[rgba(6,10,17,0.74)] text-white/88 shadow-[0_12px_28px_rgba(2,6,23,0.22)] backdrop-blur-md transition",
                  !canGoBackward && "opacity-35"
                )}
              >
                <ArrowLeft className="h-5 w-5" />
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-1/2 items-center justify-end md:flex">
            <div className="flex h-full w-full items-center justify-end bg-[linear-gradient(270deg,rgba(2,6,23,0.18),transparent_52%)] pr-5 opacity-0 transition group-hover/stage:opacity-100 group-focus-within/stage:opacity-100">
              <span
                className={cn(
                  "inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[rgba(6,10,17,0.74)] text-white/88 shadow-[0_12px_28px_rgba(2,6,23,0.22)] backdrop-blur-md transition",
                  !canGoForward && "opacity-35"
                )}
              >
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous project screen"
            onClick={(event) => {
              event.stopPropagation();
              scrollToIndex(activeIndex - 1);
            }}
            disabled={!canGoBackward}
            className="absolute inset-y-0 left-0 z-10 hidden w-1/2 cursor-w-resize md:block disabled:cursor-not-allowed"
          />
          <button
            type="button"
            aria-label="Next project screen"
            onClick={(event) => {
              event.stopPropagation();
              scrollToIndex(activeIndex + 1);
            }}
            disabled={!canGoForward}
            className="absolute inset-y-0 right-0 z-10 hidden w-1/2 cursor-e-resize md:block disabled:cursor-not-allowed"
          />

          <div
            ref={trackRef}
            className={cn(
              "no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth touch-pan-x",
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            )}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endPointerDrag}
            onPointerCancel={endPointerDrag}
          >
            {screenshots.map((shot) => (
              <figure key={shot.src} className="min-w-full snap-center">
                <div className="relative aspect-[16/10] bg-[#0b111b] sm:aspect-[16/9]">
                  {/* Stage images use native img here because Next/Image was not reliably loading offscreen horizontal slides. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    draggable={false}
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.8fr)] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="section-label">Current screen</span>
              <span className="rounded-full border border-[color:var(--surface-outline)] bg-[color:var(--surface-inset)] px-3 py-1.5 text-[0.72rem] font-medium text-[color:var(--foreground)]">
                {activeShot.label}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--surface-outline)] bg-[color:var(--surface-inset)] px-3 py-1.5 text-[0.72rem] font-medium text-[color:var(--muted-foreground)]">
                {activeShot.theme === "dark" ? (
                  <MoonStar className="h-3.5 w-3.5" />
                ) : (
                  <SunMedium className="h-3.5 w-3.5" />
                )}
                {getThemeLabel(activeShot.theme)}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[color:var(--muted-foreground)]">
              {activeShot.detail}
            </p>
          </div>

          <p className="text-sm leading-6 text-[color:var(--muted-foreground)] lg:text-right">
            On desktop, click either side of the stage to move through the
            flow. On touch, swipe or jump with the thumbnail rail below.
          </p>
        </div>
      </div>

      <div className="border-t border-[color:var(--surface-outline)] px-5 py-5 sm:px-6">
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
          {screenshots.map((shot, index) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-pressed={index === activeIndex}
              className={cn(
                "group min-w-[10.5rem] overflow-hidden rounded-[1.2rem] border text-left transition",
                index === activeIndex
                  ? "border-white/20 bg-white/[0.06]"
                  : "border-white/8 bg-white/[0.02] hover:border-white/14 hover:bg-white/[0.04]"
              )}
            >
              <div className="relative aspect-[16/10] bg-[#0b111b]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  draggable={false}
                  sizes="168px"
                  className="object-cover object-top transition duration-300 group-hover:scale-[1.01]"
                />
              </div>
              <div className="px-3 py-3">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                  {index + 1}. {getThemeLabel(shot.theme)}
                </p>
                <p className="mt-2 text-sm font-medium text-[color:var(--foreground)]">
                  {shot.label}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
