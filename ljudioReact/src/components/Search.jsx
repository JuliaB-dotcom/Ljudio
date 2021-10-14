import React from 'react'
import { useState, useContext } from 'react'
import { PlayerContext } from '/src/contexts/PlayerContexts'
import { useHistory } from "react-router-dom"
import '/src/CSS/Search.css'

function Search() {
  let history = useHistory();
  const [input, setInput] = useState('')
  const [songs, setSongs] = useState()
  const [currentVideoId, setCurrentVideoId] = useState()
  const [context, updateContext] = useContext(PlayerContext)
  const [queue, setQueue] = useState()

  //shows queue and playlist buttons
  function showDiv(song) {
    let buttonsDiv = document.getElementsByClassName("childTwo-2");
    if (buttonsDiv[0].style.display == "none") {
      buttonsDiv[0].style.setProperty("display", "block")
    }
    else {
      buttonsDiv[0].style.setProperty("display", "none")
    }
  }

  //fetch youtube api to get songs by user input
  async function searchSong() {
    let response = await fetch('https://yt-music-api.herokuapp.com/api/yt/songs/' + input)
    let result = await response.json()
    setSongs(result.content)
    context.inputSongs = result.content
  }

  //when clicking on a song, the song will play in player
  function songClick(song) {
    setCurrentVideoId(song.videoId)
    context.player.loadVideoById(song.videoId)
    context.currentSong = song;
    updateContext({ currentSong: song });
  }

  //trigger input search when clicking "ENTER" key
  function triggerSearch(event) {
    if (event.key === 'Enter') {
      document.getElementsByClassName('searchBtn')[0].click();
    }
  }


  function sendSongToQueue(song) {
    context.queue.push(song);
    setQueue(context.queue);
  }

  //when clicking on artist name, you will be redirected to the 
  //artist page with artist info by fetching the url + browseId
  async function artistClick(song) {
    let response = await fetch('https://yt-music-api.herokuapp.com/api/yt/artist/' + song.artist.browseId)
    let result = await response.json()
    context.artist = [];
    context.artist.push(result);
    history.push('/artistpage/' + song.artist.browseId);
  }

  return (
    <div className="parentOne">
      <div className="parentOne">
        <div className="childOne-1">
          <input type="text" className="inputField" placeholder="Search" onChange={e => setInput(e.target.value)} onKeyPress={triggerSearch} />
          <button className="searchBtn" onClick={searchSong}></button>
          {songs && songs.map(song => (
            <div>
              <div className="songClick" key={song.videoId} >
                <div onClick={() => songClick(song)}>
                  {song.name}
                </div>
                <div onClick={() => artistClick(song)}>
                  {song.artist.name}
                </div>
              </div>
              <button className="addButton" onClick={() => showDiv(song)}>+</button>
              <button className="queueButton" onClick={() => sendSongToQueue(song)}>Queue</button>
              <button className="playlistButton">Playlist</button>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Search
