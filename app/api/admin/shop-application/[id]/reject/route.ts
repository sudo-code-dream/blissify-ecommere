// app/admin/shop-applications/[id]/reject/route.ts

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/require-admin";
import { redirect } from "next/navigation";

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const admin = await requireAdmin();

  await prisma.shopApplication.update({
    where: { id: params.id },
    data: {
      status: "REJECTED",
      reviewedBy: { connect: { id: admin.user.id } },
    },
  });

  redirect("/admin/shop-applications");
}
