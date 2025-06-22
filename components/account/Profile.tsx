"use client";
import { useEffect, useState } from "react";
import SignIn from "./ChangeAccountDetailsForm";
import { updateUser, useSession } from "@/lib/auth-client";
import { toast } from "sonner";
import ChangeAccountDetailsForm from "./ChangeAccountDetailsForm";

type Session = {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string;
    role: string;
  };
};

export default function Profile() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const name = session?.user.name;
  const email = session?.user.email;

  useEffect(() => {
    async function loadSession() {
      const res = await fetch("/api/user/session");
      const data = await res.json();
      setSession(data.session);
    }

    loadSession();
  }, []);

  async function handleImageChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const file = evt.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/blob", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      const imageUrl = data.url;

      if (imageUrl) {
        setPreviewImage(imageUrl);

        // ✅ Update user image in BetterAuth
        await updateUser({
          ...(name && { name }),
          image: imageUrl,
          fetchOptions: {
            onError: (ctx) => {
              toast.error(ctx.error.message);
            },
            onSuccess: () => {
              toast.success("Image chaged successfully");
            },
          },
        });
      }
    } catch (error) {
      console.error("Upload failed", error);
    }
  }

  if (session) {
    console.log(session.user.name);
  }
  const currentImage = previewImage || session?.user?.image || "No Image";

  return (
    <div className='px-6 pb-4 sm:w-1/2 sm:px-4'>
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
          <ChangeAccountDetailsForm email={email} name={name} />
        </div>

        {/* Sidebar Section - Profile Picture */}
        {/* Sidebar Section - Profile Picture */}
        <div className='w-full  lg:w-[17.5rem] mt-4 border-t lg:border-t-0 lg:border-l border-[#efefef] flex justify-center pt-6 lg:pt-0 lg:pl-6'>
          <div className='flex flex-col items-center gap-4'>
            <img
              src={currentImage}
              alt='Profile'
              className='w-24 h-24 rounded-full object-cover border border-gray-200 shadow-sm'
            />

            <div className='relative'>
              <input
                id='profile-upload'
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='hidden'
              />
              <label
                htmlFor='profile-upload'
                className='inline-block cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md transition-colors shadow-sm'>
                Upload New Photo
              </label>
            </div>

            <p className='text-xs text-gray-500 text-center px-2'>
              Accepted formats: JPG, PNG. Max size: 2MB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
