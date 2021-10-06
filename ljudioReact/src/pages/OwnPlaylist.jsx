import "/src/CSS/OwnPlaylist.css"


function OwnPlaylist() {
  return (
    <div className="OwnPlaylistDiv">
      <div className="playlistDiv1">
        <div className="playlistNameDiv">
          <button className="playListNameBtn"> PLAYLIST NAME</button>
      </div>

        <div className="saveBtnDiv">
          <button>SAVE</button>
        </div>

        <div className="songDiv1">
          <p>Låt1</p>
          <button className="queueSong">+</button>
          <button className="removeSong">x</button>
        </div>
        {/* <button>-</button> */}

        <div className="songDiv1">
          <p>Låt2</p>
          <button className="queueSong">+</button>
          <button className="removeSong">x</button>
        </div>
    
        {/* <button>-</button> */}

        <div className="songDiv1">
          <p>Låt3</p>
          <button className="queueSong">+</button>
          <button className="removeSong">x</button>
        </div>

        {/* <button>-</button> */}

        <div className="songDiv1">
          <p>Låt4</p>
          <button className="queueSong">+</button>
          <button className="removeSong">x</button>
        </div>

        {/* <button>-</button> */}
      </div>
    </div>
  )
}

export default OwnPlaylist