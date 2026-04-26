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
      "An exceptional professional who consistently delivers high-quality work.",
    author: "Maria Garcia",
    role: "CEO, Digital Startup",
  },
  {
    quote: "His attention to detail and creativity are unmatched.",
    author: "Carlos Lopez",
    role: "Marketing Director",
  },
  {
    quote: "Transformed our vision into an impressive digital reality.",
    author: "Ana Martinez",
    role: "Founder, Tech Co",
  },
  {
    quote: "Always meets deadlines and exceeds expectations.",
    author: "Pedro Sanchez",
    role: "Product Manager",
  },
  {
    quote: "His web design work is simply extraordinary.",
    author: "Laura Fernandez",
    role: "Creative Director",
  },
  {
    quote: "I recommend Edu without hesitation for any web project.",
    author: "Diego Rodriguez",
    role: "CTO, Digital Agency",
  },
];

const socialLinks = [
  { href: "https://twitter.com/educalvolpz", icon: TwitterIcon, label: "Twitter" },
  { href: "https://instagram.com/edui_design", icon: InstagramIcon, label: "Instagram" },
  { href: "https://github.com/educlopez", icon: GithubIcon, label: "GitHub" },
  { href: "https://linkedin.com/in/educlopez", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://read.cv/educlopez", icon: ScrollText, label: "Read.cv" },
  { href: "mailto:example@example.com", icon: Mail, label: "Email" },
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
                  I&apos;m Edu Calvo, passionate about web design and development.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-7">
                  Since my early days in graphic design, I set out to understand
                  everything I was learning to continuously improve at my work.
                  Throughout my career, I have been acquiring knowledge and
                  skills in various areas of design and development, which has
                  allowed me to evolve as a professional.
                </p>
                <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-7">
                  My focus is on understanding user needs and how users interact
                  with technology.
                </p>

                {/* Social links */}
                <div className="mt-8 flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
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
              Testimonials
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
