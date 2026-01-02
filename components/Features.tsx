import { Leaf, Moon, Pill, Truck } from "lucide-react";
import Container from "./Container";

const items = [
  {
    icon: <Moon className="h-5 w-5" />,
    title: "Sleep-aligned comfort",
    desc: "Contoured support keeps your spine neutral and muscles relaxed overnight.",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Fast, trackable shipping",
    desc: "Ships from US hubs with standard and free options over $75.",
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    title: "Skin-friendly materials",
    desc: "Soft, breathable, and non-binding fabrics safe for sensitive skin.",
  },
  {
    icon: <Pill className="h-5 w-5" />,
    title: "Clinician-informed",
    desc: "Designed with PT and podiatry feedback for recovery and daily wear.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-14">
      <Container>
        <div className="grid gap-6 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
