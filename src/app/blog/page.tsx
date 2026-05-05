import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog-index";
import { PageIntro, PageShell } from "@/components/page-shell";
import { blogPosts } from "@/data/site-content";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Writing about AI pair programming, production rebuilds, testing, and delivery habits that survive real projects.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageShell>
      <PageIntro
        title="Writing about AI pair programming, full-stack migrations, and lessons from production."
        description="Long-form notes on AI workflow design, production rebuilds, testing rigor, and the habits that make modern full-stack delivery repeatable."
      />
      <BlogIndex posts={blogPosts} />
    </PageShell>
  );
}
