import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        brand: body.brand || "SkinCeuticals", // This will work now after Step 2
        price: parseFloat(body.price),
        size: body.size || "",
        shortDesc: body.shortDesc || "",
        description: body.description || "",
        howToUse: body.howToUse || "",
        ingredients: body.ingredients || "",
        aboutBrand: body.aboutBrand || "",
        skinTypes: body.skinTypes || [], 
        image: body.image,
        categoryId: body.categoryId,
        stock: parseInt(body.stock) || 10,
      },
    });
    
    return NextResponse.json(newProduct);
  } catch (error: any) {
    console.error("PRISMA ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}