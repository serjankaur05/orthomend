import pillowImage from "@/public/best-pillow.png";
import socksImage from "@/public/best-socks.png";
import { Product } from "./types";

export const FREE_SHIPPING_THRESHOLD = 7500;

// Note: place your image files in the project /public directory:
// /public/best-pillow.png and /public/best-socks.png
export const products: Product[] = [
  {
    slug: "memory-foam-pillow",
    name: "OrthoMend Memory Foam Pillow",
    priceCents: 8900,
    description: "Zero-gravity memory foam pillow engineered for spinal alignment and pressure relief.",
    category: "Pillows",
    image: pillowImage,
    highlights: ["Spinal alignment contour", "Extreme softness", "Zero-gravity memory foam"],
  },
  {
    slug: "diabetic-therapeutic-socks",
    name: "OrthoMend Diabetic Socks (Therapeutic)",
    priceCents: 3200,
    description: "Non-binding, moisture-wicking therapeutic socks for sensitive feet and daily comfort.",
    category: "Socks",
    image: socksImage,
    highlights: ["Non-binding cuff", "Moisture control", "Seamless toe comfort"],
  },
];

export const categories = ["All", "Pillows", "Socks"] as const;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
