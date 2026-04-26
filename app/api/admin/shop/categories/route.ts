import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Fetch all categories with product counts
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        _count: {
          select: { products: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error("CATEGORY ERROR:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

// POST: Create a new category
export async function POST(req: Request) {
  try {
    const { name, image } = await req.json();
    const newCategory = await prisma.category.create({
      data: { name, image },
    });
    return NextResponse.json(newCategory);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 });
  }
}

// DELETE: Remove a category
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    await prisma.category.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}