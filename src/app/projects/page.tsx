import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = { title: "Projects" };

const projects = [
  {
    title: "Food Delivery Platform",
    period: "2025 — present",
    summary:
      "Production serverless food-delivery rebuilt through 6 phases: monorepo migration, Stripe payments, RBAC + KYC, 70 backend + 101 E2E tests, Sentry observability.",
    stack:
      "Next.js 16 · Hono · PostgreSQL/Drizzle · NextAuth v5 · Stripe · Vercel",
    href: "https://github.com/TiM1113/FoodDelivery-AWS-Vercell",
  },
  {
    title: "llm-wiki — Multi-Platform AI Knowledge Base",
    period: "2026",
    summary:
      "Open-source skill implementing Karpathy's llm-wiki methodology. Watercolor-style interactive knowledge graph with Louvain community detection, weighted edges, alias-based synonym search. One bash installer, four agent platforms.",
    stack:
      "Bash installer · Multi-platform spec (Claude / Codex / OpenClaw / Hermes) · Interactive HTML graph",
    href: "https://github.com/TiM1113/llm-wiki-skill",
  },
  {
    title: "tim-dev-rig — Personal AI Dev Environment as Code",
    period: "2026",
    summary:
      "Version-controlled Claude Code harness: global rules, pre-commit/pre-push hooks, custom slash-command skills (/cvupdate, /fix, /doctor, /para), cross-conversation memory files. Every lesson from a failed PR gets distilled back into the rig.",
    stack: "Claude Code harness · Bash hooks · Skill authoring",
    href: "https://github.com/TiM1113/tim-dev-rig",
  },
  {
    title: "Farm Time Management System",
    period: "2024 — Lead Dev / Scrum Master",
    summary:
      "Multi-role attendance & payroll PWA with RBAC/JWT, 15+ REST endpoints, offline-first IndexedDB event queue with auto re-sync, comprehensive audit logging.",
    stack: "React 18 PWA · .NET 8 Web API · EF Core · SQLite/SQL Server",
    href: "https://github.com/yuan0173/comp9034FarmSystem",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative mb-16 sm:mb-32">
      <main>
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">
              Selected projects I&apos;ve shipped.
            </h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              From a 6-phase production food-delivery rebuild to a
              multi-platform AI knowledge base — these are the projects where
              I work out what modern full-stack delivery actually looks like,
              one tradeoff at a time.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="sm:px-8 mt-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="flex flex-col gap-4">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl box-gen p-6 ring-1 ring-zinc-200 dark:ring-zinc-800 shadow hover:shadow-lg transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-white group-hover:underline">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {project.period}
                      </p>
                    </div>
                    <ExternalLink className="flex-none w-4 h-4 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition" />
                  </div>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                    {project.summary}
                  </p>
                  <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
                    {project.stack}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
