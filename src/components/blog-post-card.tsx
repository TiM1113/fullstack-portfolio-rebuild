import Link from "next/link";
import { Sparkles } from "lucide-react";

export function BlogPostCard() {
  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg gap-2 overflow-hidden relative col-span-6 h-full sm:col-span-3 lg:col-span-3">
      <div className="inline-flex items-center h-8 gap-1 px-4 text-sm leading-5 body-primary box-gen rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800">
        <Sparkles className="flex-none w-4 h-4" />
        <span>Último Post</span>
      </div>

      <time className="text-sm text-zinc-500 dark:text-zinc-400">
        18 de febrero de 2023
      </time>

      <h2 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white">
        <Link href="/blog/post2" className="hover:underline">
          Lorem Ipsum
        </Link>
      </h2>

      <span className="text-sm text-zinc-500">#Desarrollo</span>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
