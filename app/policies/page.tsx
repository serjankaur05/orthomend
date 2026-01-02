import Container from "@/components/Container";

export default function PoliciesPage() {
  return (
    <Container className="py-12">
      <div className="card p-10 space-y-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Policies</h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">
            We keep policies simple and transparent. If you have questions, email support@orthomend.com.
          </p>
        </div>

        <section id="shipping" className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Shipping</h2>
          <p className="text-sm text-slate-600">Orders ship within 1-2 business days. Free shipping automatically applies to carts $75+.</p>
        </section>

        <section id="returns" className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Returns</h2>
          <p className="text-sm text-slate-600">Unused products can be returned within 30 days. Email support@orthomend.com with your order number.</p>
        </section>

        <section id="privacy" className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Privacy</h2>
          <p className="text-sm text-slate-600">We use Stripe Checkout so payment details never hit our servers. We only store what's needed to fulfill your order.</p>
        </section>
      </div>
    </Container>
  );
}
