"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useDeferredValue, useState } from "react";
import type { BlogPost } from "@/data/site-content";
import { formatDate } from "@/lib/site";

export function BlogIndex({ posts }: { posts: readonly BlogPost[] }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const visiblePosts = normalizedQuery
    ? posts.filter((post) => {
        const haystack = [
          post.title,
          post.summary,
          post.excerpt,
          post.tags.join(" "),
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      })
    : posts;

  return (
    <>
      <div className="page-frame page-section-tight">
        <div className="mx-auto max-w-3xl">
          <label className="relative block">
            <span className="sr-only">Search articles</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[color:var(--muted-foreground)]" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search notes by title or topic"
              className="surface-utility h-12 w-full rounded-full pl-11 pr-4 text-sm text-[color:var(--foreground)] outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>
        </div>
      </div>

      <div className="page-frame mt-10">
        <div className="mx-auto max-w-3xl">
          <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
            {visiblePosts.map((post) => (
              <article
                key={post.slug}
                className="surface-panel flex min-h-[17rem] flex-col rounded-[1.75rem] p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted-foreground)]">
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-4 max-w-[14ch] text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-[34ch] text-sm leading-6 text-[color:var(--muted-foreground)] sm:text-base">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/45 bg-white/56 px-3 py-1.5 text-[0.72rem] font-medium text-[color:var(--muted-foreground)] dark:border-white/8 dark:bg-white/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span>Read note</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {visiblePosts.length === 0 ? (
            <div className="surface-panel mt-6 rounded-[1.75rem] p-8 text-center">
              <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
                No articles matched that search yet. Try a broader term like
                {" "}
                <span className="font-medium text-[color:var(--foreground)]">
                  testing
                </span>
                ,
                {" "}
                <span className="font-medium text-[color:var(--foreground)]">
                  AI workflow
                </span>
                , or
                {" "}
                <span className="font-medium text-[color:var(--foreground)]">
                  architecture
                </span>
                .
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
