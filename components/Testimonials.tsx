import Container from "./Container";

const testimonials = [
  {
    quote: "The lumbar roll keeps my back neutral through hours of clinic work. Subtle support that makes a big difference.",
    name: "Dr. L. Nguyen",
    role: "Physical Therapist",
  },
  {
    quote: "Patients love the diabetic socks — they don’t bind and stay dry through long shifts.",
    name: "A. Patel",
    role: "Podiatrist",
  },
  {
    quote: "The contour pillow eliminated my morning neck stiffness. Cooling cover is a bonus!",
    name: "Jordan M.",
    role: "Customer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-14">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="card p-6">
              <p className="text-slate-700">“{item.quote}”</p>
              <div className="mt-4 text-sm font-semibold text-slate-900">{item.name}</div>
              <div className="text-xs text-slate-500">{item.role}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
