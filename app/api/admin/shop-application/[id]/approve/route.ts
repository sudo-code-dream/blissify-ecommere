// app/admin/shop-applications/[id]/approve/route.ts

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/require-admin";
import { redirect } from "next/navigation";

export async function POST(_: Request, { params }: { params: { id: string } }) {
  await requireAdmin();

  const application = await prisma.shopApplication.update({
    where: { id: params.id },
    include: {
      user: true,
    },
    data: {
      status: "APPROVED",
      reviewedBy: { connect: { id: (await requireAdmin()).user.id } },
    },
  });

  // Optionally create the Shop record here
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

  redirect("/admin/shop-applications");
}
