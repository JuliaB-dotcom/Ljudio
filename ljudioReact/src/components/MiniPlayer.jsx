
import '/src/MiniPlayer.css'
function MiniPlayer() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="parent">
        <div className="songDiv">
        <h1 className="songName">Songname</h1>
        </div>
      <div className="playItems">
      <button className="prevButt" onclick="{}"></button>
      <button className="playButt" onclick="{}"></button>
          <button className="nextButt" onclick="{}"></button>
          </div>
          
        <div className="textButtons">
          <button className="playlist" onclick="{}">PLAYLIST</button>
          <button className="playlist" onclick="{}">Queu</button>
          <button className="playlist" onclick="{}">RANDOM</button>
        </div>
      
      </div>  
  </div>
)
}
export default MiniPlayer