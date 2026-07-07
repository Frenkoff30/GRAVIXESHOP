/* ============================================================
   GRAVIX — katalog produktů
   Zatím máme jen 3 reálné produkty. Uprav / přidej položky tady.
   Fotky se berou z /public/images přes pole `image`.
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
  /** Návod k použití (kroky). */
  usage?: string[];
  /** Upozornění / bezpečnostní pokyny. */
  warnings?: string[];
  /** Barevné varianty (jen vizuální výběr). */
  colors?: string[];
  /** Produkt se teprve připravuje — zatím nedostupný k objednání. */
  comingSoon?: boolean;
  specs: { label: string; value: string }[];
  inStock: boolean;
  tone: ProductTone;
  /** Cesta k fotce v /public. Vyměň za reálnou produktovou fotku. */
  image: string;
  /** Další fotky pro galerii na detailu (např. předek/zadek/detail). */
  images?: string[];
  /** Handle produktu na Shopify (párování live dat z lib/catalog.ts). */
  shopifyHandle?: string;
  /** Varianty ze Shopify (id + barva) — doplní catalog, pro košík. */
  variants?: { id: string; color?: string }[];
  /** Dostupnost ze Shopify (doplní catalog). */
  shopifyAvailable?: boolean;
};

/* Návod + upozornění jsou pro oba shakery společné. */
const shakerUsage = [
  "Naplňte shaker požadovaným množstvím vody nebo jiného nápoje.",
  "Přidejte protein, suplement nebo jinou směs.",
  "Pevně uzavřete víčko i uzávěr otvoru.",
  "Důkladně protřepejte po dobu 15–30 sekund.",
  "Po použití shaker vypláchněte a umyjte.",
];

const shakerWarnings = [
  "Před použitím vždy zkontrolujte správné uzavření víčka, aby nedošlo k protečení.",
  "Nevystavujte vysokým teplotám, pokud výrobek není k tomu určen.",
  "Pravidelně čistěte, aby nedocházelo k usazování zbytků nápojů a zápachu.",
];

export const categories: Category[] = [
  {
    slug: "shakery",
    name: "Shakery",
    tagline: "Míchání bez hrudek. Hydratace na cestách i v gymu.",
  },
  {
    slug: "dychani",
    name: "Doplňky",
    tagline: "Nosní pásky a doplňky pro lepší výkon i regeneraci.",
  },
];

export const products: Product[] = [
  {
    slug: "pro-shaker",
    shopifyHandle: "gravix-pro-shaker",
    image: "/images/gravixvelkyshaker.webp",
    name: "GRAVIX Pro Shaker",
    subtitle: "Shaker s nerezovou pružinou",
    category: "shakery",
    price: 299,
    rating: 4.9,
    reviews: 187,
    shortDescription:
      "700ml shaker bez BPA s nerezovou míchací pružinou a těsným víčkem proti vylití.",
    description: [
      "Žádné hrudky, žádné nehody v tašce. GRAVIX Pro Shaker kombinuje nerezovou míchací pružinu s víčkem, které těsní i v batohu plném vybavení.",
      "Matný povrch s logem GRAVIX, snadno čitelná stupnice a odolná konstrukce, která vydrží roky.",
    ],
    highlights: [
      "Bez BPA, zdravotně nezávadný",
      "Nerezová míchací pružina",
      "Těsnící víčko proti vylití",
    ],
    usage: shakerUsage,
    warnings: shakerWarnings,
    colors: ["Černá", "Stříbrná"],
    comingSoon: true,
    specs: [
      { label: "Objem", value: "700 ml" },
      { label: "Materiál", value: "Nerez ocel" },
      { label: "Mytí", value: "Vhodné do myčky" },
      { label: "Barva", value: "Černá / Stříbrná" },
    ],
    inStock: false,
    tone: "chrome",
  },
  {
    slug: "classic-shaker",
    shopifyHandle: "gravix-classic-shaker",
    image: "/images/gravixmalyshaker.webp",
    name: "GRAVIX Classic Shaker",
    subtitle: "Klasický shaker 600 ml",
    category: "shakery",
    price: 199,
    rating: 4.8,
    reviews: 96,
    shortDescription:
      "Klasický plastový shaker pro každodenní použití. Lehký, odolný a ideální pro míchání proteinů bez hrudek.",
    description: [
      "Klasický plastový shaker pro každodenní použití. Lehký, odolný a ideální pro míchání proteinů bez hrudek.",
      "Praktické sítko pro hladké rozmíchání, čitelná stupnice a víčko s bezpečným uzávěrem — spolehlivý parťák na každý trénink.",
    ],
    highlights: [
      "Bez BPA",
      "Míchací sítko v ceně",
      "Bezpečný uzávěr proti vylití",
    ],
    usage: shakerUsage,
    warnings: shakerWarnings,
    comingSoon: true,
    specs: [
      { label: "Objem", value: "600 ml" },
      { label: "Materiál", value: "PP, bez BPA" },
      { label: "Mytí", value: "Vhodné do myčky" },
      { label: "Barva", value: "Matná černá" },
    ],
    inStock: false,
    tone: "steel",
  },
  {
    slug: "nasal-strips",
    shopifyHandle: "gravix-nasal-strips",
    image: "/images/gravixnosnipasky-front.webp",
    images: [
      "/images/gravixnosnipasky-front.webp",
      "/images/gravixnosnipasky-back.webp",
      "/images/gravixnosnipasky-detail.webp",
    ],
    name: "GRAVIX Nasal Strips",
    subtitle: "Nosní pásky na dýchání",
    category: "dychani",
    price: 199,
    badge: "Novinka",
    rating: 4.7,
    reviews: 34,
    shortDescription:
      "Nosní pásky pomáhají zlepšit průchodnost nosu jemným rozšířením nosních průchodů. Vhodné pro spánek, sport i každodenní použití. Balení obsahuje 30 kusů.",
    description: [
      "Nosní pásky pomáhají zlepšit průchodnost nosu jemným rozšířením nosních průchodů. Jsou vhodné pro spánek, sport i každodenní použití. Balení obsahuje 30 kusů.",
      "Nosní pásky jsou jednoduchým a pohodlným řešením pro lepší dýchání nosem. Po nalepení na nos jemně nadzvedávají nosní křídla, čímž pomáhají zlepšit proudění vzduchu nosními průchody.",
      "Jsou vhodné při sportovních aktivitách, během spánku nebo kdykoliv, kdy chcete podpořit pohodlnější dýchání nosem. Díky jednoduché aplikaci drží pevně na místě a jejich použití nevyžaduje žádné léky ani složité postupy.",
    ],
    highlights: [
      "Podpora přirozeného dýchání nosem",
      "Jednoduché použití",
      "Pohodlné nošení",
      "Vhodné pro sport i spánek",
      "Balení obsahuje 30 nosních pásků",
    ],
    usage: [
      "Očistěte a osušte pokožku nosu.",
      "Nalepte pásek na střed nosu podle návodu a jemně přitlačte.",
      "Po použití pásek opatrně odstraňte.",
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
