import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { BottomNav } from "@/components/bottom-nav";
import { MobileNav } from "@/components/mobile-nav";
import { PointerHalo } from "@/components/pointer-halo";
import { metadataBase } from "@/lib/site";
import { siteConfig } from "@/data/site-content";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const displayFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const themeInitializer = `(() => {
  try {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored === "light" || stored === "dark" ? stored : systemDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {}
})();`;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Tim Yuan — Software Engineer & AI-Native Engineer",
    template: "%s | Tim Yuan",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteConfig.fullName }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_AU",
    type: "website",
    url: "/",
    images: siteConfig.ogImage,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="site-shell min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitializer}
        </Script>
        <ThemeProvider>
          <PointerHalo />
          <div className="site-stage">
            <MobileNav />
            <div className="h-20 md:hidden" aria-hidden="true" />
            {children}
            <BottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
