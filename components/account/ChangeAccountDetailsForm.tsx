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
import { useState } from "react";
import { Loader2, Key } from "lucide-react";
import { signIn, updateUser } from "@/lib/auth-client";

import { toast } from "sonner";
import PhoneInput from "react-phone-number-input";

interface SignInProps {
  name?: string;
  email?: string;
}

export default function ChangeAccountDetailsForm({ name, email }: SignInProps) {
  const [eemail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<string | undefined>();

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(evt.currentTarget as HTMLFormElement);
    const name = formData.get("name") as string;

    if (!name) {
      return toast.error("Please input a name");
    }

    await updateUser({});
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
                value={eemail}
              />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='name'>Email</Label>
              <Input
                id='name'
                type='name'
                name='name'
                placeholder={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={eemail}
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='phone'>Phone Number</Label>
              <PhoneInput
                id='phone'
                international
                defaultCountry='US'
                placeholder='Enter phone number'
                value={value}
                onChange={setValue}
                className='custom-phone-input w-full'
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "0.375rem",
                  padding: "0.5rem 0.75rem",
                  fontSize: "1rem",
                  width: "100%",
                  outline: "none",
                }}
              />
              <style jsx global>{`
                .custom-phone-input .PhoneInputCountrySelect {
                  border: 1px solid #e2e8f0 !important; /* slate-300 */
                  border-radius: 0.375rem;
                  padding: 0.375rem 0.5rem;
                  background: white;
                }

                .custom-phone-input .PhoneInputCountrySelect:focus {
                  outline: none;
                  box-shadow: none;
                }

                .custom-phone-input .PhoneInputCountryIcon {
                  width: 1rem !important; /* Tailwind w-4 */
                  height: 1rem !important; /* Tailwind h-4 */
                }

                .custom-phone-input .PhoneInputInput {
                  border: none;
                  outline: none;
                  font-size: 1rem;
                  width: 100%;
                }
              `}</style>
            </div>

            {/* <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
              </div>

              <Input
                id='password'
                type='password'
                placeholder='password'
                autoComplete='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div> */}

            <Button
              type='submit'
              className='w-full'
              disabled={loading}
              onClick={async () => {
                await signIn.email(
                  {
                    email: eemail,
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
