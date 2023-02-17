import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center justify-center align-center'>
      <div className='relative'>
        <div className='w-5 h-5 rounded-full absolute border-2 border-solid border-gray-200' />
        <div className='w-5 h-5 rounded-full animate-spin absolute border-2 border-solid border-blue-500 border-t-transparent' />
        <p className='ml-6'>Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
