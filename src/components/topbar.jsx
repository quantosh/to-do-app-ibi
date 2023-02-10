import { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppProvider'

function Topbar() {
  const { appState } = useContext(AppContext)

  useEffect(() => {
    console.log(appState)
  }, [appState])

  return (
    <div className='flex'>
      <div className='ml-3 '>
        <form>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900" placeholder="Search task" required></input>
          </div>
        </form>
      </div>
      <div className='flex'>
        <div className='mt-1 float-right'>
          <img className='w-10 h-10 rounded-full' src='https://api.dicebear.com/5.x/initials/svg?seed=IB' alt='user photo' />
        </div>
      </div>
    </div>

  )
}

export default Topbar
