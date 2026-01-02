import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Sparkles } from "lucide-react";
import Container from "./Container";
import pillowImage from "@/public/best-pillow.png";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700">
            <Sparkles className="h-4 w-4" /> Comfort-first orthopedic essentials
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Relief-ready pillows and diabetic socks that keep you aligned.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            OrthoMend blends clinical insight with soft-touch materials. Sleep better, recover faster, and stay supported through every step.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/shop" className="button-primary">
              Shop best sellers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/about" className="button-secondary">
              Why OrthoMend
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-600" /> Clinician-guided designs
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-brand-600" /> Secure Stripe checkout
            </div>
          </div>
        </div>
        <div className="card relative overflow-hidden p-8">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-100/70 blur-3xl" aria-hidden />
          <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-brand-50 blur-3xl" aria-hidden />
          <div className="relative">
            <Image
              src={pillowImage}
              alt="OrthoMend Memory Foam Pillow packaging"
              className="h-full w-full rounded-2xl object-cover"
              placeholder="blur"
              sizes="(min-width: 1024px) 600px, 100vw"
              priority
              fill
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
