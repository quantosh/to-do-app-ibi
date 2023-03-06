function Topbar () {
  return (
    <div className='flex'>
      <div className='ml-3 '>
        <form>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /></svg>
            </div>
            <input type='search' id='default-search' className='block w-full p-4 pl-10 text-sm text-gray-900' placeholder='Search task' required />
          </div>
        </form>
      </div>
      <div className='flex'>
        <div className='mt-1 float-right'>
          <img className='w-10 h-10 rounded-full' src='https://api.dicebear.com/5.x/initials/svg?seed=IB' alt='user photo' />
        </div>
      </div>
    </div>

  )
}

export default Topbar
