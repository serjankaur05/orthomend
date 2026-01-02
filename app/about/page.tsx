import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="card p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">About OrthoMend</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          OrthoMend was created by clinicians and designers who wanted recovery essentials that feel as good as they function.
          We obsess over alignment, breathability, and clean aesthetics so you can rest and move with confidence.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Clinician-guided", "High-quality materials", "Fast fulfillment"].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
              <div className="text-sm font-semibold text-slate-900">{item}</div>
              <p className="mt-2 text-sm text-slate-600">
                We partner with PTs and podiatrists, source soft yet durable fabrics, and ship quickly across North America.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
