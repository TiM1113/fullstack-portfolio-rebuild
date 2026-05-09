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
 * Width grows from 40 → 72 within a fixed slot based on distance from cursor.
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

  const widthSync = useTransform(distance, [-190, 0, 190], [40, 72, 40]);
  const ySync = useTransform(distance, [-190, 0, 190], [0, -6, 0]);
  const zIndexSync = useTransform(distance, (value) => {
    const ratio = Math.max(0, 1 - Math.abs(value) / 190);
    return 10 + Math.round(ratio * 20);
  });
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
        zIndex: reduceMotion ? 10 : zIndexSync,
      }}
      className={cn(
        "relative flex aspect-square items-center justify-center rounded-full overflow-hidden",
        "bg-white/68 dark:bg-white/[0.08]",
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
    "block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  const content = (
    <>
      <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[color:var(--foreground)] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--primary-foreground)] opacity-0 translate-y-1 pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0">
        {label}
      </span>

      <DockMagnify
        mouseX={mouseX}
        reduceMotion={reduceMotion}
        className={cn(isActive && "ring-1 ring-[color:var(--surface-outline-strong)]")}
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
    <div className="group relative flex w-[4.75rem] shrink-0 justify-center">
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
    <Icon className="h-1/2 w-1/2 stroke-[color:var(--foreground)] transition" />
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
        className="surface-feature mx-auto flex h-[5.25rem] items-end gap-0 rounded-[1.5rem] px-3 pb-3 outline-0"
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
        <hr className="mt-2.5 h-10 w-px border-none bg-[color:var(--grid-line)]" />

        {/* Theme toggle */}
        <div className="group relative flex w-[4.75rem] shrink-0 justify-center">
          <button
            type="button"
            onClick={toggleTheme}
            className="block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[color:var(--foreground)] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[color:var(--primary-foreground)] opacity-0 translate-y-1 pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0">
              {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            </span>
            <DockMagnify mouseX={mouseX} reduceMotion={Boolean(prefersReducedMotion)}>
              <Sun className="h-1/2 w-1/2 stroke-[color:var(--foreground)] transition dark:hidden" />
              <Moon className="hidden h-1/2 w-1/2 stroke-[color:var(--foreground)] transition dark:block" />
            </DockMagnify>
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
