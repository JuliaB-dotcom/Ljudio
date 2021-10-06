import React, { useState, useEffect, useContext } from 'react'
import { PlayerContext } from '/src/contexts/PlayerContexts'

// props with a function to update song
function Player({ videoId }) {
  // load player when this component mounts
  useEffect(() => {
    loadPlayer()
  }, [])

  // run this every time videoId changes
  // useEffect(() => {
  //   if(videoId) {
  //     playSong(videoId)
  //   }
  // }, [videoId])

  const [player, setPlayer] = useState()
  const [context, updateContext] = useContext(PlayerContext)

  function loadPlayer() {
    let ytPlayer = new YT.Player('yt-player', {
      height: '0px',
      width: '0px',
      events: {
        'onStateChange': onPlayerStateChange,
        'onReady': (e) => {
          e.target.setVolume(1)
          setPlayer(e.target)
          updateContext({
            player: e.target
          })
        }
      }
    });
  }

  // this function triggers when we change song in player
  // can be used to update things, like counters
  function onPlayerStateChange(event) {
    if (event.data != YT.PlayerState.PLAYING) return
  }

  function playSong(videoId) {
    // console.log('Play song');
    // let videoId = 'dQw4w9WgXcQ';
    player.loadVideoById(videoId);
  }

  function pauseSong() {
    player.pauseVideo();
  }

  return (
    <div>
      <div id="yt-player"></div>
    </div>
  )
}

export default Player