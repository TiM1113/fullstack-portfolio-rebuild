import Link from "next/link";
import { contactStrip } from "@/data/site-content";

export function ContactStrip() {
  const isExternal = contactStrip.secondaryHref.startsWith("http");

  return (
    <section className="page-frame page-section">
      <div className="surface-feature rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-stretch">
          <div className="max-w-3xl">
            <div>
              <p className="page-kicker">{contactStrip.eyebrow}</p>
              <h2 className="section-title mt-4 text-3xl sm:text-4xl">
                {contactStrip.heading}
              </h2>
              <p className="section-copy mt-5 max-w-2xl">
                {contactStrip.body}
              </p>
            </div>
          </div>

          <div className="surface-contrast flex flex-col justify-between rounded-[1.75rem] p-6">
            <div>
              <p className="page-kicker">{contactStrip.eyebrow}</p>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.06em]">
                Let&apos;s build something that still reads well after the launch week chaos.
              </p>
              <p data-muted="true" className="mt-4 text-sm leading-6">
                Start with the project archive or GitHub if you want to review the work before opening a conversation.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={contactStrip.primaryHref} className="button-primary ring-ring/60">
                {contactStrip.primaryLabel}
              </a>
              {isExternal ? (
                <a
                  href={contactStrip.secondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary ring-ring/60"
                >
                  {contactStrip.secondaryLabel}
                </a>
              ) : (
                <Link href={contactStrip.secondaryHref} className="button-secondary ring-ring/60">
                  {contactStrip.secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
