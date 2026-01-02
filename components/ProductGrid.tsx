import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";
import Container from "./Container";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
