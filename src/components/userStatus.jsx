import { useContext } from 'react'
import { AppContext } from '../Context/AppProvider'

function UserStatus () {
  const { appState } = useContext(AppContext)
  const { photoURL, displayName, email } = appState?.userData

  return (
    <div className='flex mb-4'>
      <div className=''>
        <img className='w-10 h-10 rounded-full ' src={photoURL} alt='user photo' referrerPolicy='no-referrer' />
      </div>
      <div className='h-10 flex flex-col justify-center align-center'>
        <div className='ml-3 text-xs'>
          <p>{displayName}</p>
        </div>
        <div className='ml-3 text-xs text-gray-400'>
          <p>{email}</p>
        </div>
      </div>
    </div>
  )
}

export default UserStatus
