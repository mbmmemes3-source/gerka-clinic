import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      
      // Get the cookie store (await it for Next.js 15 compatibility)
      const cookieStore = await cookies();

      cookieStore.set("admin_token", "authorized", {
        httpOnly: true,
        // FIX 1: 'secure' must be false on localhost (http), true on production (https)
        secure: process.env.NODE_ENV === "production", 
        // FIX 2: Explicitly set path to root so all admin subpages can see it
        path: "/",
        // FIX 3: SameSite 'lax' is best for most auth flows
        sameSite: "lax",
        // Increase to 7 days so you don't have to log in every day
        maxAge: 60 * 60 * 24 * 7, 
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}