import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { CheckCircle, ArrowRight, ShieldCheck, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { CartClearer } from "@/components/shop/CartClearer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function ShopSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const session_id = searchParams.session_id;

  if (!session_id) redirect("/shop");

  // 1. Retrieve the session from Stripe
  const session = await stripe.checkout.sessions.retrieve(session_id);

  if (session.payment_status !== "paid") redirect("/shop");

  // 2. Get the Order ID from metadata
  const orderId = session.metadata?.orderId;
  if (!orderId) redirect("/shop");

  // 3. Find the order in Neon
  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (!order) redirect("/shop");

  // 4. Fallback: If Webhook was slow, update status to PAID here
  if (order.status !== "PAID") {
    await prisma.order.update({
      where: { id: orderId },
      data: { status: "PAID" },
    });
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6 pt-24">
      {/* This client component clears the localStorage cart */}
      <CartClearer />

      <div className="max-w-md w-full bg-white p-10 md:p-12 rounded-[3rem] shadow-xl text-center space-y-8 border border-zinc-100">
        <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle className="text-emerald-500" size={48} />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-light text-zinc-900 tracking-tight leading-tight">
            Order <span className="italic font-serif text-zinc-500">Confirmed.</span>
          </h1>
          <p className="text-zinc-500 font-light leading-relaxed text-sm">
            Thank you, <span className="font-medium text-zinc-900">{order.customerDetails['name' as any]}</span>. Your medical-grade formulations are being prepared for dispatch.
          </p>
        </div>

        {/* Order Details Mini-Receipt */}
        <div className="bg-[#FAF9F6] p-6 rounded-[2rem] border border-zinc-100 space-y-4 text-left">
           <div className="flex justify-between items-center border-b border-zinc-200 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Status</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Paid</span>
           </div>
           <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Shipping to</p>
              <p className="text-xs text-zinc-600 leading-relaxed">
                 {order.customerDetails['address' as any]}, {order.customerDetails['city' as any]}
              </p>
           </div>
           <div className="pt-3 border-t border-zinc-200 flex justify-between items-center">
              <span className="text-sm font-bold text-zinc-900">Total</span>
              <span className="text-xl font-bold text-zinc-900">€{order.amount.toFixed(2)}</span>
           </div>
        </div>

        <div className="space-y-3">
          <Link href="/shop" className="flex items-center justify-center gap-3 w-full bg-zinc-900 text-white py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-zinc-800 transition-all active:scale-95">
            Continue Shopping <ArrowRight size={14}/>
          </Link>
          <div className="flex items-center justify-center gap-2 text-zinc-300 pt-2">
             <ShieldCheck size={14} />
             <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Transaction Reference: {order.id.slice(-8)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}