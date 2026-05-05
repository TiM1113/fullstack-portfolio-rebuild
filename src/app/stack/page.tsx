import type { Metadata } from "next";
import { PageIntro, PageShell } from "@/components/page-shell";
import { stackCategories } from "@/data/site-content";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Stack",
  description:
    "The frameworks, services, testing tools, and AI workflow systems Tim Yuan uses in active delivery work.",
  path: "/stack",
});

export default function StackPage() {
  return (
    <PageShell>
      <PageIntro
        title="The tools and stack I'm reaching for right now."
        description="Libraries, services, and AI tools that earned a place in my workflow by surviving real shipping cycles."
      />

      <div className="sm:px-8 mt-16">
        <div className="mx-auto max-w-2xl">
          {stackCategories.map((category) => (
            <section key={category.title} className="mb-16">
              <h2 className="border-b border-zinc-200 pb-4 text-lg font-semibold text-zinc-900 dark:border-zinc-700 dark:text-white">
                {category.title}
              </h2>
              <div className="mt-6 flex flex-col gap-8">
                {category.items.map((item) => (
                  <div key={item.name}>
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
