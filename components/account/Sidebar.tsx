import React from "react";

export default function Sidebar() {
  return (
    <div className='hidden md:block shrink-0 w-[180px] isolate'>
      <div className='border-b border-[1px] border-solid border-[#efefefef] flex py-[15px] px-0 isolate'>
        <a href=''>
          <div className='inline-block border border-[rgba(0,0,0,0.09)] rounded-full box-border relative h-[30px] w-[30px]'>
            <div className='bg-[#f5f5f5] rounded-full overflow-hidden pt-[100%] relative w-full'>
              <svg
                enableBackground='new 0 0 15 15'
                viewBox='0 0 15 15'
                x='0'
                y='0'
                className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 stroke-[#c6c6c6] text-[1.5rem] font-normal leading-8 antialiased'>
                <g>
                  <circle
                    cx='7.5'
                    cy='4.5'
                    fill='none'
                    r='3.8'
                    strokeMiterlimit='10'></circle>
                  <path
                    d='m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6'
                    fill='none'
                    strokeLinecap='round'
                    strokeMiterlimit='10'></path>
                </g>
              </svg>
            </div>
            <img
              src='https://down-ph.img.susercontent.com/file/ph-11134226-7r98v-lpghew37pjah15_tn'
              alt=''
              className='block absolute rounded-full inset-0 w-full h-full'
            />
          </div>
        </a>
        <div className='flex flex-1 flex-col justify-center overflow-hidden pl-[20px]'>
          <div className='text-[#333] font-semibold mb-[5px] min-h-4 overflow-hidden truncate'>
            kennethdean97
          </div>
          <div className=' block isolate'>
            <a href='/account/profile'>
              <svg
                width='12'
                height='12'
                viewBox='0 0 12 12'
                xmlns='http://www.w3.org/2000/svg'
                className='margin-right: 4px; overflow-hidden'>
                <path
                  d='M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48'
                  fill='#9B9B9B'
                  fillRule='evenodd'></path>
              </svg>
              Edit Profile
            </a>
          </div>
        </div>
      </div>
      <div className='cursor-pointer list-none p-0 mt-[27px] mx-0 block isolate'>
        <div className='relative'>
          <div className=''>
            <a
              href='/user/account/profile'
              className='flex items-center text-[rgba(0,0,0,0.87)] mb-[15px] no-underline'>
              <div className='flex items-center justify-center flex-shrink-0 rounded-full text-white h-5 w-5 leading-5 mr-2.5 text-center'>
                <img
                  className='h-full w-full'
                  src='https://down-ph.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4'></img>
              </div>
              <div className=''>
                <span className='font-medium mr-[5px]'>My Account</span>
              </div>
            </a>
          </div>
          <div className='h-auto opacity-100'>
            <div className='block pt-0 pr-0 pb-[3px] pl-[34px]'>
              <a
                href='/user/account/profile'
                className=' text-[#ee4d2d] block mb-[15px] no-underline'>
                <span className='block capitalize text-sm transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)]'>
                  Profile
                </span>
              </a>
              <a
                className='block mb-[15px] no-underline'
                href='/user/account/payment'>
                <span className='block text-sm capitalize transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)]'>
                  Banks &amp; Cards
                </span>
              </a>
              <a
                className='block mb-[15px] no-underline'
                href='/user/account/addresses'>
                <span className='block text-sm capitalize transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)]'>
                  Addresses
                </span>
              </a>
              <a
                className='block mb-[15px] no-underline'
                href='/user/account/change-password'>
                <span className='block text-sm capitalize transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)]'>
                  Change Password
                </span>
              </a>
              <a
                className='block mb-[15px] no-underline'
                href='/user/account/privacy-settings'>
                <span className='block text-sm capitalize transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)]'>
                  Privacy Settings
                </span>
              </a>
              <a
                className='block mb-[15px] no-underline'
                href='/user/account/notifications'>
                <span className='block text-sm capitalize transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)]'>
                  Notification Settings
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className='relative'>
          <div className='cursor-pointer list-none'>
            <a
              href=''
              className='flex items-center mb-[0.9375rem] text-[rgba(0,0,0,0.87)] no-underline capitalize transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center justify-center flex-shrink-0 rounded-full text-white h-5 w-5 leading-5 mr-2.5 text-center'>
                <img
                  className='h-full w-full border-0 overflow-clip  overflow-clip-margin-[content-box]'
                  src='https://down-ph.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078'
                />
              </div>
              <div className='leading-4'>
                <span className='mr-[.3125rem] font-[500] leading-[1rem]'>
                  My Purchase
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className='relative'>
          <div className='cursor-pointer list-none'>
            <a
              href=''
              className='flex items-center mb-[0.9375rem] text-[rgba(0,0,0,0.87)] no-underline capitalize transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center justify-center flex-shrink-0 rounded-full text-white h-5 w-5 leading-5 mr-2.5 text-center'>
                <img
                  className='h-full w-full border-0 overflow-clip  overflow-clip-margin-[content-box]'
                  src='https://down-ph.img.susercontent.com/file/e10a43b53ec8605f4829da5618e0717c'
                />
              </div>
              <div className='leading-4'>
                <span className='mr-[.3125rem] font-[500] leading-[1rem]'>
                  Notification
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className='relative'>
          <div className='cursor-pointer list-none'>
            <a
              href=''
              className='flex items-center mb-[0.9375rem] text-[rgba(0,0,0,0.87)] no-underline capitalize transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center justify-center flex-shrink-0 rounded-full text-white h-5 w-5 leading-5 mr-2.5 text-center'>
                <img
                  className='h-full w-full border-0 overflow-clip  overflow-clip-margin-[content-box]'
                  src='https://down-ph.img.susercontent.com/file/84feaa363ce325071c0a66d3c9a88748'
                />
              </div>
              <div className='leading-4'>
                <span className='mr-[.3125rem] font-[500] leading-[1rem]'>
                  My Vouchers
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className='relative'>
          <div className='cursor-pointer list-none'>
            <a
              href=''
              className='flex items-center mb-[0.9375rem] text-[rgba(0,0,0,0.87)] no-underline capitalize transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)]'>
              <div className='flex items-center justify-center flex-shrink-0 rounded-full text-white h-5 w-5 leading-5 mr-2.5 text-center'>
                <img
                  className='h-full w-full border-0 overflow-clip  overflow-clip-margin-[content-box]'
                  src='https://down-ph.img.susercontent.com/file/a0ef4bd8e16e481b4253bd0eb563f784'
                />
              </div>
              <div className='leading-4'>
                <span className='mr-[.3125rem] font-[500] leading-[1rem]'>
                  My Blissify Coins
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
