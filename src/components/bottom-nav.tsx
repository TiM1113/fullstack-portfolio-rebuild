"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import {
  User,
  BookOpen,
  Code,
  Layers,
  ShoppingCart,
  Sun,
  Moon,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", icon: "avatar" },
  { label: "About", href: "/about", icon: "user" },
  { label: "Blog", href: "/blog", icon: "book" },
  { label: "Projects", href: "/projects", icon: "code" },
  { label: "Stack", href: "/stack", icon: "layers" },
  {
    label: "Shop",
    href: "https://educalvolopez.lemonsqueezy.com/",
    icon: "cart",
    isExternal: true,
  },
] as const;

const iconMap = {
  user: User,
  book: BookOpen,
  code: Code,
  layers: Layers,
  cart: ShoppingCart,
} as const;

function DockIcon({
  mouseX,
  label,
  href,
  icon,
  isExternal,
  isActive,
}: {
  mouseX: MotionValue<number>;
  label: string;
  href: string;
  icon: string;
  isExternal?: boolean;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Width grows from 40 → 80 based on distance, peak at 0
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const linkProps = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const Wrapper = isExternal ? "a" : Link;

  return (
    <div className="group relative">
      <Wrapper href={href} {...linkProps} className="block">
        {/* Tooltip — pure CSS group-hover */}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-white dark:bg-zinc-200 dark:text-zinc-900 opacity-0 translate-y-1 pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0">
          {label}
        </span>

        {/* Magnifying icon container */}
        <motion.div
          ref={ref}
          style={{ width }}
          className={cn(
            "z-30 flex items-center justify-center aspect-square rounded-full",
            "bg-neutral-200/70 dark:bg-neutral-700/50",
            isActive && "ring-2 ring-zinc-400 dark:ring-zinc-500"
          )}
        >
          {icon === "avatar" ? (
            <Image
              src="/images/avatar.png"
              alt="Tim Yuan avatar"
              width={40}
              height={40}
              className="rounded-full w-full h-full object-cover p-0.5"
            />
          ) : (
            <DockSvgIcon name={icon} />
          )}
        </motion.div>
      </Wrapper>
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
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed z-10 flex-col bottom-8 left-1/2 -translate-x-1/2 hidden pointer-events-auto md:flex">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end h-16 gap-4 px-4 pb-2.5 mx-auto outline-0 rounded-2xl box-gen ring-1 ring-zinc-200 dark:ring-[#1a1a1a]"
      >
        {navItems.map((item) => (
          <DockIcon
            key={item.href}
            mouseX={mouseX}
            label={item.label}
            href={item.href}
            icon={item.icon}
            isExternal={"isExternal" in item ? item.isExternal : false}
            isActive={
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            }
          />
        ))}

        {/* Separator */}
        <hr className="h-10 w-[1px] bg-neutral-300 dark:bg-neutral-700 mt-2.5 border-none" />

        {/* Theme toggle */}
        <div className="group relative">
          <button onClick={toggleTheme} className="block">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-white dark:bg-zinc-200 dark:text-zinc-900 opacity-0 translate-y-1 pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0">
              {theme === "light" ? "Switch to dark" : "Switch to light"}
            </span>
            <div className="z-30 flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-neutral-200/70 dark:bg-neutral-700/50 p-2">
              <Sun className="w-5 h-5 transition fill-white dark:fill-neutral-600 dark:hidden dark:stroke-neutral-300 stroke-neutral-900" />
              <Moon className="hidden w-5 h-5 transition fill-white dark:fill-neutral-600 dark:block dark:stroke-neutral-300 stroke-neutral-900" />
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
