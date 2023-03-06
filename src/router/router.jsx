import { useEffect, useContext, useState } from 'react'
import { AppContext } from '../Context/AppProvider'
import { Routes, Route } from 'react-router-dom'
import Controller from '../components/controller'
import Home from '../pages/Home'
import Loginscreen from '../pages/LoginScreen'
import NotFoundPage from '../pages/NotFoundPage'
import { getAuth } from 'firebase/auth'

const Router = () => {
  const { setUserData } = useContext(AppContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const auth = getAuth()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL, emailVerified, uid } = user
        setUserData({
          uid,
          displayName,
          email,
          photoURL,
          emailVerified
        })
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
  }, [auth])

  return (
    <Routes>
      {isLoggedIn
        ? (
          <>
            <Route element={<Home />}>
              <Route path='/' element={<Controller />} />
            </Route>
            <Route element={<NotFoundPage />}>
              <Route path='*' element={<Home />} />
            </Route>
          </>
          )
        : (
          <Route path='/' element={<Loginscreen />} />
          )}

    </Routes>
  )
}

export default Router
