import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { featuredProject } from "@/data/site-content";
import { ProjectCoverArt } from "@/components/project-cover-art";

export function FeaturedProjectStage() {
  return (
    <section className="page-frame page-section">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="page-kicker">Featured Case Study</p>
          <h2 className="section-title mt-4">One production rebuild, six deliberate phases.</h2>
          <p className="section-copy">
            {featuredProject.intro}
          </p>
        </div>
        <Link href="/projects" className="button-secondary ring-ring/60">
          Browse all projects
        </Link>
      </div>

      <div className="surface-feature mt-8 rounded-[2rem] p-4 sm:p-5 lg:p-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)] lg:items-stretch">
          <Link
            href={`/projects/${featuredProject.slug}`}
            className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Open the ${featuredProject.title} case study`}
          >
            <ProjectCoverArt
              project={featuredProject}
              variant="hero"
              className="transition duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_30px_72px_rgba(15,23,42,0.18)]"
            />
          </Link>

          <div className="surface-panel flex flex-col justify-between rounded-[1.75rem] p-6 sm:p-7">
            <div>
              <div className="flex items-start justify-between gap-4">
                <p className="section-label">{featuredProject.role}</p>
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                  01
                </span>
              </div>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
                {featuredProject.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
                {featuredProject.summary}
              </p>

              <ul className="mt-8 space-y-3">
                {featuredProject.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex gap-3 text-sm leading-6 text-[color:var(--foreground)] sm:text-[0.95rem]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-strong)]" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {featuredProject.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/45 bg-white/56 px-3 py-1.5 text-[0.76rem] font-medium text-[color:var(--muted-foreground)] dark:border-white/8 dark:bg-white/[0.04]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="button-primary ring-ring/60"
                >
                  Open case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href={featuredProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary ring-ring/60"
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  View repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
