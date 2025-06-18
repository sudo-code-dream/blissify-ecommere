"use client";
import React from "react";
import Profile from "./Profile";
import { redirect, usePathname } from "next/navigation";
import Payment from "./Payment";
import Addresses from "./Addresses";
import ChangePassword from "./ChangePassword";
import PrivacySettings from "./Privacy-Settings";
import Notifications from "./Notifications";

const componentMap: { [key: string]: React.ComponentType } = {
  "/user/account/profile": Profile,
  "/user/account/payment": Payment,
  "/user/account/addresses": Addresses,
  "/user/account/change-password": ChangePassword,
  "/user/account/privacy-settings": PrivacySettings,
  "/user/account/notifications": Notifications,
};

export default function MainContent() {
  const pathname = usePathname();
  const ContentComponent =
    componentMap[pathname] ?? redirect("/user/account/profile");

  return (
    <div className='bg-white rounded border-box shadow-[0_1px_2px_0_rgba(0,0,0,0.13)] flex-grow relative w-full max-w-[980px] mx-auto px-4 sm:px-2'>
      <div className='flex flex-col min-h-full relative'>
        <ContentComponent />
      </div>
    </div>
  );
}
