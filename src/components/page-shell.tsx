import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative mb-16 sm:mb-32", className)}>
      <main>{children}</main>
    </div>
  );
}

export function PageIntro({
  title,
  description,
  className,
  widthClassName = "max-w-2xl",
}: {
  title: string;
  description: string;
  className?: string;
  widthClassName?: string;
}) {
  return (
    <div className={cn("sm:px-8 mt-16 sm:mt-32", className)}>
      <div className={cn("mx-auto", widthClassName)}>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}
