import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SITE_METADATA } from "@/lib/constants";
import "./globals.css";

const fontDisplay = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_METADATA.title} | ${SITE_METADATA.tagline}`,
    template: `%s | ${SITE_METADATA.title}`,
  },
  description: "A chronological narrative portfolio and technical archive detailing the journey of Neo.",
  keywords: ["Neo", "Portfolio", "Documentary Portfolio", "Story-driven", "Software Engineering", "Full Stack Developer"],
  authors: [{ name: SITE_METADATA.author }],
  creator: SITE_METADATA.author,
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} dark`}
    >
      <body className="flex min-h-screen flex-col bg-[#0a0b0e] text-[#f0f0f4] antialiased selection:bg-[#d9825b] selection:text-[#0a0b0e]">
        <ProgressBar />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
