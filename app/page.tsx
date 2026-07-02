import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Truck,
  ShieldCheck,
  Undo2,
  Headphones,
  Check,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { KineticBand } from "@/components/KineticBand";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductVisual } from "@/components/ProductVisual";
import { LogoMark } from "@/components/Logo";
import { IconInstagram } from "@/components/IconInstagram";
import { Stars } from "@/components/Stars";
import {
  products,
  categories,
  productsByCategory,
  formatPrice,
} from "@/lib/products";
import { clsx } from "@/lib/clsx";

const spotlight =
  products.find((p) => p.slug === "nasal-strips") ?? products[0];

const catImages: Record<string, string> = {
  shakery: "/images/shaker.jpg",
  dychani: "/images/nasal.jpg",
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
    role: "Fitness",
    rating: 5,
    text: "Pro Shaker je pecka, těsní i v batohu a pružina nikdy nezaseká. Konečně žádný proteinový nepořádek v tašce.",
  },
  {
    name: "Denis M.",
    role: "CrossFit",
    rating: 5,
    text: "Nosní pásky mi fakt pomáhají s dýcháním při kondičce. Drží, i když se zpotím. Rozhodně doporučuju.",
  },
  {
    name: "Lukáš V.",
    role: "Kulturistika",
    rating: 5,
    text: "Classic Shaker za super cenu, kvalita jako od velkýho brandu. Objednal večer, druhý den doma. Paráda.",
  },
];

const marqueeItems = [
  "Doprava zdarma od 1 000 Kč",
  "Expedice do 24 hodin",
  "Shakery",
  "Nosní pásky",
  "Bez BPA",
  "Navrženo pro výkon",
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[calc(100svh-5.5rem)] flex-col overflow-hidden bg-ink">
        {/* pozadí: tlumený zelený spotlight vpravo + mřížka + hlubší vignette + spodní fade */}
        <div className="animate-glow-pulse absolute inset-0 bg-[radial-gradient(44%_50%_at_74%_46%,rgba(169,224,52,0.1),transparent_62%)]" />
        <div className="absolute inset-0 bg-grid opacity-[0.1]" />
        <div className="absolute inset-0 bg-[radial-gradient(130%_120%_at_64%_42%,transparent_38%,rgba(4,4,6,0.92))]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />

        {/* masthead — hairline lišta jako u agenturního webu */}
        <div className="relative z-10 border-b border-line/70">
          <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-5 sm:px-8">
            <span className="tech-label text-chrome/80">GRAVIX™</span>
            <span className="tech-label hidden text-mist sm:block">
              Fitness Equipment
            </span>
            <span className="tech-label text-mist">EST. 2026</span>
          </div>
        </div>

        {/* main — asymetrický 12-col grid */}
        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:gap-6">
          {/* logo — mobil nahoře, desktop vpravo; jemně se vznáší + zelený dým */}
          <Reveal className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
            <div className="relative w-[62vw] max-w-[260px] sm:max-w-[360px] lg:max-w-[480px]">
              {/* šedivý dým / mlha — tmavší, tlumený */}
              <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
                <span className="animate-fog-breathe absolute inset-[8%] rounded-full bg-fog/20 blur-[65px]" />
                <span className="animate-smoke-a absolute inset-x-[26%] inset-y-[18%] rounded-full bg-fog/25 blur-[48px]" />
                <span className="animate-smoke-b absolute inset-x-[34%] inset-y-[22%] rounded-full bg-mist/25 blur-[42px]" />
              </div>
              <Image
                src="/images/gravix-logo2.png"
                alt="GRAVIX"
                width={679}
                height={581}
                priority
                sizes="(max-width: 1024px) 62vw, 480px"
                className="animate-float-slow relative z-10 w-full object-contain opacity-80 brightness-90 drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
              />
            </div>
          </Reveal>

          {/* type blok */}
          <div className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/40 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.28em] text-fog backdrop-blur">
                <span className="animate-pulse-dot h-2 w-2 rounded-full bg-volt" />
                Česká fitness značka
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display font-bold uppercase leading-[0.8] tracking-tight text-[clamp(3rem,8vw,6.75rem)]">
                <span className="text-metal">Vybavení,</span>
                <br />
                <span className="text-flame">co nepovolí.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-fog lg:mx-0">
                Shakery a nosní pásky pro lidi, co od tréninku čekají maximum.
                Žádné kompromisy, jen čistý výkon.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <ButtonLink href="/produkty" size="lg">
                  Prozkoumat produkty
                  <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </ButtonLink>
                <ButtonLink
                  href="https://www.instagram.com/gravixstore.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  <IconInstagram className="h-5 w-5" />
                  Instagram
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <Marquee items={marqueeItems} />

      {/* ============ ZNAČKA — slogan (nahoře) ============ */}
      <section
        id="znacka"
        className="relative overflow-hidden border-b border-line bg-surface"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <div className="mb-8 flex justify-center">
              <LogoMark className="h-20 w-20" />
            </div>
          </Reveal>
          <Reveal>
            <span className="tech-label text-volt">// Naše značka</span>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-balance font-display font-semibold uppercase leading-[0.98] tracking-tight text-chrome text-[clamp(1.75rem,4vw,3.25rem)]">
              Nezačali jsme proto, abychom prodávali{" "}
              <span className="text-metal">další levný plast.</span> Začali
              jsme, protože jsme sami chtěli vybavení, které{" "}
              <span className="text-flame">nezklame v&nbsp;poslední&nbsp;sérii.</span>
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
      </section>

      {/* ============ 01 · KATEGORIE (bento) ============ */}
      <section
        id="kategorie"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
      >
        <Reveal>
          <SectionHeading
            eyebrow="// 01 / Kategorie"
            index="( 01 — 02 )"
            title={
              <>
                Najdi své <span className="text-flame">vybavení</span>
              </>
            }
          >
            Vyber si, kde chceš přidat. Od hydratace až po detaily, co dělají
            rozdíl mezi tréninkem a výkonem.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {categories.map((c, i) => {
            const count = productsByCategory(c.slug).length;
            return (
              <Reveal key={c.slug} delay={i * 0.08} className="h-full">
                <Link
                  href={`/produkty?kategorie=${c.slug}`}
                  className="group relative flex h-full min-h-[22rem] cursor-pointer flex-col justify-end overflow-hidden rounded-2xl border border-line transition-all duration-300 hover:border-volt/45 hover:shadow-[var(--shadow-glow)]"
                >
                  <Image
                    src={catImages[c.slug]}
                    alt={c.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
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
                    <h3 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-chrome sm:text-4xl">
                      {c.name}
                    </h3>
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <p className="max-w-[18rem] text-sm leading-relaxed text-fog">
                        {c.tagline}
                      </p>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-hi bg-ink/60 text-chrome backdrop-blur transition-all duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-ink">
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
              <span className="tech-label text-volt">
                // Spotlight / Novinka
              </span>
              <h2 className="mt-4 font-display font-bold uppercase leading-[0.85] tracking-tight text-metal text-[clamp(2.75rem,5vw,4.5rem)]">
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
                      className="mt-0.5 h-4 w-4 shrink-0 text-volt"
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

      {/* ============ 03 · PROČ GRAVIX (USP) ============ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="// 02 / Proč GRAVIX"
            index="( 01 — 04 )"
            title={
              <>
                Bez <span className="text-flame">kompromisů</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.06} className="h-full">
              <div className="group relative flex h-full flex-col gap-6 border-b border-line px-2 py-9 transition-colors duration-300 sm:px-6 lg:border-b-0 lg:border-l lg:first:border-l-0">
                <div className="flex items-baseline justify-between">
                  <u.icon
                    className="h-7 w-7 text-mist transition-colors duration-300 group-hover:text-volt"
                    strokeWidth={1.5}
                  />
                  <span className="font-display text-5xl font-bold leading-none text-outline transition-colors duration-300 group-hover:[--tw-text-opacity:1] group-hover:text-line-hi">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-chrome">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">
                    {u.text}
                  </p>
                </div>
                {/* spodní zelená linka na hover */}
                <span className="absolute -bottom-px left-0 h-0.5 w-0 bg-volt transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ 04 · RECENZE ============ */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal>
          <SectionHeading
            eyebrow="// 03 / Recenze"
            index="( 4,8 / 5 ★ )"
            title={
              <>
                Co říkají <span className="text-flame">v gymu</span>
              </>
            }
          >
            Skutečné vybavení, skutečné výsledky. Tohle říkají lidi, co s{" "}
            <span className="font-semibold text-volt">GRAVIXem</span> trénují.
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08} className="h-full">
              <figure className="group flex h-full flex-col gap-6 bg-ink p-8 transition-colors duration-300 hover:bg-surface">
                <div className="flex items-center justify-between">
                  <span className="font-display text-6xl font-bold leading-none text-volt">
                    „
                  </span>
                  <Stars rating={r.rating} />
                </div>
                <blockquote className="-mt-4 flex-1 text-lg leading-relaxed text-chrome">
                  {r.text}
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-line pt-6">
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

      {/* ============ FOTOGALERIE + CTA (po recenzích) ============ */}
      <section className="relative overflow-hidden border-y border-line bg-surface">
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative mx-auto max-w-7xl px-5 pt-20 sm:px-8 sm:pt-28">
          <Reveal>
            <SectionHeading
              eyebrow="// Galerie"
              align="center"
              title={
                <>
                  Foto<span className="text-flame">galerie</span>
                </>
              }
            >
              GRAVIX v akci. Skutečný trénink, skutečná dřina.
            </SectionHeading>
          </Reveal>
        </div>

        {/* editorial bento galerie */}
        <div className="relative mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-3 px-5 sm:px-8 lg:h-[560px] lg:grid-cols-3 lg:grid-rows-2">
          {[
            {
              src: "/images/grip-straps.jpg",
              alt: "Úchop činky",
              label: "Grip & tah",
              cls: "col-span-2 lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto",
            },
            {
              src: "/images/pullup-bw.jpg",
              alt: "Shyby",
              label: "Kalistenika",
              cls: "aspect-[4/5] lg:aspect-auto",
            },
            {
              src: "/images/dumbbell-grip.jpg",
              alt: "Trénink s jednoručkami",
              label: "Jednoručky",
              cls: "aspect-[4/5] lg:aspect-auto",
            },
          ].map((img, i) => (
            <Reveal key={img.src} delay={i * 0.1} className={img.cls}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-line transition-colors duration-300 hover:border-volt/60">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover photo-grade reveal-color transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.16em] text-chrome">
                  <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_8px_var(--color-volt)]" />
                  {img.label}
                </span>
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
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="absolute inset-0 bg-radial-glow" />
            {/* obří ghost nápis v pozadí */}
            <span className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[9rem] font-bold uppercase leading-none text-outline sm:text-[13rem]">
              −10%
            </span>

            <div className="relative grid gap-10 p-8 sm:p-14 lg:grid-cols-[1.1fr_1fr] lg:items-end">
              <div>
                <span className="tech-label text-volt">// Newsletter</span>
                <h2 className="mt-4 font-display font-bold uppercase leading-[0.9] tracking-tight text-chrome text-[clamp(2.25rem,4.5vw,3.75rem)]">
                  Buď u toho{" "}
                  <span className="text-flame">první.</span>
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-fog">
                  Novinky, limitované kousky a{" "}
                  <span className="font-semibold text-chrome">
                    sleva 10 % na první nákup.
                  </span>{" "}
                  Žádný spam, jen věci, co se ti budou hodit.
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
                  className="h-14 flex-1 rounded-full border border-line-hi bg-ink px-6 text-base text-chrome placeholder:text-mist transition-colors duration-200 focus:border-volt focus:outline-none focus:ring-4 focus:ring-volt/20"
                />
                <button
                  type="submit"
                  className="inline-flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full bg-volt px-8 font-display text-base font-semibold uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-volt-bright hover:shadow-[var(--shadow-volt)]"
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
