import { useState } from 'react'
import Start from "./components/Start"
import BigPlayer from "./components/BigPlayer"
import './App.css'
import './BigPlayer.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="baseDiv">

      {/* <Start /> */}
      <BigPlayer />
    </div>

  )
}

export default App
