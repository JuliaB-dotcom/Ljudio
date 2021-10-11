import '/src/CSS/BigPlayer.css'
import React, { useState, useContext, useEffect, useRef } from 'react'
import { PlayerContext } from '/src/contexts/PlayerContexts'

function BigPlayer() {
  const [context, updateContext] = useContext(PlayerContext)
  // const [progress, setProgress] = useState(0)
  const [pauseUpdate, setPauseUpdate] = useState(false)
  const progressBar = useRef(); //reference to progressbar
  useEffect(() => {
    if (!context.player) return

   
    // useEffect(() => {
    //   const seconds = Math.floor{ player.current.duration };
    //   set
    // }
    // setInterval(() => {
    // let currentTime = context.player.getCurrentTime()
    let { duration,setDuration } = context.player.getDuration()
    // let playedPercent = (currentTime / duration) * 100

    // TODO: don't update when user is moving the slider
    //     setProgress(playedPercent)
    //   }, 100)
    // }, [context.player])

    // function changeSongPosition(e) {
    //   setProgress(e.target.value)

    //   let newPosition = context.player.getDuration() / e.target.value

    //   // change position in song
    //   context.player.seekTo(newPosition, true)
    // }
    return (

      <div className="bigPlayerDiv">

        <div className="btnDiv">
          <div className={styles.currentTime}>0:00</div>
          <div className="progressBar">
            <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} />
            <div className={styles.duration}>2:49</div>
            {/* <div className="progressBarLine">
            <input
              className="slider"
              value={progress}
              onChange={changeSongPosition}
              type="range"
              style={{ width: '100%' }}
            />
          </div> */}

          </div>
          {/* <button type="button" className="shuffle">shuffle</button>
        <button type="button" className="previous"></button>
        <button type="button" className="play"></button>
        <button type="button" className="next"></button>
        <button type="button" className="loop">Loop</button> */}
        </div>
      </div>
    
    )
  })
}

export default BigPlayer
