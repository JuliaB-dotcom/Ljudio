import { useState } from 'react'
// import Start from "./components/Start"
import BigPlayer from "./components/BigPlayer"
// import Search from "./components/Search"
//import MiniPlayer from './components/MiniPlayer'
//import Search from "./components/Search"
//import Intro from './components/Intro'
import './App.css'
import './BigPlayer.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="baseDiv">

      {/* <Start /> */}
      <BigPlayer />
      {/*<Search />*/}
      {/*<MiniPlayer />*/}
      {/* <Start /> */}
      {/* <Intro/> */}
    </div>

  )
}

export default App
