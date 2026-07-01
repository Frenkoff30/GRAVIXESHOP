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
    "GRAVIX. Prémiové fitness vybavení bez kompromisů. Shakery a nosní pásky navržené pro maximální výkon.",
  keywords: [
    "GRAVIX",
    "fitness vybavení",
    "shaker",
    "nosní pásky",
    "nasal strips",
    "proteinový shaker",
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
        <div className="grain-overlay" aria-hidden />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
