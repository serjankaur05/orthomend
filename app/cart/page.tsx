"use client";

import Container from "@/components/Container";
import { useCart } from "@/components/CartProvider";
import { formatCurrency } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { detailedItems, subtotalCents, updateQuantity, removeItem } = useCart();

  return (
    <Container className="py-12">
      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="card p-6">
          <h1 className="text-2xl font-semibold text-slate-900">Your Cart</h1>
          {detailedItems.length === 0 ? (
            <div className="mt-6 text-sm text-slate-600">
              Your cart is empty. <Link href="/shop" className="text-brand-700">Browse products</Link> to add items.
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              {detailedItems.map((item) => (
                <div key={item.slug} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-slate-100">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                    <div className="text-sm text-slate-600">{formatCurrency(item.priceCents)}</div>
                    <div className="flex items-center gap-3">
                      <label className="text-xs text-slate-500">Qty</label>
                      <input
                        type="number"
                        min={1}
                        max={20}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.slug, Number(e.target.value))}
                        className="w-16 rounded-lg border border-slate-200 px-2 py-1 text-sm"
                      />
                      <button className="text-xs text-brand-700" onClick={() => removeItem(item.slug)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    {formatCurrency(item.priceCents * item.quantity)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotalCents)}</span>
            </div>
            <div className="flex justify-between text-xs text-slate-500">
              <span>Shipping calculated at checkout</span>
              <span>via Stripe</span>
            </div>
          </div>
          <CheckoutButton disabled={detailedItems.length === 0} />
          <p className="mt-3 text-xs text-slate-500">Secure checkout powered by Stripe. Free shipping on orders $75+.</p>
        </div>
      </div>
    </Container>
  );
}

function CheckoutButton({ disabled }: { disabled: boolean }) {
  const { detailedItems } = useCart();

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: detailedItems.map(({ slug, quantity }) => ({ slug, quantity })) }),
    });

    if (!response.ok) {
      const error = await response.json();
      alert(error.error ?? "Something went wrong. Please try again.");
      return;
    }

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={disabled}
      className="mt-4 w-full rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-slate-300"
    >
      Proceed to secure checkout
    </button>
  );
}
