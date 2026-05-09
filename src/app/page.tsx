import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { ProjectCoverArt } from "@/components/project-cover-art";
import { SiteSocialIcon } from "@/components/site-social-icon";
import {
  contactStrip,
  experienceHighlights,
  featuredProject,
  featuredProjects,
  homeHero,
  homeMetrics,
  siteConfig,
  socialLinks,
  stackCategories,
  writingHighlights,
} from "@/data/site-content";

const homeSections = [
  { label: "Profile", href: "#about" },
  { label: "Selected Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
  { label: "Capabilities", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

const socialLinkLabels: Record<string, string> = {
  "GitHub (personal)": "GitHub",
  "GitHub (school)": "School GitHub",
  "Email Tim": "Email",
  "Open resume": "Resume",
};

const profileHighlights = [
  {
    label: "Background",
    body: "Design-trained, now focused on full-stack product delivery and AI-assisted engineering systems.",
  },
  {
    label: "Based in Adelaide",
    body: "Full Australian work rights. No sponsorship required.",
  },
  {
    label: "Focus",
    body: "Architecture, verification, observability, and product trust after launch.",
  },
] as const;

const compactMetrics = [
  { value: homeMetrics[0].value, label: "rebuild phases" },
  { value: homeMetrics[1].value, label: "tests shipped" },
  { value: homeMetrics[2].value, label: "agent setups" },
] as const;

const compactProjects = featuredProjects.slice(0, 2);
const compactCapabilities = stackCategories.slice(0, 3).map((category) => ({
  title: category.title,
  items: category.items.slice(0, 3).map((item) => item.name),
}));

const homeExperienceCards = [
  {
    ...experienceHighlights[0],
    homeTitle: "MIT, Flinders University",
    homeBody: "Graduated while rebuilding a production platform around testing, evidence, and delivery loops.",
  },
  {
    ...experienceHighlights[1],
    homeTitle: "MIT Enterprise Management, UniSA",
    homeBody: "Strengthened product delivery and systems thinking before moving deeper into modern web engineering.",
  },
] as const;

const homeWritingCards = [
  {
    ...writingHighlights[0],
    homeTitle: "AI tooling as infrastructure",
    homeExcerpt: "Version the environment around the model, not just the prompt.",
  },
  {
    ...writingHighlights[1],
    homeTitle: "Lessons from a six-phase rebuild",
    homeExcerpt: "Six constrained rewrites exposed where the delivery system was actually weak.",
  },
] as const;

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    jobTitle: siteConfig.title,
    email: siteConfig.email,
    url: siteConfig.sourceRepo,
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location,
    },
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="page-frame page-section">
        <div className="grid gap-14 lg:grid-cols-[minmax(18rem,0.9fr)_minmax(0,1.1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="surface-contrast rounded-[2rem] p-6 sm:p-8">
              <p className="page-kicker">{homeHero.kicker}</p>
              <h1 className="mt-5 max-w-md font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-[3.9rem]">
                {homeHero.title}
              </h1>
              <p
                data-muted="true"
                className="mt-6 max-w-sm text-base leading-7 sm:text-[1.02rem] sm:leading-8"
              >
                Adelaide-based. I build full-stack products, tighten delivery workflows
                with AI, and focus on the parts that still need to hold up after launch.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects" className="button-primary ring-ring/60">
                  View case studies
                </Link>
                <Link href="/about" className="button-secondary ring-ring/60">
                  Read bio
                </Link>
              </div>

              <nav className="mt-10 hidden lg:block" aria-label="Home sections">
                <ul className="space-y-3">
                  {homeSections.map((section) => (
                    <li key={section.href}>
                      <a
                        href={section.href}
                        className="group inline-flex items-center gap-3 text-sm text-white/78 transition hover:text-white focus-visible:outline-none focus-visible:text-white"
                      >
                        <span className="h-px w-8 bg-white/22 transition group-hover:w-12 group-hover:bg-[color:var(--accent-strong)]" />
                        <span className="font-mono uppercase tracking-[0.18em]">
                          {section.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="editorial-rule my-8" />

              <div className="space-y-4">
                {compactMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-end justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    <p className="text-3xl font-semibold tracking-[-0.06em]">
                      {metric.value}
                    </p>
                    <p
                      data-muted="true"
                      className="max-w-[10rem] text-right text-sm leading-5"
                    >
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    aria-label={link.label}
                    className="surface-utility flex min-h-12 items-center gap-3 rounded-full px-4 py-2 text-sm text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="flex h-5 w-5 items-center justify-center">
                      <SiteSocialIcon icon={link.icon} className="h-4 w-4 shrink-0" />
                    </span>
                    <span>{socialLinkLabels[link.label] ?? link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-12">
            <section
              id="about"
              className="scroll-mt-28 border-b border-[color:var(--surface-outline)] pb-10"
            >
              <p className="page-kicker">Profile</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {profileHighlights.map((item) => (
                  <article key={item.label} className="subtle-block">
                    <p className="section-label">{item.label}</p>
                    <p className="mt-3 max-w-[26ch] text-sm leading-6 text-[color:var(--muted-foreground)]">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]"
              >
                <span>More about Tim</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </section>

            <section
              id="work"
              className="scroll-mt-28 border-b border-[color:var(--surface-outline)] pb-12"
            >
              <div className="max-w-3xl">
                <p className="page-kicker">Selected Work</p>
                <h2 className="section-title mt-4">
                  A few projects that prove how I build, not just what I can describe.
                </h2>
                <Link
                  href="/projects"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]"
                >
                  <span>Browse all projects</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <Link
                href={`/projects/${featuredProject.slug}`}
                className="group mt-8 block rounded-[1.8rem] border border-[color:var(--surface-outline)] bg-[color:var(--surface-inset)] p-4 transition hover:border-[color:var(--surface-outline-strong)] hover:bg-[color:var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:p-5"
              >
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-center">
                  <div>
                    <p className="section-label">{featuredProject.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-4 max-w-[48ch] text-sm leading-7 text-[color:var(--muted-foreground)]">
                      {featuredProject.outcomes[0]}
                    </p>

                    {featuredProject.proofMetrics ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {featuredProject.proofMetrics.map((metric) => (
                          <span
                            key={metric.label}
                            className="rounded-full border border-[color:var(--surface-outline)] px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]"
                          >
                            {metric.value} · {metric.label}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                      <span>Read case study</span>
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>

                  <ProjectCoverArt
                    project={featuredProject}
                    variant="card"
                    className="min-h-[14rem] transition duration-200 group-hover:-translate-y-1"
                  />
                </div>
              </Link>

              <div className="mt-6 space-y-3">
                {compactProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="subtle-block group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="grid gap-3 lg:grid-cols-[9rem_minmax(0,1fr)_auto] lg:items-start">
                      <p className="section-label">{project.period}</p>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.04em]">
                          {project.title}
                        </h3>
                        <p className="mt-2 max-w-[52ch] text-sm leading-6 text-[color:var(--muted-foreground)]">
                          {project.outcomes[0]}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.stack.slice(0, 3).map((item) => (
                            <span
                              key={item}
                              className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[color:var(--muted-foreground)] transition group-hover:text-[color:var(--foreground)]" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="grid gap-10 border-b border-[color:var(--surface-outline)] pb-12 lg:grid-cols-2">
              <article id="experience" className="scroll-mt-28">
                <div className="max-w-xl min-h-[8.5rem]">
                  <p className="page-kicker">Experience</p>
                  <h2 className="section-title mt-4">
                    Design judgment carried into production engineering.
                  </h2>
                  <Link
                    href="/about"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]"
                  >
                    <span>View full background</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 auto-rows-fr">
                  {homeExperienceCards.map((item) => (
                    <article
                      key={item.title}
                      className="subtle-block flex min-h-[14rem] flex-col lg:h-[14rem]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="section-label">{item.period}</p>
                        <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                          Background
                        </span>
                      </div>
                      <div className="mt-6 flex-1">
                        <h3 className="max-w-[14ch] text-[1.65rem] font-semibold leading-[1.14] tracking-[-0.05em] lg:line-clamp-3">
                          {item.homeTitle}
                        </h3>
                        <p className="mt-4 max-w-[33ch] text-sm leading-6 text-[color:var(--muted-foreground)] lg:line-clamp-3">
                          {item.homeBody}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </article>

              <article id="writing" className="scroll-mt-28">
                <div className="max-w-xl min-h-[8.5rem]">
                  <p className="page-kicker">Writing</p>
                  <h2 className="section-title mt-4">
                    Short notes on delivery systems, rebuilds, and AI-assisted work.
                  </h2>
                  <Link
                    href="/blog"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]"
                  >
                    <span>Read notes</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-8 grid gap-3 auto-rows-fr">
                  {homeWritingCards.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="subtle-block group flex min-h-[14rem] flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:h-[14rem]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          <p className="section-label">
                            {post.publishedAt} · {post.readTime}
                          </p>
                          <h3 className="mt-6 max-w-[14ch] text-[1.65rem] font-semibold leading-[1.14] tracking-[-0.05em] lg:line-clamp-3">
                            {post.homeTitle}
                          </h3>
                          <p className="mt-4 max-w-[33ch] text-sm leading-6 text-[color:var(--muted-foreground)] lg:line-clamp-3">
                            {post.homeExcerpt}
                          </p>
                        </div>
                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[color:var(--muted-foreground)] transition group-hover:text-[color:var(--foreground)]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </article>
            </section>

            <section
              id="stack"
              className="scroll-mt-28 border-b border-[color:var(--surface-outline)] pb-12"
            >
              <div className="max-w-3xl">
                <p className="page-kicker">Capabilities</p>
                <h2 className="section-title mt-4">
                  The stack matters less than how the system stays coherent under change.
                </h2>
                <Link
                  href="/stack"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]"
                >
                  <span>Full stack view</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">
                {compactCapabilities.map((category) => (
                  <article key={category.title} className="subtle-block">
                    <p className="section-label">{category.title}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="metric-chip px-3 py-1.5 text-[0.74rem] text-[color:var(--muted-foreground)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

          </div>
        </div>

        <section id="contact" className="mt-12 scroll-mt-28 lg:mt-14">
          <div className="surface-feature rounded-[1.5rem] p-5 sm:p-6">
            <div className="space-y-6">
              <div className="max-w-2xl">
                <p className="page-kicker">Contact</p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em] sm:text-xl">
                  {contactStrip.heading}
                </p>
                <p className="mt-3 max-w-[42ch] text-sm leading-6 text-[color:var(--muted-foreground)]">
                  {contactStrip.body}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="button-primary w-full ring-ring/60"
                >
                  Email Tim
                </a>
                <a
                  href="https://github.com/TiM1113"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary w-full ring-ring/60"
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.resumePath}
                  className="button-secondary w-full ring-ring/60"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </PageShell>
  );
}
