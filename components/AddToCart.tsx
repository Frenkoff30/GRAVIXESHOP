"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, Check, Loader2 } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { clsx } from "@/lib/clsx";

/** Vizuální vzorník barev (jen náhled kovu/plastu za názvem varianty). */
const swatches: Record<string, string> = {
  Černá: "linear-gradient(145deg, #2a2a30 0%, #101014 60%, #050506 100%)",
  Stříbrná:
    "linear-gradient(145deg, #fbfbfc 0%, #cfcfd6 30%, #9a9aa4 55%, #e8e8ec 80%, #b4b4bd 100%)",
};

export function AddToCart({
  productName,
  variants,
}: {
  productName: string;
  variants: { id: string; color?: string }[];
}) {
  const { addItem } = useCart();
  const colors = variants
    .map((v) => v.color)
    .filter((c): c is string => Boolean(c));

  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(colors[0] ?? "");
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const selectedVariant =
    colors.length > 0
      ? (variants.find((v) => v.color === color) ?? variants[0])
      : variants[0];

  const add = async () => {
    setAdding(true);
    try {
      await addItem(selectedVariant.id, qty);
      setQty(1);
      setAdded(true);
      setTimeout(() => setAdded(false), 1800);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="mt-8">
      {/* výběr barvy */}
      {colors.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-chrome">
              Barva
            </span>
            <span className="text-sm text-fog">— {color}</span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            {colors.map((c) => {
              const active = c === color;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  aria-label={c}
                  aria-pressed={active}
                  title={c}
                  className={clsx(
                    "relative grid h-11 w-11 cursor-pointer place-items-center rounded-full transition-all duration-200",
                    active
                      ? "ring-2 ring-volt ring-offset-2 ring-offset-ink"
                      : "ring-1 ring-line-hi hover:ring-mist",
                  )}
                >
                  <span
                    className="h-9 w-9 rounded-full border border-white/10"
                    style={{ backgroundImage: swatches[c] }}
                  />
                  {active && (
                    <Check
                      className="absolute h-4 w-4 text-white mix-blend-difference"
                      strokeWidth={3}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* quantity stepper */}
        <div className="flex h-14 w-fit items-center rounded-full border border-line-hi bg-card">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Ubrat kus"
            className="grid h-14 w-14 cursor-pointer place-items-center text-fog transition-colors hover:text-chrome disabled:opacity-40"
            disabled={qty <= 1 || adding}
          >
            <Minus className="h-4 w-4" strokeWidth={2} />
          </button>
          <span className="w-8 text-center font-display text-lg font-bold text-chrome">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(10, q + 1))}
            aria-label="Přidat kus"
            className="grid h-14 w-14 cursor-pointer place-items-center text-fog transition-colors hover:text-chrome disabled:opacity-40"
            disabled={adding}
          >
            <Plus className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        {/* přidat do košíku */}
        <button
          type="button"
          onClick={add}
          disabled={adding}
          aria-label={`Přidat ${productName.replace("GRAVIX ", "")} do košíku`}
          className="inline-flex h-14 flex-1 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-volt px-8 font-display text-base font-semibold uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-volt-bright hover:shadow-[var(--shadow-volt)] disabled:cursor-wait disabled:opacity-80"
        >
          {adding ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" strokeWidth={2.5} />
              Přidávám…
            </>
          ) : added ? (
            <>
              <Check className="h-5 w-5" strokeWidth={2.5} />
              Přidáno
            </>
          ) : (
            <>
              <ShoppingBag className="h-5 w-5" strokeWidth={2} />
              Přidat do košíku
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-xs text-mist">
        Přidáním do košíku nic neplatíš — objednávku dokončíš až na pokladně.
      </p>
    </div>
  );
}
