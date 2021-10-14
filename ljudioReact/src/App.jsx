import Start from "./components/Start"
import BigPlayer from "./pages/BigPlayer"
import Queue from './pages/Queue'
import './CSS/App.css'
import ArtistPage from './components/ArtistPage'
import Player from './components/Player'
import Playlist from "./pages/Playlist"

//use router to connect components and route between them
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


function App() {
  return (
    <div className="baseDiv">
      <Router>
        <Player />
        <main>
          <Route path="/" component={Start} />
          <Route path="/queue" exact component={Queue} />
          <Route path="/bigplayer" exact component={BigPlayer} />
          <Route path="/playlist" exact component={Playlist} />
          <Route path="/artistpage" exact component={ArtistPage} />
          <Route path="/artistpage/:browseId" exact component={ArtistPage} />
        </main>
      </Router>
    </div>
  )
}

export default App
