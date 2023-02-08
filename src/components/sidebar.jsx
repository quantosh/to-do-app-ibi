
import React from 'react'

const style = {
  sidebar: 'text-sm  p-4',
  row: 'flex',
  text: 'ml-4 cursor-pointer',
  button: 'cursor-pointer flex items-center'
}

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <aside id="cta-button-sidebar" class="block top-0 left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3">
          <a href='' class='flex items-center mb-8 justify-center'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png' class='h-6 mr-3 sm:h-9' alt='Flowbite Logo' />
            <span class='self-center text-l font-semibold whitespace-nowrap'>To Do App</span>
          </a>
          <ul class="space-y-2">
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal rounded-lg ">
                <svg aria-hidden="true" class="w-6 h-6 text-black transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                <span class="ml-3">My day</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-black  transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Important</span>
                <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-black  transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Planned</span>
                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-black bg-white rounded-full">12</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-black transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Tasks</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-black transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Sign out</span>
              </a>
            </li>
          </ul>
          <div id="dropdown-cta" class="p-4 mt-6 rounded-lg backdrop-blur-sm bg-white/40 border border-white/40 rounded-xl shadow-xl" role="alert">
            <div class="flex items-center mb-3">
              <span class="bg-red-300 text-black text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Beta</span>
              <button type="button" class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6" data-dismiss-target="#dropdown-cta" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
            <p class="mb-3 text-sm">
              Preview the beta of my task manager! You can use all the basic crud operations and the new color chooser! ❤
            </p>
            <a class="text-sm underline hover:text-yellow-500" href="mailto:ismaeldawsemi@gmail.com">Send me a mail</a>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
