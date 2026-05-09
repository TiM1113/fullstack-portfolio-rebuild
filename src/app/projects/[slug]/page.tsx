import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { PageShell, PageIntro } from "@/components/page-shell";
import { ProjectCoverArt } from "@/components/project-cover-art";
import { ProjectScreenshotGallery } from "@/components/project-screenshot-gallery";
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

      <div className="page-frame mt-10 sm:mt-16">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--muted-foreground)] transition hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </div>
      </div>

      <PageIntro
        eyebrow={project.period}
        title={project.title}
        description={project.summary}
        className="mt-8 sm:mt-12"
        widthClassName="max-w-5xl"
      />

	      <div className="page-frame mt-8">
	        <div className="mx-auto max-w-5xl space-y-6">
	          {project.screenshots?.length ? (
	            <ProjectScreenshotGallery project={project} />
	          ) : (
	            <ProjectCoverArt project={project} variant="hero" />
	          )}

	          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,0.9fr)]">
	            <article className="surface-panel rounded-[2rem] p-6 sm:p-8">
	              <p className="text-base leading-7 text-[color:var(--muted-foreground)]">
	                {project.intro}
	              </p>

	              <div className="mt-10 grid gap-10 xl:grid-cols-2">
	                <section>
	                  <p className="page-kicker">Outcomes</p>
	                  <ul className="mt-5 space-y-4 text-sm leading-6 text-[color:var(--foreground)]">
	                    {project.outcomes.map((outcome) => (
	                      <li key={outcome} className="flex gap-3">
	                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
	                        <span>{outcome}</span>
	                      </li>
	                    ))}
	                  </ul>
	                </section>

	                <section>
	                  <p className="page-kicker">Highlights</p>
	                  <ul className="mt-5 space-y-4 text-sm leading-6 text-[color:var(--foreground)]">
	                    {project.highlights.map((highlight) => (
	                      <li key={highlight} className="flex gap-3">
	                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
	                        <span>{highlight}</span>
	                      </li>
	                    ))}
	                  </ul>
	                </section>
	              </div>
	            </article>

	            <aside className="space-y-4">
	              {project.liveUrl ? (
	                <div className="surface-feature rounded-[1.75rem] p-6">
	                  <p className="section-label">Live build</p>
	                  <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
	                    Open the deployed product directly, or expand the inline preview below without leaving the portfolio.
	                  </p>
	                  <div className="mt-5 flex flex-wrap gap-3">
	                    <a
	                      href={project.liveUrl}
	                      target="_blank"
	                      rel="noopener noreferrer"
	                      className="button-primary ring-ring/60"
	                    >
	                      Open live demo
	                    </a>
	                    <a
	                      href={project.repoUrl}
	                      target="_blank"
	                      rel="noopener noreferrer"
	                      className="button-secondary ring-ring/60"
	                    >
	                      View repository
	                    </a>
	                  </div>
	                </div>
	              ) : null}

	              <div className="surface-panel rounded-[1.75rem] p-6">
	                <p className="section-label">Role</p>
	                <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
	                  {project.role}
                </p>
              </div>

	              {project.proofMetrics?.length ? (
	                <div className="surface-panel rounded-[1.75rem] p-6">
	                  <p className="section-label">Key numbers</p>
	                  <div className="mt-4 grid gap-3">
	                    {project.proofMetrics.map((metric) => (
                      <div key={metric.label} className="rounded-[1.25rem] bg-[color:var(--surface-inset)] px-4 py-4">
                        <p className="text-2xl font-semibold tracking-[-0.04em]">{metric.value}</p>
                        <p className="mt-1 text-sm leading-6 text-[color:var(--muted-foreground)]">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

	              <div className="surface-panel rounded-[1.75rem] p-6">
	                <p className="section-label">Stack</p>
	                <div className="mt-4 flex flex-wrap gap-2">
	                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/45 bg-white/56 px-3 py-1.5 text-[0.72rem] font-medium text-[color:var(--muted-foreground)] dark:border-white/8 dark:bg-white/[0.04]"
                    >
                      {item}
                    </span>
	                  ))}
	                </div>
	              </div>

	              {!project.liveUrl ? (
	                <a
	                  href={project.repoUrl}
	                  target="_blank"
	                  rel="noopener noreferrer"
	                  className="button-primary flex w-full items-center justify-center ring-ring/60"
	                >
	                  View repository
	                  <ExternalLink className="ml-2 h-4 w-4" />
	                </a>
	              ) : null}
	            </aside>
	          </div>

	          {project.previewUrl ? (
	            <details className="surface-panel rounded-[2rem] p-5 sm:p-6">
	              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left [&::-webkit-details-marker]:hidden">
	                <div>
	                  <p className="page-kicker">Inline preview</p>
	                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
	                    Browse the deployed project without leaving this case study.
	                  </h2>
	                </div>
	                <span className="button-secondary ring-ring/60">Preview inline</span>
	              </summary>
	              <p className="mt-4 max-w-3xl text-sm leading-6 text-[color:var(--muted-foreground)]">
	                Use this for a quick walkthrough. If you want a full session with cleaner navigation and auth flow, open the live demo in a new tab.
	              </p>
	              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[color:var(--surface-outline)] bg-white shadow-[0_16px_48px_rgba(15,23,42,0.14)]">
	                <iframe
	                  src={project.previewUrl}
	                  title={`${project.title} live preview`}
	                  loading="lazy"
	                  referrerPolicy="strict-origin-when-cross-origin"
	                  className="h-[42rem] w-full bg-white"
	                />
	              </div>
	            </details>
	          ) : null}
	        </div>
	      </div>
	    </PageShell>
	  );
}
