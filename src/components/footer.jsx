import React from 'react'

const Footer = () => {
  return (
    <footer class='w-full md:items-center md:justify-between md:p-6'>
      <div className='text-center'>
        <span class='text-sm'>© 2023 Task Manager</span>
      </div>
      <ul class='flex flex-wrap items-center text-sm align-center mt-1 justify-around'>
        <li>
          <i class='fa-brands fa-linkedin-in' />
          <a
            href='https://www.linkedin.com/in/ismaelbareainsua'
            class='mr-4 hover:underline md:mr-6'
            className='ml-1'
          >

            Linkedin
          </a>
        </li>
        <li>
          <i class='fab fa-github' />
          <a
            href='https://github.com/quantosh/to-do-app-ibi'
            class='mr-4 hover:underline md:mr-6'
            className='ml-1'
          >
            GitHub
          </a>
        </li>
        <li>
          <i class='fas fa-at' />
          <a
            href='mailto:ismaeldawsemi@gmail.com'
            class='hover:underline'
            className='ml-1'
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
