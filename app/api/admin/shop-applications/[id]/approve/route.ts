// app/api/admin/shop-applications/[id]/approve/route.ts

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/require-admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const admin = await requireAdmin();

  // Extract the shop application ID from the URL
  const url = new URL(req.url);
  const id = url.pathname.split("/").at(-2); // Gets the [id] from the URL

  if (!id) {
    return NextResponse.json(
      { error: "Invalid application ID" },
      { status: 400 }
    );
  }

  const application = await prisma.shopApplication.update({
    where: { id },
    include: {
      user: true,
    },
    data: {
      status: "APPROVED",
      reviewedBy: { connect: { id: admin.user.id } },
    },
  });

  await prisma.shop.create({
    data: {
      name: application.shopName,
      email: application.user.email,
      phone: application.phone || undefined,
      image: application.image || undefined,
      description: application.description || undefined,
      address: application.address || undefined,
      city: application.city || undefined,
      province: application.province || undefined,
      postalCode: application.postalCode || undefined,
      country: application.country || undefined,
      owner: { connect: { id: application.userId } },
    },
  });

  return NextResponse.json({ success: true });
}
