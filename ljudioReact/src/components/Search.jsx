import React from 'react'
import { useState, useContext } from 'react'
import BigPlayer from '../pages/BigPlayer'
import { PlayerContext } from '/src/contexts/PlayerContexts'
import Queue from '../pages/Queue'

import '/src/CSS/Search.css'
function Search() {
  const [input, setInput] = useState('')
  const [songs, setSongs] = useState()
  const [currentVideoId, setCurrentVideoId] = useState()
  const [context, updateContext] = useContext(PlayerContext)


  function showDiv(song) {
    console.log(song);
    let buttonsDiv = document.getElementsByClassName("childTwo-2");
    console.log(buttonsDiv[0].style);
    if (buttonsDiv[0].style.display == "none") {
      buttonsDiv[0].style.setProperty("display", "block")
    }
    else {
      buttonsDiv[0].style.setProperty("display", "none")
    }
  }

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
  function triggerSearch(event) {
    if (event.key === 'Enter') {
      document.getElementsByClassName('searchBtn')[0].click();
    }
  }
  const [queue, setQueue] = useState()

  function sendSongToQueue(song) {
    context.queue.push(song);
    setQueue(context.queue);
    // console.log(context.queue);
    // return (
    //   <Queue songs={context.queue} />
    // )
    // // console.log(song);


    // // context.updateContext(song)
    // // setQueue(song)
    // console.log(context.queue);


  }

  return (
    <div className="parentOne">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className="parentOne">
        <div className="childOne-1">
          <input type="text" className="inputField" placeholder="Search" onChange={e => setInput(e.target.value)} onKeyPress={triggerSearch} />
          <button className="searchBtn" onClick={searchSong}></button>
          {songs && songs.map(song => (
            <div>
              <div className="songClick" key={song.videoId} onClick={() => songClick(song)}>{song.name}</div>
              <button className="addButton" onClick={() => showDiv(song)}>+</button>
              <div className="childTwo-2">
                {/* <button className="queueButton" onClick={() => sendSongToQueue(song)}>Queue</button> */}
                <button className="queueButton" onClick={() => sendSongToQueue(song)}>Queue</button>
                <button className="playlistButton">Playlist</button>
              </div>
            </div>
          ))}
        </div>
        <BigPlayer />
        {/*
        
        <div className="parentTwo">
          //  Song one 
          <div className="newSongDiv">
            <div className="childTwo-1">
              <a href="#">This is the greatest song</a>
            </div>
            <button onClick={showDiv}>+</button>
            <div className="childTwo-2">
              <button className="queueButton">Queue</button>
              <button className="playlistButton">Playlist</button>
            </div>
          </div>
          <button onClick={showDiv}>+</button>
          <div className="childTwo-2">
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
        </div>

          // Song two 
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
          <button onClick={showDiv}>+</button>
          <div className="childTwo-2">
            <button className="queueButton">Queue</button>
            <button className="playlistButton">Playlist</button>
          </div>
        </div>

          // Song three 
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
        </div>


          // Song four
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
        </div>


          // Song five
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
        </div>


          // Song six 
          <div className="newSongDiv">
            <div className="childTwo-1">
              <a href="#">crazy frog song is great</a>
            </div>
            <button onClick={showDiv}>+</button>
            <div className="childTwo-2">
              <button className="queueButton">Queue</button>
              <button className="playlistButton">Playlist</button>
            </div>
          </div>
        </div>

       </div> */}
      </div>
    </div >
  )
}

export default Search
