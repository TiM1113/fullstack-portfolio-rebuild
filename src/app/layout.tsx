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
    default: "Edu Calvo - Web Designer & Frontend Developer",
    template: "%s | Edu Calvo",
  },
  description: "Web designer and frontend developer based in Madrid",
  openGraph: {
    title: "Edu Calvo",
    description: "Web designer and frontend developer based in Madrid",
    url: "https://educalvolopez-com.vercel.app/",
    siteName: "Edu Calvo",
    locale: "en-US",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-zinc-50 text-black bg-[url('/images/gradient2.svg')] bg-no-repeat bg-top dark:bg-zinc-900 dark:text-white">
        <ThemeProvider>
          {children}
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
