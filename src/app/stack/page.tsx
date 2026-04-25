import type { Metadata } from "next";

export const metadata: Metadata = { title: "Stack" };

const categories = [
  {
    title: "Workstation",
    items: [
      {
        name: 'MacBook Pro 14" M2 Pro',
        description:
          "Mi herramienta principal de trabajo. Potente, silencioso y con una pantalla increíble.",
        href: "#",
      },
      {
        name: "Monitor LG 27UK850",
        description:
          "Monitor 4K con USB-C. Perfecto para diseño y desarrollo.",
        href: "#",
      },
      {
        name: "Keychron K2",
        description:
          "Teclado mecánico inalámbrico. Compacto y con buena respuesta táctil.",
        href: "#",
      },
    ],
  },
  {
    title: "Desarrollo",
    items: [
      {
        name: "Visual Studio Code",
        description:
          "Mi editor de código principal. Con las extensiones adecuadas es imbatible.",
        href: "#",
      },
      {
        name: "iTerm2",
        description:
          "Terminal mejorado para macOS con soporte para splits y perfiles.",
        href: "#",
      },
      {
        name: "GitHub",
        description:
          "Control de versiones y colaboración. Imprescindible.",
        href: "#",
      },
    ],
  },
  {
    title: "Diseño",
    items: [
      {
        name: "Figma",
        description:
          "Mi herramienta de diseño principal. Colaborativa y potente.",
        href: "#",
      },
      {
        name: "Adobe Photoshop",
        description:
          "Para edición de imágenes y trabajo con fotografías.",
        href: "#",
      },
    ],
  },
  {
    title: "Productividad",
    items: [
      {
        name: "Notion",
        description:
          "Para organizar proyectos, notas y documentación.",
        href: "#",
      },
      {
        name: "Raycast",
        description:
          "Lanzador de aplicaciones y productividad para macOS.",
        href: "#",
      },
      {
        name: "Linear",
        description:
          "Gestión de proyectos para equipos de desarrollo.",
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
              El software que uso, los dispositivos que creo y otras cosas que
              recomiendo.
            </h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              Me preguntan mucho sobre las cosas que uso para crear software,
              mantenerme productivo o comprar para engañarme y pensar que estoy
              siendo productivo cuando en realidad solo estoy procrastinando.
              Aquí está una gran lista de todas mis cosas favoritas.
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
