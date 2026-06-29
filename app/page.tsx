import Link from "next/link";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Undo2,
  Headphones,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { LogoMark } from "@/components/Logo";
import { products, categories, productsByCategory } from "@/lib/products";

const featured = products.filter((p) => p.badge).slice(0, 3);

const usps = [
  {
    icon: Truck,
    title: "Doprava zdarma",
    text: "Při objednávce nad 1 000 Kč po celé ČR.",
  },
  {
    icon: ShieldCheck,
    title: "Prémiové materiály",
    text: "Testováno v posilovně, ne v marketingu.",
  },
  {
    icon: Undo2,
    title: "Vrácení do 30 dnů",
    text: "Nesedlo? Vrátíme ti peníze bez okolků.",
  },
  {
    icon: Headphones,
    title: "Podpora",
    text: "Poradíme s výběrem přes Instagram i e-mail.",
  },
];

const marqueeItems = [
  "Doprava zdarma od 1 000 Kč",
  "Expedice do 24 hodin",
  "Prémiové materiály",
  "Navrženo pro výkon",
  "Vrácení do 30 dnů",
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 bg-radial-glow" />
        {/* ghost mark */}
        <LogoMark className="pointer-events-none absolute -right-20 top-1/2 hidden h-[640px] w-[640px] -translate-y-1/2 opacity-[0.06] lg:block" />
        {/* bottom fade into page */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.28em] text-fog backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-chrome" />
              Nová éra tréninkového vybavení
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-6xl font-bold uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="text-metal">Vybavení,</span>
              <br />
              <span className="text-metal">co nepovolí.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog">
              GRAVIX vyrábí pásky, bandáže a doplňky pro lidi, co od tréninku
              čekají maximum. Žádné kompromisy — jen čistý výkon a design, který
              vydrží.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/produkty" size="lg">
                Prozkoumat produkty
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </ButtonLink>
              <ButtonLink href="/#znacka" variant="outline" size="lg">
                Naše značka
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6">
              {[
                { v: "24 h", l: "Expedice objednávek" },
                { v: "300+ kg", l: "Testovaná nosnost" },
                { v: "4,9 ★", l: "Hodnocení zákazníků" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl font-bold text-metal-soft">
                    {s.v}
                  </dt>
                  <dd className="mt-1 text-sm text-mist">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <Marquee items={marqueeItems} />

      {/* ============ USP ============ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-4 bg-surface p-7 transition-colors duration-300 hover:bg-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-line-hi bg-card text-chrome">
                  <u.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-chrome">
                    {u.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fog">
                    {u.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Vybráno pro tebe" title="Bestsellery">
              Kousky, které u nás letí nejvíc. Osvědčené v gymu i v soutěži.
            </SectionHeading>
            <ButtonLink href="/produkty" variant="ghost" className="shrink-0">
              Zobrazit vše
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </ButtonLink>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CATEGORIES (bento) ============ */}
      <section id="kategorie" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <SectionHeading eyebrow="Kategorie" title="Najdi své vybavení" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {categories.map((c, i) => {
            const count = productsByCategory(c.slug).length;
            return (
              <Reveal key={c.slug} delay={i * 0.08} className="h-full">
                <Link
                  href={`/produkty?kategorie=${c.slug}`}
                  className="group relative flex h-full min-h-64 cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-line bg-card p-7 transition-all duration-300 hover:border-line-hi hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="absolute inset-0 bg-grid opacity-40 transition-opacity duration-300 group-hover:opacity-70" />
                  <LogoMark className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-[0.07] transition-transform duration-500 group-hover:scale-110" />

                  <div className="relative">
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-mist">
                      {count} {count === 1 ? "produkt" : count < 5 ? "produkty" : "produktů"}
                    </span>
                    <h3 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-chrome">
                      {c.name}
                    </h3>
                  </div>

                  <div className="relative mt-8 flex items-center justify-between">
                    <p className="max-w-[16rem] text-sm leading-relaxed text-fog">
                      {c.tagline}
                    </p>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-hi text-chrome transition-all duration-300 group-hover:bg-chrome group-hover:text-ink">
                      <ArrowRight className="h-5 w-5" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ BRAND ============ */}
      <section id="znacka" className="relative overflow-hidden border-y border-line bg-surface">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <LogoMark className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-fog">
              Naše značka
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-chrome sm:text-5xl">
              Nezačali jsme proto, abychom prodávali{" "}
              <span className="text-metal">další levný plast.</span> Začali
              jsme, protože jsme sami chtěli vybavení, které{" "}
              <span className="text-metal">nezklame v poslední sérii.</span>
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-fog">
              GRAVIX je česká značka pro lidi, kteří berou trénink vážně. Každý
              produkt vybíráme a testujeme tak, aby vydržel přesně to, co od něj
              čekáš — a vypadal přitom líp než cokoliv v regále.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex justify-center">
              <ButtonLink href="/produkty" size="lg">
                Pojď do toho s námi
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-card p-8 sm:p-14">
            <div className="absolute inset-0 bg-radial-glow" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-chrome sm:text-4xl">
                  Buď u toho první
                </h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-fog">
                  Novinky, limitované kousky a sleva 10 % na první nákup. Žádný
                  spam — jen věci, co se ti budou hodit.
                </p>
              </div>
              <form
                className="flex flex-col gap-3 sm:flex-row"
                aria-label="Přihlášení k newsletteru"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  E-mailová adresa
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="tvuj@email.cz"
                  className="h-14 flex-1 rounded-full border border-line-hi bg-ink px-6 text-base text-chrome placeholder:text-mist transition-colors duration-200 focus:border-chrome focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-chrome px-8 font-display text-base font-semibold uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-white hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.45)]"
                >
                  Odebírat
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
