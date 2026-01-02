import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OrthoMend | Orthopedic Pillows & Diabetic Socks",
  description: "Comfort-first orthopedic pillows and diabetic socks with secure Stripe checkout.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen pb-12">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
