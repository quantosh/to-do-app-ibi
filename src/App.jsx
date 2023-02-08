import { Routes, Route } from 'react-router-dom'
import Controller from './components/controller'
import Home from './pages/Home'
import Loginscreen from './pages/LoginScreen'
import { AppProvider } from './Context/AppProvider'

function App () {
  return (
    <div className='p-10 w-screen h-screen bg-[url("https://grepitout.com/wp-content/uploads/2017/10/Mountain.jpg")] bg-cover'>
      <AppProvider>
        <Routes>
          <Route path='/' element={<Loginscreen />} />
          <Route element={<Home />}>
            <Route path='/Home' element={<Controller />} />
          </Route>
        </Routes>
      </AppProvider>
    </div>
  )
}

export default App
