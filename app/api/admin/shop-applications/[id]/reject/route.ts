// app/api/admin/shop-applications/[id]/reject/route.ts

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/require-admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const admin = await requireAdmin();

  // ✅ Extract the ID manually from the URL
  const segments = req.nextUrl.pathname.split("/");
  const id = segments[4]; // ["", "api", "admin", "shop-applications", "{id}", "reject"]

  if (!id) {
    return NextResponse.json(
      { error: "Missing application ID" },
      { status: 400 }
    );
  }

  await prisma.shopApplication.update({
    where: { id },
    data: {
      status: "REJECTED",
      reviewedBy: { connect: { id: admin.user.id } },
    },
  });

  return NextResponse.json({ success: true });
}
