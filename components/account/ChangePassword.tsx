import ChangePasswordForm from "../auth/ChangePasswordForm";

export default function ChangePassword() {
  return (
    <div className='px-6 pb-4 sm:px-4'>
      <div className='border-b border-[#efefef] py-4'>
        <h1 className='text-[#333] text-lg font-medium leading-6 m-0 capitalize'>
          My Profile
        </h1>
        <div className='text-[#555] text-sm leading-5 mt-1'>
          Manage and protect your account
        </div>
      </div>

      <div className='pt-1 flex flex-col lg:flex-row items-start gap-8'>
        {/* Form Section */}
        <div className='flex-1 mt-5 w-full'>
          <ChangePasswordForm />
        </div>

        {/* Sidebar Section (optional image upload, etc.) */}
        <div className='w-full lg:w-[17.5rem] border-t lg:border-t-0 lg:border-l border-[#efefef] flex justify-center pt-6 lg:pt-0 lg:pl-6'>
          {/* Optional sidebar content */}
        </div>
      </div>
    </div>
  );
}
