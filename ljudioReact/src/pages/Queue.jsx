import React from 'react'
import '/src/CSS/Queue.css'
import Search from '../components/Search'
import { useState, useContext } from 'react'
import { PlayerContext } from '/src/contexts/PlayerContexts'

function Queue() {
  const [input, setInput] = useState('')
  // const [songs, setSongs] = useState()
  const [currentVideoId, setCurrentVideoId] = useState()
  const [context, updateContext] = useContext(PlayerContext)
  const [queue, setQueue] = useState()
  const [currentSong, setCurrentSong] = useState();

  function sendToQueue() {
    setQueue(context.queue);
  }

  function removeSong(song) {
    let index = context.queue.indexOf(song);
    context.queue.splice(index, 1);
  }

  // function playSongFromQueue(song) {
  //   //songClick(song);
  //   let index = context.queue.indexOf(song);
  //   context.currentSong = [];
  //   context.currentSong.push(context.queue[index]);
  //   // context.currentSong.push(song)
  //   console.log("this is in queue:", context.currentSong[0].name);

  // }
  function playSongFromQueue(song) {
    setCurrentVideoId(song.videoId)
    context.player.loadVideoById(song.videoId)
    console.log(context.queue);
    console.log(context.queue.indexOf(song));
    context.currentSong = []
    context.currentSong.push(song);
  }

  function nextSong() {
    console.log("thisiscurrentsong", context.currentSong);
    let songPlaying = context.currentSong[0];
    console.log("hello", songPlaying);
    let thisSongIndex = context.queue.indexOf(songPlaying);
    let nextSongIndex = context.queue[thisSongIndex + 1]
    context.player.loadVideoById(nextSongIndex.videoId)
    setCurrentSong(context.currentSong)
    setCurrentVideoId(nextSongIndex.videoId);
  }
  return (
    <div className="queueDiv">
      <button onClick={() => sendToQueue()}>seeQueue</button>
      <div className="queueMain">
        <p className="queueName">Queue</p>
        {queue && queue.map(song => (
          <div className="songDiv">
            <button className="song1" key={song.name} onClick={() => playSongFromQueue(song)}>{song.name}</button>
            <button className="xButton" onClick={() => removeSong(song)}>X</button>
          </div>
        ))}
        <button onClick={() => nextSong()}>nextSong</button>
      </div>
    </div>
  )
}

export default Queue
