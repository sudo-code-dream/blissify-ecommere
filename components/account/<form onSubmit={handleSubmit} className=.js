<form onSubmit={handleSubmit} className='w-full max-w-full'>
  <div className='space-y-8'>
    {/* Username */}
    <div className='flex flex-col lg:flex-row items-start lg:items-center'>
      <label className='w-full lg:w-1/4 text-left text-sm text-[rgba(85,85,85,0.8)] mb-2 lg:mb-0 pr-4'>
        Username
      </label>
      <div className='w-full lg:w-3/4'>
        <div className='flex items-center border border-[rgba(0,0,0,0.14)] rounded shadow-[inset_0_2px_0_rgba(0,0,0,0.02)] h-10'>
          <input
            className='bg-none border-0 flex-1 outline-none p-3 text-sm'
            type='text'
            id='name'
            name='name'
            placeholder={session.user.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <p className='text-[rgba(0,0,0,0.4)] text-sm pt-1'>
          Username can only be changed once.
        </p>
      </div>
    </div>

    {/* Email */}
    <div className='flex flex-col lg:flex-row items-start lg:items-center'>
      <label className='w-full lg:w-1/4 text-left text-sm text-[rgba(85,85,85,0.8)] mb-2 lg:mb-0 pr-4'>
        Email
      </label>
      <div className='w-full lg:w-3/4 flex items-center'>
        <span className='text-[#333] text-sm'>{session.user.email}</span>
        <button
          type='button'
          className='text-[#05a] text-sm ml-2 underline capitalize'>
          change
        </button>
      </div>
    </div>

    {/* Phone Number */}
    <div className='flex flex-col lg:flex-row items-start lg:items-center'>
      <label className='w-full lg:w-1/4 text-left text-sm text-[rgba(85,85,85,0.8)] mb-2 lg:mb-0 pr-4'>
        Phone Number
      </label>
      <div className='w-full lg:w-3/4'>
        <button
          type='button'
          className='text-[#05a] text-sm underline capitalize'>
          add
        </button>
      </div>
    </div>

    {/* Gender - Placeholder */}
    <div className='flex flex-col lg:flex-row items-start lg:items-center'>
      <label className='w-full lg:w-1/4 text-left text-sm text-[rgba(85,85,85,0.8)] mb-2 lg:mb-0 pr-4'>
        Gender
      </label>
      <div className='w-full lg:w-3/4'>{/* Add gender selector here */}</div>
    </div>
  </div>

  <div className='mt-6'>
    <Button type='submit' disabled={isLoading}>
      Update User
    </Button>
  </div>
</form>;
