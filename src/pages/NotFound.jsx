import React from 'react'
import Notfound from '../components/404'

const NotFound = () => {
  return (
    <div className='h-screen w-screen bg-gray-100 flex items-center'>
      <div className='container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700'>
        <Notfound />
      </div>
    </div>
  )
}

export default NotFound
