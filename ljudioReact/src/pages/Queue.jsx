import React from 'react'
import '/src/Queue.css'

function Queue() {
  return (
    <div className="queueDiv">
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
