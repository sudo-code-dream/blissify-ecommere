"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Loader2, X } from "lucide-react";
import { signUp } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    setLoading(true);

    const formData = new FormData(evt.target as HTMLFormElement);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    await signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onResponse: () => {
          setLoading(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
          setLoading(false);
        },
        onSuccess: () => {
          toast.success("Account created successfully");
          router.push("/auth/sign-up/success");
        },
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center justify-center w-full h-[90vh]'>
      <Card className='max-w-sm w-full'>
        <CardHeader>
          <CardTitle className='text-lg md:text-xl'>Sign Up</CardTitle>
          <CardDescription className='text-xs md:text-sm'>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid grid-cols-1 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='name'>First name</Label>
                <Input id='name' type='name' name='name' required />
              </div>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' name='email' required />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                name='password'
                autoComplete='new-password'
              />
            </div>
            <Button type='submit' className='w-full' disabled={loading}>
              {loading ? (
                <Loader2 size={16} className='animate-spin' />
              ) : (
                "Create an account"
              )}
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <div className='flex justify-center w-full border-t py-4'>
            <p className='text-center text-xs text-neutral-500'>
              Secured by <span className='text-orange-400'>better-auth.</span>
            </p>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
}
