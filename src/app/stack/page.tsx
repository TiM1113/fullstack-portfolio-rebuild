import type { Metadata } from "next";

export const metadata: Metadata = { title: "Stack" };

const categories = [
  {
    title: "Frontend",
    items: [
      {
        name: "Next.js 16 + React 19",
        description:
          "App Router, TypeScript strict, Turbopack. The default for everything I ship.",
      },
      {
        name: "Tailwind CSS v4 + shadcn/ui",
        description:
          "Utility-first styling with oklch design tokens. shadcn for primitives, customised per project.",
      },
      {
        name: "Motion (Framer Motion v12)",
        description:
          "Spring-driven animation primitives — dock magnification, 3D tilt, layout transitions.",
      },
      {
        name: "TanStack Query v5 + Zustand",
        description:
          "Server state (TanStack) and client state (Zustand) cleanly separated.",
      },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      {
        name: "Hono",
        description:
          "Fast, typed router for Vercel Serverless. Replaced Express in my food-delivery rebuild.",
      },
      {
        name: ".NET 8 Web API",
        description:
          "C# / EF Core for systems I built during my Master's program.",
      },
      {
        name: "PostgreSQL + Drizzle ORM",
        description:
          "Neon-serverless driver for transaction support, jsonb_set for race-free cart updates.",
      },
      {
        name: "Zod schema contracts",
        description:
          "Typed end-to-end via shared package. Request validation + DB write enforcement.",
      },
    ],
  },
  {
    title: "Auth, Payments, Quality",
    items: [
      {
        name: "NextAuth v5 + JWT/RBAC",
        description:
          "Cookie-based sessions, role-based access control, bcrypt password hashing.",
      },
      {
        name: "Stripe",
        description:
          "Webhook signature verification, refund flows, KYC identity verification, idempotency keys.",
      },
      {
        name: "Vitest + Playwright",
        description:
          "70 backend + 101 E2E tests after learning the cost of self-reviewed \u201Cfake-green\u201D test suites.",
      },
      {
        name: "Sentry + Vercel Analytics",
        description:
          "Tuned trace sampling, full-stack error tracking, Speed Insights for real user data.",
      },
    ],
  },
  {
    title: "AI Toolchain",
    items: [
      {
        name: "Claude Code (Opus 4)",
        description:
          "Primary code-writing agent. Driven through a custom harness with hooks, skills, and memory.",
      },
      {
        name: "Codex CLI (GPT-5.4)",
        description:
          "Independent reviewer/test-writer. Designed to distrust Claude\u2019s output, not extend it.",
      },
      {
        name: "MCP servers",
        description:
          "Playwright, Notion, Gmail, Calendar, Drive — context bridges into external systems.",
      },
      {
        name: "Multi-platform skill authoring",
        description:
          "Skills shipped to Claude / Codex / OpenClaw / Hermes from a single source via sync scripts.",
      },
    ],
  },
  {
    title: "Infra & DevOps",
    items: [
      {
        name: "Vercel",
        description:
          "Default deployment target. Preview deployments per PR, edge config for serverless.",
      },
      {
        name: "AWS S3 + Lambda",
        description:
          "Direct S3 presigned uploads for user content, Lambda for legacy task glue.",
      },
      {
        name: "Upstash Redis",
        description:
          "Serverless Redis for rate limiting and ephemeral cache.",
      },
      {
        name: "GitHub Actions + CodeRabbit + Husky + Dependabot",
        description:
          "CI gates, AI PR reviewer, pre-commit hooks, automated dependency upgrades.",
      },
    ],
  },
];

export default function StackPage() {
  return (
    <div className="relative mb-16 sm:mb-32">
      <main>
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">
              The tools and stack I&apos;m reaching for right now.
            </h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              Libraries, services, and AI tools that earned a place in my
              workflow by surviving a real shipping cycle. Updated as my
              projects evolve.
            </p>
          </div>
        </div>

        {/* Stack Categories */}
        <div className="sm:px-8 mt-16">
          <div className="mx-auto max-w-2xl">
            {categories.map((cat) => (
              <section key={cat.title} className="mb-16">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-700 pb-4 mb-6">
                  {cat.title}
                </h2>
                <div className="flex flex-col gap-8">
                  {cat.items.map((item) => (
                    <div key={item.name}>
                      <h3 className="text-sm font-medium text-zinc-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
