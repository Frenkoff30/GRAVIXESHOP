/* ============================================================
   GRAVIX — Shopify Storefront API klient
   Živá data (cena, sklad, varianty) + vytvoření košíku/checkoutu.
   Vše je odolné vůči výpadku — když Shopify neodpoví, vrací se
   prázdno a web spadne zpátky na lokální obsah (viz lib/catalog.ts).
   ============================================================ */

import { products as localProducts } from "@/lib/products";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_API_TOKEN;
const apiVersion = process.env.SHOPIFY_API_VERSION ?? "2026-07";

type GraphQLResult<T> = { data?: T; errors?: { message: string }[] };

async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
  opts?: { revalidate?: number; noStore?: boolean },
): Promise<T | null> {
  if (!domain || !token) {
    console.warn("Shopify: chybí SHOPIFY_STORE_DOMAIN / SHOPIFY_STOREFRONT_API_TOKEN");
    return null;
  }
  try {
    const res = await fetch(`https://${domain}/api/${apiVersion}/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query, variables }),
      ...(opts?.noStore
        ? { cache: "no-store" as RequestCache }
        : { next: { revalidate: opts?.revalidate ?? 60 } }),
    });
    if (!res.ok) {
      console.error("Shopify HTTP", res.status);
      return null;
    }
    const json = (await res.json()) as GraphQLResult<T>;
    if (json.errors?.length) {
      console.error("Shopify GraphQL:", json.errors);
      return null;
    }
    return json.data ?? null;
  } catch (e) {
    console.error("Shopify fetch selhal:", e);
    return null;
  }
}

/* ---------- čtení produktů (cena, sklad, varianty) ---------- */

export type ShopifyVariant = {
  id: string;
  title: string;
  color?: string;
  available: boolean;
  price: number;
};

export type ShopifyCommerce = {
  handle: string;
  available: boolean;
  minPrice: number;
  currency: string;
  variants: ShopifyVariant[];
};

const PRODUCTS_QUERY = `
{
  products(first: 50) {
    edges {
      node {
        handle
        availableForSale
        priceRange { minVariantPrice { amount currencyCode } }
        variants(first: 20) {
          edges {
            node {
              id
              title
              availableForSale
              price { amount currencyCode }
              selectedOptions { name value }
            }
          }
        }
      }
    }
  }
}`;

type RawProducts = {
  products: {
    edges: {
      node: {
        handle: string;
        availableForSale: boolean;
        priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
        variants: {
          edges: {
            node: {
              id: string;
              title: string;
              availableForSale: boolean;
              price: { amount: string; currencyCode: string };
              selectedOptions: { name: string; value: string }[];
            };
          }[];
        };
      };
    }[];
  };
};

/** Mapa live commerce dat podle Shopify handle. Prázdná při výpadku. */
export async function getShopifyCommerce(): Promise<Map<string, ShopifyCommerce>> {
  const data = await shopifyFetch<RawProducts>(PRODUCTS_QUERY);
  const map = new Map<string, ShopifyCommerce>();
  if (!data?.products) return map;

  for (const { node } of data.products.edges) {
    const variants: ShopifyVariant[] = node.variants.edges.map(({ node: v }) => {
      const colorOpt = v.selectedOptions.find((o) => o.name === "Barva");
      return {
        id: v.id,
        title: v.title,
        color: colorOpt?.value,
        available: v.availableForSale,
        price: Number(v.price.amount),
      };
    });
    map.set(node.handle, {
      handle: node.handle,
      available: node.availableForSale,
      minPrice: Number(node.priceRange.minVariantPrice.amount),
      currency: node.priceRange.minVariantPrice.currencyCode,
      variants,
    });
  }
  return map;
}

/* ---------- vytvoření košíku → checkout URL ---------- */

const CART_CREATE = `
mutation CartCreate($lines: [CartLineInput!]!) {
  cartCreate(input: { lines: $lines }) {
    cart { checkoutUrl }
    userErrors { message }
  }
}`;

type CartCreateResult = {
  cartCreate: {
    cart: { checkoutUrl: string } | null;
    userErrors: { message: string }[];
  };
};

/** Vytvoří košík s jednou položkou a vrátí Shopify checkout URL. */
export async function createCheckoutUrl(
  variantId: string,
  quantity: number,
): Promise<string | null> {
  const data = await shopifyFetch<CartCreateResult>(
    CART_CREATE,
    { lines: [{ merchandiseId: variantId, quantity }] },
    { noStore: true },
  );
  if (!data?.cartCreate) return null;
  const { cart, userErrors } = data.cartCreate;
  if (userErrors?.length) {
    console.error("Košík:", userErrors);
    return null;
  }
  return cart?.checkoutUrl ?? null;
}

/* ============================================================
   KOŠÍK (Cart API) — plnohodnotný košík na naší straně.
   ============================================================ */

export type CartLine = {
  id: string; // ID řádku v košíku
  variantId: string;
  quantity: number;
  name: string; // název produktu (bez „GRAVIX ")
  variantTitle?: string; // barva apod. (jen když dává smysl)
  price: number; // cena za kus
  currency: string;
  image: string; // lokální fotka (podle handle)
  slug: string; // pro odkaz na detail
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  subtotal: number;
  currency: string;
  lines: CartLine[];
};

const CART_FRAGMENT = `
fragment CartParts on Cart {
  id
  checkoutUrl
  totalQuantity
  cost { subtotalAmount { amount currencyCode } }
  lines(first: 100) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            price { amount currencyCode }
            product { title handle }
          }
        }
      }
    }
  }
}`;

type RawCart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { subtotalAmount: { amount: string; currencyCode: string } };
  lines: {
    edges: {
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          title: string;
          price: { amount: string; currencyCode: string };
          product: { title: string; handle: string };
        };
      };
    }[];
  };
};

function normalizeCart(raw: RawCart | null | undefined): Cart | null {
  if (!raw) return null;
  return {
    id: raw.id,
    checkoutUrl: raw.checkoutUrl,
    totalQuantity: raw.totalQuantity,
    subtotal: Number(raw.cost.subtotalAmount.amount),
    currency: raw.cost.subtotalAmount.currencyCode,
    lines: raw.lines.edges.map(({ node }) => {
      const m = node.merchandise;
      const local = localProducts.find(
        (p) => p.shopifyHandle === m.product.handle,
      );
      const variantTitle =
        m.title && m.title !== "Default Title" ? m.title : undefined;
      return {
        id: node.id,
        variantId: m.id,
        quantity: node.quantity,
        name: (local?.name ?? m.product.title).replace("GRAVIX ", ""),
        variantTitle,
        price: Number(m.price.amount),
        currency: m.price.currencyCode,
        image: local?.image ?? "",
        slug: local?.slug ?? "",
      };
    }),
  };
}

export async function cartGet(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: RawCart | null }>(
    `${CART_FRAGMENT}
     query CartGet($id: ID!) { cart(id: $id) { ...CartParts } }`,
    { id: cartId },
    { noStore: true },
  );
  return normalizeCart(data?.cart);
}

export async function cartCreate(
  variantId: string,
  quantity: number,
): Promise<Cart | null> {
  const data = await shopifyFetch<{
    cartCreate: { cart: RawCart | null; userErrors: { message: string }[] };
  }>(
    `${CART_FRAGMENT}
     mutation CartCreate($lines: [CartLineInput!]!) {
       cartCreate(input: { lines: $lines }) {
         cart { ...CartParts }
         userErrors { message }
       }
     }`,
    { lines: [{ merchandiseId: variantId, quantity }] },
    { noStore: true },
  );
  if (data?.cartCreate?.userErrors?.length) {
    console.error("cartCreate:", data.cartCreate.userErrors);
  }
  return normalizeCart(data?.cartCreate?.cart);
}

export async function cartLinesAdd(
  cartId: string,
  variantId: string,
  quantity: number,
): Promise<Cart | null> {
  const data = await shopifyFetch<{
    cartLinesAdd: { cart: RawCart | null; userErrors: { message: string }[] };
  }>(
    `${CART_FRAGMENT}
     mutation CartAdd($cartId: ID!, $lines: [CartLineInput!]!) {
       cartLinesAdd(cartId: $cartId, lines: $lines) {
         cart { ...CartParts }
         userErrors { message }
       }
     }`,
    { cartId, lines: [{ merchandiseId: variantId, quantity }] },
    { noStore: true },
  );
  if (data?.cartLinesAdd?.userErrors?.length) {
    console.error("cartLinesAdd:", data.cartLinesAdd.userErrors);
  }
  return normalizeCart(data?.cartLinesAdd?.cart);
}

export async function cartLinesUpdate(
  cartId: string,
  lineId: string,
  quantity: number,
): Promise<Cart | null> {
  const data = await shopifyFetch<{
    cartLinesUpdate: {
      cart: RawCart | null;
      userErrors: { message: string }[];
    };
  }>(
    `${CART_FRAGMENT}
     mutation CartUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
       cartLinesUpdate(cartId: $cartId, lines: $lines) {
         cart { ...CartParts }
         userErrors { message }
       }
     }`,
    { cartId, lines: [{ id: lineId, quantity }] },
    { noStore: true },
  );
  if (data?.cartLinesUpdate?.userErrors?.length) {
    console.error("cartLinesUpdate:", data.cartLinesUpdate.userErrors);
  }
  return normalizeCart(data?.cartLinesUpdate?.cart);
}

export async function cartLinesRemove(
  cartId: string,
  lineId: string,
): Promise<Cart | null> {
  const data = await shopifyFetch<{
    cartLinesRemove: {
      cart: RawCart | null;
      userErrors: { message: string }[];
    };
  }>(
    `${CART_FRAGMENT}
     mutation CartRemove($cartId: ID!, $lineIds: [ID!]!) {
       cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
         cart { ...CartParts }
         userErrors { message }
       }
     }`,
    { cartId, lineIds: [lineId] },
    { noStore: true },
  );
  if (data?.cartLinesRemove?.userErrors?.length) {
    console.error("cartLinesRemove:", data.cartLinesRemove.userErrors);
  }
  return normalizeCart(data?.cartLinesRemove?.cart);
}
