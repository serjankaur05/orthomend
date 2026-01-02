import Link from "next/link";
import Container from "./Container";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16">
      <Container>
        <div className="card flex flex-col gap-4 bg-gradient-to-r from-brand-50 via-white to-brand-50 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-brand-700">Ready for relief?</div>
            <h3 className="text-2xl font-semibold text-slate-900">Shop pillows and socks designed for real recovery.</h3>
            <p className="text-sm text-slate-600">Free shipping over $75, fast processing, and secure Stripe Checkout.</p>
          </div>
          <Link href="/shop" className="button-primary inline-flex items-center">
            Browse products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
