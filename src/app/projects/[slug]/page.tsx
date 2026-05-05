import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { PageShell, PageIntro } from "@/components/page-shell";
import { projects, siteConfig } from "@/data/site-content";
import { buildPageMetadata } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return buildPageMetadata({
      title: "Projects",
      description: siteConfig.description,
      path: "/projects",
    });
  }

  return buildPageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    author: {
      "@type": "Person",
      name: siteConfig.fullName,
    },
    url: project.repoUrl,
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <div className="sm:px-8 mt-10 sm:mt-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:text-white dark:focus-visible:ring-zinc-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>
      </div>

      <PageIntro
        title={project.title}
        description={project.summary}
        className="mt-8 sm:mt-12"
        widthClassName="max-w-4xl"
      />

      <div className="sm:px-8 mt-8">
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[1.8fr_1fr]">
          <article className="rounded-[2rem] box-gen p-6 shadow ring-1 ring-zinc-200 sm:p-8 dark:ring-zinc-800">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {project.period}
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {project.intro}
            </p>

            <section className="mt-8">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Outcomes
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-lime-500" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Highlights
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="space-y-4">
            <div className="rounded-[2rem] box-gen p-6 shadow ring-1 ring-zinc-200 dark:ring-zinc-800">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Role
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {project.role}
              </p>
            </div>

            <div className="rounded-[2rem] box-gen p-6 shadow ring-1 ring-zinc-200 dark:ring-zinc-800">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Stack
              </h2>
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
            </div>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 dark:focus-visible:ring-zinc-500"
            >
              View repository
              <ExternalLink className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
