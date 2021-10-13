import React from 'react'
import '/src/CSS/Queue.css'
import { useState, useContext } from 'react'
import { PlayerContext } from '/src/contexts/PlayerContexts'

function Queue() {
  const [currentVideoId, setCurrentVideoId] = useState()
  const [context, updateContext] = useContext(PlayerContext)

  function sendToQueue() {
    setQueue(context.queue);
  }

  function removeSong(song) {
    console.log(song);
    let index = context.queue.indexOf(song);
    context.queue.splice(index, 1);
  }

  function playSongFromQueue(song) {
    setCurrentVideoId(song.videoId)
    context.player.loadVideoById(song.videoId)
    console.log(context.queue);
    console.log(context.queue.indexOf(song));
    updateContext({ currentSong: song });
    // getdurationandtime();

  }

  // function nextSong() {
  //   console.log("This is playing: ", context.currentSong);
  //   let songPlaying = context.currentSong;
  //   console.log("currentSong", context.currentSong);
  //   console.log("QueueArray", context.queue)
  //   let index = context.queue.indexOf(songPlaying);
  //   console.log(index);
  //   let addIndex = index + 1;
  //   let newSong = context.queue[addIndex];
  //   console.log(newSong);

  //   context.player.loadVideoById(newSong.videoId)
  //   updateContext({ currentSong: newSong });
  //   setCurrentVideoId(newSong.videoId);
  // }

  // function getdurationandtime() {
  //   // if (context.player.getCurrentTime() > (context.player.getDuration() - 10)) {
  //   // }

  //   let interval = setInterval(() => {

  //     let currentTime = context.player.getCurrentTime()
  //     let duration = context.player.getDuration()
  //     let playedPercent = currentTime * (100 / duration)

  //     if (playedPercent > 90) {
  //       console.log("halååå!", playedPercent);
  //       nextSong();
  //       getdurationandtime();
  //       nextSong();
  //       // document.getElementById('nextBtn').click();
  //       clearInterval(interval);
  //     }

  //   }, 1000)
  // }

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
