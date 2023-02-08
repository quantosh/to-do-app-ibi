import GoogleButton from 'react-google-button'
import React, { useState, useEffect, useContext } from 'react'
import 'firebaseui/dist/firebaseui.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { AppContext } from '../Context/AppProvider'

function Loginscreen () {
  const { setUserData } = useContext(AppContext)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // Redirect to main page
        // ...
      }
    })
    console.log(error, loading)
  }, [auth])

  const handleLogin = () => {
    setLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        // eslint-disable-next-line no-unused-vars
        const user = result.user
        const { displayName, email, photoURL, emailVerified } = user
        setUserData({
          displayName,
          email,
          photoURL,
          emailVerified
        })
        console.log(user)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        setError(error.message)
        setLoading(false)
      })
  }

  return (
    <div className='flex items-center justify-center m-auto'>
      <div className='bg-white shadow-md p-4 center rounded'>
        <div>
          <form className=''>
            <div className='mb-3 text-center'>
              Task Manager
            </div>
            <div className='mb-4'>
              <GoogleButton
                type='dark'
                onClick={handleLogin}
              />
            </div>
            <div className='text-sm text-center mb-2'>
              or
            </div>
            <div className='mb-4'>
              <input className='text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' />
            </div>
            <div className='mb-2'>
              <input className='text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='Password' />
            </div>
            <div className='items-center justify-between mb-4'>
              <button className='text-sm w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='flex justify-between mt-4 text-sm'>
        <a className='inline-block align-baseline text-blue-500 hover:text-blue-800' href='#'>
          Sign up
        </a>
        <a className='inline-block align-baseline text-blue-500 hover:text-blue-800' href='#'>
          Forgot Password?
        </a>
      </div>
    </div>
  )
}

export default Loginscreen
