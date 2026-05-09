import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/site-content";
import { ProjectCoverArt } from "@/components/project-cover-art";

export function ProjectRail() {
  const [primaryProject, ...secondaryProjects] = featuredProjects;

  return (
    <section className="page-frame page-section">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="page-kicker">Selected Work</p>
          <h2 className="section-title mt-4">More systems, tooling, and delivery work.</h2>
          <p className="section-copy">
            These projects show the broader range around the main rebuild: shipped tooling, cross-platform
            packaging, and team-oriented product delivery.
          </p>
        </div>
        <Link href="/projects" className="button-secondary ring-ring/60">
          View archive
        </Link>
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-12">
        <Link
          href={`/projects/${primaryProject.slug}`}
          className="surface-accent group rounded-[1.9rem] p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring xl:col-span-6"
        >
          <ProjectCoverArt
            project={primaryProject}
            variant="card"
            className="transition duration-200 group-hover:-translate-y-1"
          />
          <div className="mt-5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-2xl font-semibold tracking-[-0.05em]">{primaryProject.title}</p>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                {primaryProject.period}
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--muted-foreground)] sm:text-base">
              {primaryProject.summary}
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]">
              <span>Read case study</span>
              <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        <div className="grid gap-5 xl:col-span-6 xl:grid-cols-2">
          {secondaryProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="surface-panel group rounded-[1.75rem] p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="grid gap-4">
                <ProjectCoverArt
                  project={project}
                  variant="card"
                  className="min-h-[11rem] transition duration-200 group-hover:-translate-y-1"
                />
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-lg font-semibold tracking-[-0.04em]">{project.title}</p>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]">
                    <span>Read case study</span>
                    <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
