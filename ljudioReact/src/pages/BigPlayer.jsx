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
      let playedPercent = (currentTime / duration) * 100

      // TODO: don't update when user is moving the slider
      setProgress(playedPercent)
    }, 100)
  }, [context.player])

  function changeSongPosition(e) {
    setProgress(e.target.value)

    let newPosition = context.player.getDuration() / e.target.value

    // change position in song
    context.player.seekTo(newPosition, true)
  }
  return (

    <div className="bigPlayerDiv">
      <div className="videoDiv">
        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/mGeOehe3jIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="btnDiv">
        <div className="progressBar">
          <div className="progressBarLine">
            <input
              className="slider"
              value={progress}
              onChange={changeSongPosition}
              type="range"
              style={{ width: '100%' }}
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
