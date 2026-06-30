"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, Check } from "lucide-react";
import Link from "next/link";
import { IconInstagram } from "@/components/IconInstagram";

export function AddToCart({ productName }: { productName: string }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* quantity stepper */}
        <div className="flex h-14 w-fit items-center rounded-full border border-line-hi bg-card">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Ubrat kus"
            className="grid h-14 w-14 cursor-pointer place-items-center text-fog transition-colors hover:text-chrome disabled:opacity-40"
            disabled={qty <= 1}
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
            className="grid h-14 w-14 cursor-pointer place-items-center text-fog transition-colors hover:text-chrome"
          >
            <Plus className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        {/* add button */}
        <button
          type="button"
          onClick={() => setAdded(true)}
          className="inline-flex h-14 flex-1 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-chrome px-8 font-display text-base font-semibold uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-white hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.45)]"
        >
          {added ? (
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

      {/* v1 notice — košík zatím není funkční */}
      {added && (
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-line bg-surface p-4 text-sm text-fog">
          <IconInstagram className="mt-0.5 h-5 w-5 shrink-0 text-chrome" />
          <p>
            Online košík právě dolaďujeme. Pro objednání{" "}
            <span className="font-semibold text-chrome">{productName}</span> nám
            zatím napiš na{" "}
            <Link
              href="https://www.instagram.com/gravixstore.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-chrome underline underline-offset-4 hover:text-white"
            >
              @gravixstore.cz
            </Link>{" "}
            a ozveme se hned.
          </p>
        </div>
      )}
    </div>
  );
}
