import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Proyectos" };

const projects = [
  {
    title: "Lorem Ipsum Project",
    date: "Marzo de 2023",
    coverImage: "/images/proyectos/cover-lorem-ipsum.png",
  },
  {
    title: "Lorem Ipsum Project",
    date: "Febrero de 2023",
    coverImage: "/images/proyectos/cover-lorem-ipsum.png",
  },
  {
    title: "Lorem Ipsum Project",
    date: "Enero de 2023",
    coverImage: "/images/proyectos/cover-lorem-ipsum.png",
  },
];

const clientLogos = [
  { name: "Tantra", src: "/images/companies/tantra.svg" },
  { name: "BDO", src: "/images/companies/bdo.svg" },
  { name: "Cinetic Digital", src: "/images/companies/cineticdigital.svg" },
  { name: "Ádraba", src: "/images/companies/adraba.svg" },
  { name: "Papaya Group", src: "/images/companies/papayagroup.svg" },
];

export default function ProjectsPage() {
  return (
    <div className="relative mb-16 sm:mb-32">
      <main>
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">
              Proyectos que he realizado durante mi carrera.
            </h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              ¿No sabes por dónde empezar? He trabajado en montones de pequeños
              y grandes proyectos a lo largo de los años, pero solo me ha sido
              posible mostrar algunos con el paso del tiempo.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="sm:px-8 mt-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white mb-6">
              Proyectos destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={`${project.title}-${project.date}-${index}`}
                  className="group rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      {project.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos Carousel */}
        <div className="sm:px-8 mt-16 overflow-hidden">
          <div className="mx-auto max-w-5xl">
            <div className="flex gap-12 animate-scroll">
              {[...clientLogos, ...clientLogos, ...clientLogos].map(
                (logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className="flex-none opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={120}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
