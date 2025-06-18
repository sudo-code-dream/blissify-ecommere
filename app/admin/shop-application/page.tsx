import { requireAdmin } from "@/lib/auth/require-admin";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button"; // Assuming you use shadcn/ui

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

      {applications.length === 0 ? (
        <p className='text-gray-600'>No pending applications.</p>
      ) : (
        <ul className='space-y-6'>
          {applications.map((app: any) => (
            <li key={app.id} className='p-6 border rounded-lg space-y-2'>
              <div className='flex justify-between items-center'>
                <h2 className='text-xl font-semibold'>{app.shopName}</h2>
                <span className='text-sm text-gray-500'>
                  Submitted by: {app.user.name}
                </span>
              </div>
              <p>{app.description}</p>
              <div className='flex gap-2 pt-4'>
                <form
                  action={`/api/admin/shop-applications/${app.id}/approve`}
                  method='post'>
                  <Button type='submit' variant='default'>
                    Approve
                  </Button>
                </form>
                <form
                  action={`/api/admin/shop-applications/${app.id}/reject`}
                  method='post'>
                  <Button type='submit' variant='destructive'>
                    Reject
                  </Button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
