import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Product, formatPrice } from "@/lib/products";
import { ProductVisual } from "@/components/ProductVisual";
import { Stars } from "@/components/Stars";
import { clsx } from "@/lib/clsx";

const badgeStyles: Record<string, string> = {
  Bestseller: "bg-volt text-ink",
  Novinka: "bg-card-hi text-chrome border border-line-hi",
  Limitka: "bg-transparent text-volt border border-volt",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/produkty/${product.slug}`}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-volt/45 hover:shadow-[var(--shadow-glow)]"
    >
      {/* visual */}
      <div className="relative aspect-square overflow-hidden">
        <ProductVisual
          tone={product.tone}
          image={product.image}
          label={product.subtitle}
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        {product.comingSoon ? (
          <span className="absolute left-3 top-3 rounded-full border border-volt/50 bg-ink/80 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-volt backdrop-blur">
            Připravujeme
          </span>
        ) : (
          product.badge && (
            <span
              className={clsx(
                "absolute left-3 top-3 rounded-full px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.16em]",
                badgeStyles[product.badge],
              )}
            >
              {product.badge}
            </span>
          )
        )}

        <span className="absolute right-3 top-3 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-ink/70 text-chrome opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </span>

        <span className="sheen" aria-hidden />
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-mist">({product.reviews})</span>
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold uppercase tracking-wide text-chrome">
          {product.name.replace("GRAVIX ", "")}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-fog">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-metal-soft">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-mist line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <span className="flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-[0.16em] text-fog transition-colors duration-200 group-hover:text-volt">
            Detail
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </span>
        </div>
      </div>
    </Link>
  );
}
