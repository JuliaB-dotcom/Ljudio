
import '/src/MiniPlayer.css'
function MiniPlayer() {
  return (
    <div className="parent">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className="songDiv123">
        <h1 className="songName">Songname</h1>
      </div>
      <div className="playItems">
        <button className="prevButt" onclick="{}"></button>
        <button className="playButt" onclick="{}"></button>
        <button className="nextButt" onclick="{}"></button>
      </div>

      <div className="textButtons">
        <button className="playlist" onclick="{}">PLAYLIST</button>
        <button className="playlist" onclick="{}">Queue</button>
        <button className="playlist" onclick="{}">RANDOM</button>
      </div>
    </div>
  )
}
export default MiniPlayer