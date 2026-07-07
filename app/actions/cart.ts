"use server";

import {
  cartGet,
  cartCreate,
  cartLinesAdd,
  cartLinesUpdate,
  cartLinesRemove,
  type Cart,
} from "@/lib/shopify";

const clampQty = (q: number) => Math.max(1, Math.min(99, Math.round(q) || 1));

export async function getCartAction(cartId: string): Promise<Cart | null> {
  if (!cartId) return null;
  return cartGet(cartId);
}

/**
 * Přidá položku do košíku. Když ještě žádný košík neexistuje (nebo je
 * neplatný), založí nový. Vrací aktuální stav košíku.
 */
export async function addToCartAction(
  cartId: string | null,
  variantId: string,
  quantity: number,
): Promise<Cart | null> {
  const qty = clampQty(quantity);
  if (cartId) {
    const updated = await cartLinesAdd(cartId, variantId, qty);
    if (updated) return updated;
    // starý košík vypršel → založíme nový
  }
  return cartCreate(variantId, qty);
}

export async function updateCartLineAction(
  cartId: string,
  lineId: string,
  quantity: number,
): Promise<Cart | null> {
  if (quantity <= 0) return cartLinesRemove(cartId, lineId);
  return cartLinesUpdate(cartId, lineId, clampQty(quantity));
}

export async function removeCartLineAction(
  cartId: string,
  lineId: string,
): Promise<Cart | null> {
  return cartLinesRemove(cartId, lineId);
}
