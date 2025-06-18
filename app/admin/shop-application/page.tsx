// app/(admin)/admin/shop-applications/page.tsx

import { requireAdmin } from "@/lib/auth/require-admin";
import { prisma } from "@/lib/prisma";
import { ShopApplicationList } from "@/components/ShopApplicationList";

export default async function ShopApplicationsPage() {
  await requireAdmin();

  const applications = await prisma.shopApplication.findMany({
    where: { status: "PENDING" },
    include: { user: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className='container max-w-4xl py-10 space-y-8'>
      <h1 className='text-3xl font-bold'>Pending Shop Applications</h1>
      <ShopApplicationList applications={applications} />
    </div>
  );
}
