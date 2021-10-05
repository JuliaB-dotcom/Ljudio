import { useContext } from 'react'
import { PlayerContext } from './contexts/PlayerContexts'
import Start from "./components/Start"
import BigPlayer from "./pages/BigPlayer"
import Search from "./components/Search"
import MiniPlayer from './components/MiniPlayer'
//import Intro from './components/Intro'
import Queue from './pages/Queue'
import Playlist from "./pages/Playlist"
import OwnPlaylist from "./pages/OwnPlaylist"
import './CSS/App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


function App() {
  const [context, updateContext] = useContext(PlayerContext)

  return (
    <div className="baseDiv">
      <Router>
        {/* <nav>
          <Link to="/">Start</Link>
          {' | '}
          <Link to="/about">Bigplayer</Link>
          {' | '}
          <Link to="/product">OwnPlaylist</Link>
        </nav> */}

        <main>
          <Route path="/" component={Start} />
          <Route path="/queue" exact component={Queue} />
          <Route path="/bigplayer" exact component={BigPlayer} />
          <Route path="/playlist" exact component={Playlist} />
        </main>

        {/* update current song whenever the videoId changes */}
        {/* <Player /> */}

        {/* <Progressbar /> */}

        {/* <div>
          <input
            type="text"
            placeholder="search songs"
            onChange={e => setInput(e.target.value)}
          />
          <button onClick={searchSong}>Search</button>
          <hr />

          {songs && songs.map(song => (
            <div key={song.videoId} onClick={() => songClick(song)}>{song.name}</div>
          ))}
        </div> */}
      </Router>













      {/* 
      <MiniPlayer /> */}
      {/* <Search /> */}
      {/* <Start /> */}
      {/* <BigPlayer /> */}
      {/* <Start /> */}
      {/* <Start /> */}
      {/* <Intro/> */}
      {/* <Queue /> */}
      {/* <Playlist /> */}
      {/* <OwnPlaylist /> */}
    </div>

  )
}

export default App
