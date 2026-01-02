import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Container className="py-12">
      <div className="card p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Contact Us</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Questions about fit, shipping, or returns? Reach out and we’ll respond within one business day.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold text-slate-900">Email</div>
            <p className="text-sm text-slate-600">support@orthomend.com</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="text-sm font-semibold text-slate-900">Shipping & Returns</div>
            <p className="text-sm text-slate-600">We ship from US hubs. Returns accepted within 30 days for unused items.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
