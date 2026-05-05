"use client";

import { Layers } from "lucide-react";
import Link from "next/link";
import { SectionPill } from "@/components/ui/section-pill";

function TailwindIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.48 12 7 12z"
        fill="#06B6D4"
      />
    </svg>
  );
}

function NextjsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.049-.106.006-4.703.007-4.705.073-.091a.637.637 0 0 1 .174-.143c.096-.047.134-.051.534-.051.469 0 .534.012.654.116a466.83 466.83 0 0 1 2.575 3.849l2.602 3.903 1.317 1.972.066-.044c1.162-.766 2.388-1.857 3.373-3.01a11.877 11.877 0 0 0 2.697-5.77c.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.747C21.347 4.494 18.14.71 13.79.044A12.488 12.488 0 0 0 11.572 0zm4.918 7.311a.457.457 0 0 1 .234.217c.025.052.029.99.029 5.125l-.004 5.063-.742-1.137-.744-1.138V11.02c0-2.85.008-4.448.022-4.495a.475.475 0 0 1 .229-.247c.097-.05.131-.054.514-.054.37 0 .42.004.462.037z" />
    </svg>
  );
}

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#61DAFB">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.058-.841.176C4.671 2.2 4.19 4.166 4.667 7.01c-2.24.748-3.667 1.92-3.667 3.19 0 1.27 1.43 2.443 3.669 3.192-.479 2.844.04 4.81 1.636 5.5.248.117.53.175.842.175 1.346 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.31 0 .592-.057.841-.175 1.597-.69 2.115-2.656 1.636-5.5 2.24-.749 3.668-1.922 3.668-3.192 0-1.27-1.428-2.442-3.67-3.19.48-2.844-.038-4.81-1.636-5.5a1.867 1.867 0 0 0-.84-.176z" />
    </svg>
  );
}

function TypeScriptIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#3178C6">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm15.003 13.575h-2.7v7.05h-2.1v-7.05H8.64v-1.8h7.488zm.675-1.8h2.1v6.15c0 .69-.115 1.218-.345 1.583-.23.365-.562.638-.997.818-.435.18-.957.27-1.567.27-.555 0-1.068-.075-1.538-.225l.225-1.665c.315.105.614.158.9.158.315 0 .555-.075.72-.225.165-.15.247-.42.247-.81v-6.054h.255z" />
    </svg>
  );
}

function HonoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M13.68 1.5c.58 2.76-.52 4.6-1.7 6.04-1.3 1.58-2.66 2.98-2.66 5.1 0 1.9 1.26 3.46 3.14 3.46 2.24 0 3.9-1.84 3.9-4.38 0-1.58-.62-2.96-1.72-4.34-.48-.58-.96-1.1-1.84-1.88.2 1.04-.2 1.94-.76 2.62-.62.76-1.4 1.34-1.4 2.44 0 .86.56 1.48 1.42 1.48 1.04 0 1.82-.82 1.82-2.02 0-.6-.24-1.14-.64-1.72 1.88 1.2 3.7 3.26 3.7 6.28 0 3.86-2.82 6.96-6.66 6.96C8.4 21.54 6 19.16 6 15.78c0-3.22 1.9-5.3 3.62-7.18 1.52-1.66 2.84-3.12 4.06-7.1Z"
        fill="#F97316"
      />
      <path
        d="M13.32 9.08c.9.9 1.42 1.94 1.42 3.08 0 1.72-1.2 2.98-2.88 2.98-1.44 0-2.5-1.08-2.5-2.58 0-1.54.96-2.54 1.84-3.5.54-.56 1.04-1.1 1.38-1.86.08.64.3 1.28.74 1.88Z"
        fill="#FDBA74"
      />
    </svg>
  );
}

function PostgreSQLIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5.25" rx="6.5" ry="2.5" fill="#336791" />
      <path
        d="M5.5 5.25v8.9c0 1.38 2.9 2.52 6.5 2.52s6.5-1.14 6.5-2.52v-8.9c0 1.38-2.9 2.5-6.5 2.5s-6.5-1.12-6.5-2.5Z"
        fill="#336791"
      />
      <ellipse cx="12" cy="14.15" rx="6.5" ry="2.52" fill="#4B87B9" />
      <path
        d="M8.15 10.58c0-.48.38-.86.86-.86h6c.48 0 .87.38.87.86 0 .48-.39.86-.87.86h-6a.86.86 0 0 1-.86-.86Zm0 3.1c0-.48.38-.86.86-.86h6c.48 0 .87.38.87.86 0 .48-.39.86-.87.86h-6a.86.86 0 0 1-.86-.86Z"
        fill="#E6F1FB"
      />
    </svg>
  );
}

function VercelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L24 22H0L12 1z" />
    </svg>
  );
}

const stackIcons = [
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "React", icon: ReactIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Hono", icon: HonoIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "Vercel", icon: VercelIcon },
];

interface MeteorConfig {
  left: number;
  delay: number;
  duration: number;
}

const meteors: readonly MeteorConfig[] = [
  { left: -220, delay: 0.6, duration: 4.8 },
  { left: -40, delay: 1.8, duration: 5.6 },
  { left: 160, delay: 0.9, duration: 5.1 },
  { left: 280, delay: 2.7, duration: 6.2 },
] as const;

function Meteor({ config }: { config: MeteorConfig }) {
  return (
    <span
      className="animate-meteor-effect motion-reduce:animate-none absolute top-0 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
      style={{
        left: `${config.left}px`,
        animationDelay: `${config.delay}s`,
        animationDuration: `${config.duration}s`,
      }}
    />
  );
}

export function StackCard() {
  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg transition-shadow duration-200 relative col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-2 overflow-hidden">
      {/* SVG grid background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60 dark:opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 328 222"
        fill="none"
        aria-hidden="true"
      >
        <path
          className="stroke-[#E9E9EB] dark:stroke-[#2f2f2f]"
          strokeWidth="1"
          d="M-37 41.5h701M-37 104.5h701M-37 178.5h701M-37 115.5h701M244.5-68v557M83.5-68v557M94.5-68v557M158.5-68v557M169.5-68v557M234.5-68v557"
        />
      </svg>

      {/* Meteor shower */}
      {meteors.map((config, i) => (
        <Meteor key={i} config={config} />
      ))}

      <SectionPill
        icon={<Layers className="h-4 w-4" />}
        className="relative z-10"
      >
        Stack
      </SectionPill>

      {/* Tech stack grid */}
      <div className="grid grid-cols-4 gap-2 mt-3 w-full flex-1 relative z-10">
        {stackIcons.map((item) => (
          <Link
            key={item.name}
            href="/stack"
            aria-label={`Read about ${item.name} in the stack page`}
            className="flex items-center justify-center p-3 rounded-lg bg-white/60 dark:bg-zinc-800/60 hover:bg-neutral-100 dark:hover:bg-neutral-700 ring-1 ring-zinc-200 dark:ring-zinc-700 transition aspect-square focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
          >
            <item.icon className="w-6 h-6" />
          </Link>
        ))}
      </div>
    </div>
  );
}
