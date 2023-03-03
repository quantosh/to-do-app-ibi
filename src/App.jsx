import { Routes, Route } from 'react-router-dom'
import Controller from './components/controller'
import Home from './pages/Home'
import Loginscreen from './pages/LoginScreen'
import { AppProvider } from './Context/AppProvider'
import NotFoundPage from './pages/NotFoundPage'

function App () {
  return (
    <div className='w-screen h-screen bg-[url("https://grepitout.com/wp-content/uploads/2017/10/Mountain.jpg")] bg-cover'>
      <AppProvider>
        <Routes>
          <Route path='/' element={<Loginscreen />} />
          <Route element={<Home />}>
            <Route path='/Home' element={<Controller />} />
          </Route>
          <Route element={<NotFoundPage />}>
            <Route path='*' element={<Home />} />
          </Route>
        </Routes>
      </AppProvider>
    </div>
  )
}

export default App
