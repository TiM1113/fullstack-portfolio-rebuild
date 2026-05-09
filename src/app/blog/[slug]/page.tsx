import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { PageShell, PageIntro } from "@/components/page-shell";
import { blogPosts, siteConfig } from "@/data/site-content";
import { buildPageMetadata, formatDate } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return buildPageMetadata({
      title: "Blog",
      description: siteConfig.description,
      path: "/blog",
    });
  }

  return buildPageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.fullName,
    },
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="page-frame mt-10 sm:mt-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--muted-foreground)] transition hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </div>
      </div>

      <PageIntro
        eyebrow={`${formatDate(post.publishedAt)} · ${post.readTime}`}
        title={post.title}
        description={post.summary}
        className="mt-8 sm:mt-12"
        widthClassName="max-w-3xl"
      />

      <div className="page-frame mt-8">
        <article className="surface-panel mx-auto max-w-3xl rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/45 bg-white/56 px-3 py-1.5 text-[0.72rem] font-medium text-[color:var(--muted-foreground)] dark:border-white/8 dark:bg-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {post.sections.map((section) => (
              <section key={section.title} className="subtle-block">
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-[color:var(--muted-foreground)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets?.length ? (
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--foreground)]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-strong)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </div>
    </PageShell>
  );
}
