// lib/auth/require-admin.tsx

"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth"; // This should be your BetterAuth instance
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const headersList = await headers();
  const session = await auth.api.getSession({ headers: headersList });

  if (!session) {
    redirect("/auth/sign-in");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/forbidden"); // or render a custom error message/page
  }

  return session;
}
