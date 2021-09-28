import { useState } from 'react'
//import Start from "./components/Start"
import MiniPlayer from './components/MiniPlayer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="baseDiv">

      <MiniPlayer />
    </div>
      
  )
}

export default App
