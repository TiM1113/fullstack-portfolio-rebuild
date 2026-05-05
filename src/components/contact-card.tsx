import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { contactCard } from "@/data/site-content";
import { SectionPill } from "@/components/ui/section-pill";

export function ContactCard() {
  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden relative row-span-2">
      <SectionPill icon={<MessageCircle className="h-4 w-4" />}>Contact</SectionPill>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
        {contactCard.heading}
      </p>

      <div className="flex gap-2 mt-auto w-full">
        <a
          href={contactCard.primaryHref}
          className="flex-1 inline-flex items-center justify-center h-[34px] px-4 text-sm rounded-md box-gen ring-1 ring-zinc-200 dark:ring-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
        >
          {contactCard.primaryLabel}
        </a>
        <Link
          href={contactCard.secondaryHref}
          className="flex-1 inline-flex items-center justify-center h-[34px] px-4 text-sm rounded-md box-gen ring-1 ring-zinc-200 dark:ring-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-500"
        >
          {contactCard.secondaryLabel}
        </Link>
      </div>
    </div>
  );
}
