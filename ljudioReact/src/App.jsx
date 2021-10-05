import { useState } from 'react'
// import Start from "./components/Start"
// import BigPlayer from "./components/BigPlayer"
import Search from "./components/Search"
import MiniPlayer from './components/MiniPlayer'
//import Intro from './components/Intro'
// import Queue from './components/Queue'
// import Playlist from "./components/Playlist"
// import OwnPlaylist from "./components/OwnPlaylist"
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="baseDiv">

      {/* <Start /> */}
      {/* <BigPlayer /> */}
      <Search />
      <MiniPlayer />
      {/* <Start /> */}
      {/* <Intro/> */}
      {/* <Queue /> */}
      {/* <Playlist /> */}
      {/* <OwnPlaylist /> */}
    </div>

  )
}

export default App
