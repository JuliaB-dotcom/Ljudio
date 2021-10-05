import React from 'react'
import '/src/CSS/Search.css'

function Search() {

  function showDiv() {
    let buttonsDiv = document.getElementsByClassName("childTwo-2");
    console.log(buttonsDiv[0].style);
    if (buttonsDiv[0].style.display == "none") {
      buttonsDiv[0].style.setProperty("display", "block")
    }
    else {
      buttonsDiv[0].style.setProperty("display", "none")
    }
  }

  return (
    <div className="parentOne">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className="childOne-1">
        <input type="text" className="inputField" placeholder="Search" />
      </div>
      <div className="backDiv">
        <button className="backBtn"> </button>
      </div>
      <div className="parentTwo">

        {/* <div className="newSongDiv">
          <div className="childTwo-1">
            <a href="#">This is the greatest song</a>
          </div>
          <button onClick={showDiv}>+</button>
          <div className="childTwo-2">
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
        </div>

      
        <div className="newSongDiv">
          <div className="childTwo-1">
            <a href="#">Wow what a song this is</a>
          </div>
          <button onClick={showDiv}>+</button>
          <div className="childTwo-2">
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
        </div>

      
        <div className="newSongDiv">
          <div className="childTwo-1">
            <a href="#">Sing along to my song</a>
          </div>
          <button onClick={showDiv}>+</button>
          <div className="childTwo-2">
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
        </div>


      
        <div className="newSongDiv">
          <div className="childTwo-1">
            <a href="#">No ideas at all song</a>
          </div>
          <button onClick={showDiv}>+</button>
          <div className="childTwo-2">
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
        </div>


      
        <div className="newSongDiv">
          <div className="childTwo-1">
            <a href="#">lorem ipsum song wow</a>
          </div>
          <button onClick={showDiv}>+</button>
          <div className="childTwo-2">
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
        </div>


      
        <div className="newSongDiv">
          <div className="childTwo-1">
            <a href="#">crazy frog song is great</a>
          </div>
          <button onClick={showDiv}>+</button>
          <div className="childTwo-2">
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Search
