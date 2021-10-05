import "/src/CSS/OwnPlaylist.css"


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

        <div className="songDiv1">
          <p>Låt1</p>
        </div>
        <div className="changeBtns1">
          <button className="queueSong">+</button>
          <button className="removeSong">x</button>
        </div>
        {/* <button>-</button> */}


        <div className="songDiv2">
          <p>Låt2</p>
        </div>
        <div className="changeBtns2">
          <button className="queueSong">+</button>
          <button className="removeSong">x</button>
        </div>
        {/* <button>-</button> */}

      </div>
    </div>
  )
}

export default OwnPlaylist