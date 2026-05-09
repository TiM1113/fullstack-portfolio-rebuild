import { homeMethods } from "@/data/site-content";

export function MethodGrid() {
  return (
    <section className="h-full">
      <div className="max-w-xl">
        <p className="page-kicker">How I Work</p>
        <h2 className="section-title mt-4">Delivery habits built around evidence instead of theater.</h2>
        <p className="section-copy">
          These are the working rules that keep my stack coherent when the project gets messy: shipping over
          tutorials, independent validation over self-congratulation, and runtime evidence over guesswork.
        </p>
      </div>

      <div className="mt-8 grid gap-4 xl:grid-cols-3">
        {homeMethods.map((method, index) => (
          <div
            key={method.title}
            className={
              index === 0
                ? "surface-accent rounded-[1.6rem] p-6"
                : "surface-panel rounded-[1.6rem] p-6"
            }
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
              0{index + 1}
            </p>
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.04em]">
              {method.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
              {method.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
