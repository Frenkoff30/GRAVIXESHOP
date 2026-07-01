import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Check, Truck, ShieldCheck, Undo2 } from "lucide-react";
import {
  getProduct,
  getCategory,
  products,
  productsByCategory,
  formatPrice,
} from "@/lib/products";
import { ProductVisual } from "@/components/ProductVisual";
import { ProductCard } from "@/components/ProductCard";
import { Stars } from "@/components/Stars";
import { AddToCart } from "@/components/AddToCart";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produkt nenalezen" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = productsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-72 bg-radial-glow" />

      <div className="relative mx-auto max-w-7xl px-5 pt-10 sm:px-8 sm:pt-14">
        {/* breadcrumb */}
        <nav
          className="flex flex-wrap items-center gap-1.5 text-sm text-mist"
          aria-label="Drobečková navigace"
        >
          <Link href="/" className="transition-colors hover:text-chrome">
            Domů
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link
            href="/produkty"
            className="transition-colors hover:text-chrome"
          >
            Produkty
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-fog">{product.name.replace("GRAVIX ", "")}</span>
        </nav>

        {/* main grid */}
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* visual */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductVisual
              tone={product.tone}
              image={product.image}
              label={product.subtitle}
              className="aspect-square w-full rounded-3xl border border-line"
            />
          </div>

          {/* info */}
          <div>
            {category && (
              <Link
                href={`/produkty?kategorie=${category.slug}`}
                className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-fog transition-colors hover:text-chrome"
              >
                {category.name}
              </Link>
            )}

            <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-chrome sm:text-5xl">
              {product.name.replace("GRAVIX ", "")}
            </h1>
            <p className="mt-2 text-lg text-fog">{product.subtitle}</p>

            <div className="mt-4 flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-sm text-mist">
                {product.rating.toLocaleString("cs-CZ")} · {product.reviews}{" "}
                hodnocení
              </span>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <span className="font-display text-4xl font-bold text-metal-soft">
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="mb-1 text-lg text-mist line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-sm">
              <span
                className={`h-2 w-2 rounded-full ${product.inStock ? "bg-emerald-400" : "bg-mist"}`}
              />
              <span className="text-fog">
                {product.inStock ? "Skladem · expedice do 24 h" : "Dočasně vyprodáno"}
              </span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-fog">
              {product.shortDescription}
            </p>

            {/* highlights */}
            <ul className="mt-6 space-y-2.5">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-chrome">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt" strokeWidth={2.5} />
                  {h}
                </li>
              ))}
            </ul>

            <AddToCart productName={product.name} />

            {/* mini USP row */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-8">
              {[
                { icon: Truck, t: "Doprava zdarma", s: "od 1 000 Kč" },
                { icon: Undo2, t: "30 dní", s: "na vrácení" },
                { icon: ShieldCheck, t: "Záruka", s: "kvality" },
              ].map((x) => (
                <div key={x.t} className="flex flex-col items-center gap-2 text-center">
                  <x.icon className="h-5 w-5 text-fog" strokeWidth={1.75} />
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-wide text-chrome">
                      {x.t}
                    </p>
                    <p className="text-xs text-mist">{x.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* description + specs */}
        <div className="mt-20 grid gap-12 border-t border-line pt-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-chrome">
              Popis
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-fog">
              {product.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-chrome">
              Parametry
            </h2>
            <dl className="mt-5 overflow-hidden rounded-2xl border border-line">
              {product.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center justify-between gap-4 px-5 py-4 text-sm ${
                    i % 2 === 0 ? "bg-card" : "bg-surface"
                  }`}
                >
                  <dt className="text-fog">{s.label}</dt>
                  <dd className="font-medium text-chrome">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Mohlo by se hodit" title="Doplň výbavu" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
