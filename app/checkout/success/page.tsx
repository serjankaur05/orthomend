import Container from "@/components/Container";
import { formatCurrency } from "@/lib/format";
import { notFound } from "next/navigation";

async function getSession(sessionId?: string) {
  if (!sessionId) return null;
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  const res = await fetch(`${baseUrl}/api/checkout-session?session_id=${sessionId}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function SuccessPage({ searchParams }: { searchParams: { session_id?: string } }) {
  const session = await getSession(searchParams.session_id);

  if (!session) return notFound();

  return (
    <Container className="py-12">
      <div className="card p-10">
        <h1 className="text-3xl font-semibold text-slate-900">Order confirmed 🎉</h1>
        <p className="mt-2 text-slate-600">A receipt was sent to {session.customer_email}. Below is your summary.</p>

        <div className="mt-6 space-y-4">
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Items</div>
            <ul className="space-y-2 text-sm text-slate-700">
              {session.line_items?.map((item: any) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.quantity} × {item.description}
                  </span>
                  <span>{formatCurrency(item.amount_total)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Payment</div>
              <p className="text-sm text-slate-600">{session.payment_status}</p>
              <p className="text-sm text-slate-600">Total: {formatCurrency(session.amount_total)}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Shipping</div>
              <p className="text-sm text-slate-600">{session.shipping_details?.name}</p>
              <p className="text-sm text-slate-600">{session.shipping_details?.address?.line1}</p>
              <p className="text-sm text-slate-600">
                {session.shipping_details?.address?.city}, {session.shipping_details?.address?.state} {session.shipping_details?.address?.postal_code}
              </p>
              <p className="text-sm text-slate-600">{session.shipping_details?.address?.country}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm text-slate-600">
          Need help? Email <a href="mailto:support@orthomend.com">support@orthomend.com</a>.
        </div>
      </div>
    </Container>
  );
}
