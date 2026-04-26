import type { Metadata } from "next";

export const metadata: Metadata = { title: "Stack" };

const categories = [
  {
    title: "Workstation",
    items: [
      {
        name: 'MacBook Pro 14" M2 Pro',
        description:
          "My main work tool. Powerful, silent, and with an incredible display.",
        href: "#",
      },
      {
        name: "Monitor LG 27UK850",
        description:
          "4K monitor with USB-C. Perfect for design and development.",
        href: "#",
      },
      {
        name: "Keychron K2",
        description:
          "Wireless mechanical keyboard. Compact with great tactile feedback.",
        href: "#",
      },
    ],
  },
  {
    title: "Development",
    items: [
      {
        name: "Visual Studio Code",
        description:
          "My main code editor. With the right extensions it's unbeatable.",
        href: "#",
      },
      {
        name: "iTerm2",
        description:
          "Enhanced terminal for macOS with support for splits and profiles.",
        href: "#",
      },
      {
        name: "GitHub",
        description:
          "Version control and collaboration. Essential.",
        href: "#",
      },
    ],
  },
  {
    title: "Design",
    items: [
      {
        name: "Figma",
        description:
          "My main design tool. Collaborative and powerful.",
        href: "#",
      },
      {
        name: "Adobe Photoshop",
        description:
          "For image editing and photo work.",
        href: "#",
      },
    ],
  },
  {
    title: "Productivity",
    items: [
      {
        name: "Notion",
        description:
          "To organize projects, notes, and documentation.",
        href: "#",
      },
      {
        name: "Raycast",
        description:
          "Application launcher and productivity tool for macOS.",
        href: "#",
      },
      {
        name: "Linear",
        description:
          "Project management for development teams.",
        href: "#",
      },
    ],
  },
];

export default function StackPage() {
  return (
    <div className="relative mb-16 sm:mb-32">
      <main>
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">
              The software I use, the devices I work with, and other things I
              recommend.
            </h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              People ask me a lot about the things I use to build software,
              stay productive, or buy to trick myself into thinking I&apos;m
              being productive when I&apos;m really just procrastinating.
              Here&apos;s a big list of all my favorite stuff.
            </p>
          </div>
        </div>

        {/* Stack Categories */}
        <div className="sm:px-8 mt-16">
          <div className="mx-auto max-w-2xl">
            {categories.map((cat) => (
              <section key={cat.title} className="mb-16">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-700 pb-4 mb-6">
                  {cat.title}
                </h2>
                <div className="flex flex-col gap-8">
                  {cat.items.map((item) => (
                    <div key={item.name}>
                      <h3 className="text-sm font-medium text-zinc-900 dark:text-white">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-blue-600 dark:text-blue-400"
                        >
                          {item.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
