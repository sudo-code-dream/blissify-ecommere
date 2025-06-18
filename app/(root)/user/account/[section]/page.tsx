import MainContent from "@/components/account/MainContent";
import Sidebar from "@/components/account/Sidebar";
import React from "react";

export default async function Page() {
  return (
    <div className='min-h-screen'>
      <div className='flex-1 block'>
        <div className='block isolate'>
          <div className='container flex pt-5 pb-[50px] px-0 ml-auto mr-auto isolate'>
            <Sidebar />
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}
