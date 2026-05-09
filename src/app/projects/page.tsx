import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageIntro, PageShell } from "@/components/page-shell";
import { ProjectCoverArt } from "@/components/project-cover-art";
import { featuredProject, featuredProjects } from "@/data/site-content";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Projects",
  description:
    "Selected software projects by Tim Yuan, from production rebuilds to AI workflow tooling.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Projects"
        title="Selected builds and case studies."
        description="A compact view of the projects that shaped how I handle architecture, testing, observability, and delivery under real constraints."
        widthClassName="max-w-4xl"
      />

      <div className="page-frame page-section-tight">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:items-stretch">
          <Link
            href={`/projects/${featuredProject.slug}`}
            className="surface-feature group rounded-[2rem] p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ProjectCoverArt
              project={featuredProject}
              variant="hero"
              className="transition duration-200 group-hover:-translate-y-1"
            />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="page-kicker">Featured build</p>
                  <h2 className="section-title mt-3">{featuredProject.title}</h2>
                  <p className="section-copy mt-4 max-w-xl">{featuredProject.outcomes[0]}</p>
                </div>
                <span className="hidden font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[color:var(--muted-foreground)] sm:block">
                  Open
              </span>
            </div>
          </Link>

          <aside className="surface-panel rounded-[2rem] p-6 sm:p-8">
            <p className="page-kicker">Why it matters</p>
            <h2 className="section-title mt-4">A production rebuild with real operating pressure.</h2>
            <p className="section-copy">
              This is where modern full-stack ideas had to survive real payments, access control, tests, and runtime visibility.
            </p>
            <ul className="mt-8 space-y-4">
              {featuredProject.outcomes.slice(0, 3).map((outcome) => (
                <li key={outcome} className="flex gap-3 text-sm leading-6 text-[color:var(--foreground)]">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/projects/${featuredProject.slug}`} className="button-primary ring-ring/60">
                Read case study
              </Link>
              {featuredProject.liveUrl ? (
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary ring-ring/60"
                >
                  Open live demo
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </div>

      <div className="page-frame page-section">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="page-kicker">Selected Index</p>
            <h2 className="section-title mt-4">Additional projects and tooling.</h2>
          </div>
        </div>

        <div className="mt-8 grid auto-rows-fr gap-5 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="surface-panel flex h-full flex-col rounded-[1.75rem] p-4 sm:p-5">
              <ProjectCoverArt project={project} variant="card" />
              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="section-label">{project.period}</p>
                    <h3 className="mt-3 max-w-[15ch] text-xl font-semibold tracking-[-0.04em]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {project.title}
                      </Link>
                    </h3>
                  </div>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-utility flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`Open ${project.title} repository`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-4 max-w-[34ch] text-sm leading-6 text-[color:var(--muted-foreground)]">
                  {project.outcomes[0]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/45 bg-white/56 px-3 py-1.5 text-[0.72rem] font-medium text-[color:var(--muted-foreground)] dark:border-white/8 dark:bg-white/[0.04]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-5">
                  <Link href={`/projects/${project.slug}`} className="button-primary ring-ring/60">
                    Read case study
                  </Link>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-secondary ring-ring/60"
                    >
                      Live demo
                    </a>
                  ) : null}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary ring-ring/60"
                  >
                    View repo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
