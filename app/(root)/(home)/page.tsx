import BannerSlider from "@/components/home/BannerSlider";
import React from "react";

export default function page() {
  return (
    <div className='min-h-screen'>
      <div className='container max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6'>
        <div className='mb-8 sm:mb-12'>
          <BannerSlider />
        </div>
      </div>
    </div>
  );
}
