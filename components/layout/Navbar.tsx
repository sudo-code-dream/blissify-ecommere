"use client";
import { NAVBAR_ITEMS, NavbarItem } from "@/constants/navItems";
import { useSession } from "@/lib/auth-client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { data: session, isPending, error, refetch } = useSession();

  // ✅ Only replace "Login" with the user's name, and remove "SignUp"
  const filteredNavbarItems: NavbarItem[] = session
    ? NAVBAR_ITEMS.reduce<NavbarItem[]>((acc, item) => {
        if (item.name === "Login") {
          acc.push({
            name: session.user?.name || "Account",
            href: "/user/account/profile", // link to profile or dashboard
          });
        } else if (item.name !== "SignUp") {
          acc.push(item);
        }
        return acc;
      }, [])
    : NAVBAR_ITEMS;

  return (
    <nav className={"border-b"}>
      <div className='w-full h-6 hidden uppercase mt-0 justify-end items-center md:flex'>
        <div className='flex w-full justify-end container items-center mx-auto'>
          {filteredNavbarItems.map((item) => (
            <div className='flex items-center justify-center' key={item.name}>
              <Link
                key={item.name}
                href={item.href}
                className='text-[12px] gap-0 space-x-0 font-medium text-amber-900 hover:opacity-80 transition-opacity px-3'>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full bg-[#FFFFFF]'>
        <div
          className={
            "flex h-20 items-center px-4  container mx-auto hover:cursor-pointer  "
          }>
          <Link
            href='/'
            className='flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity'>
            <span className='bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent'>
              <Image
                src='/logo.png'
                className='hover:cursor-pointer'
                alt='Logo'
                width={150}
                height={150}
              />
            </span>
          </Link>

          <div className='flex items-center space-x-4 w-full md:w-1/3'>
            <div className='relative flex-1 w-full'>
              <Search
                className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500'
                size={1}
              />
              <input
                type='text'
                placeholder='Searc in Blissify'
                className='w-full pl-12 pr-4 py-2.5 bg-[#eff0f5] text-slate-800  rounded-sm placeholder-zinc-500 transition-all duration-200 text-sm'
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
