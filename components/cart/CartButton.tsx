"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";

export function CartButton() {
  const { count, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      title="Košík"
      aria-label={`Košík (${count})`}
      className="relative flex h-11 cursor-pointer items-center gap-2 rounded-full border border-zinc-300 bg-white pl-3.5 pr-4 text-zinc-900 transition-colors duration-200 hover:border-zinc-900 hover:bg-zinc-100"
    >
      <ShoppingBag className="h-[19px] w-[19px]" strokeWidth={1.9} />
      <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.12em] lg:inline">
        Košík
      </span>
      <span
        className={`grid h-5 min-w-5 place-items-center rounded-full px-1 text-[11px] font-bold leading-none transition-colors ${
          count > 0 ? "bg-volt text-ink" : "bg-zinc-200 text-zinc-500"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
