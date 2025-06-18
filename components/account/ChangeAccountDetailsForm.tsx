"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Loader2, Key } from "lucide-react";
import { signIn, updateUser } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "sonner";

interface SignInProps {
  name: string;
}

export default function SignIn({ name }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(evt.currentTarget as HTMLFormElement);
    const name = formData.get("name") as string;

    if (!name) {
      return toast.error("Please input a name");
    }

    await updateUser({
     
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className='max-w-md border-0 outline-0 shadow-none'>
        <CardContent>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                type='name'
                name='name'
                placeholder={name}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>

            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <Link
                  href='#'
                  className='ml-auto inline-block text-sm underline'>
                  Forgot your password?
                </Link>
              </div>

              <Input
                id='password'
                type='password'
                placeholder='password'
                autoComplete='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='flex items-center gap-2'>
              <Checkbox
                id='remember'
                onClick={() => {
                  setRememberMe(!rememberMe);
                }}
              />
              <Label htmlFor='remember'>Remember me</Label>
            </div>

            <Button
              type='submit'
              className='w-full'
              disabled={loading}
              onClick={async () => {
                await signIn.email(
                  {
                    email,
                    password,
                  },
                  {
                    onRequest: (ctx) => {
                      setLoading(true);
                    },
                    onResponse: (ctx) => {
                      setLoading(false);
                    },
                  }
                );
              }}>
              {loading ? (
                <Loader2 size={16} className='animate-spin' />
              ) : (
                <p> Save </p>
              )}
            </Button>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </form>
  );
}
