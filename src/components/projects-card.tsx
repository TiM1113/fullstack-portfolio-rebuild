"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { featuredProjects } from "@/data/site-content";
import { SectionPill } from "@/components/ui/section-pill";
import { cn } from "@/lib/utils";

interface ProjectCoverTheme {
  sheetClassName: string;
  chipClassName: string;
  headingClassName: string;
  textClassName: string;
  dotClassName: string;
  orbOneClassName: string;
  orbTwoClassName: string;
  orbThreeClassName: string;
}

const projectCoverThemes: Record<string, ProjectCoverTheme> = {
  "food-delivery-platform": {
    sheetClassName:
      "bg-[linear-gradient(135deg,#fcfcf8_0%,#eef4ff_48%,#d9e7ff_100%)] ring-slate-900/10",
    chipClassName: "border-slate-900/10 bg-white/75 text-slate-600",
    headingClassName: "text-slate-950",
    textClassName: "text-slate-500",
    dotClassName: "bg-slate-950/70",
    orbOneClassName: "bg-sky-400/30",
    orbTwoClassName: "bg-indigo-500/18",
    orbThreeClassName: "bg-white/85",
  },
  "llm-wiki-skill": {
    sheetClassName:
      "bg-[linear-gradient(135deg,#f9f7ff_0%,#eef0ff_50%,#e1f0ff_100%)] ring-indigo-900/10",
    chipClassName: "border-indigo-900/10 bg-white/75 text-indigo-600",
    headingClassName: "text-slate-950",
    textClassName: "text-slate-500",
    dotClassName: "bg-indigo-900/65",
    orbOneClassName: "bg-fuchsia-400/18",
    orbTwoClassName: "bg-sky-400/24",
    orbThreeClassName: "bg-white/80",
  },
  "tim-dev-rig": {
    sheetClassName:
      "bg-[linear-gradient(135deg,#f7fafc_0%,#ebf1f6_45%,#dbe5ee_100%)] ring-slate-900/10",
    chipClassName: "border-slate-900/10 bg-white/75 text-slate-600",
    headingClassName: "text-slate-950",
    textClassName: "text-slate-500",
    dotClassName: "bg-slate-950/70",
    orbOneClassName: "bg-cyan-400/20",
    orbTwoClassName: "bg-slate-500/18",
    orbThreeClassName: "bg-white/80",
  },
  "farm-time-management-system": {
    sheetClassName:
      "bg-[linear-gradient(135deg,#fefdf6_0%,#f2f6e6_48%,#e2ecd0_100%)] ring-emerald-900/10",
    chipClassName: "border-emerald-900/10 bg-white/75 text-emerald-700",
    headingClassName: "text-slate-950",
    textClassName: "text-slate-500",
    dotClassName: "bg-emerald-950/65",
    orbOneClassName: "bg-emerald-400/22",
    orbTwoClassName: "bg-amber-300/22",
    orbThreeClassName: "bg-white/85",
  },
};

function getProjectTheme(slug: string) {
  return (
    projectCoverThemes[slug] ?? projectCoverThemes["food-delivery-platform"]
  );
}

function getProjectMark(title: string) {
  return title
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export function ProjectsCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [primaryProject, secondaryProject] = featuredProjects;
  const primaryTheme = getProjectTheme(primaryProject.slug);
  const secondaryTheme = getProjectTheme(secondaryProject.slug);

  // Mouse position 0..1 (0 = left/top, 1 = right/bottom)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Spring for smooth motion
  const springConfig = { stiffness: 120, damping: 18 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  const rotateY = useTransform(
    xSpring,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-2.4, 2.4]
  );
  const rotateX = useTransform(
    ySpring,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [2.2, -2.2]
  );
  const frontRotateZ = useTransform(
    xSpring,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-3.5, 1.5]
  );
  const frontTranslateX = useTransform(
    xSpring,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [6, -6]
  );
  const frontTranslateY = useTransform(
    ySpring,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [4, -4]
  );
  const backRotateZ = useTransform(
    xSpring,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-8, -4]
  );
  const backTranslateX = useTransform(
    xSpring,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-4, 4]
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mouseX.set(px);
    mouseY.set(py);
  }

  function handleMouseLeave() {
    if (prefersReducedMotion) return;
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg transition-shadow duration-200 gap-2 overflow-hidden relative col-span-6 h-80 sm:col-span-3 md:col-span-2 lg:col-span-2">
      <SectionPill
        icon={<MessageCircle className="h-4 w-4" />}
        className="relative z-10"
      >
        Projects
      </SectionPill>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex-1 w-full mt-2 flex items-center justify-center"
        style={{ perspective: "900px" }}
      >
        <motion.div
          className={cn(
            "absolute inset-x-8 top-12 bottom-6 overflow-hidden rounded-[2rem] border border-white/70 p-4 shadow-[0_24px_44px_rgba(15,23,42,0.1)]",
            secondaryTheme.sheetClassName
          )}
          style={{
            rotateZ: backRotateZ,
            x: backTranslateX,
          }}
        >
          <div
            className={cn(
              "absolute left-5 top-5 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em]",
              secondaryTheme.chipClassName
            )}
          >
            {secondaryProject.period}
          </div>
          <div
            className={cn(
              "absolute left-5 top-20 text-[5.5rem] font-semibold tracking-[-0.08em] opacity-35",
              secondaryTheme.headingClassName
            )}
          >
            {getProjectMark(secondaryProject.title)}
          </div>
          <div className="absolute inset-0">
            <div
              className={cn(
                "absolute -left-6 top-16 h-28 w-28 rounded-full blur-2xl",
                secondaryTheme.orbOneClassName
              )}
            />
            <div
              className={cn(
                "absolute right-6 top-8 h-24 w-24 rounded-full blur-2xl",
                secondaryTheme.orbTwoClassName
              )}
            />
          </div>
          <div className="absolute inset-x-5 bottom-5">
            <p
              className={cn(
                "text-[11px] font-medium uppercase tracking-[0.18em]",
                secondaryTheme.textClassName
              )}
            >
              Next in the stack
            </p>
            <h3
              className={cn(
                "mt-2 text-lg font-semibold tracking-tight",
                secondaryTheme.headingClassName
              )}
            >
              {secondaryProject.title}
            </h3>
          </div>
        </motion.div>

        <Link
          href={`/projects/${primaryProject.slug}`}
          aria-label={`Read the ${primaryProject.title} case study`}
          className="group absolute inset-x-4 top-6 bottom-4 rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
        >
          <motion.div
            className={cn(
              "absolute inset-0 overflow-hidden rounded-[2rem] border border-white/75 shadow-[0_30px_60px_rgba(15,23,42,0.16)]",
              primaryTheme.sheetClassName
            )}
            style={{
              rotateX,
              rotateY,
              rotateZ: frontRotateZ,
              x: frontTranslateX,
              y: frontTranslateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-0">
              <div
                className={cn(
                  "absolute -left-10 top-0 h-36 w-36 rounded-full blur-3xl transition duration-200 group-hover:scale-110",
                  primaryTheme.orbOneClassName
                )}
              />
              <div
                className={cn(
                  "absolute right-6 top-10 h-28 w-28 rounded-full blur-3xl transition duration-200 group-hover:translate-y-2",
                  primaryTheme.orbTwoClassName
                )}
              />
              <div
                className={cn(
                  "absolute bottom-10 left-14 h-24 w-24 rounded-full blur-2xl transition duration-200 group-hover:-translate-y-2",
                  primaryTheme.orbThreeClassName
                )}
              />
            </div>

            <motion.div
              className="absolute inset-0 transition duration-200 group-hover:scale-[1.015] group-hover:blur-[4px]"
            >
              <div
                className={cn(
                  "absolute left-5 top-5 rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em]",
                  primaryTheme.chipClassName
                )}
              >
                {primaryProject.period}
              </div>

              <div className="absolute right-5 top-5 flex gap-1">
                {Array.from({ length: 3 }).map((_, index) => (
                  <span
                    key={index}
                    className={cn(
                      "h-2.5 w-2.5 rounded-full",
                      primaryTheme.dotClassName
                    )}
                  />
                ))}
              </div>

              <div
                className={cn(
                  "absolute left-5 top-[5.5rem] text-[6rem] font-semibold tracking-[-0.08em] opacity-30 transition duration-200 group-hover:opacity-20",
                  primaryTheme.headingClassName
                )}
              >
                {getProjectMark(primaryProject.title)}
              </div>

              <div className="absolute inset-x-5 bottom-5">
                <p
                  className={cn(
                    "text-[11px] font-medium uppercase tracking-[0.18em]",
                    primaryTheme.textClassName
                  )}
                >
                  Featured case study
                </p>
                <h3
                  className={cn(
                    "mt-2 max-w-[15rem] text-[1.85rem] font-semibold tracking-tight leading-none",
                    primaryTheme.headingClassName
                  )}
                >
                  {primaryProject.title}
                </h3>
              </div>
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="inline-flex items-center rounded-xl border border-white/70 bg-white/85 px-5 py-2 text-sm font-medium text-zinc-950 shadow-sm backdrop-blur-md">
                Read case study
              </span>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
