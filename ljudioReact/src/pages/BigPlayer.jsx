import '/src/CSS/BigPlayer.css'
import React, { useState, useContext, useEffect } from 'react'
import { PlayerContext } from '/src/contexts/PlayerContexts'

function BigPlayer() {

  const [context, updateContext] = useContext(PlayerContext)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!context.player) return

    setInterval(() => {
      let currentTime = context.player.getCurrentTime()
      let duration = context.player.getDuration()
      let playedPercent = currentTime * (100 / duration)

      setProgress(playedPercent)
    }, 1000)
  }, [context.player])


  function changeSongPosition(e) {
    setProgress(e.target.value)
    let newPosition = context.player.getDuration() * (e.target.value / 100)
    console.log(newPosition)
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
              value={progress}
              onChange={changeSongPosition}
              type="range"
              style={{ width: '250%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigPlayer
