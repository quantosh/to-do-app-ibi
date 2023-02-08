import { useContext, useEffect } from 'react'
import { AppContext } from '../Context/AppProvider'

function Topbar () {
  const { appState } = useContext(AppContext)

  useEffect(() => {
    console.log(appState)
  }, [appState])

  return (
    <div className='flex float-right p-3'>
      <div className='flex flex-col text-xs justify-center' />
      <img className='w-10 h-10 rounded-full' src='https://api.dicebear.com/5.x/initials/svg?seed=IB' alt='user photo' />
    </div>
  )
}

export default Topbar
