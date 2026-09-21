import { Outfit, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import type { Metadata } from "next";
import { AtlasIndex } from "@/components/AtlasIndex";
import { MobileIndex } from "@/components/MobileIndex";
import { RegistrationMarks } from "@/components/RegistrationMarks";
import { site } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.summary,
  authors: [{ name: site.name }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrument.variable} ${plex.variable}`}
    >
      <body className="font-sans">
        <a
          href="#cover"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to cover
        </a>
        <div className="grain" />
        <RegistrationMarks />
        <MobileIndex />
        <AtlasIndex />
        {children}
      </body>
    </html>
  );
}
