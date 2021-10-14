import React, { useState, useEffect, useContext } from 'react'
import { PlayerContext } from '/src/contexts/PlayerContexts'
import '/src/CSS/Player.css'
import { useHistory } from "react-router-dom"

function Player({ videoId }) {

  //useEffect is called everytime component is rendered
  useEffect(() => {
    loadPlayer()
  }, [])

  let history = useHistory();
  const [player, setPlayer] = useState()
  const [context, updateContext] = useContext(PlayerContext)
  const [currentVideoId, setCurrentVideoId] = useState()

  //checks playedPercent to call next song functions at the end of a song
  useEffect(() => {
    if (!context.player) return

    setInterval(() => {
      let currentTime = context.player.getCurrentTime()
      let duration = context.player.getDuration()
      let playedPercent = currentTime * (100 / duration)
      if (playedPercent > 98) {
        if (context.queue.length == 0) {
          nextInputSong();
        }
        else {
          nextSong();
        }
      }
    }, 1000)
  }, [context.player])

  //load youtube player
  function loadPlayer() {
    let ytPlayer = new YT.Player('yt-player', {
      height: '0px',
      width: '0px',
      events: {
        'onReady': (e) => {
          e.target.setVolume(10)
          setPlayer(e.target)
          updateContext({
            player: e.target
          })
        }
      }
    });
  }

  function playSong() {
    player.playVideo();
  }

  function pauseSong() {
    player.pauseVideo();
  }

  function previousSong() {
    let songPlaying = context.currentSong;
    let index = context.queue.indexOf(songPlaying);
    let removeIndex = index - 1;
    let newSong = context.queue[removeIndex];
    context.player.loadVideoById(newSong.videoId)
    updateContext({ currentSong: newSong });
    setCurrentVideoId(newSong.videoId);
  }

  function nextSong() {
    let songPlaying = context.currentSong;
    let index = context.queue.indexOf(songPlaying);
    let addIndex = index + 1;
    let newSong = context.queue[addIndex];
    context.player.loadVideoById(newSong.videoId)
    context.currentSong = newSong;
    updateContext({ currentSong: newSong });
    setCurrentVideoId(newSong.videoId);
  }

  //same as nextSong, but using inputSong (user input in search) array instead
  function nextInputSong() {
    let songPlaying = context.currentSong;
    let index = context.inputSongs.indexOf(songPlaying);
    let addIndex = index + 1;
    let newSong = context.inputSongs[addIndex];
    context.player.loadVideoById(newSong.videoId)
    context.currentSong = newSong;
    updateContext({ currentSong: newSong });
    setCurrentVideoId(newSong.videoId);
  }

  //part of the shuffle function
  let getRandom = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  function shuffleSongs() {
    let num = Math.round(getRandom(0, context.inputSongs.length));
    let playThisSong = context.inputSongs[num];
    setCurrentVideoId(playThisSong.videoId);
    context.player.loadVideoById(playThisSong.videoId);
  }

  return (
    <div>
      <div id="yt-player">
      </div>
      <div className="parent">
        <div className="songDiv123">
          <h1 className="songName" onClick={() => { history.push('/bigplayer') }}>{context.currentSong.name}</h1>
        </div>
        <div className="playItems">
          <button type="button" className="shuffleButt" onClick={shuffleSongs}>shuffle</button>
          <button className="prevButt" onClick={previousSong}></button>
          <button className="pauseButt" onClick={pauseSong}></button>
          <button className="playButt" onClick={playSong}></button>
          <button id="nextBtn" className="nextButt" onClick={nextSong}></button>
          <button id="loopBtn" type="button" className="loopButt">Loop</button>
        </div>
        <div className="playItems">
        </div>
        <div className="textButtons">
          {/* use router to route to a new component */}
          <button className="playlist" onClick={() => { history.push('/playlist') }}>PLAYLIST</button>
          <button className="playlist" onClick={() => { history.push('/queue') }}>Queue</button>
          <button className="playlist">RANDOM</button>
        </div>
      </div>
    </div>
  )
}

export default Player