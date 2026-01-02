"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";
import Container from "./Container";
import clsx from "clsx";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/policies", label: "Policies" },
];

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 font-bold">
            OM
          </div>
          <div>
            <div className="leading-tight">OrthoMend</div>
            <div className="text-xs font-normal text-slate-500">Comfort for every step</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium text-slate-700 transition hover:text-brand-700",
                pathname.startsWith(link.href) && "text-brand-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/cart" className="relative inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-brand-200">
            <ShoppingBag className="h-4 w-4" />
            <span className="ml-2">Cart</span>
            {count > 0 && (
              <span className="ml-2 flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-brand-600 px-2 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </Container>
    </header>
  );
}
