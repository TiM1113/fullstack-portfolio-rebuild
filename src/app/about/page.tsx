import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { siteConfig, aboutParagraphs, aboutPractices, socialLinks } from "@/data/site-content";
import { buildPageMetadata } from "@/lib/site";
import { SiteSocialIcon } from "@/components/site-social-icon";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Background, engineering practices, and working style for Tim Yuan, a software engineer based in Adelaide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      {/* Bio Section */}
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
            {/* Left: Text */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">
                I&apos;m {siteConfig.name}, an engineer who learns by shipping.
              </h1>
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-7 first:mt-6"
                >
                  {paragraph}
                </p>
              ))}
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-7">
                Based in Adelaide. Full Australian work rights, no
                sponsorship required.
              </p>

              {/* Social links */}
              <div className="mt-8 flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={link.label}
                    className="rounded-full text-neutral-900 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
                  >
                    <SiteSocialIcon icon={link.icon} className="w-6 h-6" />
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
                loading="eager"
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
            {aboutPractices.map((p) => (
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
    </PageShell>
  );
}
