import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2023-10-16" });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Destructure based on the frontend form
    const { customerDetails, customerEmail, items, amount, shippingCost, deliveryMethod } = body;

    // 1. Validation check
    if (!customerEmail || !items || items.length === 0) {
      return NextResponse.json({ error: "Missing required order information" }, { status: 400 });
    }

    const parsedAmount = parseFloat(amount) || 0;
    const parsedShipping = parseFloat(shippingCost) || 0;

    // 2. Create the Order in Neon (Status: PENDING)
    const order = await prisma.order.create({
      data: {
        amount: parsedAmount,
        customerEmail: customerEmail,
        customerDetails: {
          ...customerDetails,
          shippingCost: parsedShipping,
          deliveryMethod: deliveryMethod || "delivery",
        }, // This is a JSON field in Prisma
        items: items,                     // This is a JSON field in Prisma
        status: "PENDING"
      }
    });

    // Build line items
    const lineItems: any[] = items.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: { 
          name: item.name, 
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    // Add shipping as a line item if applicable
    if (parsedShipping > 0) {
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: `Shipping (${deliveryMethod === "dublin" ? "Dublin Delivery" : "Standard Ireland Delivery"})`,
          },
          unit_amount: Math.round(parsedShipping * 100),
        },
        quantity: 1,
      });
    }

    // 3. Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      // Important: Link back to the order we just created
      metadata: { 
        orderId: order.id 
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/cart`,
    });

    // 4. Update the Order with the Stripe Session ID for reference
    await prisma.order.update({
      where: { id: order.id },
      data: { stripeSessionId: session.id }
    });

    return NextResponse.json({ url: session.url });

  } catch (err: any) {
    console.error("SERVER ORDER ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}