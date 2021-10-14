import React, { useState, useEffect, useContext } from 'react'
import { PlayerContext } from '/src/contexts/PlayerContexts'
import '/src/CSS/Player.css'
import { useHistory } from "react-router-dom"
import Search from "./Search"


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
  const [queue, setQueue] = useState()
  const [currentVideoId, setCurrentVideoId] = useState()
  // const [currentSong, setCurrentSong] = useState();

  useEffect(() => {
    if (!context.player) return

    setInterval(() => {
      let currentTime = context.player.getCurrentTime()
      let duration = context.player.getDuration()
      let playedPercent = currentTime * (100 / duration)

      // TODO: don't update when user is moving the slider
      if (playedPercent > 5) {
        if (context.queue.length == 0) {
          console.log("INPUTSONGS");
          nextInputSong();
        }
        else {
          console.log("QUEUESONGS")
          nextSong();

        }
      }
    }, 1000)
  }, [context.player])


  function loadPlayer() {
    let ytPlayer = new YT.Player('yt-player', {
      height: '0px',
      width: '0px',
      events: {
        'onStateChange': onPlayerStateChange,
        'onReady': (e) => {
          e.target.setVolume(10)
          setPlayer(e.target)
          updateContext({
            player: e.target
          }),

            getdurationandtime
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



  // function onPlayerPlaying(event) {

  //   if (event.data === YT.PlayerState.PLAYING) {

  //     let interval = setInterval(() => {

  //       let currentTime = context.player.getCurrentTime()
  //       let duration = context.player.getDuration()
  //       let playedPercent = currentTime * (100 / duration)


  //       if (playedPercent > 98) {
  //         console.log("halååå!", playedPercent);
  //         nextSong();

  //         clearInterval(interval);
  //       }
  //       context.player.setPlayer(interval);
  //     }, 1000)


  //   }
  // }

  function onPlayerStateChange(event) {
    // if (event.data !== YT.PlayerState.PLAYING) {

    //   let interval = setInterval(() => {

    //     let currentTime = context.player.getCurrentTime()
    //     let duration = context.player.getDuration()
    //     let playedPercent = currentTime * (100 / duration)


    //     if (playedPercent > 98) {
    //       console.log("halååå!", playedPercent);
    //       nextSong();

    //       clearInterval(interval);
    //     }

    //   }, 1000)


  }




  function getdurationandtime() {
    // if (context.player.getCurrentTime() > (context.player.getDuration() - 10)) {
    // }

    let interval = setInterval(() => {

      let currentTime = context.player.getCurrentTime()
      let duration = context.player.getDuration()
      let playedPercent = currentTime * (100 / duration)

      if (playedPercent > 90) {
        console.log("halååå!", playedPercent);
        nextSong();
        // document.getElementById('nextBtn').click();
        clearInterval(interval);
      }

    }, 1000)


    console.log("getduration: ", context.player.getDuration())
    console.log("getCurrentTime: ", context.player.getCurrentTime())
  }

  function playSong() {
    console.log(player.pauseVideo());
    if (context.currentSong !== null) {

      let interval = setInterval(() => {

        let currentTime = context.player.getCurrentTime()
        let duration = context.player.getDuration()
        let playedPercent = currentTime * (100 / duration)


        if (playedPercent > 99) {
          console.log("halååå!", playedPercent);
          nextSong();

          clearInterval(interval);
        }

      }, 1000)

      player.playVideo();
    }
  }

  function pauseSong() {
    console.log(player.pauseVideo());
    console.log(player.playVideo());
    player.pauseVideo();
  }

  function previousSong() {
    let songPlaying = context.currentSong;
    console.log("currentSong", context.currentSong);
    console.log("QueueArray", context.queue)
    let index = context.queue.indexOf(songPlaying);
    console.log(index);
    let addIndex = index - 1;
    let newSong = context.queue[addIndex];
    console.log(newSong);

    context.player.loadVideoById(newSong.videoId)
    updateContext({ currentSong: newSong });
    setCurrentVideoId(newSong.videoId);
  }

  function nextSong() {
    console.log("This is playing: ", context.currentSong);
    let songPlaying = context.currentSong;
    console.log("currentSong", context.currentSong);
    console.log("QueueArray", context.queue)
    let index = context.queue.indexOf(songPlaying);
    console.log(index);
    let addIndex = index + 1;
    let newSong = context.queue[addIndex];
    console.log(newSong);

    context.player.loadVideoById(newSong.videoId)
    context.currentSong = newSong;
    updateContext({ currentSong: newSong });
    setCurrentVideoId(newSong.videoId);
  }


  function nextInputSong() {
    // updateContext({ inputSongs });
    console.log("This is playing: ", context.currentSong);
    let songPlaying = context.currentSong;
    console.log("currentSong", context.currentSong);
    console.log("QueueArray", context.inputSongs)
    let index = context.inputSongs.indexOf(songPlaying);
    console.log(index);
    let addIndex = index + 1;
    let newSong = context.inputSongs[addIndex];
    console.log(newSong);

    context.player.loadVideoById(newSong.videoId)
    context.currentSong = newSong;
    updateContext({ currentSong: newSong });
    setCurrentVideoId(newSong.videoId);
  }

  function autoNext() {

    console.log("autoNext function helloo");

    let index = context.queue.indexOf();


  }
  // function queueLoop(queue) {


  //   queue.array.forEach(() => { console.log("hej forEach") }

  //   );

  // }



  return (


    <div>

      <div id="yt-player">

      </div>


      <div className="parent">

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <div className="songDiv123">
          <h1 className="songName" onClick={() => { history.push('/bigplayer') }}>{context.currentSong.name}</h1>
          <button onClick={getdurationandtime}>CLICK HERE</button>
        </div>

        <div className="playItems">

          <button type="button" className="shuffleButt">shuffle</button>

          <button className="prevButt" onClick={previousSong}></button>
          <button className="pauseButt" onClick={pauseSong}></button>
          <button className="playButt" onClick={playSong}></button>
          <button id="nextBtn" className="nextButt" onClick={nextSong}></button>

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

  )
}

export default Player