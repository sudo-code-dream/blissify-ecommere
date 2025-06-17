"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import SideContent from "./SideContent";

interface Banner {
  id: number;
  title: string;
  name: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
}

const HomeMainContent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [bannerData, setBannerData] = useState<Banner[]>([]);

  const fetchBannerData = async () => {
    try {
      const res = await fetch("/api/banner");
      const data = await res.json();
      setBannerData(data);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  useEffect(() => {
    if (bannerData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [bannerData]);

  return (
    <section className='flex gap-4 w-full  min-h-[22rem] sm:min-h-[22rem] max-h-[22rem]'>
      <div className='relative w-full overflow-hidden rounded-xs'>
        {bannerData.map((data, index) => (
          <div
            key={data.id + "bannerHome" + index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out bg-center bg-zinc-900 bg-no-repeat sm:bg-center bg-cover flex items-end p-6 sm:p-12 bg-gradient-dark-bottom-left ${
              index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${data.backdrop_path})`,
            }}>
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === 0 ? bannerData.length - 1 : prev - 1
                )
              }
              className='absolute top-1/2 left-0 hidden md:block transform -translate-y-1/2 z-30 px-2 py-2  rounded-full text-white  hover:bg-black/70 cursor-pointer'>
              {"<"}
            </button>
            <button
              onClick={() =>
                setCurrentImage((prev) => (prev + 1) % bannerData.length)
              }
              className='absolute top-1/2 right-0 hidden md:block transform -translate-y-1/2 z-30 px-2 py-2  rounded-full text-white hover:bg-black/70 cursor-pointer'>
              {">"}
            </button>
            <div className='z-10 space-y-4'>
              {/* <p className='text-amber-200'>
                Rating : {Number(data.vote_average).toFixed(1)}
              </p>
              <h1 className='font-black text-white text-2xl sm:text-4xl w-[90%] sm:w-[70%] line-clamp-5 sm:line-clamp-none'>
                {data.title || data.name}
              </h1> */}
              {/* <p className='line-clamp-3 text-ellipsis w-full sm:w-[70%] text-white'>
                {data.overview}
              </p> */}
              <div className='space-x-4'>
                {/* <Button
                  variant='ghost'
                  className='text-sm bg-slate-900/90 hover:text-white transition-all duration-300 hover:bg-blue-700/80 hover:opacity-90 ml-2'>
                  Watch Now
                </Button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <SideContent />
    </section>
  );
};

export default HomeMainContent;
