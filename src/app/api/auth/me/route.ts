import { NextResponse } from "next/server";
import { getCurrentSession } from "@/lib/auth";

export async function GET() {
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ success: false, user: null, data: null }, { status: 401 });
  }
  return NextResponse.json({ success: true, user: session, data: session });
}

