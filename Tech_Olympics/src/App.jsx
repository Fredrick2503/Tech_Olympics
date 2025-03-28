import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Outlet,Route,Routes } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<p >hello world</p>}>
      
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
