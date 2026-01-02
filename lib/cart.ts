import { FREE_SHIPPING_THRESHOLD, getProductBySlug, products } from "./products";
import { CartItem } from "./types";

export function validateCartItems(cart: CartItem[]) {
  const normalized: CartItem[] = [];
  for (const item of cart) {
    const product = getProductBySlug(item.slug);
    if (!product) {
      throw new Error(`Invalid product: ${item.slug}`);
    }
    if (item.quantity < 1 || item.quantity > 20) {
      throw new Error(`Invalid quantity for ${product.name}`);
    }
    normalized.push({ slug: product.slug, quantity: item.quantity });
  }
  return normalized;
}

export function calculateCartTotal(cart: CartItem[]) {
  return cart.reduce((acc, item) => {
    const product = getProductBySlug(item.slug);
    if (!product) return acc;
    return acc + product.priceCents * item.quantity;
  }, 0);
}

export function getShippingOptions(subtotalCents: number) {
  const baseOptions = [
    {
      shipping_rate_data: {
        type: "fixed_amount" as const,
        fixed_amount: { amount: 999, currency: "usd" },
        display_name: "Standard Shipping",
        delivery_estimate: {
          minimum: { unit: "business_day" as const, value: 3 },
          maximum: { unit: "business_day" as const, value: 7 },
        },
      },
    },
  ];

  if (subtotalCents >= FREE_SHIPPING_THRESHOLD) {
    baseOptions.unshift({
      shipping_rate_data: {
        type: "fixed_amount" as const,
        fixed_amount: { amount: 0, currency: "usd" },
        display_name: "Free Shipping (orders $75+)",
        delivery_estimate: {
          minimum: { unit: "business_day" as const, value: 4 },
          maximum: { unit: "business_day" as const, value: 9 },
        },
      },
    });
  }

  return baseOptions;
}

export function allProducts() {
  return products;
}
