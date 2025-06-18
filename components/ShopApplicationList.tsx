"use client";

import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner"; // or your toast lib

export function ShopApplicationList({ applications }: { applications: any[] }) {
  const [isPending, startTransition] = useTransition();

  const handleAction = (id: string, action: "approve" | "reject") => {
    startTransition(async () => {
      const res = await fetch(`/api/admin/shop-applications/${id}/${action}`, {
        method: "POST",
      });

      if (res.ok) {
        toast.success(`Application ${action}d successfully`);
        window.location.reload();
      } else {
        toast.error(`Failed to ${action} application`);
      }
    });
  };

  if (applications.length === 0) {
    return <p className='text-gray-600'>No pending applications.</p>;
  }

  return (
    <ul className='space-y-6'>
      {applications.map((app) => (
        <li key={app.id} className='p-6 border rounded-lg space-y-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-xl font-semibold'>{app.shopName}</h2>
            <span className='text-sm text-gray-500'>
              Submitted by: {app.user?.name ?? "Unknown"}
            </span>
          </div>
          <p>{app.description}</p>
          <div className='flex gap-2 pt-4'>
            <Button
              variant='default'
              onClick={() => handleAction(app.id, "approve")}
              disabled={isPending}>
              Approve
            </Button>
            <Button
              variant='destructive'
              onClick={() => handleAction(app.id, "reject")}
              disabled={isPending}>
              Reject
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
