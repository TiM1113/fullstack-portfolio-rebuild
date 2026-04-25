import Image from "next/image";
import { ScrollText, Mail } from "lucide-react";
import {
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/components/icons";

export const metadata = {
  title: "About",
};

const testimonials = [
  {
    quote:
      "Un profesional excepcional que siempre entrega trabajo de alta calidad.",
    author: "María García",
    role: "CEO, Startup Digital",
  },
  {
    quote: "Su atención al detalle y creatividad son incomparables.",
    author: "Carlos López",
    role: "Director de Marketing",
  },
  {
    quote: "Transformó nuestra visión en una realidad digital impresionante.",
    author: "Ana Martínez",
    role: "Fundadora, Tech Co",
  },
  {
    quote: "Siempre cumple con los plazos y supera las expectativas.",
    author: "Pedro Sánchez",
    role: "Product Manager",
  },
  {
    quote: "Su trabajo en diseño web es simplemente extraordinario.",
    author: "Laura Fernández",
    role: "Directora Creativa",
  },
  {
    quote: "Recomiendo a Edu sin dudarlo para cualquier proyecto web.",
    author: "Diego Rodríguez",
    role: "CTO, Digital Agency",
  },
];

const socialLinks = [
  { href: "https://twitter.com/educalvolopez", icon: TwitterIcon, label: "Twitter" },
  { href: "https://instagram.com/educalvolopez", icon: InstagramIcon, label: "Instagram" },
  { href: "https://github.com/educalvolopez", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/educalvolopez", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://read.cv/educalvo", icon: ScrollText, label: "Read.cv" },
  { href: "mailto:hello@educalvo.com", icon: Mail, label: "Email" },
];

export default function AboutPage() {
  return (
    <div className="relative mb-16 sm:mb-32">
      <main>
        {/* Bio Section */}
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto max-w-xl lg:max-w-4xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-0">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl leading-tight">
                  Soy Edu Calvo, un apasionado del diseño y desarrollo web.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-7">
                  Desde mis inicios en el diseño gráfico, me propuse comprender
                  todo lo que iba aprendiendo para mejorar continuamente en mi
                  trabajo. A lo largo de mi carrera, he ido adquiriendo
                  conocimientos y habilidades en diversas áreas del diseño y
                  desarrollo, lo que me ha permitido evolucionar como
                  profesional.
                </p>
                <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-7">
                  Mi enfoque se centra en entender las necesidades del usuario y
                  la interacción del usuario con la tecnología.
                </p>

                {/* Social links */}
                <div className="mt-8 flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition"
                    >
                      <link.icon className="w-6 h-6 stroke-[1.5px]" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: Portrait */}
              <div>
                <Image
                  src="/images/avatar.png"
                  alt="Edu Calvo"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="sm:px-8 mt-24">
          <div className="mx-auto max-w-xl lg:max-w-5xl">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8">
              Testimonios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl box-gen p-6 shadow ring-1 ring-zinc-200 dark:ring-zinc-800"
                >
                  <blockquote className="text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                      {t.author}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500">
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
