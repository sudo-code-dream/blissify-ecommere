import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { slugify } from "@/lib/utils/slugify";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== "USER") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  async function generateUniqueProductSlug(base: string) {
    const raw = slugify(base);
    let slug = raw;
    let count = 1;

    while (await prisma.product.findUnique({ where: { slug } })) {
      slug = `${raw}-${count++}`;
    }

    return slug;
  }

  const body = await req.json();

  const name = body.name?.trim();
  const description = body.description ?? null;
  const image = body.image ?? null;
  const price = parseFloat(body.price);
  const stock = parseInt(body.stock);
  const slug = await generateUniqueProductSlug(name);

  if (!name || isNaN(price) || isNaN(stock)) {
    return NextResponse.json(
      { error: "Invalid or missing fields" },
      { status: 400 }
    );
  }

  const shop = await prisma.shop.findUnique({
    where: { ownerId: session.user.id },
  });

  if (!shop) {
    return NextResponse.json({ error: "No shop found" }, { status: 404 });
  }

  const product = await prisma.product.create({
    data: {
      name,
      slug,
      description,
      image,
      price,
      stock,
      shopId: shop.id,
    },
  });

  return NextResponse.json({ product });
}
