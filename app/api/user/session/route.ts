// app/api/auth/session/route.ts
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function GET() {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  return NextResponse.json({ session });
}
