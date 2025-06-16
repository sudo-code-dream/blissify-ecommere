// /app/api/debug-db/route.ts (or /pages/api/debug-db.ts for pages dir)
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const result = await prisma.$queryRaw`SELECT 1`;
    return Response.json({ success: true, result });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
