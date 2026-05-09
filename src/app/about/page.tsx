import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { SiteSocialIcon } from "@/components/site-social-icon";
import {
  aboutParagraphs,
  aboutPractices,
  siteConfig,
  socialLinks,
} from "@/data/site-content";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Background, engineering practices, and working style for Tim Yuan, a software engineer based in Adelaide.",
  path: "/about",
});

const aboutSnapshotCards = [
  {
    label: "Current base",
    title: siteConfig.location,
    body: "Open to roles, contracts, and AI workflow consulting. Full Australian work rights.",
  },
  {
    label: "Background",
    title: "Design + IT operations",
    body: "Fourteen years of studio and IT work built the visual judgment and systems discipline I still rely on.",
  },
  {
    label: "Current focus",
    title: "Full-stack delivery + AI workflow systems",
    body: "Architecture, verification, observability, and team legibility after launch.",
  },
] as const;

const storySteps = [
  {
    step: "01",
    title: "Design came first.",
    body: "Design trained me to care about hierarchy, clarity, and whether systems stay legible to other people.",
  },
  {
    step: "02",
    title: "Engineering became real when the constraints did.",
    body: "Rebuilding a production platform turned engineering from coursework into evidence-driven delivery work.",
  },
  {
    step: "03",
    title: "Now I optimize for trustworthy delivery loops.",
    body: "The goal now is simple: systems, review loops, and AI tooling that remain accountable under change.",
  },
] as const;

const practiceCards = [
  {
    title: aboutPractices[0].title,
    body: "New tools only stay after they survive a real feature, migration, or production bug.",
  },
  {
    title: aboutPractices[1].title,
    body: "Drafting and verification stay separate so the same agent never grades its own homework.",
  },
  {
    title: aboutPractices[2].title,
    body: "Rules, hooks, and memory live in version control because delivery quality depends on them.",
  },
  {
    title: aboutPractices[3].title,
    body: "Logs, traces, payloads, and runtime evidence come before implementation guesses.",
  },
] as const;

const socialLinkLabels: Record<string, string> = {
  "GitHub (personal)": "GitHub",
  "GitHub (school)": "School GitHub",
  "Email Tim": "Email Tim",
  "Open resume": "Resume",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-frame page-section">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(18rem,0.96fr)] lg:items-start">
          <div>
            <p className="page-kicker">About</p>
            <h1 className="page-title mt-4 max-w-4xl">
              Hi, I&apos;m Tim. I got into software by rebuilding real systems until the delivery process finally made sense.
            </h1>
            <p className="page-copy mt-6 max-w-3xl">
              I build modern web products, review delivery systems, and use AI as part of the engineering stack, not
              as a substitute for judgment.
            </p>

            <div className="mt-8 space-y-4 text-base leading-7 text-[color:var(--muted-foreground)]">
              <p>{aboutParagraphs[0]}</p>
              <p>
                The common thread is simple: I like turning unclear processes into explicit systems that other people
                can trust, critique, and extend.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="surface-feature rounded-[2rem] p-6 sm:p-7">
              <Image
                src="/images/avatar.png"
                alt="Tim Yuan"
                width={360}
                height={300}
                className="mx-auto aspect-[6/5] max-w-[18rem] rounded-[1.75rem] border border-white/55 object-cover p-1"
                loading="eager"
              />

              <div className="mt-6">
                <p className="page-kicker">Current mode</p>
                <p className="mt-4 text-2xl font-semibold tracking-[-0.05em]">
                  Shipping software, tightening review loops, and treating AI tooling like infrastructure.
                </p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                  The best work happens when product quality, runtime evidence, and team understanding all improve at
                  the same time.
                </p>
              </div>
            </div>

            <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {aboutSnapshotCards.map((card) => (
                <div key={card.title} className="surface-panel flex min-h-[11rem] flex-col rounded-[1.5rem] p-5">
                  <p className="section-label">{card.label}</p>
                  <h2 className="mt-3 text-lg font-semibold tracking-[-0.04em]">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-frame page-section">
        <div className="max-w-3xl">
          <p className="page-kicker">Story</p>
          <h2 className="section-title mt-4">How the path shifted from visual craft into production engineering.</h2>
          <p className="section-copy">
            The transition was gradual, but the lessons carried over. Design taught me hierarchy and clarity. Shipping
            software taught me how much trust depends on runtime evidence and repeatable systems.
          </p>
        </div>

        <div className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-3">
          {storySteps.map((step) => (
            <article
              key={step.step}
              className="surface-panel rounded-[1.75rem] p-6 sm:p-7"
            >
              <div className="grid gap-4">
                <p className="font-mono text-[0.78rem] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                  {step.step}
                </p>
                <div>
                  <h3 className="max-w-[14ch] text-2xl font-semibold tracking-[-0.05em]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)] sm:text-base">
                    {step.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-frame page-section">
        <div className="max-w-3xl">
          <p className="page-kicker">Practice</p>
          <h2 className="section-title mt-4">The habits I rely on when work gets ambiguous.</h2>
          <p className="section-copy">
            The recurring patterns behind the portfolio projects: how I learn, debug, and keep AI-assisted work reviewable.
          </p>
        </div>

        <div className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-2">
          {practiceCards.map((practice) => (
            <article key={practice.title} className="surface-panel flex min-h-[12rem] flex-col rounded-[1.5rem] p-6">
              <h3 className="text-lg font-semibold tracking-[-0.04em]">{practice.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                {practice.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-frame page-section">
        <div className="surface-contrast rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.62fr)] lg:items-start">
            <div className="max-w-3xl">
              <p className="page-kicker">Reach out</p>
              <h2 className="section-title mt-4">
                If you need design judgment, engineering execution, and AI workflow thinking in the same person, let&apos;s talk.
              </h2>
              <p data-muted="true" className="mt-5 max-w-2xl text-base leading-7">
                I&apos;m most interested in production-facing product work where tooling quality, system clarity, and runtime evidence all matter.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
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
                    <span>{socialLinkLabels[link.label] ?? link.label}</span>
                  </span>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                    Open
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
