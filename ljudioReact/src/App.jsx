import { useState } from 'react'
// import Start from "./components/Start"
//import Search from "./components/Search"
import './App.css'
import './BigPlayer.css'
import MiniPlayer from './components/MiniPlayer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="baseDiv">
      <MiniPlayer />
      {/* <Start /> */}
    </div>

  )
}

export default App
