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
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[color:var(--muted-foreground)] surface-utility",
        className
      )}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}
