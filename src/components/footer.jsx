import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full md:items-center md:justify-between md:p-6'>
      <div className='text-center'>
        <span className='text-sm'>© 2023 Task Manager</span>
      </div>
      <ul className='flex flex-wrap items-center text-sm align-center mt-1 justify-around'>
        <li>
          <i className='fa-brands fa-linkedin-in' />
          <a
            href='https://www.linkedin.com/in/ismaelbareainsua'
            className='mr-4 hover:underline md:mr-6 ml-1'
          >

            Linkedin
          </a>
        </li>
        <li>
          <i className='fab fa-github' />
          <a
            href='https://github.com/quantosh/to-do-app-ibi'
            className='mr-4 hover:underline md:mr-6 ml-1'
          >
            GitHub
          </a>
        </li>
        <li>
          <i className='fas fa-at' />
          <a
            href='mailto:ismaeldawsemi@gmail.com'
            className='hover:underline ml-1'
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
