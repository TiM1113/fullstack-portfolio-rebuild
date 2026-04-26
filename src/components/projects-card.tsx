"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export function ProjectsCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position 0..1 (0 = left/top, 1 = right/bottom)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Spring for smooth motion
  const springConfig = { stiffness: 100, damping: 20 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  // Map mouse position to rotation angles
  const rotateY = useTransform(xSpring, [0, 1], [-3, 3]);
  const rotateZ = useTransform(xSpring, [0, 1], [-10, -2]);

  // Front layer offset (parallax)
  const frontTranslateX = useTransform(xSpring, [0, 1], [10, -10]);
  const frontTranslateY = useTransform(ySpring, [0, 1], [10, -10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mouseX.set(px);
    mouseY.set(py);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg transition-shadow duration-200 gap-2 overflow-hidden relative col-span-6 h-80 sm:col-span-3 md:col-span-2 lg:col-span-2">
      {/* Section label pill */}
      <div className="inline-flex items-center h-8 gap-1 px-4 text-sm leading-5 body-primary box-gen rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800 z-10">
        <MessageCircle className="flex-none w-4 h-4" />
        <span>Projects</span>
      </div>

      {/* 3D tilt wrapper */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex-1 w-full mt-2 flex items-center justify-center"
        style={{ perspective: "600px" }}
      >
        {/* Back layer */}
        <motion.div
          className="absolute"
          style={{
            rotateY,
            rotateZ,
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src="/images/projects/cover-lorem-ipsum.png"
            alt="Featured project preview"
            width={240}
            height={180}
            className="bg-black shadow-xl rounded-2xl select-none opacity-80"
          />
        </motion.div>

        {/* Front layer */}
        <motion.div
          className="absolute"
          style={{
            rotateY: useTransform(xSpring, [0, 1], [-1, 1]),
            rotateZ: useTransform(xSpring, [0, 1], [-2, 1]),
            translateZ: 60,
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            style={{
              x: frontTranslateX,
              y: frontTranslateY,
            }}
            className="bg-black shadow-xl rounded-2xl"
          >
            <Image
              src="/images/projects/cover-lorem-ipsum.png"
              alt="Featured project preview"
              width={240}
              height={180}
              className="rounded-2xl select-none"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
