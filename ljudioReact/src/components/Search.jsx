import React from 'react'
import '/src/Search.css'

function Search() {
  return (
    <div>
      <div className="searchBar">
        <input type="text" className="inputField" placeholder="Search" />
        <div className="searchResultsDiv">
          <div className="addToButtons">
            <a href="#">This is the greatest song</a>
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
          <div className="addToButtons">
            <a href="#">Wow what a song this is</a>
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
          <div className="addToButtons">
            <a href="#">Sing along to my song</a>
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
          <div className="addToButtons">
            <a href="#">No ideas at all song</a>
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
          <div className="addToButtons">
            <a href="#">lorem ipsum song wow</a>
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
          <div className="addToButtons">
            <a href="#">crazy frog song is great</a>
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Search
