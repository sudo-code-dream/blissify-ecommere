// app/api/shop/apply/route.ts

import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma"; // adjust if path is different

export async function POST(req: Request) {
  try {
    // Get headers and session
    const headersList = await headers();
    const session = await auth.api.getSession({ headers: headersList });

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    // Check if user already has a shop or a pending application
    const existingApplication = await prisma.shopApplication.findFirst({
      where: {
        userId,
        status: "PENDING",
      },
    });

    if (existingApplication) {
      return NextResponse.json(
        { error: "You already have a pending application." },
        { status: 400 }
      );
    }

    const existingShop = await prisma.shop.findFirst({
      where: {
        ownerId: userId,
      },
    });

    if (existingShop) {
      return NextResponse.json(
        { error: "You already own a shop." },
        { status: 400 }
      );
    }

    const body = await req.json();
    const {
      shopName,
      image,
      phone,
      description,
      address,
      city,
      province,
      postalCode,
      country,
    } = body;

    // Create application
    const application = await prisma.shopApplication.create({
      data: {
        shopName,
        image,
        phone,
        description,
        address,
        city,
        province,
        postalCode,
        country,
        userId,
      },
    });

    return NextResponse.json({ success: true, application });
  } catch (error) {
    console.error("Error submitting shop application:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
