import React, { useState, useEffect, useContext } from 'react'
import { PlayerContext } from '/src/contexts/PlayerContexts'
import '/src/CSS/MiniPlayer.css'
import { useHistory } from "react-router-dom"


// props with a function to update song
function Player({ videoId }) {
  // load player when this component mounts
  useEffect(() => {
    loadPlayer()
  }, [])
  let history = useHistory();
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
  //Shuffle attempt 1
  // let getRandom = function (min, max) {
  //   return Math.random() * (max - min) + min;
  // }

  // function shuffle() {

  //     let num = getRandom(0, 99);

  //     player.playVideoAt(num);
  //   }

  // this function triggers when we change song in player
  // can be used to update things, like counters
  function onPlayerStateChange(event) {
    if (event.data != YT.PlayerState.PLAYING) return
  }

  function playSong() {
    console.log(player.pauseVideo());
    player.playVideo();
  }

  function pauseSong() {
    console.log(player.pauseVideo());
    console.log(player.playVideo());
    player.pauseVideo();
  }

  return (

    <div>

      <div id="yt-player">

      </div>



      <div className="parent">

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <div className="songDiv123">

          <h1 className="songName" onClick={() => { history.push('/bigplayer') }}>Songname</h1>

        </div>

        <div className="playItems">

          <button type="button" className="shuffleButt">shuffle</button>

          <button className="prevButt"></button>

          <button className="pauseButt" onClick={pauseSong}></button>
          <button className="playButt" onClick={playSong}></button>


          <button className="nextButt"></button>
          <button type="button" className="loopButt">Loop</button>
        </div>



        <div className="playItems">



        </div>



        <div className="textButtons">

          <button className="playlist" onClick={() => { history.push('/playlist') }}>PLAYLIST</button>

          <button className="playlist" onClick={() => { history.push('/queue') }}>Queue</button>

          <button className="playlist">RANDOM</button>

        </div>

      </div>




    </div>


    // <div>

    //   <div id="yt-player"></div>



    //   <div>

    //     <button onClick={playSong}>Play</button>

    //     <button onClick={pauseSong}>Pause</button>

    //   </div>

    // </div>
  )
}

export default Player