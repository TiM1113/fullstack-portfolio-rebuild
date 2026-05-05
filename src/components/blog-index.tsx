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
      <div className="sm:px-8 mt-8">
        <div className="mx-auto max-w-2xl">
          <label className="relative block">
            <span className="sr-only">Search articles</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles by title, topic, or keyword"
              className="h-11 w-full rounded-xl border border-zinc-200 bg-white/55 pl-10 pr-4 text-sm text-zinc-900 outline-none backdrop-blur-sm transition focus-visible:border-zinc-400 focus-visible:ring-2 focus-visible:ring-zinc-300 dark:border-zinc-700 dark:bg-zinc-900/45 dark:text-white dark:focus-visible:border-zinc-500 dark:focus-visible:ring-zinc-700"
            />
          </label>
        </div>
      </div>

      <div className="sm:px-8 mt-10">
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col gap-5">
            {visiblePosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl box-gen p-6 shadow ring-1 ring-zinc-200 transition-shadow hover:shadow-lg dark:ring-zinc-800"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:hover:text-zinc-200 dark:focus-visible:ring-zinc-500"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {post.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-white/65 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900/55 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {visiblePosts.length === 0 ? (
            <div className="mt-6 rounded-2xl box-gen p-8 text-center ring-1 ring-zinc-200 dark:ring-zinc-800">
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                No articles matched that search yet. Try a broader term like
                {" "}
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  testing
                </span>
                ,
                {" "}
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  AI workflow
                </span>
                , or
                {" "}
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
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
