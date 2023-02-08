import { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppProvider'

function Topbar () {
  const { appState } = useContext(AppContext)

  useEffect(() => {
    console.log(appState)
  }, [appState])

  return (
    <div className='flex float-right p-3 gap-1'>
      <div className='flex flex-col text-xs justify-center mr-2' />
      <img className='mr-2 w-10 h-10 rounded-full' src='https://api.dicebear.com/5.x/initials/svg?seed=Abby' alt='user photo' />
    </div>
  )
}

export default Topbar
