import Image from "next/image";
import { ScrollText, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons";

export const metadata = {
  title: "About",
};

const practices = [
  {
    title: "Learn-by-shipping loop",
    body: "Every new technology entered my toolkit through a real feature, not a tutorial. Picked up Hono, Drizzle, PostgreSQL, NextAuth v5, and shadcn/ui by using them to migrate working code — forcing real tradeoffs that reading blog posts can't teach.",
  },
  {
    title: "AI as an independent verifier, not auto-complete",
    body: "Designed a workflow where Claude writes code + test specs while Codex (GPT-5.4) independently writes and runs tests. Eliminated the self-review \u201Cfake-green\u201D pattern that plagued my earlier phases. Taught me to design AI collaboration around distrust, not blind trust.",
  },
  {
    title: "AI tooling as infrastructure",
    body: "Maintain tim-dev-rig — a version-controlled Claude Code harness (global rules, hooks, custom slash-command skills). Every lesson from a failed PR gets distilled back into the rig. Meta-engineering mindset: the workflows AI assistants run on matter as much as the code they produce.",
  },
  {
    title: "Observation-first debugging",
    body: "Hard rule against source-level guessing — collect runtime evidence (curl, Vercel logs, Sentry) before changing code. Learned the hard way after rounds of \u201Cshould be X\u201D that turned out wrong.",
  },
];

const socialLinks = [
  { href: "https://github.com/TiM1113", icon: GithubIcon, label: "GitHub (personal)" },
  { href: "https://github.com/yuan0173", icon: ScrollText, label: "GitHub (school)" },
  { href: "mailto:yuantian1113@gmail.com", icon: Mail, label: "Email" },
];

export default function AboutPage() {
  return (
    <div className="relative mb-16 sm:mb-32">
      <main>
        {/* Bio Section */}
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto max-w-xl lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">
                  I&apos;m Tim Yuan, an engineer who learns by shipping.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-7">
                  Grew from a traditional MERN background into modern
                  AI-native full-stack delivery by rebuilding a production
                  food-delivery platform through 6 deliberate phases — each
                  phase a focused learning loop covering architecture
                  migration, test rigor, security hardening, or observability.
                </p>
                <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-7">
                  Comfortable pairing with AI agents as independent verifiers,
                  not auto-completers. Master of Information Technology
                  graduate from Flinders University. Based in Adelaide; full
                  Australian work rights, no sponsorship required.
                </p>

                {/* Social links */}
                <div className="mt-8 flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="text-neutral-900 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
                    >
                      <link.icon className="w-6 h-6 stroke-[1.5px]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: Portrait */}
              <div>
                <Image
                  src="/images/avatar.png"
                  alt="Tim Yuan"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Practice Section */}
        <div className="sm:px-8 mt-24">
          <div className="mx-auto max-w-xl lg:max-w-5xl">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8">
              Engineering Practice &amp; Learning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {practices.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl box-gen p-6 shadow ring-1 ring-zinc-200 dark:ring-zinc-800"
                >
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
