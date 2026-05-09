import Image from "next/image";
import Link from "next/link";
import { MapPin, Sparkles } from "lucide-react";
import { homeHero, homeMetrics, siteConfig, socialLinks } from "@/data/site-content";
import { SiteSocialIcon } from "@/components/site-social-icon";

export function HomeHero() {
  return (
    <section className="page-frame page-section">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-start">
        <div>
          <p className="page-kicker">{homeHero.kicker}</p>
          <h1 className="page-title mt-4 max-w-4xl">{homeHero.title}</h1>
          <p className="page-copy mt-6 max-w-2xl">{homeHero.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={homeHero.primaryCta.href} className="button-primary ring-ring/60">
              {homeHero.primaryCta.label}
            </Link>
            <Link href={homeHero.secondaryCta.href} className="button-secondary ring-ring/60">
              {homeHero.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {homeHero.tags.map((tag) => (
              <span
                key={tag}
                className="metric-chip text-[0.82rem] leading-5 text-[color:var(--muted-foreground)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="surface-accent mt-10 max-w-2xl rounded-[1.75rem] p-5 sm:p-6">
            <p className="page-kicker">Operating Principle</p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.05em]">
              Production quality is a systems problem, not a prompt problem.
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
              The environment around the code matters as much as the code itself: contracts, tests, runtime evidence,
              and the review loop that decides whether a change is safe.
            </p>
          </div>
        </div>

        <aside className="surface-feature rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <Image
              src="/images/avatar.png"
              alt={`${siteConfig.name} avatar`}
              width={84}
              height={84}
              className="rounded-[1.5rem] border border-white/55 bg-white/70 p-1 shadow-[0_16px_36px_rgba(15,23,42,0.12)]"
              loading="eager"
            />
            <div className="min-w-0 flex-1">
              <p className="section-label">Currently based in</p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.04em]">
                {homeHero.location}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/56 px-3 py-1.5 text-sm text-[color:var(--muted-foreground)] ring-1 ring-white/55 dark:bg-white/8 dark:ring-white/8">
                <span className="h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_0_4px_rgba(163,230,53,0.18)] dark:shadow-[0_0_0_4px_rgba(163,230,53,0.12)]" />
                {homeHero.availability}
              </div>
            </div>
          </div>

          <div className="editorial-rule my-6" />

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-[color:var(--muted-foreground)]">
              <MapPin className="h-4 w-4" />
              <span>Full Australian work rights, no sponsorship required.</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[color:var(--muted-foreground)]">
              <Sparkles className="h-4 w-4" />
              <span>Focused on delivery systems, AI tooling, and observable product quality.</span>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="surface-utility flex items-center justify-between rounded-[1.25rem] px-4 py-3 text-sm text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex items-center gap-3">
                  <SiteSocialIcon icon={link.icon} className="h-4 w-4" />
                  <span>{link.label}</span>
                </span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                  Open
                </span>
              </a>
            ))}
          </div>
        </aside>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {homeMetrics.map((metric) => (
          <div key={metric.label} className="surface-panel rounded-[1.5rem] p-5">
            <p className="text-3xl font-semibold tracking-[-0.05em]">{metric.value}</p>
            <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
