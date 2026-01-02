import Container from "@/components/Container";

const faqs = [
  {
    q: "What makes OrthoMend pillows different?",
    a: "Our pillows use contoured, ventilated memory foam with breathable covers to keep your spine aligned and cool all night.",
  },
  {
    q: "Are the diabetic socks safe for sensitive skin?",
    a: "Yes. They are non-binding, seamless at the toe, and made with moisture-wicking fibers to reduce friction and irritation.",
  },
  {
    q: "Where do you ship?",
    a: "We ship across the US and Canada. Free shipping applies automatically on carts over $75.",
  },
  {
    q: "Can I return a product?",
    a: "Unused items can be returned within 30 days. Start a request via our contact form.",
  },
  {
    q: "Is checkout secure?",
    a: "Yes. We use Stripe Checkout so payment details never touch our servers.",
  },
];

export default function FAQPage() {
  return (
    <Container className="py-12">
      <div className="card p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Frequently asked questions</h1>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-lg font-semibold text-slate-900">{faq.q}</div>
              <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
