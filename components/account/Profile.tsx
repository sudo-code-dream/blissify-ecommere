"use client";
import { updateUser, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import SignIn from "./ChangeAccountDetailsForm";

export default function Profile() {
  const router = useRouter();
  const { data: session, isPending, error, refetch } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth/sign-in");
    }
  }, [session, isPending, router]);

  useEffect(() => {
    if (session?.user?.name) {
      setName(session.user.name);
    }
  }, [session]);

  if (isPending || !session) {
    return <div>Loading...</div>;
  }

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget as HTMLFormElement);
    const name = String(formData.get("name"));

    if (!name) {
      return toast.error("Please enter a name");
    }

    await updateUser(
      {
        name,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onResponse: () => {
          setIsLoading(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("Update successfully");
        },
      }
    );
  }

  return (
    <div className='px-6 pb-4 sm:px-4'>
      <div className='border-b border-[#efefef] py-4'>
        <h1 className='text-[#333] text-lg font-medium leading-6 m-0 capitalize'>
          My Profile
        </h1>
        <div className='text-[#555] text-sm leading-5 mt-1'>
          Manage and protect your account
        </div>
      </div>

      <div className='pt-1 flex flex-col lg:flex-row items-start gap-8'>
        {/* Form Section */}
        <div className='flex-1 w-full'>
          <SignIn name={name} />
        </div>

        {/* Sidebar Section (optional image upload, etc.) */}
        <div className='w-full lg:w-[17.5rem] border-t lg:border-t-0 lg:border-l border-[#efefef] flex justify-center pt-6 lg:pt-0 lg:pl-6'>
          {/* Optional sidebar content */}
        </div>
      </div>
    </div>
  );
}


