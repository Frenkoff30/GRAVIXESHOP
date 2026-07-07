/* ============================================================
   GRAVIX — katalog (hybrid)
   Spojuje LOKÁLNÍ obsah (návody, parametry, fotky, kategorie,
   comingSoon…) s LIVE daty ze Shopify (cena, sklad, varianty).
   Když Shopify neodpoví, vrací se čistě lokální data (fallback).
   ============================================================ */

import {
  products as localProducts,
  getProduct,
  productsByCategory,
  type Product,
} from "@/lib/products";
import { getShopifyCommerce, type ShopifyCommerce } from "@/lib/shopify";

/** Přepíše lokální cenu/dostupnost live daty a doplní varianty pro košík. */
function merge(product: Product, commerce?: ShopifyCommerce): Product {
  if (!commerce) return product;
  return {
    ...product,
    price: commerce.minPrice,
    shopifyAvailable: commerce.available,
    variants: commerce.variants.map((v) => ({ id: v.id, color: v.color })),
  };
}

export async function getCatalog(): Promise<Product[]> {
  const commerce = await getShopifyCommerce();
  return localProducts.map((p) =>
    merge(p, p.shopifyHandle ? commerce.get(p.shopifyHandle) : undefined),
  );
}

export async function getCatalogProduct(
  slug: string,
): Promise<Product | undefined> {
  const p = getProduct(slug);
  if (!p) return undefined;
  const commerce = await getShopifyCommerce();
  return merge(p, p.shopifyHandle ? commerce.get(p.shopifyHandle) : undefined);
}

export async function catalogByCategory(slug: string): Promise<Product[]> {
  const commerce = await getShopifyCommerce();
  return productsByCategory(slug).map((p) =>
    merge(p, p.shopifyHandle ? commerce.get(p.shopifyHandle) : undefined),
  );
}
