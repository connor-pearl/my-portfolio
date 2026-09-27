import { Outfit, Instrument_Serif, IBM_Plex_Mono } from "next/font/google";
import type { Metadata } from "next";
import { AtlasChrome } from "@/components/AtlasChrome";
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
        <div className="grain" />
        <AtlasChrome />
        {children}
      </body>
    </html>
  );
}
