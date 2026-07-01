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
  specs: { label: string; value: string }[];
  inStock: boolean;
  tone: ProductTone;
  /** Cesta k fotce v /public. Vyměň za reálnou produktovou fotku. */
  image: string;
};

export const categories: Category[] = [
  {
    slug: "shakery",
    name: "Shakery",
    tagline: "Míchání bez hrudek. Hydratace na cestách i v gymu.",
  },
  {
    slug: "dychani",
    name: "Dýchání",
    tagline: "Víc kyslíku při tréninku i klidnější spánek.",
  },
];

export const products: Product[] = [
  {
    slug: "pro-shaker",
    image: "/images/shaker.jpg",
    name: "GRAVIX Pro Shaker",
    subtitle: "Shaker s nerezovou pružinou",
    category: "shakery",
    price: 299,
    badge: "Bestseller",
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
    slug: "classic-shaker",
    image: "/images/shaker.jpg",
    name: "GRAVIX Classic Shaker",
    subtitle: "Klasický shaker 600 ml",
    category: "shakery",
    price: 199,
    badge: "Bestseller",
    rating: 4.8,
    reviews: 96,
    shortDescription:
      "Jednoduchý a spolehlivý 600ml shaker se sítkem. Skvělý poměr cena/výkon.",
    description: [
      "Klasika, která nezklame. GRAVIX Classic Shaker má praktické sítko pro hladké rozmíchání a víčko s bezpečným uzávěrem.",
      "Lehký, odolný a čitelná stupnice — ideální parťák na každý trénink.",
    ],
    highlights: [
      "Bez BPA",
      "Míchací sítko v ceně",
      "Bezpečný uzávěr proti vylití",
    ],
    specs: [
      { label: "Objem", value: "600 ml" },
      { label: "Materiál", value: "PP, bez BPA" },
      { label: "Mytí", value: "Vhodné do myčky" },
      { label: "Barva", value: "Matná černá" },
    ],
    inStock: true,
    tone: "steel",
  },
  {
    slug: "nasal-strips",
    image: "/images/nasal.jpg",
    name: "GRAVIX Nasal Strips",
    subtitle: "Nosní pásky na dýchání",
    category: "dychani",
    price: 199,
    badge: "Novinka",
    rating: 4.7,
    reviews: 34,
    shortDescription:
      "Samolepicí nosní pásky, které otevřou nosní dýchací cesty. Víc kyslíku při tréninku i klidnější spánek.",
    description: [
      "Když nos nestíhá, trpí výkon. GRAVIX Nasal Strips jemně rozšíří nosní křídla, takže do plic dostaneš víc vzduchu při dřině i během regenerace.",
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
