import Image from "next/image";
import { Briefcase, ScrollText, Download } from "lucide-react";

const experiences = [
  {
    company: "Cinetic Digital",
    startYear: "2021",
    endYear: "Presente",
    role: "Diseñador Web y Frontend",
    logo: "/images/companies/cineticdigital.svg",
  },
  {
    company: "Ádraba",
    startYear: "2018",
    endYear: "2021",
    role: "Diseñador Gráfico y Desarrollador Web",
    logo: "/images/companies/adraba.svg",
  },
  {
    company: "Tantra",
    startYear: "2015",
    endYear: "2019",
    role: "Diseñador Gráfico y Maquetador web",
    logo: "/images/companies/tantra.svg",
  },
  {
    company: "BDO",
    startYear: "2016",
    endYear: "2017",
    role: "Diseñador Gráfico y Maquetador web",
    logo: "/images/companies/bdo.svg",
  },
  {
    company: "Papaya Group",
    startYear: "2014",
    endYear: "2014",
    role: "Diseñador Gráfico.",
    logo: "/images/companies/papayagroup.svg",
  },
];

export function ExperienceCard() {
  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg overflow-hidden relative col-span-6 gap-2 h-80 sm:col-span-3 lg:col-span-3">
      <div className="inline-flex items-center h-8 gap-1 px-4 text-sm leading-5 body-primary box-gen rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800">
        <Briefcase className="flex-none w-4 h-4" />
        <span>Experiencia</span>
      </div>

      <div className="flex flex-col gap-3 w-full overflow-y-auto flex-1">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex gap-3 items-start">
            <Image
              src={exp.logo}
              alt={exp.role}
              width={40}
              height={40}
              className="relative flex items-center justify-center flex-none w-10 h-10 mt-1 rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
            />
            <div className="flex flex-col text-sm">
              <span className="sr-only">Empresa y Fecha</span>
              <span className="text-zinc-900 dark:text-zinc-100">
                {exp.company} -{" "}
                <span
                  aria-label={`${exp.startYear} until ${exp.endYear}`}
                >
                  <time>{exp.startYear}</time> — <time>{exp.endYear}</time>
                </span>
              </span>
              <span className="sr-only">Rol</span>
              <span className="text-zinc-500 dark:text-zinc-400">
                {exp.role}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-auto">
        <a
          href="https://read.cv/educlopez"
          className="inline-flex items-center gap-1 box-gen outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a] p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-sm px-3 py-1.5 transition"
        >
          <ScrollText className="w-4 h-4 stroke-zinc-600 dark:stroke-zinc-400" />
          Read.cv
        </a>
        <a
          href="/images/blog/cover-lorem-ipsum.png"
          className="inline-flex items-center gap-1 box-gen outline-0 ring-1 ring-zinc-200 dark:ring-[#1a1a1a] p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-sm px-3 py-1.5 transition"
        >
          <Download className="w-4 h-4 transition stroke-zinc-600 dark:stroke-zinc-400 group-active:stroke-zinc-900 group-hover:stroke-zinc-900 dark:group-hover:stroke-zinc-100" />
          Descargar cv
        </a>
      </div>
    </div>
  );
}
