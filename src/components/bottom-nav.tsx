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
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "/", icon: "avatar" },
  { label: "About", href: "/about", icon: "user" },
  { label: "Blog", href: "/blog", icon: "book" },
  { label: "Proyectos", href: "/proyectos", icon: "code" },
  { label: "Stack", href: "/stack", icon: "layers" },
  {
    label: "Tienda",
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

function NavButton({
  label,
  href,
  icon,
  isExternal,
  isActive,
}: {
  label: string;
  href: string;
  icon: string;
  isExternal?: boolean;
  isActive: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const LinkComp = isExternal ? "a" : Link;
  const linkProps = isExternal
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <button
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <LinkComp {...linkProps} className="block">
        {/* Tooltip */}
        <span
          className={cn(
            "absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-white transition-all dark:bg-zinc-200 dark:text-zinc-900",
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1 pointer-events-none"
          )}
        >
          {label}
        </span>

        {/* Icon */}
        <div
          className={cn(
            "z-30 flex items-center justify-center w-10 rounded-full",
            "bg-neutral-200/70 dark:bg-neutral-700/50",
            isActive && "ring-2 ring-zinc-400 dark:ring-zinc-500"
          )}
        >
          {icon === "avatar" ? (
            <Image
              src="/images/avatar.png"
              alt="avatar Eduardo Calvo L\u00f3pez"
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="p-2">
              {(() => {
                const Icon = iconMap[icon as keyof typeof iconMap];
                return Icon ? (
                  <Icon className="w-5 h-5 transition fill-white dark:fill-neutral-600 dark:stroke-neutral-300 stroke-neutral-900" />
                ) : null;
              })()}
            </div>
          )}
        </div>
      </LinkComp>
    </button>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [themeHovered, setThemeHovered] = useState(false);

  return (
    <div className="fixed z-10 flex-col bottom-8 left-1/2 -translate-x-1/2 hidden pointer-events-auto md:flex">
      <div className="flex items-end h-16 gap-4 px-4 pb-2.5 mx-auto outline-0 rounded-2xl box-gen ring-1 ring-zinc-200 dark:ring-[#1a1a1a]">
        {navItems.map((item) => (
          <NavButton
            key={item.href}
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
        <button
          className="relative"
          onClick={toggleTheme}
          onMouseEnter={() => setThemeHovered(true)}
          onMouseLeave={() => setThemeHovered(false)}
        >
          <span
            className={cn(
              "absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-white transition-all dark:bg-zinc-200 dark:text-zinc-900",
              themeHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-1 pointer-events-none"
            )}
          >
            {theme === "light" ? "Cambiar a oscuro" : "Cambiar a claro"}
          </span>
          <div className="z-30 flex items-center justify-center w-10 rounded-full cursor-pointer bg-neutral-200/70 dark:bg-neutral-700/50 p-2">
            <Sun className="w-5 h-5 transition fill-white dark:fill-neutral-600 dark:hidden dark:stroke-neutral-300 stroke-neutral-900" />
            <Moon className="hidden w-5 h-5 transition fill-white dark:fill-neutral-600 dark:block dark:stroke-neutral-300 stroke-neutral-900" />
          </div>
        </button>
      </div>
    </div>
  );
}
