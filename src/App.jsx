import { AppProvider } from './Context/AppProvider'
import Router from './router/router'

function App () {
  return (
    <div className='w-screen h-screen bg-[url("https://grepitout.com/wp-content/uploads/2017/10/Mountain.jpg")] bg-cover'>
      <AppProvider>
        <Router />
      </AppProvider>
    </div>
  )
}

export default App
