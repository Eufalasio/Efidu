import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Register'
import SlidingCover from './SlidingCover'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SlidingCover/>
      <Register/>
    </>
  )
}

export default App
