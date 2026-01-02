import Container from "./Container";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Orthopedic Pillows", href: "/shop?category=Pillows" },
      { label: "Diabetic Socks", href: "/shop?category=Socks" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Policies", href: "/policies" },
      { label: "Shipping", href: "/policies#shipping" },
      { label: "Returns", href: "/policies#returns" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[2fr,1fr,1fr,1fr]">
          <div>
            <div className="flex items-center gap-3 text-lg font-semibold text-slate-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold">
                OM
              </div>
              <div>
                <div className="leading-tight">OrthoMend</div>
                <div className="text-xs font-normal text-slate-500">Comfort for every step</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-slate-600">
              Orthopedic pillows and diabetic socks designed for alignment, relief, and all-day comfort. We ship fast across the US and Canada.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <div className="text-sm font-semibold text-slate-900">{section.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-brand-700">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} OrthoMend. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Secure checkout with Stripe</span>
            <span>Ships across Canada</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
