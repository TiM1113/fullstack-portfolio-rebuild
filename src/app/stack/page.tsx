import type { Metadata } from "next";
import { PageIntro, PageShell } from "@/components/page-shell";
import { stackCategories } from "@/data/site-content";
import { buildPageMetadata } from "@/lib/site";

const stackSummaries: Record<string, string> = {
  Frontend: "Interface work that stays maintainable under product change.",
  "Backend and Data": "Typed services and data flows built for clarity and operational trust.",
  "Auth, Payments, Quality": "Risk-heavy systems where correctness matters more than speed theatre.",
  "AI Toolchain": "Agents, rules, and support files treated like reusable infrastructure.",
  "Infra and DevOps": "Deployment, CI, and supporting services that keep delivery predictable.",
};

const primaryStackCategories = stackCategories.slice(0, 3);
const secondaryStackCategories = stackCategories.slice(3);

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
        eyebrow="Stack"
        title="Capabilities, not just a tool list."
        description="The frameworks and systems that stayed because they survived real delivery work."
        widthClassName="max-w-4xl"
      />

      <div className="page-frame page-section-tight">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-4">
            <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
              {primaryStackCategories.map((category) => (
                <section key={category.title} className="surface-panel flex min-h-[14rem] flex-col rounded-[1.75rem] p-6 sm:p-7">
                  <p className="page-kicker">{category.title}</p>
                  <p className="mt-4 max-w-[34ch] text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {stackSummaries[category.title]}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item.name}
                        className="metric-chip px-3 py-1.5 text-[0.74rem] text-[color:var(--muted-foreground)]"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
              {secondaryStackCategories.map((category) => (
                <section key={category.title} className="surface-panel flex min-h-[14rem] flex-col rounded-[1.75rem] p-6 sm:p-7">
                  <p className="page-kicker">{category.title}</p>
                  <p className="mt-4 max-w-[34ch] text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {stackSummaries[category.title]}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item.name}
                        className="metric-chip px-3 py-1.5 text-[0.74rem] text-[color:var(--muted-foreground)]"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="surface-feature mt-8 rounded-[2rem] p-6 sm:p-8">
            <p className="page-kicker">Principle</p>
            <h2 className="section-title mt-4">I do not collect tools. I keep systems that keep working.</h2>
            <p className="section-copy max-w-3xl">
              The common thread is tighter feedback loops, clearer contracts, easier maintenance, and better confidence under change.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
