import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'

const App = () => {
  const [count, setCount] = useState(0)
  const nombre = "Atropellaviejitas3000"

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2 className='mt-4 mb-3'> Author: {nombre} </h2>
      <Count inicial={0} incremento={2} />
    </>
  )
}

export default App
