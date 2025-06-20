import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth"; // or better-auth
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function GET(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const shop = await prisma.shop.findUnique({
    where: { ownerId: session.user.id },
    include: {
      products: true,
    },
  });

  if (!shop) {
    return NextResponse.json({ products: [] });
  }

  return NextResponse.json({ products: shop.products });
}
