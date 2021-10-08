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
    setQueue(context.queue);
  }

  function removeSong(song) {
    let index = context.queue.indexOf(song);
    context.queue.splice(index, 1);
  }
  return (
    <div className="queueDiv">
      <button onClick={() => sendToQueue()}>seeQueue</button>
      <div className="queueMain">
        <p className="queueName">Queue</p>
        {queue && queue.map(song => (
          <div className="songDiv">
            <button className="song1" key={song.name} onClick={() => songClick(song)}>{song.name}</button>
            <button className="xButton" onClick={() => removeSong(song)}>X</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Queue
