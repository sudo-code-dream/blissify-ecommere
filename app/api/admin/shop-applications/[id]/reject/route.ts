import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/require-admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const admin = await requireAdmin();
  const { id } = context.params;

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
