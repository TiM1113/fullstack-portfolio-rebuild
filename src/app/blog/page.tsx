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
        eyebrow="Field Notes"
        title="Notes on AI workflow, rebuilds, and delivery quality."
        description="Short writing on the systems, constraints, and review habits behind recent product work."
        widthClassName="max-w-4xl"
      />
      <BlogIndex posts={blogPosts} />
    </PageShell>
  );
}
