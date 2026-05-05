import type { Metadata } from "next";
import { siteConfig } from "@/data/site-content";

const fallbackSiteUrl = "https://fullstack-portfolio-rebuild.vercel.app";

export function getSiteUrl() {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    fallbackSiteUrl;

  return candidate.startsWith("http") ? candidate : `https://${candidate}`;
}

export const siteUrl = getSiteUrl();
export const metadataBase = new URL(siteUrl);

export function absoluteUrl(path = "/") {
  return new URL(path, metadataBase).toString();
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_AU",
      type: "website",
      images: siteConfig.ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
