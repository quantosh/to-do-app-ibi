import React from 'react'
import { Link } from 'react-router-dom'

const Loginmsg = () => {
  return (
    <div class='max-w-sm m-8 p-3 text-black backdrop-blur-sm bg-white/40 border border-white/40 rounded-xl shadow-xl'>
      <a href='#'>
        <h5 class='mb-2 text-xl font-bold tracking-tight dark:text-white'>
          Login is in development
        </h5>
      </a>
      <p class='mb-3 font-normal'>
        Welcome! We are currently working on the login functionality. Please use
        the "Skip Sign In" button to continue while we work to improve your
        experience.
      </p>
      <Link to='/home'>
        <a class='inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-yellow-400 hover:bg-yellow-500 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300'>
          Skip Sign In
          <svg
            aria-hidden='true'
            class='w-4 h-4 ml-2 -mr-1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'
            />
          </svg>
        </a>
      </Link>
    </div>
  )
}

export default Loginmsg
