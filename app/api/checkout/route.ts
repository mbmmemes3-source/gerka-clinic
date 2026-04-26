import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.service || !data.name || !data.email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const appointment = await prisma.appointment.create({
      data: {
        service: data.service.title,
        amount: Math.round(data.service.fee), // since DB is Int
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message || "",
        status: "PENDING",
      },
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Gerka Clinic - ${data.service.title}`,
            },
            unit_amount: Math.round(data.service.fee * 100),
          },
          quantity: 1,
        },
      ],

      metadata: {
        appointmentId: appointment.id, // ✅ already string
      },

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/#booking`,
    });

    // 🔐 store sessionId (IMPORTANT)
    await prisma.appointment.update({
      where: { id: appointment.id },
      data: { stripeSessionId: session.id }, // add this field
    });

    return NextResponse.json({ url: session.url });

  } catch (err: any) {
    console.error("STRIPE ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}