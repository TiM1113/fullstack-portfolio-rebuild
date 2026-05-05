import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SectionPill } from "@/components/ui/section-pill";
import { latestBlogPost } from "@/data/site-content";
import { formatDate } from "@/lib/site";

export function BlogPostCard() {
  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg transition-shadow duration-200 gap-2 overflow-hidden relative col-span-6 h-full sm:col-span-3 lg:col-span-3">
      <SectionPill icon={<Sparkles className="h-4 w-4" />}>Latest Post</SectionPill>

      <time className="text-sm text-zinc-500 dark:text-zinc-400" dateTime={latestBlogPost.publishedAt}>
        {formatDate(latestBlogPost.publishedAt)}
      </time>

      <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
        <Link
          href={`/blog/${latestBlogPost.slug}`}
          className="transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
        >
          {latestBlogPost.title}
        </Link>
      </h2>

      <span className="text-sm text-zinc-500">
        {latestBlogPost.tags.slice(0, 2).map((tag) => `#${tag}`).join(" · ")}
      </span>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
        {latestBlogPost.excerpt}
      </p>
    </div>
  );
}
