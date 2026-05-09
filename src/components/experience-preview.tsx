import Link from "next/link";
import { experienceHighlights } from "@/data/site-content";

export function ExperiencePreview() {
  return (
    <section className="surface-panel rounded-[1.75rem] p-6 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="page-kicker">Experience</p>
          <h2 className="section-title mt-4">A career path that blends design judgment with engineering delivery.</h2>
        </div>
        <Link href="/about" className="button-secondary hidden sm:inline-flex ring-ring/60">
          Read bio
        </Link>
      </div>

      <div className="mt-8 space-y-6">
        {experienceHighlights.map((item, index) => (
          <div
            key={item.title}
            className={
              index === 0
                ? "grid gap-4 rounded-[1.4rem] bg-white/44 p-4 sm:grid-cols-[9rem_minmax(0,1fr)] dark:bg-white/[0.04]"
                : "grid gap-4 sm:grid-cols-[9rem_minmax(0,1fr)]"
            }
          >
            <div className="flex items-start gap-3">
              <div className="relative flex h-full">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[color:var(--accent-strong)]" />
                {index < experienceHighlights.length - 1 ? (
                  <span className="absolute left-[0.28rem] top-5 h-[calc(100%+1.25rem)] w-px bg-[color:var(--grid-line)]" />
                ) : null}
              </div>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                {item.period}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link href="/about" className="button-secondary mt-8 inline-flex sm:hidden ring-ring/60">
        Read bio
      </Link>
    </section>
  );
}
