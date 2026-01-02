import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <div className="rounded-[28px] border border-line bg-white p-10 shadow-card">
        <h1 className="text-3xl font-semibold tracking-tight">About OrthoMend</h1>
        <p className="mt-3 text-slate-600 leading-relaxed max-w-2xl">
          OrthoMend creates comfort-first orthopedic essentials with a clean, modern feel.
          Our focus: support that fits into real life — premium materials, consistent quality, and simple guidance.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {[
            { t: "Comfort-first", d: "Soft-touch materials and wearable support." },
            { t: "Clean design", d: "Modern essentials that look premium." },
            { t: "Quality + consistency", d: "Reliable sizing and product durability." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl bg-paper border border-line p-6">
              <div className="font-semibold">{x.t}</div>
              <div className="mt-1 text-slate-600">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
