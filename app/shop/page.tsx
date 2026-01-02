"use client";

import Container from "@/components/Container";
import ProductGrid from "@/components/ProductGrid";
import { allProducts, categories } from "@/lib/products";
import { Product } from "@/lib/types";
import { Suspense } from "react";

function ProductList({ category, search }: { category: string; search: string }) {
  const filtered = allProducts().filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });
  return filtered.length ? (
    <ProductGrid products={filtered} />
  ) : (
    <Container className="py-12 text-center text-slate-600">No products match your search.</Container>
  );
}

export default function ShopPage({ searchParams }: { searchParams: { category?: string; q?: string } }) {
  const category = categories.includes((searchParams.category as any) ?? "All") ? searchParams.category ?? "All" : "All";
  const search = (searchParams.q ?? "").toLowerCase();

  return (
    <div className="py-12">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Shop</p>
            <h1 className="text-3xl font-semibold text-slate-900">Orthopedic pillows, diabetic socks, accessories</h1>
            <p className="text-sm text-slate-600">Secure Stripe checkout. Fast shipping across Canada.</p>
          </div>
          <form className="flex flex-wrap gap-2">
            <select
              name="category"
              defaultValue={category}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
              onChange={(e) => {
                const params = new URLSearchParams(window.location.search);
                params.set("category", e.target.value);
                window.location.search = params.toString();
              }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <input
              name="q"
              defaultValue={search}
              placeholder="Search products"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm md:w-64"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const form = e.currentTarget.form;
                  if (form) {
                    const params = new URLSearchParams(new FormData(form) as any);
                    window.location.search = params.toString();
                  }
                }
              }}
            />
          </form>
        </div>
      </Container>
      <Suspense fallback={<Container className="py-12">Loading...</Container>}>
        <ProductList category={category} search={search} />
      </Suspense>
    </div>
  );
}
