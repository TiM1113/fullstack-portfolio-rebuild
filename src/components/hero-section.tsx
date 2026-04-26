"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollText, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  {
    href: "https://twitter.com/educalvolpz",
    label: "Follow on Twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/edui_design",
    label: "Follow on Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://github.com/educlopez",
    label: "Follow on GitHub",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/educlopez",
    label: "Follow on LinkedIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://read.cv/educlopez",
    label: "Read.cv",
    icon: <ScrollText className="h-6 w-6" strokeWidth={1.5} />,
  },
  {
    href: "mailto:example@example.com",
    label: "Send Email",
    icon: <Mail className="h-6 w-6" strokeWidth={1.5} />,
  },
];

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
        <h1 className="sr-only">Edu Calvo - Portfolio</h1>

        <Link href="/">
          <Image
            src="/images/avatar.png"
            alt="Eduardo Calvo Lopez avatar"
            width={64}
            height={64}
            className="rounded-full p-0.5 border border-zinc-200 bg-zinc-100 dark:bg-zinc-800"
          />
        </Link>

        <div className="mt-6">
          <span className="block text-base font-normal leading-7 text-zinc-900 dark:text-white">
            Edu Calvo - Portfolio
          </span>
          <span className="block text-base text-zinc-500 dark:text-zinc-400">
            Web designer and frontend developer based in Madrid
          </span>
        </div>

        <p className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex w-2 h-2 rounded-full opacity-75 animate-ping bg-lime-400" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-lime-400" />
          </span>
          Available for new projects
        </p>

        <div className="social-group mt-6 flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <div
              key={link.href}
              className="social-item relative flex items-center"
            >
              <a
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-neutral-900 dark:text-zinc-400"
              >
                {link.icon}
              </a>
              <ArrowIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
