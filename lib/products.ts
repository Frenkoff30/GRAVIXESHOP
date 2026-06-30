/* ============================================================
   GRAVIX — katalog produktů
   Uprav / přidej položky tady. Obrázky se zatím generují
   automaticky (viz <ProductVisual />). Až budou fotky,
   přidej pole `image` a vykresli ho místo vizualizace.
   ============================================================ */

export type ProductTone = "steel" | "carbon" | "chrome" | "graphite";

export type Category = {
  slug: string;
  name: string;
  tagline: string;
};

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  category: string; // odkazuje na Category.slug
  price: number; // v Kč
  oldPrice?: number;
  badge?: "Novinka" | "Bestseller" | "Limitka";
  rating: number; // 0–5
  reviews: number;
  shortDescription: string;
  description: string[];
  highlights: string[];
  specs: { label: string; value: string }[];
  inStock: boolean;
  tone: ProductTone;
  /** Cesta k fotce v /public. Vyměň za reálnou produktovou fotku. */
  image: string;
};

export const categories: Category[] = [
  {
    slug: "pasky-bandaze",
    name: "Pásky & bandáže",
    tagline: "Pevný grip a stabilní zápěstí pro těžké série.",
  },
  {
    slug: "lahve-shakery",
    name: "Lahve & shakery",
    tagline: "Hydratace a nutrition na cestách i v gymu.",
  },
  {
    slug: "prislusenstvi",
    name: "Příslušenství",
    tagline: "Detaily, co dělají rozdíl mezi tréninkem a výkonem.",
  },
];

export const products: Product[] = [
  {
    slug: "lifting-straps",
    image: "/images/straps.jpg",
    name: "GRAVIX Lifting Straps",
    subtitle: "Trhačky",
    category: "pasky-bandaze",
    price: 349,
    badge: "Bestseller",
    rating: 4.9,
    reviews: 128,
    shortDescription:
      "Bavlněné trhačky s neoprenovou výztuhou. Maximální grip, žádné odřeniny.",
    description: [
      "Když selže úchop, končí série. GRAVIX Lifting Straps to mění díky vysoce odolné bavlně a protiskluzové vrstvě, takže udržíš činku i v posledním opakování mrtvého tahu.",
      "Neoprenová výplň okolo zápěstí tlumí tlak a zabraňuje odřeninám, takže se můžeš soustředit jen na výkon.",
    ],
    highlights: [
      "Protiskluzová vrstva pro maximální grip",
      "Neoprenová výztuha proti odřeninám",
      "Univerzální délka 55 cm",
    ],
    specs: [
      { label: "Materiál", value: "Bavlna + neopren" },
      { label: "Délka", value: "55 cm" },
      { label: "Nosnost", value: "do 300 kg" },
      { label: "Balení", value: "2 ks (pár)" },
    ],
    inStock: true,
    tone: "steel",
  },
  {
    slug: "wrist-wraps",
    image: "/images/wraps.jpg",
    name: "GRAVIX Wrist Wraps",
    subtitle: "Zápěstní bandáže",
    category: "pasky-bandaze",
    price: 399,
    rating: 4.8,
    reviews: 74,
    shortDescription:
      "Tuhé bandáže s palcovou smyčkou. Stabilní zápěstí při tlacích i olympijských zdvizích.",
    description: [
      "Bench, press nad hlavu, snatch. Všude, kde to tlačí na zápěstí, drží GRAVIX Wrist Wraps kloub přesně tam, kde má být.",
      "Široký suchý zip a palcová smyčka umožní rychlé utažení na míru každé sérii.",
    ],
    highlights: [
      "Tuhá tkanina pro pevnou oporu",
      "Palcová smyčka pro rychlé nasazení",
      "Široký suchý zip, délka 50 cm",
    ],
    specs: [
      { label: "Materiál", value: "Bavlna / elastan" },
      { label: "Délka", value: "50 cm" },
      { label: "Tuhost", value: "Medium / Stiff" },
      { label: "Balení", value: "2 ks (pár)" },
    ],
    inStock: true,
    tone: "carbon",
  },
  {
    slug: "figure-8-straps",
    image: "/images/strongman.jpg",
    name: "GRAVIX Figure 8 Straps",
    subtitle: "Osmičkové trhačky",
    category: "pasky-bandaze",
    price: 449,
    badge: "Novinka",
    rating: 4.7,
    reviews: 19,
    shortDescription:
      "Osmičkové trhačky pro strongman a maximální zámek úchopu.",
    description: [
      "Pro deadlift, shrugy a strongman disciplíny, kde se počítá každý kilogram. Osmičkový design uzamkne ruku k ose a nepustí.",
      "Vyrobeno z extra silného popruhu se zesílenými stehy.",
    ],
    highlights: [
      "Osmičkový design pro absolutní zámek",
      "Extra silný popruh se zesílenými stehy",
      "3 velikosti (S/M/L)",
    ],
    specs: [
      { label: "Materiál", value: "Polyester webbing" },
      { label: "Velikosti", value: "S / M / L" },
      { label: "Nosnost", value: "do 400 kg" },
      { label: "Balení", value: "2 ks (pár)" },
    ],
    inStock: true,
    tone: "graphite",
  },
  {
    slug: "shaker-700",
    image: "/images/shaker.jpg",
    name: "GRAVIX Shaker 700 ml",
    subtitle: "Shaker s míchací pružinou",
    category: "lahve-shakery",
    price: 249,
    badge: "Bestseller",
    rating: 4.9,
    reviews: 211,
    shortDescription:
      "700ml shaker bez BPA s nerezovou pružinou a těsným víčkem proti vylití.",
    description: [
      "Žádné hrudky, žádné nehody v tašce. GRAVIX Shaker kombinuje nerezovou míchací pružinu s víčkem, které těsní i v batohu plném vybavení.",
      "Matný povrch s logem GRAVIX a snadno čitelnou stupnicí.",
    ],
    highlights: [
      "Bez BPA, zdravotně nezávadný",
      "Nerezová míchací pružina",
      "Těsnící víčko proti vylití",
    ],
    specs: [
      { label: "Objem", value: "700 ml" },
      { label: "Materiál", value: "PP, bez BPA" },
      { label: "Mytí", value: "Vhodné do myčky" },
      { label: "Barva", value: "Matná černá" },
    ],
    inStock: true,
    tone: "chrome",
  },
  {
    slug: "magnesium-200",
    image: "/images/chalk.jpg",
    name: "GRAVIX Magnesium 200 g",
    subtitle: "Práškové magnézium",
    category: "prislusenstvi",
    price: 169,
    rating: 4.8,
    reviews: 56,
    shortDescription:
      "Čisté práškové magnézium pro suchý úchop. Bez zbytečných příměsí.",
    description: [
      "Suché ruce = jistý grip. Jemné práškové magnézium GRAVIX absorbuje pot a zvyšuje tření mezi rukou a osou.",
      "Praktické balení 200 g v dóze s těsnícím víčkem.",
    ],
    highlights: [
      "100% čisté magnézium",
      "Maximální absorpce potu",
      "Resealovatelná dóza 200 g",
    ],
    specs: [
      { label: "Hmotnost", value: "200 g" },
      { label: "Forma", value: "Prášek" },
      { label: "Složení", value: "Magnesium carbonate" },
      { label: "Balení", value: "Dóza s víčkem" },
    ],
    inStock: true,
    tone: "steel",
  },
  {
    slug: "lifting-belt",
    image: "/images/belt.jpg",
    name: "GRAVIX Lifting Belt",
    subtitle: "Vzpěračský opasek",
    category: "prislusenstvi",
    price: 899,
    oldPrice: 1090,
    badge: "Limitka",
    rating: 5.0,
    reviews: 12,
    shortDescription:
      "10mm opasek z pravé kůže s ocelovou sponou. Konstantní šířka 10 cm po celém obvodu.",
    description: [
      "Postaveno na maximální zatížení. Pravá kůže o tloušťce 10 mm a konstantní šířka 10 cm vytvářejí pevnou oporu pro core při dřepech i mrtvých tazích.",
      "Dvojitá ocelová spona drží přesně tam, kde ji utáhneš.",
    ],
    highlights: [
      "Pravá kůže 10 mm",
      "Konstantní šířka 10 cm",
      "Dvojitá ocelová spona",
    ],
    specs: [
      { label: "Materiál", value: "Pravá kůže" },
      { label: "Tloušťka", value: "10 mm" },
      { label: "Šířka", value: "10 cm" },
      { label: "Velikosti", value: "S až XL" },
    ],
    inStock: true,
    tone: "carbon",
  },
  {
    slug: "nosni-pasky",
    image: "/images/nasal.jpg",
    name: "GRAVIX Nosní pásky",
    subtitle: "Nosní pásky na dýchání",
    category: "prislusenstvi",
    price: 199,
    badge: "Novinka",
    rating: 4.7,
    reviews: 23,
    shortDescription:
      "Samolepicí nosní pásky, které otevřou nosní dýchací cesty. Víc kyslíku při tréninku i klidnější spánek.",
    description: [
      "Když nos nestíhá, trpí výkon. GRAVIX Nosní pásky jemně rozšíří nosní křídla, takže do plic dostaneš víc vzduchu při dřině i během regenerace.",
      "Pružný materiál drží po celý trénink a po sundání nezanechá zbytky lepidla.",
    ],
    highlights: [
      "Okamžitě lepší průchodnost nosem",
      "Drží i při zpocení",
      "Hypoalergenní lepidlo",
    ],
    specs: [
      { label: "Balení", value: "30 ks" },
      { label: "Velikost", value: "Universal" },
      { label: "Materiál", value: "Pružná tkanina" },
      { label: "Použití", value: "Sport i spánek" },
    ],
    inStock: true,
    tone: "graphite",
  },
];

/* ---------- helpery ---------- */

export function formatPrice(czk: number): string {
  return `${czk.toLocaleString("cs-CZ")} Kč`;
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function productsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}
