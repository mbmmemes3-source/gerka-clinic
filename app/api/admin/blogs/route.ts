import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Helper to generate a clean, URL-safe slug from the title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')        // Remove all non-word chars (except spaces and hyphens)
    .replace(/[\s_-]+/g, '-')         // Replace spaces and underscores with a single hyphen
    .replace(/^-+|-+$/g, '');         // Trim hyphens from start and end
}

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, content, excerpt, image, published } = body;

    if (!title || !content || !excerpt || !image) {
      return NextResponse.json({ error: "Title, content, excerpt, and image are required" }, { status: 400 });
    }

    // Generate unique slug
    let slug = generateSlug(title);
    let existing = await prisma.blog.findUnique({ where: { slug } });
    let counter = 1;
    while (existing) {
      slug = `${generateSlug(title)}-${counter}`;
      existing = await prisma.blog.findUnique({ where: { slug } });
      counter++;
    }

    const newBlog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        image,
        published: published !== undefined ? published : true,
      },
    });

    return NextResponse.json(newBlog);
  } catch (error: any) {
    console.error("PRISMA BLOG ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    await prisma.blog.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
