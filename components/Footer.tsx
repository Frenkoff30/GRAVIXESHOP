import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/Logo";
import { IconInstagram } from "@/components/IconInstagram";
import { categories } from "@/lib/products";

const cols = [
  {
    title: "Nákup",
    links: [
      { href: "/produkty", label: "Všechny produkty" },
      ...categories.map((c) => ({
        href: `/produkty?kategorie=${c.slug}`,
        label: c.name,
      })),
    ],
  },
  {
    title: "Informace",
    links: [
      { href: "/#znacka", label: "O značce" },
      { href: "/#kontakt", label: "Kontakt" },
      { href: "/produkty", label: "Doprava a platba" },
      { href: "/produkty", label: "Reklamace" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="kontakt" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">
              Prémiové fitness vybavení bez kompromisů. Navrženo pro ty, co
              berou každý trénink vážně.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://www.instagram.com/gravixstore.cz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GRAVIX na Instagramu"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-chrome transition-colors duration-200 hover:border-line-hi hover:bg-card"
              >
                <IconInstagram className="h-[18px] w-[18px]" />
              </Link>
              <Link
                href="mailto:info@gravixstore.cz"
                aria-label="Napiš nám e-mail"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-chrome transition-colors duration-200 hover:border-line-hi hover:bg-card"
              >
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </Link>
            </div>
          </div>

          {/* link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-chrome">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-fog transition-colors duration-200 hover:text-chrome"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-chrome">
              Spojení
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-fog">
              <li>
                <a
                  href="mailto:info@gravixstore.cz"
                  className="transition-colors duration-200 hover:text-chrome"
                >
                  info@gravixstore.cz
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gravixstore.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-chrome"
                >
                  @gravixstore.cz
                </a>
              </li>
              <li className="pt-2 text-mist">Expedice do 24 hodin</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-mist sm:flex-row">
          <p>© {new Date().getFullYear()} GRAVIX. Všechna práva vyhrazena.</p>
          <p className="flex items-center gap-4">
            <Link href="/produkty" className="hover:text-fog">
              Obchodní podmínky
            </Link>
            <Link href="/produkty" className="hover:text-fog">
              Ochrana soukromí
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
