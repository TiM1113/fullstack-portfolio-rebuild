"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import { navigationItems } from "@/data/site-content";
import {
  User,
  BookOpen,
  Code,
  Layers,
  FileText,
  Sun,
  Moon,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const iconMap = {
  user: User,
  book: BookOpen,
  code: Code,
  layers: Layers,
  resume: FileText,
} as const;

/**
 * Magnifying container shared by every dock slot.
 * Width grows from 40 → 80 based on distance from cursor, peak at distance 0.
 */
function DockMagnify({
  mouseX,
  className,
  children,
  reduceMotion,
}: {
  mouseX: MotionValue<number>;
  className?: string;
  children: React.ReactNode;
  reduceMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-190, 0, 190], [40, 96, 40]);
  const ySync = useTransform(distance, [-190, 0, 190], [0, -12, 0]);
  const width = useSpring(widthSync, {
    mass: 0.08,
    stiffness: 180,
    damping: 14,
  });
  const y = useSpring(ySync, {
    mass: 0.08,
    stiffness: 180,
    damping: 14,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        width: reduceMotion ? 40 : width,
        y: reduceMotion ? 0 : y,
      }}
      className={cn(
        "z-30 flex items-center justify-center aspect-square rounded-full",
        "bg-neutral-200/70 dark:bg-neutral-700/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function DockIcon({
  mouseX,
  label,
  href,
  icon,
  isExternal,
  isActive,
  reduceMotion,
}: {
  mouseX: MotionValue<number>;
  label: string;
  href: string;
  icon: string;
  isExternal?: boolean;
  isActive: boolean;
  reduceMotion: boolean;
}) {
  const sharedClassName =
    "block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500";

  const content = (
    <>
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-white dark:bg-zinc-200 dark:text-zinc-900 opacity-0 translate-y-1 pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0">
        {label}
      </span>

      <DockMagnify
        mouseX={mouseX}
        reduceMotion={reduceMotion}
        className={cn(isActive && "ring-1 ring-zinc-300 dark:ring-zinc-600")}
      >
        {icon === "avatar" ? (
          <Image
            src="/images/avatar.png"
            alt="Tim Yuan avatar"
            width={40}
            height={40}
            className="rounded-full w-full h-full object-cover p-0.5"
            loading="eager"
          />
        ) : (
          <DockSvgIcon name={icon} />
        )}
      </DockMagnify>
    </>
  );

  return (
    <div className="group relative">
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={sharedClassName}
        >
          {content}
        </a>
      ) : (
        <Link
          href={href}
          aria-current={isActive ? "page" : undefined}
          className={sharedClassName}
        >
          {content}
        </Link>
      )}
    </div>
  );
}

function DockSvgIcon({ name }: { name: string }) {
  const Icon = iconMap[name as keyof typeof iconMap];
  if (!Icon) return null;
  return (
    <Icon className="w-1/2 h-1/2 transition fill-white dark:fill-neutral-600 dark:stroke-neutral-300 stroke-neutral-900" />
  );
}

export function BottomNav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(Infinity);

  return (
    <nav
      aria-label="Site navigation"
      className="fixed z-10 bottom-8 left-1/2 -translate-x-1/2 hidden pointer-events-auto md:flex"
    >
      <motion.div
        onMouseMove={(event) => {
          if (!prefersReducedMotion) mouseX.set(event.pageX);
        }}
        onMouseLeave={() => {
          if (!prefersReducedMotion) mouseX.set(Infinity);
        }}
        className="flex items-end h-16 gap-4 px-4 pb-2.5 mx-auto outline-0 rounded-2xl box-gen ring-1 ring-zinc-200 dark:ring-zinc-800"
      >
        {navigationItems.map((item) => (
          <DockIcon
            key={item.href}
            mouseX={mouseX}
            label={item.label}
            href={item.href}
            icon={item.icon}
            isExternal={"isExternal" in item ? item.isExternal : false}
            reduceMotion={Boolean(prefersReducedMotion)}
            isActive={
              !item.isExternal &&
              (item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href))
            }
          />
        ))}

        {/* Separator */}
        <hr className="h-10 w-[1px] bg-neutral-300 dark:bg-neutral-700 mt-2.5 border-none" />

        {/* Theme toggle */}
        <div className="group relative">
          <button
            type="button"
            onClick={toggleTheme}
            className="block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-white dark:bg-zinc-200 dark:text-zinc-900 opacity-0 translate-y-1 pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0">
              {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            </span>
            <DockMagnify mouseX={mouseX} reduceMotion={Boolean(prefersReducedMotion)}>
              <Sun className="w-1/2 h-1/2 transition fill-white dark:fill-neutral-600 dark:hidden dark:stroke-neutral-300 stroke-neutral-900" />
              <Moon className="hidden w-1/2 h-1/2 transition fill-white dark:fill-neutral-600 dark:block dark:stroke-neutral-300 stroke-neutral-900" />
            </DockMagnify>
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
