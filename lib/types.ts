import type { StaticImageData } from "next/image";

export type Product = {
  slug: string;
  name: string;
  priceCents: number;
  description: string;
  category: "Pillows" | "Socks" | "Accessories";
  image: string | StaticImageData;
  highlights: string[];
};

export type CartItem = {
  slug: string;
  quantity: number;
};

export type CheckoutResponse = {
  url: string;
};
