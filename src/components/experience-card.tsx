"use client";

import {
  Briefcase,
  ScrollText,
  Download,
  GraduationCap,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Experience {
  org: string;
  startYear: string;
  endYear: string;
  role: string;
  Icon: LucideIcon;
}

const experiences: Experience[] = [
  {
    org: "Flinders University",
    startYear: "2024",
    endYear: "2025",
    role: "Master of Information Technology — Graduated",
    Icon: GraduationCap,
  },
  {
    org: "University of South Australia",
    startYear: "2023",
    endYear: "2024",
    role: "Master of IT (Enterprise Management)",
    Icon: GraduationCap,
  },
  {
    org: "Beijing & Shanghai Studios",
    startYear: "2009",
    endYear: "2023",
    role: "Designer & IT Coordinator",
    Icon: Briefcase,
  },
  {
    org: "Nanjing University of the Arts",
    startYear: "2005",
    endYear: "2009",
    role: "B.A. Animation",
    Icon: Palette,
  },
];

function WorkItem({
  exp,
  containerRef,
}: {
  exp: Experience;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!itemRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Active when fully visible (>=95%) in the small scroll container
          setIsActive(entry.intersectionRatio >= 0.95);
        }
      },
      {
        root: containerRef.current,
        threshold: [0, 0.5, 0.95, 1],
      }
    );

    observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [containerRef]);

  const { Icon } = exp;

  return (
    <div
      ref={itemRef}
      className="flex gap-4 pb-4 snap-start work-item transition-[filter,opacity] duration-200"
      style={{
        filter: isActive ? "blur(0px)" : "blur(2px)",
        opacity: isActive ? 1 : 0.3,
      }}
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

  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden relative col-span-6 gap-2 h-80 sm:col-span-3 lg:col-span-3">
      <div className="inline-flex items-center h-8 gap-1 px-4 text-sm leading-5 body-primary box-gen rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800">
        <Briefcase className="flex-none w-4 h-4" />
        <span>Experience</span>
      </div>

      <div
        ref={scrollRef}
        className="relative overflow-y-auto w-full snap-y snap-proximity h-[160px] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      >
        <div className="flex flex-col gap-4 w-full">
          {experiences.map((exp) => (
            <WorkItem key={exp.org} exp={exp} containerRef={scrollRef} />
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-auto w-full">
        <a
          href="https://github.com/TiM1113"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1 box-gen outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a] h-[34px] hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md text-sm transition"
        >
          <ScrollText className="w-4 h-4 stroke-zinc-600 dark:stroke-zinc-400" />
          GitHub
        </a>
        <a
          href="/cv/Tim-Yuan-CV.pdf"
          className="flex-1 inline-flex items-center justify-center gap-1 box-gen outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a] h-[34px] hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md text-sm transition"
        >
          <Download className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400" />
          Download CV
        </a>
      </div>
    </div>
  );
}
