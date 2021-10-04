import "/src/OwnPlaylist.css"


function OwnPlaylist() {
  return (
    <div>
      <div className="playlistDiv">
        <div className="playlistNameDiv">
        <button> PlAYLIST NAME</button>
        </div>
      <div className="saveBtnDiv">
        <button>SAVE</button>
        </div>
        <div className="song1">
          <div className="songDiv">
            <p>Låt1</p>
          </div>
          <div className="changeBtns1">
        <button className="queueSong">+</button>
            <button className="removeSong">x</button>
          </div>
          {/* <button>-</button> */}
        </div>
        <div className="song2">
          <div className="songDiv">
            <p>Låt2</p>
          </div>
          <div className="changeBtns2">
          <button className="queueSong">+</button>
            <button className="removeSong">x</button>
            </div>
          {/* <button>-</button> */}
        </div>
    </div>
    </div>
  )
}

export default OwnPlaylist