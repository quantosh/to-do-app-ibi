
import React from 'react'

const style = {
  sidebar: 'text-sm max-w-[200px] mt-12 p-4',
  row: 'flex',
  text: 'ml-4 cursor-pointer',
  button: 'cursor-pointer flex items-center'
}

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <a href='' class='flex items-center mb-8 justify-center'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png' class='h-6 mr-3 sm:h-9' alt='Flowbite Logo' />
        <span class='self-center text-l font-semibold whitespace-nowrap'>To Do App</span>
      </a>
      <div className='block text-xs p-1 ml-1 '>
        <p className='text-left mb-1 mt-1'>📓 My day</p>
        <p className='text-left mb-1 mt-1'>⭐ Important</p>
        <p className='text-left mb-1 mt-1'>📅 My day</p>
        <p className='text-left mb-1 mt-1'>✏ Tasks</p>
        <ul className='ml-3'>
          <li>- Work</li>
          <li>- Personal</li>
          <li>- Household</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
