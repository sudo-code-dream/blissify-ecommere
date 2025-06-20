// app/api/admin/shop-applications/[id]/approve/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/require-admin";
import { slugify } from "@/lib/utils/slugify";

export async function POST(req: NextRequest) {
  const session = await requireAdmin();

  // ✅ Extract ID from the URL
  const segments = req.nextUrl.pathname.split("/");
  const id = segments[4]; // ["", "api", "admin", "shop-applications", "{id}", "approve"]

  if (!id) {
    return NextResponse.json({ error: "Missing ID" }, { status: 400 });
  }

  const existing = await prisma.shopApplication.findUnique({ where: { id } });

  if (!existing) {
    return NextResponse.json(
      { error: "Application not found" },
      { status: 404 }
    );
  }

  async function generateUniqueShopSlug(base: string) {
    const rawSlug = slugify(base);
    let slug = rawSlug;
    let count = 1;

    while (await prisma.shop.findUnique({ where: { slug } })) {
      slug = `${rawSlug}-${count++}`;
    }

    return slug;
  }
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
  const slug = await generateUniqueShopSlug(application.shopName);

  await prisma.shop.create({
    data: {
      name: application.shopName,
      slug,
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
