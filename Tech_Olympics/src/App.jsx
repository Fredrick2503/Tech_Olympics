import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Outlet,Route,Routes } from 'react-router'
import Home from './pages/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}>
      
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
