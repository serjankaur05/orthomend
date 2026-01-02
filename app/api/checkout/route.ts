import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { validateCartItems, calculateCartTotal, getShippingOptions } from "@/lib/cart";
import { getProductBySlug } from "@/lib/products";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const cart = validateCartItems(body.items || []);
    const subtotalCents = calculateCartTotal(cart);
    const shippingOptions = getShippingOptions(subtotalCents);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      allow_promotion_codes: true,
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      shipping_options: shippingOptions,
      line_items: cart.map((item) => {
        const product = getProductBySlug(item.slug)!;
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
              images: [product.image],
            },
            unit_amount: product.priceCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/checkout/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message ?? "Failed to create checkout session" }, { status: 400 });
  }
}
