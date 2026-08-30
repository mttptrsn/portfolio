import { NextResponse } from "next/server";
import { createFormToken } from "@/app/lib/contact-security";
export const dynamic = "force-dynamic";
export async function GET() {
  const token = createFormToken();
  return token ? NextResponse.json({ token }, { headers: { "Cache-Control": "no-store" } }) : NextResponse.json({ error: "Contact form unavailable" }, { status: 503 });
}
