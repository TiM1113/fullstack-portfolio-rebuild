"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig, socialLinks } from "@/data/site-content";
import { SiteSocialIcon } from "@/components/site-social-icon";

function ArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="social-arrow absolute w-4 h-4 -right-3"
      aria-hidden="true"
    >
      <line x1="7" x2="17" y1="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto max-w-xl">
        <h1 className="sr-only">Tim Yuan - Portfolio</h1>

        <Link href="/">
          <Image
            src="/images/avatar.png"
            alt="Tim Yuan avatar"
            width={64}
            height={64}
            className="rounded-full p-0.5 border border-zinc-200 bg-zinc-100 dark:bg-zinc-800"
            loading="eager"
          />
        </Link>

        <div className="mt-6">
          <span className="block text-base font-normal leading-7 text-zinc-900 dark:text-white">
            {siteConfig.fullName}
          </span>
          <span className="block text-base text-zinc-500 dark:text-zinc-400">
            Software Engineer & Full-Stack Developer · AI-native practitioner · Adelaide
          </span>
        </div>

        <p className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_0_4px_rgba(163,230,53,0.18)] dark:shadow-[0_0_0_4px_rgba(163,230,53,0.12)]" />
          {siteConfig.availability}
        </p>

        <div className="mt-6 flex gap-4">
          {socialLinks.map((link) => (
            <div
              key={link.href}
              className="social-item relative flex items-center"
            >
              <a
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="social-link inline-flex rounded-full text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:text-zinc-400 dark:focus-visible:ring-zinc-500"
              >
                <SiteSocialIcon icon={link.icon} className="h-6 w-6" />
              </a>
              <ArrowIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
