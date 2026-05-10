import Image from "next/image";
import type { Project } from "@/data/site-content";
import { cn } from "@/lib/utils";

const themeMap = {
  signal: {
    shellClassName:
      "bg-[linear-gradient(145deg,#fbfbf6_0%,#eef4ff_46%,#dce9ff_100%)]",
    metaClassName: "text-slate-600",
    titleClassName: "text-slate-950",
    chipClassName: "border-slate-900/12 bg-white/72 text-slate-600",
    accentOneClassName: "bg-sky-400/26",
    accentTwoClassName: "bg-lime-300/20",
    accentThreeClassName: "bg-white/80",
    meterClassName: "bg-slate-950/10",
  },
  graph: {
    shellClassName:
      "bg-[linear-gradient(145deg,#fbf8ff_0%,#eef0ff_48%,#deefff_100%)]",
    metaClassName: "text-indigo-700/80",
    titleClassName: "text-slate-950",
    chipClassName: "border-indigo-900/12 bg-white/74 text-indigo-600",
    accentOneClassName: "bg-fuchsia-400/18",
    accentTwoClassName: "bg-sky-400/28",
    accentThreeClassName: "bg-white/82",
    meterClassName: "bg-indigo-900/12",
  },
  system: {
    shellClassName:
      "bg-[linear-gradient(145deg,#f7fafc_0%,#ebf1f6_42%,#dae4ec_100%)]",
    metaClassName: "text-slate-600",
    titleClassName: "text-slate-950",
    chipClassName: "border-slate-900/12 bg-white/74 text-slate-600",
    accentOneClassName: "bg-cyan-400/22",
    accentTwoClassName: "bg-slate-400/18",
    accentThreeClassName: "bg-white/82",
    meterClassName: "bg-slate-950/12",
  },
  field: {
    shellClassName:
      "bg-[linear-gradient(145deg,#fffdf5_0%,#f3f6e7_48%,#e4edd0_100%)]",
    metaClassName: "text-emerald-800/78",
    titleClassName: "text-slate-950",
    chipClassName: "border-emerald-900/12 bg-white/74 text-emerald-700",
    accentOneClassName: "bg-emerald-400/22",
    accentTwoClassName: "bg-amber-300/24",
    accentThreeClassName: "bg-white/82",
    meterClassName: "bg-emerald-950/12",
  },
} as const;

function getProjectMark(title: string) {
  return title
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

export function ProjectCoverArt({
  project,
  variant = "hero",
  className,
}: {
  project: Project;
  variant?: "hero" | "card";
  className?: string;
}) {
  const theme = themeMap[project.coverTheme ?? "signal"];
  const isHero = variant === "hero";
  const metrics = project.proofMetrics?.slice(0, 3) ?? [];
  const hasScreenshot = Boolean(project.coverImage);
  const showContentOverlay = !hasScreenshot;
  const metaText = isHero
    ? hasScreenshot && project.liveUrl
      ? "Live deployed interface"
      : project.coverAlt ?? project.summary
    : project.stack.slice(0, 2).join(" · ");

  return (
    <div
      className={cn(
        "relative overflow-hidden border shadow-[0_26px_56px_rgba(15,23,42,0.14)]",
        hasScreenshot
          ? "border-slate-900/10 shadow-[0_22px_48px_rgba(15,23,42,0.12)] dark:border-white/10 dark:shadow-[0_24px_52px_rgba(2,6,23,0.2)]"
          : "border-white/65",
        isHero ? "min-h-[22rem] rounded-[2rem] sm:min-h-[28rem]" : "min-h-[16rem] rounded-[1.75rem]",
        theme.shellClassName,
        className
      )}
    >
      {hasScreenshot ? (
        <>
          <Image
            src={project.coverImage ?? ""}
            alt={project.coverAlt ?? `${project.title} screenshot`}
            fill
            sizes={isHero ? "(min-width: 1280px) 1100px, 100vw" : "(min-width: 1280px) 420px, 100vw"}
            className={cn(
              "object-cover",
              isHero
                ? "object-[center_12%] dark:brightness-[0.96] dark:saturate-[0.96]"
                : "object-[center_12%] dark:brightness-[0.94] dark:saturate-[0.94]"
            )}
            priority={project.slug === "food-delivery-platform"}
          />
          <div className="absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_28%)]" />
        </>
      ) : (
        <>
          <div className="grid-noise absolute inset-0 opacity-40" />
          <div
            className={cn(
              "absolute -left-12 top-10 h-40 w-40 rounded-full blur-3xl",
              theme.accentOneClassName
            )}
          />
          <div
            className={cn(
              "absolute right-10 top-10 h-28 w-28 rounded-full blur-3xl",
              theme.accentTwoClassName
            )}
          />
          <div
            className={cn(
              "absolute bottom-10 left-16 h-24 w-24 rounded-full blur-2xl",
              theme.accentThreeClassName
            )}
          />
        </>
      )}

      {!hasScreenshot ? (
        <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3 sm:inset-x-6 sm:top-6">
          <span
            className={cn(
              "whitespace-nowrap rounded-full border px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.2em]",
              theme.chipClassName
            )}
          >
            {project.period}
          </span>
          <span
            className={cn(
              "whitespace-nowrap rounded-full px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.2em]",
              theme.metaClassName
            )}
          >
            {project.liveUrl ? "Live demo" : project.stack[0]}
          </span>
        </div>
      ) : null}

      {!hasScreenshot ? (
        <div
          className={cn(
            "absolute right-4 top-20 font-semibold tracking-[-0.12em] opacity-24 sm:right-6",
            isHero ? "text-[5rem] sm:text-[6.5rem]" : "text-[4.5rem]",
            theme.titleClassName
          )}
        >
          {getProjectMark(project.title)}
        </div>
      ) : null}

      {showContentOverlay ? (
        <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
          <div className={cn("space-y-3", !isHero && "space-y-2")}>
            <div className="flex items-center gap-2">
              <span className={cn("h-2 w-2 rounded-full", theme.meterClassName)} />
              <p
                className={cn(
                  "font-mono text-[0.7rem] uppercase tracking-[0.22em]",
                  theme.metaClassName
                )}
              >
                {metaText}
              </p>
            </div>
            <div className="max-w-md">
              <p
                className={cn(
                  "text-xl font-semibold tracking-[-0.05em] sm:text-2xl",
                  theme.titleClassName
                )}
              >
                {project.title}
              </p>
            </div>
            {isHero && metrics.length > 0 ? (
              <div className={cn("grid gap-2", isHero ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
                {metrics.map((metric) => (
                  <div
                    key={`${project.slug}-${metric.label}`}
                    className="rounded-2xl border border-white/45 bg-white/42 px-3 py-3 backdrop-blur-sm"
                  >
                    <p className={cn("text-lg font-semibold tracking-[-0.04em]", theme.titleClassName)}>
                      {metric.value}
                    </p>
                    <p className={cn("mt-1 text-[0.72rem] leading-5", theme.metaClassName)}>
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
