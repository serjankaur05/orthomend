import CTA from "@/components/CTA";
import Container from "@/components/Container";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-12">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Best sellers</p>
              <h2 className="text-2xl font-semibold text-slate-900">Designed for alignment and comfort</h2>
            </div>
            <a href="/shop" className="text-sm font-semibold text-brand-700">
              View all
            </a>
          </div>
        </Container>
        <ProductGrid products={products.slice(0, 6)} />
      </section>
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
