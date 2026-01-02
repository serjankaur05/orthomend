"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProductBySlug } from "@/lib/products";
import { CartItem } from "@/lib/types";

const STORAGE_KEY = "orthomend_cart_v1";

type CartContextValue = {
  items: CartItem[];
  detailedItems: Array<CartItem & { priceCents: number; name: string; image: string }>;
  addItem: (slug: string, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  subtotalCents: number;
  count: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed: CartItem[] = JSON.parse(stored);
        setItems(parsed.filter((item) => getProductBySlug(item.slug)));
      } catch (error) {
        console.error("Failed to parse cart", error);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (slug: string, quantity: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.slug === slug);
      if (existing) {
        return prev.map((item) =>
          item.slug === slug ? { ...item, quantity: Math.min(item.quantity + quantity, 20) } : item
        );
      }
      return [...prev, { slug, quantity }];
    });
  };

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((item) => item.slug !== slug));
  };

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(slug);
      return;
    }
    setItems((prev) => prev.map((item) => (item.slug === slug ? { ...item, quantity: Math.min(quantity, 20) } : item)));
  };

  const clear = () => setItems([]);

  const detailedItems = useMemo(() => {
    return items
      .map((item) => {
        const product = getProductBySlug(item.slug);
        if (!product) return null;
        return {
          ...item,
          name: product.name,
          priceCents: product.priceCents,
          image: product.image,
        };
      })
      .filter(Boolean) as Array<CartItem & { priceCents: number; name: string; image: string }>;
  }, [items]);

  const subtotalCents = useMemo(
    () => detailedItems.reduce((total, item) => total + item.priceCents * item.quantity, 0),
    [detailedItems]
  );

  const count = detailedItems.reduce((total, item) => total + item.quantity, 0);

  const value: CartContextValue = {
    items,
    detailedItems,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    subtotalCents,
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
