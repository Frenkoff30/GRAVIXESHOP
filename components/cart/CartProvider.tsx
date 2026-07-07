"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  getCartAction,
  addToCartAction,
  updateCartLineAction,
  removeCartLineAction,
} from "@/app/actions/cart";
import type { Cart } from "@/lib/shopify";

const STORAGE_KEY = "gravix-cart-id";

type CartContextValue = {
  cart: Cart | null;
  count: number;
  pending: boolean;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [pending, setPending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cartId = useRef<string | null>(null);

  const persist = useCallback((next: Cart | null) => {
    setCart(next);
    if (next) {
      cartId.current = next.id;
      try {
        localStorage.setItem(STORAGE_KEY, next.id);
      } catch {
        /* localStorage nedostupný */
      }
    }
  }, []);

  // načti uložený košík při startu
  useEffect(() => {
    let active = true;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      cartId.current = saved;
      getCartAction(saved).then((c) => {
        if (!active) return;
        if (c) setCart(c);
        else {
          cartId.current = null;
          try {
            localStorage.removeItem(STORAGE_KEY);
          } catch {
            /* ignore */
          }
        }
      });
    } catch {
      /* ignore */
    }
    return () => {
      active = false;
    };
  }, []);

  const addItem = useCallback(
    async (variantId: string, quantity: number) => {
      setPending(true);
      try {
        const next = await addToCartAction(cartId.current, variantId, quantity);
        persist(next);
        setIsOpen(true);
      } finally {
        setPending(false);
      }
    },
    [persist],
  );

  const updateItem = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cartId.current) return;
      setPending(true);
      try {
        const next = await updateCartLineAction(
          cartId.current,
          lineId,
          quantity,
        );
        if (next) setCart(next);
      } finally {
        setPending(false);
      }
    },
    [],
  );

  const removeItem = useCallback(async (lineId: string) => {
    if (!cartId.current) return;
    setPending(true);
    try {
      const next = await removeCartLineAction(cartId.current, lineId);
      if (next) setCart(next);
    } finally {
      setPending(false);
    }
  }, []);

  const value: CartContextValue = {
    cart,
    count: cart?.totalQuantity ?? 0,
    pending,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    updateItem,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart musí být uvnitř <CartProvider>");
  return ctx;
}
