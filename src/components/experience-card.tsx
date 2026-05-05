"use client";

import {
  Briefcase,
  Download,
  GraduationCap,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GithubIcon } from "@/components/icons";
import { SectionPill } from "@/components/ui/section-pill";
import {
  experienceItems,
  siteConfig,
  type ExperienceItem,
} from "@/data/site-content";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  palette: Palette,
};

type WorkItemState = "active" | "near" | "far";

function WorkItem({
  exp,
  state,
}: {
  exp: ExperienceItem;
  state: WorkItemState;
}) {
  const Icon = iconMap[exp.icon];

  return (
    <div
      data-experience-item
      className={cn(
        "flex gap-4 pb-4 snap-start work-item transition-[filter,opacity,transform] duration-200",
        state === "active" && "translate-x-0 opacity-100 blur-0",
        state === "near" && "translate-x-0 opacity-55 blur-[1px]",
        state === "far" && "translate-x-0 opacity-25 blur-[2.5px]"
      )}
    >
      <div className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 bg-white dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Icon className="w-5 h-5 stroke-zinc-700 dark:stroke-zinc-300" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col text-sm">
        <span className="sr-only">Organisation and Date</span>
        <span className="text-zinc-900 dark:text-zinc-100">
          {exp.org} -{" "}
          <span aria-label={`${exp.startYear} until ${exp.endYear}`}>
            <time>{exp.startYear}</time> — <time>{exp.endYear}</time>
          </span>
        </span>
        <span className="sr-only">Role</span>
        <span className="text-zinc-500 dark:text-zinc-400">{exp.role}</span>
      </div>
    </div>
  );
}

export function ExperienceCard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frameId = 0;

    const updateActiveIndex = () => {
      const items = Array.from(
        container.querySelectorAll<HTMLElement>("[data-experience-item]")
      );

      if (!items.length) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let nextIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          nextIndex = index;
        }
      });

      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveIndex);
    };

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(container);

    container.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      container.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden relative col-span-6 gap-2 h-80 sm:col-span-3 lg:col-span-3">
      <SectionPill icon={<Briefcase className="h-4 w-4" />}>Experience</SectionPill>

      <div
        ref={scrollRef}
        className="relative overflow-y-auto w-full snap-y snap-proximity h-[148px] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      >
        <div className="flex flex-col gap-4 w-full">
          {experienceItems.map((exp, index) => {
            const distanceFromActive = Math.abs(index - activeIndex);
            const state =
              distanceFromActive === 0
                ? "active"
                : distanceFromActive === 1
                  ? "near"
                  : "far";

            return <WorkItem key={exp.org} exp={exp} state={state} />;
          })}
        </div>
      </div>

      <div className="flex gap-2 mt-auto w-full">
        <a
          href="https://github.com/TiM1113"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1 box-gen outline-0 ring-1 ring-zinc-200 dark:ring-zinc-800 h-[34px] hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
        >
          <GithubIcon className="w-4 h-4 stroke-zinc-600 dark:stroke-zinc-400" />
          GitHub
        </a>
        <a
          href={siteConfig.resumePath}
          className="flex-1 inline-flex items-center justify-center gap-1 box-gen outline-0 ring-1 ring-zinc-200 dark:ring-zinc-800 h-[34px] hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
        >
          <Download className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400" />
          Download CV
        </a>
      </div>
    </div>
  );
}
