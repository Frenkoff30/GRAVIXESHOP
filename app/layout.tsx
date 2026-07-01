import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gravixstore.cz"),
  title: {
    default: "GRAVIX · Vybavení pro tvůj trénink",
    template: "%s · GRAVIX",
  },
  description:
    "GRAVIX. Prémiové fitness vybavení bez kompromisů. Trhačky, bandáže, shakery, nosní pásky a doplňky navržené pro maximální výkon.",
  keywords: [
    "GRAVIX",
    "fitness vybavení",
    "trhačky",
    "nosní pásky",
    "lifting straps",
    "zápěstní bandáže",
    "shaker",
    "posilovna",
  ],
  openGraph: {
    title: "GRAVIX · Vybavení pro tvůj trénink",
    description:
      "Prémiové fitness vybavení bez kompromisů. Navrženo pro maximální výkon.",
    url: "https://gravixstore.cz",
    siteName: "GRAVIX",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${barlow.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-chrome">
        {/* Duotone filtr pro fotky (krvavě červená) */}
        <svg
          className="absolute h-0 w-0"
          aria-hidden
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="gx-duotone" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="0.33 0.33 0.33 0 0
                        0.33 0.33 0.33 0 0
                        0.33 0.33 0.33 0 0
                        0    0    0    1 0"
              />
              <feComponentTransfer>
                <feFuncR type="table" tableValues="0.06 0.60 0.98" />
                <feFuncG type="table" tableValues="0.02 0.11 0.42" />
                <feFuncB type="table" tableValues="0.03 0.13 0.44" />
              </feComponentTransfer>
            </filter>
          </defs>
        </svg>

        <div className="grain-overlay" aria-hidden />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
