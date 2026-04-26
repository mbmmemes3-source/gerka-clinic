import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.redirect(new URL("/admin", process.env.NEXT_PUBLIC_BASE_URL));

  response.cookies.set("admin_token", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });

  return response;
}