import { Product } from "./types";

export const FREE_SHIPPING_THRESHOLD = 7500;

export const products: Product[] = [
  {
    slug: "align-relief-orthopedic-pillow",
    name: "Align Relief Orthopedic Pillow",
    priceCents: 8900,
    description: "Contoured memory foam pillow that relieves pressure on the neck and keeps your spine aligned all night.",
    category: "Pillows",
    image: "https://images.unsplash.com/photo-1582719478248-54e9f2af7679?auto=format&fit=crop&w=900&q=80",
    highlights: ["Ergonomic contour", "Cooling TENCEL® cover", "Ideal for side sleepers"],
  },
  {
    slug: "cool-breeze-gel-pillow",
    name: "Cool Breeze Gel Pillow",
    priceCents: 9400,
    description: "Dual-layer gel memory foam pillow with ventilation channels to keep you cool and supported.",
    category: "Pillows",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",
    highlights: ["Airflow vents", "Medium-firm feel", "Removable washable cover"],
  },
  {
    slug: "zero-pressure-leg-elevation",
    name: "Zero-Pressure Leg Elevation Pillow",
    priceCents: 11500,
    description: "Gradual incline design to reduce swelling and improve circulation after long days or recovery.",
    category: "Pillows",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
    highlights: ["Medical-grade foam", "Non-slip base", "Removable knit cover"],
  },
  {
    slug: "dynamic-lumbar-roll",
    name: "Dynamic Lumbar Roll",
    priceCents: 6200,
    description: "Portable lumbar roll that stabilizes posture for office chairs, car seats, and travel.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80&sat=-50",
    highlights: ["Adjustable strap", "Breathable mesh", "Firm core support"],
  },
  {
    slug: "diabetic-socks-cushion-crew",
    name: "Diabetic Socks – Cushion Crew (2-Pack)",
    priceCents: 2400,
    description: "Soft, non-binding crew socks with extra cushioning and seamless toes for sensitive feet.",
    category: "Socks",
    image: "https://images.unsplash.com/photo-1542219470-21032c4e8780?auto=format&fit=crop&w=900&q=80",
    highlights: ["Seamless toe", "Moisture-wicking", "Non-slip heel"],
  },
  {
    slug: "diabetic-socks-moisture-control",
    name: "Diabetic Socks – Moisture Control (3-Pack)",
    priceCents: 2600,
    description: "Ultra-soft bamboo blend with ventilation mesh to keep feet dry and reduce friction.",
    category: "Socks",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
    highlights: ["Bamboo charcoal", "Arch band", "Breathable weave"],
  },
  {
    slug: "recovery-travel-pillow",
    name: "Recovery Travel Pillow",
    priceCents: 5200,
    description: "Compact memory foam travel pillow with hygienic cover and adjustable chin support.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523419400524-540201ad7c2b?auto=format&fit=crop&w=900&q=80",
    highlights: ["Packable case", "Washable cover", "Neck cradling support"],
  },
  {
    slug: "posture-corrector-strap",
    name: "Posture Corrector Strap",
    priceCents: 3800,
    description: "Lightweight posture strap that gently guides shoulders back to reduce strain during long wear.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1599059914795-9fa3c3454678?auto=format&fit=crop&w=900&q=80",
    highlights: ["Featherweight", "Adjustable bands", "Breathable lining"],
  },
];

export const categories = ["All", "Pillows", "Socks", "Accessories"] as const;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
