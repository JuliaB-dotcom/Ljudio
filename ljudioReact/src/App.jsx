import { useState } from 'react'
import Start from "./components/Start"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="baseDiv">

      <Start />
    </div>
      
  )
}

export default App
