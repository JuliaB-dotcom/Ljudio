import '/src/CSS/BigPlayer.css'
import React, { useState, useContext, useEffect } from 'react'
import { PlayerContext } from '/src/contexts/PlayerContexts'

function BigPlayer() {
  const [context, updateContext] = useContext(PlayerContext)

  const [progress, setProgress] = useState(0)
  const [pauseUpdate, setPauseUpdate] = useState(false)

  useEffect(() => {
    if (!context.player) return

    setInterval(() => {
      let currentTime = context.player.getCurrentTime()
      let duration = context.player.getDuration()
      let playedPercent = currentTime * (100 / duration)

      // TODO: don't update when user is moving the slider
      if (playedPercent > 5) {
        console.log("HEJHEJ", playedPercent);
      }
      setProgress(playedPercent)
    }, 1000)
  }, [context.player])

  function changeSongPosition(e) {
    setProgress(e.target.value)

    let newPosition = context.player.getDuration() * (e.target.value / 100)
    console.log(newPosition)
    // change position in song
    context.player.seekTo(newPosition, true)
  }
  return (

    <div className="bigPlayerDiv">
      {/* <div className="albumImg" style={{ backgroundImage: `url(${context.album[0].thumbnails[0].url})` }}>
        </div> */}
      <div className="btnDiv">
        <div className="progressBar">
          <div className="progressBarLine">

            <input
              className="slider"
              // step="0.01"
              value={progress}
              // min="1"
              // max="100"
              onChange={changeSongPosition}
              type="range"
              style={{ width: '250%' }}
            />
          </div>

        </div>
        {/* <button type="button" className="shuffle">shuffle</button>
        <button type="button" className="previous"></button>
        <button type="button" className="play"></button>
        <button type="button" className="next"></button>
        <button type="button" className="loop">Loop</button> */}
      </div>
    </div>
  )
}

export default BigPlayer
