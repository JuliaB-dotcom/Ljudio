import { useState } from 'react'
// import Start from "./components/Start"
// import BigPlayer from "./components/BigPlayer"
// import Search from "./components/Search"
//import MiniPlayer from './components/MiniPlayer'
import Search from "./components/Search"
import ArtistPage from './components/ArtistPage'
//import Intro from './components/Intro'
import Queue from './pages/Queue'
import Playlist from "./pages/Playlist"
import OwnPlaylist from "./pages/OwnPlaylist"
import './CSS/App.css'
// import Progressbar from './pages/Progressbar'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


function App() {
  const [context, updateContext] = useContext(PlayerContext)
  const [input, setInput] = useState('')
  const [songs, setSongs] = useState()
  const [currentVideoId, setCurrentVideoId] = useState()


  async function searchSong() {
    let response = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/' + input)
    let result = await response.json()
    console.log(result.content)
    setSongs(result.content)
  }

  function songClick(song) {
    console.log(song.name);
    setCurrentVideoId(song.videoId)

    context.player.loadVideoById(song.videoId)
  }
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
          {/* <Progressbar /> */}
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
      <Search />
      <ArtistPage />
      {/*<MiniPlayer />*/}
      {/* <Start /> */}
      {/* <Intro/> */}
      {/* <Queue /> */}
      {/* <Playlist /> */}
      {/* <OwnPlaylist /> */}
    </div>

  )
}

export default App
