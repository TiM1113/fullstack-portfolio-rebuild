import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { BottomNav } from "@/components/bottom-nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Edu Calvo - Dise\u00f1ador Web & Frontend",
    template: "%s | Edu Calvo",
  },
  description: "Dise\u00f1ador web y Frontend con sede en Madrid",
  openGraph: {
    title: "Edu Calvo",
    description: "Dise\u00f1ador web y Frontend con sede en Madrid",
    url: "https://educalvolopez-com.vercel.app/",
    siteName: "Edu Calvo",
    locale: "es-ES",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
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
    <html lang="es" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-zinc-50 text-black bg-[url('/images/gradient2.svg')] bg-no-repeat bg-top dark:bg-zinc-900 dark:text-white">
        <ThemeProvider>
          {children}
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
