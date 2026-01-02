import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json({ error: "session_id is required" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "customer", "payment_intent", "shipping_details"],
    });
    return NextResponse.json(session);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message ?? "Failed to retrieve session" }, { status: 400 });
  }
}
