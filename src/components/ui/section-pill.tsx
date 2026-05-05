import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionPill({
  icon,
  children,
  className,
}: {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full box-gen px-4 py-1.5 text-sm leading-5 ring-1 ring-zinc-200 dark:ring-zinc-800",
        className
      )}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}
