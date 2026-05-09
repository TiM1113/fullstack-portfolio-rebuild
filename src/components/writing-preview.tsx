import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { writingHighlights } from "@/data/site-content";

export function WritingPreview() {
  const [primaryPost, secondaryPost] = writingHighlights;

  return (
    <section className="surface-panel rounded-[1.75rem] p-6 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="page-kicker">Writing</p>
          <h2 className="section-title mt-4">Notes from the field, not filler content.</h2>
        </div>
        <Link href="/blog" className="button-secondary hidden sm:inline-flex ring-ring/60">
          Read notes
        </Link>
      </div>

      <div className="mt-8 space-y-4">
        <Link
          href={`/blog/${primaryPost.slug}`}
          className="surface-feature block rounded-[1.5rem] p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <p className="section-label">
            {primaryPost.publishedAt} · {primaryPost.readTime}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
            {primaryPost.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
            {primaryPost.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {primaryPost.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/45 bg-white/54 px-3 py-1.5 text-[0.72rem] font-medium text-[color:var(--muted-foreground)] dark:border-white/8 dark:bg-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>

        <Link
          href={`/blog/${secondaryPost.slug}`}
          className="surface-panel block rounded-[1.5rem] p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <p className="section-label">
            {secondaryPost.publishedAt} · {secondaryPost.readTime}
          </p>
          <div className="mt-3 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold tracking-[-0.04em]">
                {secondaryPost.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                {secondaryPost.excerpt}
              </p>
            </div>
            <ArrowRight className="mt-1 h-4 w-4 shrink-0" />
          </div>
        </Link>
      </div>

      <Link href="/blog" className="button-secondary mt-8 inline-flex sm:hidden ring-ring/60">
        Read notes
      </Link>
    </section>
  );
}
