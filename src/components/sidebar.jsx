import React from 'react'
import Footer from './footer'
import { getAuth } from 'firebase/auth'
import UserStatus from './userStatus'

const style = {
  sidebar: 'p-4 justify-around',
  row: 'flex',
  text: 'ml-4 cursor-pointer',
  button: 'cursor-pointer flex items-center'
}

const Sidebar = () => {
  const logOut = () => {
    const auth = getAuth()
    auth.signOut().then(
      () => {
        console.log('User signed out')
      }
    ).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className={style.sidebar}>
      <aside id='cta-button-sidebar' className='block top-0 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0' aria-label='Sidebar'>
        <div className='mt-1'>
          <UserStatus />
          <ul className='space-y-2 pointer-events-none'>
            <li>
              <a href='#' className='flex items-center p-2 text-base font-normal rounded-lg '>
                <svg aria-hidden='true' className='h-5 text-black transition duration-75 dark:text-white' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' /><path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' /></svg>
                <span className='ml-3 line-through text-gray-300 text-sm'>My day</span>
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg'>
                <svg aria-hidden='true' className='flex-shrink-0 h-5 text-black transition duration-75 dark:text-white' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' /></svg>
                <span className='flex-1 ml-3 whitespace-nowrap  line-through hover:text-red-500 text-gray-300 text-sm'>Important</span>
                <span className='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-slate-200 rounded-full' />
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg'>
                <svg aria-hidden='true' className='flex-shrink-0 h-5 text-black  transition duration-75 dark:text-white' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z' /><path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z' /></svg>
                <span className='flex-1 ml-3 whitespace-nowrap  line-through hover:text-red-500 text-gray-300 text-sm'>Planned</span>
                <span className='inline-flex items-center justify-center w-2 h-2 p-3 ml-3 text-xs font-medium text-white bg-red-300 rounded-full text-sm'>12</span>
              </a>
            </li>
            <li>
              <a href='#' className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg'>
                <svg aria-hidden='true' className='flex-shrink-0 h-5 text-black transition duration-75 dark:text-white' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' /></svg>
                <span className='flex-1 ml-3 whitespace-nowrap  line-through hover:text-red-500 text-gray-300 text-sm'>Tasks</span>
              </a>
            </li>
            <li className='pointer-events-auto'>
              <button onClick={logOut} className='flex items-center p-2 text-base font-normal rounded-lg'>
                <svg aria-hidden='true' className='flex-shrink-0 h-5 text-black transition duration-75 dark:text-white' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z' clipRule='evenodd' /></svg>
                <span className='flex-1 ml-3 whitespace-nowrap text-sm'>Sign out</span>
              </button>
            </li>
          </ul>
          <div id='dropdown-cta' className='p-3 mt-3 rounded-lg backdrop-blur-sm bg-yellow-400 border border-white/40 shadow-xl' role='alert'>
            <div className='flex items-center mb-3'>
              <span className='bg-white text-black text-sm font-semibold mr-2 px-2.5 py-0.5 rounded text-xs'>Beta</span>
            </div>
            <div className='flex-colum justify-center items-center dark:text-black'>
              <p className='mb-1 text-xs '>
                Preview the beta of my task manager! You can use all the basic crud operations and the new color chooser! ❤
              </p>
              <a className='text-xs hover:text-white text-xs' href='mailto:ismaeldawsemi@gmail.com'><i className='fa fa-envelope' /> Send me a mail</a>
            </div>
          </div>
        </div>
        <Footer />
      </aside>
    </div>
  )
}

export default Sidebar
