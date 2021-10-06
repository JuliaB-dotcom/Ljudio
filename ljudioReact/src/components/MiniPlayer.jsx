
import '/src/CSS/MiniPlayer.css'
import { useHistory } from "react-router-dom"
function MiniPlayer() {
  let history = useHistory();

  return (
    <div className="parent">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className="songDiv123">
        <h1 className="songName" onClick={() => { history.push('/bigplayer') }}>Songname</h1>
      </div>
      <div className="playItems">
        <button className="prevButt" onclick="{}"></button>
        <button className="playButt" onclick="{}"></button>
        <button className="nextButt" onclick="{}"></button>
      </div>

      <div className="textButtons">
        <button className="playlist" onClick={() => { history.push('/playlist') }}>PLAYLIST</button>
        <button className="playlist" onClick={() => { history.push('/queue') }}>Queue</button>
        <button className="playlist" onclick="{}">RANDOM</button>
      </div>
    </div>
  )
}
export default MiniPlayer