import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { IconInstagram } from "@/components/IconInstagram";
import { categories } from "@/lib/products";

const EMAIL = "gravixstore1@gmail.com";
const PHONE_DISPLAY = "792 419 532";
const PHONE_HREF = "tel:+420792419532";

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
      { href: "/znacka", label: "O značce" },
      { href: "/#kontakt", label: "Kontakt" },
      { href: "/doprava-a-platba", label: "Doprava a platba" },
      { href: "/reklamace", label: "Reklamace a vrácení" },
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
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-chrome transition-colors duration-200 hover:border-volt hover:text-volt"
              >
                <IconInstagram className="h-[18px] w-[18px]" />
              </Link>
              <Link
                href={`mailto:${EMAIL}`}
                aria-label="Napiš nám e-mail"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-chrome transition-colors duration-200 hover:border-volt hover:text-volt"
              >
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </Link>
              <Link
                href={PHONE_HREF}
                aria-label="Zavolej nám"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-chrome transition-colors duration-200 hover:border-volt hover:text-volt"
              >
                <Phone className="h-[18px] w-[18px]" strokeWidth={1.75} />
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
                  href={PHONE_HREF}
                  className="transition-colors duration-200 hover:text-chrome"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="transition-colors duration-200 hover:text-chrome"
                >
                  {EMAIL}
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
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/obchodni-podminky" className="hover:text-fog">
              Obchodní podmínky
            </Link>
            <Link href="/ochrana-osobnich-udaju" className="hover:text-fog">
              Ochrana osobních údajů
            </Link>
            <Link href="/cookies" className="hover:text-fog">
              Cookies
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
