import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/require-admin";

export async function POST(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const session = await requireAdmin();
  const id = context.params.id;

  const application = await prisma.shopApplication.update({
    where: { id },
    include: {
      user: true,
    },
    data: {
      status: "APPROVED",
      reviewedBy: { connect: { id: session.user.id } },
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
