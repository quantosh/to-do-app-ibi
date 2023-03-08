import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'

const style = {
  mainContainer: 'text-black backdrop-blur-sm bg-white/40 border border-white/40 flex rounded-x shadow-xl w-full h-full',
  sideContainer: ' shadow-xl border-r border-gray/40 bg-white',
  appContainer: 'w-full h-full bg-white/40 border border-white/40',
  footerContainer: 'bg-white border-t border-gray-200 w-full static bottom-0',
  contentContainer: 'block w-full bg-white'
}

const Home = () => {
  return (
    <>
      {/* Screen container */}
      <div className={style.mainContainer}>
        <div className={style.sideContainer}>
          <Sidebar />
        </div>
        <div className={style.contentContainer}>
          <div className={style.topContainer} />
          <div className={style.appContainer}>
            <Outlet />
          </div>
        </div>
        {/* This side if I want to manage a right panel */}
        <div />
      </div>
    </>
  )
}

export default Home
