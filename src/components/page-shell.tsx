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
    <div className={cn("page-shell", className)}>
      <main>{children}</main>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
  className,
  widthClassName = "max-w-2xl",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  className?: string;
  widthClassName?: string;
}) {
  return (
    <div className={cn("page-frame page-section", className)}>
      <div className={cn("mx-auto", widthClassName)}>
        {eyebrow ? <p className="page-kicker">{eyebrow}</p> : null}
        <h1 className="page-title mt-4">{title}</h1>
        <p className="page-copy mt-5 max-w-3xl">{description}</p>
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </div>
  );
}
