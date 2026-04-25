import { MessageCircle } from "lucide-react";

export function ContactCard() {
  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg overflow-hidden relative row-span-2">
      {/* Section label pill */}
      <div className="inline-flex items-center h-8 gap-1 px-4 text-sm leading-5 body-primary box-gen rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800">
        <MessageCircle className="flex-none w-4 h-4" />
        <span>Contactar</span>
      </div>

      {/* CTA text */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
        Construyendo experiencias digitales excepcionales. &iexcl;Hablemos de tu
        proyecto!
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 mt-auto">
        <a
          href="mailto:example@example.com"
          className="inline-flex items-center h-8 px-4 text-sm rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90 transition"
        >
          Env&iacute;ame un Email
        </a>
        <a
          href="https://x.com/messages/compose?recipient_id=296227502"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center h-8 px-4 text-sm rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90 transition"
        >
          DM en Twitter
        </a>
      </div>
    </div>
  );
}
