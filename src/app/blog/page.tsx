import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="relative mb-16 sm:mb-32">
      <main>
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">
              Writing about AI-pair-programming, full-stack migrations, and
              lessons from production.
            </h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              Long-form posts are coming soon. In the meantime, my dev notes
              and architectural decisions live in the README and roadmap files
              of each repo.
            </p>
          </div>
        </div>

        {/* Search (placeholder, disabled until posts exist) */}
        <div className="sm:px-8 mt-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search articles by title or topic"
                disabled
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white/40 dark:bg-zinc-800/40 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Empty state with GitHub redirect */}
        <div className="sm:px-8 mt-10">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl box-gen p-8 ring-1 ring-zinc-200 dark:ring-zinc-800 text-center">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                No posts published yet. The first essays will cover the
                Claude + Codex independent-verifier workflow, the 6-phase
                food-delivery rebuild, and how I treat AI tooling as
                infrastructure.
              </p>
              <Link
                href="https://github.com/TiM1113"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 box-gen ring-1 ring-zinc-200 dark:ring-zinc-700 h-10 px-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md text-sm transition"
              >
                <GithubIcon className="w-4 h-4" />
                Follow my work on GitHub
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
