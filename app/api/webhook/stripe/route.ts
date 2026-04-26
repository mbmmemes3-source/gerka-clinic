import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("❌ Webhook Signature error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  try {
    if (event.type === "checkout.session.completed") {
      
      // --- BRANCH 1: HANDLING CLINIC APPOINTMENTS ---
      if (session.metadata?.appointmentId) {
        const appointmentId = session.metadata.appointmentId;

        const appointment = await prisma.appointment.findUnique({
          where: { id: appointmentId },
        });

        if (appointment && appointment.status !== "PAID") {
          // 🔐 SECURITY CHECKS
          const isCorrectSession = appointment.stripeSessionId === session.id;
          const isCorrectAmount = session.amount_total === (appointment.amount * 100);

          if (isCorrectSession && isCorrectAmount) {
            await prisma.appointment.update({
              where: { id: appointmentId },
              data: { status: "PAID" },
            });
            console.log(`✅ Webhook: Appointment ${appointmentId} updated to PAID`);
          } else {
            console.error("❌ Appointment Security Mismatch:", { isCorrectSession, isCorrectAmount });
          }
        }
      }

      // --- BRANCH 2: HANDLING SHOP ORDERS ---
      if (session.metadata?.orderId) {
        const orderId = session.metadata.orderId;

        const order = await prisma.order.findUnique({
          where: { id: orderId },
        });

        if (order && order.status !== "PAID") {
          // 🔐 SECURITY CHECKS
          // We use Math.round to prevent float comparison issues on localhost
          const isCorrectSession = order.stripeSessionId === session.id;
          const isCorrectAmount = session.amount_total === Math.round(order.amount * 100);

          if (isCorrectSession && isCorrectAmount) {
            await prisma.order.update({
              where: { id: orderId },
              data: { status: "PAID" },
            });
            console.log(`✅ Webhook: Shop Order ${orderId} updated to PAID`);
          } else {
            console.error("❌ Order Security Mismatch:", { 
                sessionMatches: isCorrectSession, 
                amountMatches: isCorrectAmount,
                expected: Math.round(order.amount * 100),
                received: session.amount_total
            });
          }
        }
      }
    }

    // --- CLEANUP: EXPIRED SESSIONS ---
    if (event.type === "checkout.session.expired") {
      if (session.metadata?.orderId) {
        await prisma.order.update({
          where: { id: session.metadata.orderId },
          data: { status: "FAILED" },
        });
        console.log(`⚠️ Webhook: Order ${session.metadata.orderId} marked FAILED (Expired)`);
      }
    }

  } catch (err) {
    console.error("❌ Database update failed during webhook:", err);
    return NextResponse.json({ error: "Webhook database sync failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}