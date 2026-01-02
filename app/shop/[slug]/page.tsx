import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ProductDetail from "@/components/ProductDetail";
import { getProductBySlug } from "@/lib/products";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="py-12">
      <Container className="grid gap-8 lg:grid-cols-2">
        <div className="relative h-96 w-full overflow-hidden rounded-3xl bg-white shadow-card">
          <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 600px, 100vw" />
        </div>
        <ProductDetail slug={product.slug} />
      </Container>
    </div>
  );
}
