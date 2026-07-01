import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Truck,
  ShieldCheck,
  Undo2,
  Headphones,
  Quote,
  Check,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { KineticBand } from "@/components/KineticBand";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { LogoMark } from "@/components/Logo";
import { Counter } from "@/components/Counter";
import { Stars } from "@/components/Stars";
import {
  products,
  categories,
  productsByCategory,
  formatPrice,
} from "@/lib/products";
import { clsx } from "@/lib/clsx";

const featured = products.filter((p) => p.badge).slice(0, 3);
const spotlight = featured[0];

const catImages: Record<string, string> = {
  "pasky-bandaze": "/images/grip-straps.jpg",
  "lahve-shakery": "/images/curl.jpg",
  prislusenstvi: "/images/dumbbell-grip.jpg",
};

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

const reviews = [
  {
    name: "Tomáš K.",
    role: "Powerlifting",
    rating: 5,
    text: "Trhačky drží jak beton. Konečně mrtvý tah bez toho, aby mi ujížděla osa z ruky. Kvalita znát na první dotek.",
  },
  {
    name: "Denis M.",
    role: "CrossFit",
    rating: 5,
    text: "Bandáže i shaker top kvalita za super cenu. Objednal večer, další den to bylo v schránce. Klobouk dolů.",
  },
  {
    name: "Lukáš V.",
    role: "Bodybuilding",
    rating: 5,
    text: "Opasek z pravé kůže je pecka, sedí perfektně a vypadá jako od velkýho brandu, ne jako levárna z tržnice.",
  },
];

const marqueeItems = [
  "Doprava zdarma od 1 000 Kč",
  "Expedice do 24 hodin",
  "Trhačky",
  "Bandáže",
  "Shakery",
  "Nosní pásky",
  "Doplňky do gymu",
  "Navrženo pro výkon",
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        {/* cinematický obraz s pomalým nájezdem */}
        <div className="absolute inset-0 animate-hero-zoom">
          <Image
            src="/images/hero.jpg"
            alt="Sportovec při mrtvém tahu"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center photo-grade"
          />
        </div>
        {/* overlays pro čitelnost + hloubka */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-ink/35" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_45%_at_62%_42%,rgba(224,30,40,0.16),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid opacity-15" />

        {/* technické rohové značky */}
        <span className="pointer-events-none absolute left-5 top-24 h-6 w-6 border-l border-t border-white/20 sm:left-8" />
        <span className="pointer-events-none absolute right-5 top-24 h-6 w-6 border-r border-t border-white/20 sm:right-8" />

        {/* horní technický popisek */}
        <div className="pointer-events-none absolute left-5 top-24 hidden items-center gap-3 sm:left-8 md:flex">
          <span className="tech-label text-mist">[ GRAVIX / EQUIPMENT ]</span>
        </div>

        {/* vertikální editorial popisek u pravého kraje */}
        <span className="tech-label pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 text-mist [writing-mode:vertical-rl] lg:block">
          EST. 2026 · Czech made
        </span>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.28em] text-fog backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-blood shadow-[0_0_8px_var(--color-blood)]" />
              Nová éra tréninkového vybavení
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-6xl font-bold uppercase leading-[0.86] tracking-tight sm:text-7xl lg:text-[7.5rem]">
              <span className="text-metal">Vybavení,</span>
              <br />
              <span className="text-flame">co nepovolí.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fog">
              Trhačky, bandáže, shakery a doplňky do gymu pro lidi, co od
              tréninku čekají maximum. Žádné kompromisy, jen čistý výkon
              a vybavení, které vydrží.
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

          <Reveal delay={0.28}>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-line bg-card/50 px-4 py-2 backdrop-blur">
              <Stars rating={4.9} />
              <span className="text-sm text-fog">
                <span className="font-semibold text-chrome">4,9 / 5</span> ·
                doporučují zákazníci
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.34}>
            <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-6">
              {[
                { to: 24, suffix: " h", l: "Expedice ze skladu" },
                { to: 300, suffix: "+ kg", l: "Nosnost trhaček" },
                { to: 30, suffix: " dní", l: "Garance vrácení" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl font-bold text-metal-soft">
                    <Counter to={s.to} suffix={s.suffix} />
                  </dt>
                  <dd className="tech-label mt-1 text-mist">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* scroll indikátor */}
        <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="tech-label text-mist">Scroll</span>
          <span className="h-10 w-px animate-scroll-cue bg-gradient-to-b from-blood to-transparent" />
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <Marquee items={marqueeItems} />

      {/* ============ 01 · KATEGORIE (bento) ============ */}
      <section
        id="kategorie"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <Reveal>
          <SectionHeading
            eyebrow="// 01 / Kategorie"
            title={
              <>
                Najdi své <span className="text-flame">vybavení</span>
              </>
            }
          >
            Vyber si, kde chceš přidat. Od gripu přes hydrataci až po detaily,
            co dělají rozdíl.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:h-[600px] lg:grid-cols-3 lg:grid-rows-2">
          {categories.map((c, i) => {
            const count = productsByCategory(c.slug).length;
            const big = i === 0;
            return (
              <Reveal
                key={c.slug}
                delay={i * 0.08}
                className={clsx(
                  "h-full",
                  big && "md:col-span-2 lg:col-span-2 lg:row-span-2",
                )}
              >
                <Link
                  href={`/produkty?kategorie=${c.slug}`}
                  className={clsx(
                    "group relative flex h-full cursor-pointer flex-col justify-end overflow-hidden rounded-2xl border border-line transition-all duration-300 hover:border-line-hi hover:shadow-[var(--shadow-glow)]",
                    big ? "min-h-[20rem]" : "min-h-[15rem]",
                  )}
                >
                  <Image
                    src={catImages[c.slug]}
                    alt={c.name}
                    fill
                    sizes={big ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
                    className="object-cover photo-grade reveal-color transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/5" />
                  <div className="absolute inset-0 bg-grid opacity-20" />

                  <span className="tech-label absolute left-6 top-6 text-chrome/70">
                    0{i + 1} / 0{categories.length}
                  </span>

                  <div className="relative p-6 sm:p-7">
                    <span className="tech-label text-mist">
                      {count}{" "}
                      {count === 1
                        ? "produkt"
                        : count < 5
                          ? "produkty"
                          : "produktů"}
                    </span>
                    <h3
                      className={clsx(
                        "mt-2 font-display font-bold uppercase tracking-tight text-chrome",
                        big ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl",
                      )}
                    >
                      {c.name}
                    </h3>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <p className="max-w-[18rem] text-sm leading-relaxed text-fog">
                        {c.tagline}
                      </p>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-hi bg-ink/60 text-chrome backdrop-blur transition-all duration-300 group-hover:bg-chrome group-hover:text-ink">
                        <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ 02 · BESTSELLERY ============ */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="// 02 / Vybráno pro tebe" title="Bestsellery">
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

      {/* ============ KINETICKÝ PÁS ============ */}
      <KineticBand word="GRAVIX" />

      {/* ============ SPOTLIGHT PRODUKTU ============ */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
          {/* obraz — na hover se rozzáří do barvy */}
          <div className="group relative min-h-[24rem] overflow-hidden lg:min-h-[40rem]">
            <ProductVisual
              tone={spotlight.tone}
              image={spotlight.image}
              className="h-full w-full"
            />
          </div>

          {/* obsah */}
          <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
            <span className="pointer-events-none absolute right-4 top-8 hidden select-none font-display text-[7rem] font-bold uppercase leading-none text-outline sm:block sm:text-[10rem]">
              01
            </span>
            <Reveal>
              <span className="tech-label text-fog">
                // Spotlight / Bestseller #1
              </span>
              <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.88] tracking-tight text-metal sm:text-6xl">
                {spotlight.name.replace("GRAVIX ", "")}
              </h2>
              <p className="mt-3 text-lg text-fog">{spotlight.subtitle}</p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fog">
                {spotlight.shortDescription}
              </p>
              <ul className="mt-6 space-y-2.5">
                {spotlight.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-sm text-chrome"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-chrome"
                      strokeWidth={2.5}
                    />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <span className="font-display text-4xl font-bold text-metal-soft">
                  {formatPrice(spotlight.price)}
                </span>
                <ButtonLink href={`/produkty/${spotlight.slug}`} size="lg">
                  Koupit teď
                  <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIÁLNÍ PRUH ============ */}
      <section className="relative overflow-hidden border-y border-line">
        <Image
          src="/images/ropes-concrete.jpg"
          alt="Trénink s lany"
          fill
          sizes="100vw"
          className="object-cover object-center photo-grade"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <span className="tech-label text-mist">// Made for the grind</span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-chrome sm:text-6xl">
              Postaveno na{" "}
              <span className="text-flame">poslední opakování.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-fog">
              Každý kus vybavení testujeme tam, kde to bolí. V dřepu, v tahu,
              v posledních centimetrech rozsahu. Co projde u nás, projde
              i u tebe.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-line/70 pt-8">
              {[
                { to: 100, suffix: " %", l: "Testováno v gymu" },
                { to: 24, suffix: " h", l: "Expedice" },
                { to: 30, suffix: " dní", l: "Na vrácení" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl font-bold text-metal-soft sm:text-4xl">
                    <Counter to={s.to} suffix={s.suffix} />
                  </dt>
                  <dd className="tech-label mt-1 text-mist">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ============ 03 · PROČ GRAVIX (USP) ============ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="// 03 / Proč GRAVIX"
            title={
              <>
                Bez <span className="text-flame">kompromisů</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.06} className="h-full">
              <div className="group relative flex h-full flex-col gap-5 bg-surface p-7 transition-colors duration-300 hover:bg-card">
                <span className="tech-label absolute right-5 top-5 text-mist">
                  0{i + 1}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-line-hi bg-card text-chrome transition-colors duration-300 group-hover:border-chrome">
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

      {/* ============ 04 · RECENZE ============ */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <SectionHeading
            eyebrow="// 04 / Recenze"
            title={
              <>
                Co říkají <span className="text-flame">v gymu</span>
              </>
            }
          >
            Skutečné vybavení, skutečné výsledky. Tohle říkají lidi, co s GRAVIXem
            trénují.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col gap-5 rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-hi">
                <div className="flex items-center justify-between">
                  <Stars rating={r.rating} />
                  <Quote className="h-6 w-6 text-line-hi" strokeWidth={1.5} />
                </div>
                <blockquote className="flex-1 text-base leading-relaxed text-chrome">
                  „{r.text}“
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full surface-metal font-display text-sm font-bold text-ink">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <div className="font-display text-sm font-semibold uppercase tracking-wide text-chrome">
                      {r.name}
                    </div>
                    <div className="tech-label text-mist">{r.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 05 · ZNAČKA (slogan + editorial galerie) ============ */}
      <section
        id="znacka"
        className="relative overflow-hidden border-y border-line bg-surface"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <div className="mb-8 flex justify-center">
              <LogoMark className="h-20 w-20" />
            </div>
          </Reveal>
          <Reveal>
            <span className="tech-label text-fog">// 05 / Naše značka</span>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 font-display text-3xl font-semibold uppercase leading-tight tracking-tight text-chrome sm:text-5xl">
              Nezačali jsme proto, abychom prodávali{" "}
              <span className="text-metal">další levný plast.</span> Začali
              jsme, protože jsme sami chtěli vybavení, které{" "}
              <span className="text-flame">nezklame v poslední sérii.</span>
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-fog">
              GRAVIX je česká značka pro lidi, kteří berou trénink vážně. Každý
              produkt vybíráme a testujeme tak, aby vydržel přesně to, co od něj
              čekáš, a vypadal přitom líp než cokoliv v regále.
            </p>
          </Reveal>
        </div>

        {/* editorial galerie */}
        <div className="relative mx-auto grid max-w-7xl grid-cols-3 gap-2 px-2 pb-2 sm:gap-3 sm:px-3 sm:pb-3">
          {[
            { src: "/images/grip-straps.jpg", alt: "Úchop činky" },
            { src: "/images/pullup-bw.jpg", alt: "Shyby" },
            { src: "/images/dumbbell-grip.jpg", alt: "Trénink s jednoručkami" },
          ].map((img, i) => (
            <Reveal key={img.src} delay={i * 0.1}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-line sm:aspect-[4/5]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 30vw"
                  className="object-cover photo-grade reveal-color transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="relative flex justify-center px-5 py-16">
          <ButtonLink href="/produkty" size="lg">
            Pojď do toho s námi
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </ButtonLink>
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-card p-8 sm:p-14">
            <div className="absolute inset-0 bg-radial-glow" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <span className="tech-label text-mist">// Newsletter</span>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-chrome sm:text-4xl">
                  Buď u toho první
                </h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-fog">
                  Novinky, limitované kousky a sleva 10 % na první nákup. Žádný
                  spam, jen věci, co se ti budou hodit.
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
                  className="inline-flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-blood px-8 font-display text-base font-semibold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:bg-blood-bright hover:shadow-[var(--shadow-blood)]"
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
