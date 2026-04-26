import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Fetch all orders
export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

// PATCH: Update order status (e.g., mark as SHIPPED)
export async function PATCH(req: Request) {
  try {
    const { id, status } = await req.json();

    const updatedOrder = await prisma.order.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(updatedOrder);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 });
  }
}