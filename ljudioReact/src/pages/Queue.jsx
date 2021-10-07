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

  function sendToQueue() {
    console.log("this works" + context.queue);
  }

  // function sendToQueue({ songs }) {
  //   return songs.map(song => (
  //     <h1>{song.name}</h1>
  //   ));
  // }
  return (
    <div className="queueDiv">




      {queue && queue.map(song => (
        <div>
          <div key={song.videoId} onClick={() => songClick(song)}>{song.name}</div>
        </div>
      ))}














      <button onClick={() => sendToQueue()}>seeQueue</button>
      <div className="queueMain">
        <p className="queueName">Queue</p>
        <div className="songDiv">
          <button className="song1">song</button>
          <button className="xButton">X</button>
        </div>
        <div className="songDiv">
          <button className="song1">song</button>
          <button className="xButton">X</button>
        </div>
        <div className="songDiv">
          <button className="song1">song</button>
          <button className="xButton">X</button>
        </div>
        <div className="songDiv">
          <button className="song1">song</button>
          <button className="xButton">X</button>
        </div>
        <div className="songDiv">
          <button className="song1">song</button>
          <button className="xButton">X</button>
        </div>

      </div>
    </div>
  )
}

export default Queue
