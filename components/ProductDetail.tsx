"use client";

import { formatCurrency } from "@/lib/format";
import { getProductBySlug } from "@/lib/products";
import { useCart } from "./CartProvider";

export default function ProductDetail({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const product = getProductBySlug(slug);

  if (!product) return null;

  return (
    <div className="space-y-6">
      <div className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
        {product.category}
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">{product.name}</h1>
        <p className="mt-2 text-lg text-slate-600">{product.description}</p>
      </div>
      <div className="text-2xl font-semibold text-slate-900">{formatCurrency(product.priceCents)}</div>
      <button className="button-primary" onClick={() => addItem(product.slug)}>
        Add to cart
      </button>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="text-sm font-semibold text-slate-900">Highlights</div>
        <ul className="mt-2 space-y-2 text-sm text-slate-600">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" /> {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
