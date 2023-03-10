import GoogleButton from 'react-google-button'
import React, { useContext } from 'react'
import 'firebaseui/dist/firebaseui.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { AppContext } from '../Context/AppProvider'

function Loginscreen () {
  const { setUserData } = useContext(AppContext)
  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        // eslint-disable-next-line no-unused-vars
        const user = result.user
        const { displayName, email, photoURL, emailVerified, uid } = user
        setUserData({
          uid,
          displayName,
          email,
          photoURL,
          emailVerified
        })
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error)
        window.location.reload()
      })
  }

  const style = {
    mainContainer: 'flex p-2 w-full h-full items-center justify-center content-center',
    loginContainer: ''
  }

  return (
    <div>
      <div className={style.mainContainer}>
        <div className={style.loginContainer}>
          <div className='p-4 center text-black bg-white border border-white rounded-xl shadow-xl'>
            <div>
              <form className=''>
                <div className='mb-3 text-center'>
                  <a href='' className='flex items-center justify-center'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png' className='h-6 mr-2 sm:h-10' alt='To do app - Logo' />
                    <span className='self-center text-l font-semibold whitespace-nowrap'>To Do App</span>
                  </a>
                </div>
                <div className='mb-4'>
                  <GoogleButton
                    type='dark'
                    onClick={handleLogin}
                  />
                </div>
                <div className='text-sm text-center mb-4'>
                  ------------------- or --------------------
                </div>
                <div className='mb-4'>
                  <input className='text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
                </div>
                <div className='mb-2'>
                  <input className='text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='Password' />
                </div>
                <div className='items-center justify-between'>
                  <button className='text-sm w-full bg-yellow-400 hover:bg-yellow-400/90 py-2 rounded focus:outline-none focus:shadow-outline' href='https://google.com' type='button'>
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='flex justify-between mt-4 text-sm'>
            <a className='text-white shadow hover:text-yellow-400 drop-shadow-md' href='#'>
              Sign up
            </a>
            <a className='text-white shadow hover:text-yellow-400 drop-shadow-xl' href='#'>
              Forgot Password?
            </a>
          </div>
          <div />
        </div>
      </div>
    </div>
  )
}

export default Loginscreen
