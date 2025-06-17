import React from "react";

export default function SideContent() {
  return (
    <aside className='w-full max-w-[20rem] max-h-5 h-full space-y-2 lg:block hidden'>
      <div className='bg-[#fff] p-4 rounded-lg block '>
        <div className='flex justify-between items-center mb-4'>
          <h5 className='text-slate-800 font-medium text-sm uppercase'>
            TRENDING
          </h5>
          <div className='flex gap-4'>{/* Add Data Filter if Possible */}</div>
        </div>
        <div className='space-y-2 pr-2 w-full'></div>
      </div>
    </aside>
  );
}
