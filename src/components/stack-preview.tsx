import Link from "next/link";
import { stackCategories } from "@/data/site-content";

export function StackPreview() {
  const categories = stackCategories.slice(0, 4);

  return (
    <section className="h-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="page-kicker">Capabilities</p>
          <h2 className="section-title mt-4">The stack is useful because the system around it is coherent.</h2>
          <p className="section-copy">
            Front-end polish matters, but my real value is how the application layer, API surface, data contracts,
            testing, and AI workflows fit together.
          </p>
        </div>
        <Link href="/stack" className="button-secondary ring-ring/60">
          Explore full stack
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {categories.map((category, index) => (
          <div
            key={category.title}
            className={
              index === 0
                ? "surface-accent rounded-[1.5rem] p-6"
                : "surface-panel rounded-[1.5rem] p-6"
            }
          >
            <p className="section-label">{category.title}</p>
            <div className="mt-4 space-y-4">
              {category.items.slice(0, 2).map((item) => (
                <div key={item.name}>
                  <p className="text-base font-semibold tracking-[-0.03em]">{item.name}</p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
