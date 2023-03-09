import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar'

const style = {
  mainContainer: 'text-[#1A202C] bg-[#F0E7DB] border flex rounded-x shadow-xl w-full h-full dark:bg-[#202023] dark:text-[#DCDCDD] dark:border-black',
  sideContainer: 'shadow-xl border-gray/40  dark:bg-[#202023] dark:text-[#DCDCDD] dark:border-black',
  appContainer: 'w-full h-full bg-white/40 border border-white/40 text-[#1A202C] bg-[#F0E7DB] dark:bg-[#202023] dark:text-[#DCDCDD] dark:border-black',
  footerContainer: 'bg-white border-t border-gray-200 w-full static bottom-0 dark:bg-[#202023] dark:text-[#DCDCDD] dark:border-black',
  contentContainer: 'block w-full bg-white dark:bg-[#202023] dark:text-[#DCDCDD] dark:border-black'
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
