import React from 'react'
import '/src/CSS/Queue.css'
import { useState, useContext } from 'react'
import { PlayerContext } from '/src/contexts/PlayerContexts'

function Queue() {
  const [currentVideoId, setCurrentVideoId] = useState()
  const [context, updateContext] = useContext(PlayerContext)

  function removeSong(song) {
    let index = context.queue.indexOf(song);
    context.queue.splice(index, 1);
  }

  function playSongFromQueue(song) {
    setCurrentVideoId(song.videoId)
    context.player.loadVideoById(song.videoId)
    updateContext({ currentSong: song });
  }

  return (
    <div className="queueDiv">
      <div className="queueMain">
        <p className="queueName">Queue</p>
        {context.queue && context.queue.map(song => (
          <div className="songDiv">
            <button className="song1" key={song.name} onClick={() => playSongFromQueue(song)}>{song.name}</button>
            <button className="xButton" onClick={() => removeSong(song)}>X</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Queue
