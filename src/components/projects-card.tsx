import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function ProjectsCard() {
  return (
    <div className="group flex flex-col items-start rounded-2xl box-gen p-4 shadow hover:shadow-lg gap-2 overflow-hidden relative col-span-6 h-80 sm:col-span-3 md:col-span-2 lg:col-span-2">
      {/* Section label pill */}
      <div className="inline-flex items-center h-8 gap-1 px-4 text-sm leading-5 body-primary box-gen rounded-full ring-1 ring-zinc-200 dark:ring-zinc-800">
        <MessageCircle className="flex-none w-4 h-4" />
        <span>Proyectos</span>
      </div>

      {/* Stacked project images */}
      <div className="relative flex-1 w-full mt-2">
        <Image
          src="/images/proyectos/cover-lorem-ipsum.png"
          alt="Lorem Ipsum Project"
          width={400}
          height={300}
          className="bg-black shadow-xl rounded-3xl will-change-transform absolute top-4 left-4 w-[85%] rotate-[-3deg]"
        />
        <Image
          src="/images/proyectos/cover-lorem-ipsum.png"
          alt="Lorem Ipsum Project"
          width={400}
          height={300}
          className="bg-black shadow-xl rounded-3xl will-change-transform absolute top-2 left-8 w-[85%] rotate-[2deg]"
        />
      </div>
    </div>
  );
}
