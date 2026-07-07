"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { X } from "lucide-react";
import { categories, type Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { clsx } from "@/lib/clsx";

/** Porovnání bez ohledu na diakritiku a velikost písmen. */
const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

function plural(n: number) {
  return n === 1 ? "produkt" : n < 5 ? "produkty" : "produktů";
}

export function ProductsBrowser({ products }: { products: Product[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const active = params.get("kategorie") ?? "vse";
  const query = params.get("q") ?? "";

  const filtered = useMemo(() => {
    let list =
      active === "vse"
        ? products
        : products.filter((p) => p.category === active);

    const q = normalize(query.trim());
    if (q) {
      list = list.filter((p) => {
        const cat =
          categories.find((c) => c.slug === p.category)?.name ?? "";
        return normalize(
          `${p.name} ${p.subtitle} ${p.shortDescription} ${cat}`,
        ).includes(q);
      });
    }
    return list;
  }, [active, query, products]);

  const pills = [{ slug: "vse", name: "Vše" }, ...categories];

  const select = (slug: string) => {
    const url = slug === "vse" ? "/produkty" : `/produkty?kategorie=${slug}`;
    router.replace(url, { scroll: false });
  };

  const clearSearch = () => {
    router.replace(
      active === "vse" ? "/produkty" : `/produkty?kategorie=${active}`,
      { scroll: false },
    );
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

      {/* aktivní vyhledávání */}
      {query.trim() && (
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="text-fog">
            Výsledky hledání:{" "}
            <span className="font-semibold text-chrome">„{query}"</span>
          </span>
          <button
            type="button"
            onClick={clearSearch}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-fog transition-colors hover:border-volt hover:text-volt"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
            Zrušit
          </button>
        </div>
      )}

      {/* count */}
      <p className="mt-6 text-sm text-mist">
        {filtered.length} {plural(filtered.length)}
      </p>

      {/* grid / prázdný stav */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i * 0.06, 0.3)}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-line bg-card/40 p-12 text-center">
          <p className="font-display text-2xl font-bold uppercase tracking-tight text-chrome">
            Nic jsme nenašli
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-fog">
            Na tvůj dotaz jsme nenašli žádný produkt. Zkus jiný výraz nebo se
            podívej na celou nabídku.
          </p>
          <button
            type="button"
            onClick={() => select("vse")}
            className="mt-6 inline-flex cursor-pointer items-center rounded-full bg-volt px-6 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-volt-bright"
          >
            Zobrazit vše
          </button>
        </div>
      )}
    </>
  );
}
