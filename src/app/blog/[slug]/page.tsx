import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
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

      <div className="sm:px-8 mt-10 sm:mt-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:hover:text-white dark:focus-visible:ring-zinc-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </div>
      </div>

      <PageIntro
        title={post.title}
        description={post.summary}
        className="mt-8 sm:mt-12"
        widthClassName="max-w-3xl"
      />

      <div className="sm:px-8 mt-8">
        <article className="mx-auto max-w-3xl rounded-[2rem] box-gen p-6 shadow ring-1 ring-zinc-200 sm:p-8 dark:ring-zinc-800">
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/55 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-10">
            {post.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets?.length ? (
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-lime-500" />
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
