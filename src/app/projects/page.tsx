import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageIntro, PageShell } from "@/components/page-shell";
import { projects } from "@/data/site-content";
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
        title="Selected projects I've shipped."
        description="From a six-phase production food-delivery rebuild to AI workflow tooling, these are the projects where I work out what modern full-stack delivery actually looks like."
      />

      <div className="sm:px-8 mt-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="rounded-2xl box-gen p-6 ring-1 ring-zinc-200 shadow transition hover:shadow-lg dark:ring-zinc-800"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                      {project.period}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-zinc-900 dark:text-white">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
                      >
                        {project.title}
                      </Link>
                    </h3>
                  </div>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-none rounded-full p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200 dark:focus-visible:ring-zinc-500"
                    aria-label={`Open ${project.title} repository`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/55 dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 dark:focus-visible:ring-zinc-500"
                  >
                    Read case study
                  </Link>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl box-gen px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-500"
                  >
                    View repo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
