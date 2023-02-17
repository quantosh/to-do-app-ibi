import React from 'react'
import { Outlet } from 'react-router-dom'
import Notfound from '../components/notfound'

const style = {
  mainContainer:
    'text-black backdrop-blur-sm bg-white/40 border border-white/40 flex rounded-x shadow-xl w-full h-full',
  topContainer: 'mb-1 float-right w-full border-b border-gray/40 bg-white',
  sideContainer: 'h-full shadow-xl border-r border-gray/40 bg-white',
  appContainer: 'bg-white',
  footerContainer: 'bg-white border-t border-gray-200',
  contentContainer: 'block w-full'
}

const NotFoundPage = () => (
  <div className='h-screen w-screen bg-gray-100 flex items-center'>
    <div className='container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700'>
      <Notfound />
    </div>
  </div>
)

export default NotFoundPage
