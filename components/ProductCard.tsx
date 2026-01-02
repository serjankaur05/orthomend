"use client";

import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/lib/format";
import { Product } from "@/lib/types";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="card flex flex-col overflow-hidden">
      <div className="relative h-56 w-full">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 300px, 100vw" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">{product.category}</div>
        <Link href={`/shop/${product.slug}`} className="text-lg font-semibold text-slate-900">
          {product.name}
        </Link>
        <p className="text-sm text-slate-600 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <div className="text-lg font-semibold text-slate-900">{formatCurrency(product.priceCents)}</div>
          <button
            onClick={() => addItem(product.slug)}
            className="button-secondary"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
