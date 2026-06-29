"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { clsx } from "@/lib/clsx";

export function ProductsBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const active = params.get("kategorie") ?? "vse";

  const filtered = useMemo(
    () =>
      active === "vse"
        ? products
        : products.filter((p) => p.category === active),
    [active],
  );

  const pills = [{ slug: "vse", name: "Vše" }, ...categories];

  const select = (slug: string) => {
    const url = slug === "vse" ? "/produkty" : `/produkty?kategorie=${slug}`;
    router.replace(url, { scroll: false });
  };

  return (
    <>
      {/* filter pills */}
      <div className="mt-10 flex flex-wrap gap-2.5">
        {pills.map((p) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => select(p.slug)}
            className={clsx(
              "cursor-pointer rounded-full border px-5 py-2 font-display text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-200",
              active === p.slug
                ? "border-chrome bg-chrome text-ink"
                : "border-line bg-card text-fog hover:border-line-hi hover:text-chrome",
            )}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* count */}
      <p className="mt-6 text-sm text-mist">
        {filtered.length}{" "}
        {filtered.length === 1
          ? "produkt"
          : filtered.length < 5
            ? "produkty"
            : "produktů"}
      </p>

      {/* grid */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 0.06, 0.3)}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
