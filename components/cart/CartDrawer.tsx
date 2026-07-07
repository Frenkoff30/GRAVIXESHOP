"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/products";

export function CartDrawer() {
  const { cart, isOpen, closeCart, updateItem, removeItem, pending } =
    useCart();

  // zamkni scroll + zavírání Escapem
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  const lines = cart?.lines ?? [];
  const empty = lines.length === 0;

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[80] ${isOpen ? "" : "pointer-events-none"}`}
    >
      {/* backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* panel */}
      <aside
        role="dialog"
        aria-label="Nákupní košík"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-line bg-surface shadow-[0_0_80px_-10px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-line px-5 py-5">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="h-5 w-5 text-volt" strokeWidth={2} />
            <h2 className="font-display text-lg font-bold uppercase tracking-tight text-chrome">
              Košík
            </h2>
            {cart && cart.totalQuantity > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-volt px-1 text-[11px] font-bold leading-none text-ink">
                {cart.totalQuantity}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Zavřít košík"
            className="grid h-9 w-9 cursor-pointer place-items-center rounded-full text-fog transition-colors hover:bg-card hover:text-chrome"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        {/* obsah */}
        {empty ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-line bg-card text-mist">
              <ShoppingBag className="h-7 w-7" strokeWidth={1.5} />
            </span>
            <p className="font-display text-xl font-bold uppercase tracking-tight text-chrome">
              Košík je prázdný
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-fog">
              Ještě sis nic nepřidal. Mrkni na produkty a začni skládat výbavu.
            </p>
            <Link
              href="/produkty"
              onClick={closeCart}
              className="mt-2 inline-flex cursor-pointer items-center gap-2 rounded-full bg-volt px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-volt-bright"
            >
              Prozkoumat produkty
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        ) : (
          <>
            {/* položky */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-4">
                {lines.map((line) => (
                  <li
                    key={line.id}
                    className="flex gap-4 border-b border-line pb-4 last:border-0"
                  >
                    <Link
                      href={`/produkty/${line.slug}`}
                      onClick={closeCart}
                      className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-line bg-card"
                    >
                      {line.image && (
                        <Image
                          src={line.image}
                          alt={line.name}
                          fill
                          sizes="80px"
                          className="object-contain p-1.5"
                        />
                      )}
                    </Link>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <Link
                            href={`/produkty/${line.slug}`}
                            onClick={closeCart}
                            className="block truncate font-display text-sm font-bold uppercase tracking-wide text-chrome hover:text-volt"
                          >
                            {line.name}
                          </Link>
                          {line.variantTitle && (
                            <p className="text-xs text-fog">
                              {line.variantTitle}
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(line.id)}
                          disabled={pending}
                          aria-label="Odebrat z košíku"
                          className="shrink-0 cursor-pointer text-mist transition-colors hover:text-chrome disabled:opacity-40"
                        >
                          <Trash2 className="h-4 w-4" strokeWidth={1.75} />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-2">
                        {/* stepper */}
                        <div className="flex h-9 items-center rounded-full border border-line-hi bg-card">
                          <button
                            type="button"
                            onClick={() =>
                              updateItem(line.id, line.quantity - 1)
                            }
                            disabled={pending}
                            aria-label="Ubrat kus"
                            className="grid h-9 w-9 cursor-pointer place-items-center text-fog transition-colors hover:text-chrome disabled:opacity-40"
                          >
                            <Minus className="h-3.5 w-3.5" strokeWidth={2} />
                          </button>
                          <span className="w-7 text-center font-display text-sm font-bold text-chrome">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateItem(line.id, line.quantity + 1)
                            }
                            disabled={pending}
                            aria-label="Přidat kus"
                            className="grid h-9 w-9 cursor-pointer place-items-center text-fog transition-colors hover:text-chrome disabled:opacity-40"
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                          </button>
                        </div>

                        <span className="font-display text-sm font-bold text-metal-soft">
                          {formatPrice(line.price * line.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* footer / checkout */}
            <div className="border-t border-line px-5 py-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-fog">
                  Mezisoučet
                </span>
                <span className="font-display text-xl font-bold text-chrome">
                  {cart ? formatPrice(cart.subtotal) : "—"}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-mist">
                Dopravu a slevové kódy zadáš v dalším kroku na pokladně.
              </p>

              <a
                href={cart?.checkoutUrl ?? "#"}
                className="mt-4 flex h-14 w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-volt px-8 font-display text-base font-semibold uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-volt-bright hover:shadow-[var(--shadow-volt)]"
              >
                {pending ? (
                  <Loader2 className="h-5 w-5 animate-spin" strokeWidth={2.5} />
                ) : (
                  <>
                    Do pokladny
                    <ArrowRight className="h-5 w-5" strokeWidth={2} />
                  </>
                )}
              </a>

              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full cursor-pointer py-2 text-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-fog transition-colors hover:text-chrome"
              >
                Pokračovat v nákupu
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
