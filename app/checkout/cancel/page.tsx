import Container from "@/components/Container";
import Link from "next/link";

export default function CancelPage() {
  return (
    <Container className="py-12">
      <div className="card p-10 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Checkout canceled</h1>
        <p className="mt-3 text-sm text-slate-600">Your items are still in your cart. You can resume checkout anytime.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/cart" className="button-primary">
            Return to cart
          </Link>
          <Link href="/shop" className="button-secondary">
            Continue shopping
          </Link>
        </div>
      </div>
    </Container>
  );
}
