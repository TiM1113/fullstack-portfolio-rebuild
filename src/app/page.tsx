import { HeroSection } from "@/components/hero-section";
import { BlogPostCard } from "@/components/blog-post-card";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectsCard } from "@/components/projects-card";
import { SpotifyCard } from "@/components/spotify-card";
import { ContactCard } from "@/components/contact-card";
import { StackCard } from "@/components/stack-card";
import { PageShell } from "@/components/page-shell";
import { siteConfig } from "@/data/site-content";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    jobTitle: siteConfig.title,
    email: siteConfig.email,
    url: siteConfig.sourceRepo,
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location,
    },
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Hero Section */}
      <HeroSection />

      {/* Bento Grid */}
      <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-6 gap-4 mb-2 text-left grid-rows-12 sm:grid-rows-7 md:grid-rows-6 lg:grid-rows-2">
            {/* Row 1 */}
            <BlogPostCard />
            <ExperienceCard />

            {/* Row 2 */}
            <ProjectsCard />

            {/* Spotify + Contact sub-grid */}
            <div className="grid relative col-span-6 grid-rows-3 gap-4 h-80 sm:col-span-3 md:col-span-3 lg:col-span-2">
              <SpotifyCard />
              <ContactCard />
            </div>

            <StackCard />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
