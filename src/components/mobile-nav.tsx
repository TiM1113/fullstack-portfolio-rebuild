"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ExternalLink, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navigationItems, siteConfig } from "@/data/site-content";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

function getCurrentSection(pathname: string) {
  if (pathname === "/") return "Home";
  if (pathname.startsWith("/about")) return "About";
  if (pathname.startsWith("/blog")) return "Blog";
  if (pathname.startsWith("/projects")) return "Projects";
  if (pathname.startsWith("/stack")) return "Stack";
  return siteConfig.name;
}

export function MobileNav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [navState, setNavState] = useState({ isOpen: false, pathname });
  const prefersReducedMotion = useReducedMotion();
  const currentSection = getCurrentSection(pathname);
  const isOpen = navState.isOpen && navState.pathname === pathname;

  return (
    <div className="md:hidden" aria-hidden={false}>
      <div className="fixed inset-x-4 top-4 z-30">
        <div className="box-gen flex items-center justify-between rounded-2xl px-3 py-3 ring-1 ring-zinc-200 dark:ring-zinc-800">
          <Link
            href="/"
            onClick={() => setNavState({ isOpen: false, pathname })}
            className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
            aria-label="Go to home page"
          >
            <Image
              src="/images/avatar.png"
              alt="Tim Yuan avatar"
              width={40}
              height={40}
              className="rounded-full border border-zinc-200 bg-zinc-100 p-0.5 dark:border-zinc-700 dark:bg-zinc-800"
              loading="eager"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-zinc-900 dark:text-white">
                {siteConfig.name}
              </p>
              <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                {currentSection}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200/70 text-zinc-900 transition hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-neutral-700/50 dark:text-zinc-100 dark:hover:bg-neutral-700 dark:focus-visible:ring-zinc-500"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setNavState({ isOpen: !isOpen, pathname })}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200/70 text-zinc-900 transition hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-neutral-700/50 dark:text-zinc-100 dark:hover:bg-neutral-700 dark:focus-visible:ring-zinc-500"
              aria-controls="mobile-navigation-panel"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-20 bg-zinc-950/15 px-4 pt-24 backdrop-blur-sm"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
          >
            <motion.nav
              id="mobile-navigation-panel"
              aria-label="Site navigation"
              className="box-gen mx-auto max-w-sm rounded-3xl p-4 ring-1 ring-zinc-200 dark:ring-zinc-800"
              initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="space-y-2">
                {navigationItems.map((item) => {
                  const isActive =
                    !item.isExternal &&
                    (item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href));

                  const sharedClassName =
                    "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500";

                  if (item.isExternal) {
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setNavState({ isOpen: false, pathname })}
                        className={cn(
                          sharedClassName,
                          "text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
                        )}
                      >
                        <span>{item.label}</span>
                        <ExternalLink className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setNavState({ isOpen: false, pathname })}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        sharedClassName,
                        isActive
                          ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                          : "text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
                      )}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-xs opacity-70">
                        {item.href === "/" ? "Start" : item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
