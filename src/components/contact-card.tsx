import { MessageCircle } from "lucide-react";

export function ContactCard() {
  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden relative row-span-2">
      {/* Section label pill */}
      <div className="inline-flex items-center h-8 gap-1 px-4 text-sm leading-5 body-primary box-gen rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800">
        <MessageCircle className="flex-none w-4 h-4" />
        <span>Contact</span>
      </div>

      {/* CTA text */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
        Building exceptional digital experiences. Let&apos;s talk about your
        project!
      </p>

      {/* Buttons */}
      <div className="flex gap-2 mt-auto w-full">
        <a
          href="mailto:example@example.com"
          className="flex-1 inline-flex items-center justify-center h-[34px] px-4 text-sm rounded-md box-gen ring-1 ring-zinc-200 dark:ring-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          Send me an Email
        </a>
        <a
          href="https://x.com/messages/compose?recipient_id=296227502"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center h-[34px] px-4 text-sm rounded-md box-gen ring-1 ring-zinc-200 dark:ring-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          DM on Twitter
        </a>
      </div>
    </div>
  );
}
