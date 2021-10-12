import React from 'react'
import { useState, useContext } from 'react'
import '/src/ArtistPage.css'
import Search from './Search'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '/src/contexts/PlayerContexts'

function ArtistPage() {
  let { browseId } = useParams()
  const [context, updateContext] = useContext(PlayerContext)
  const [currentVideoId, setCurrentVideoId] = useState()
  console.log(browseId);
  console.log(context.artist);
  console.log(context.artist[0].thumbnails[0].url);

  function songClick(videoId) {
    setCurrentVideoId(videoId)
    context.player.loadVideoById(videoId)
  }

  async function shareArtist() {

  }
  function showShare() {
    let shareDiv = document.getElementsByClassName("sharePlatform");
    console.log(shareDiv[0].style.display);
    if (shareDiv[0].style.display == "none") {
      shareDiv[0].style.setProperty("display", "block")
    }
    else {
      shareDiv[0].style.setProperty("display", "none")
    }
  }

  return (
    <div className="artistPageMainDiv">
      <div className="artistImgAndName" style={{ backgroundImage: `url(${context.artist[0].thumbnails[0].url})` }}>
        {/* <img src="/src/image/testImage.png" alt="" /> */}
        {/* <div className="artistName"> */}
        <h1>{context.artist[0].name}</h1>
        {/* </div> */}
      </div>
      <div className="songsDiv">
        <h1>Songs</h1>
        <button onClick={showShare}>Share</button>
        <div className="sharePlatform">
          <ul>

            <li><a href={"https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.youtube.com%2Fchannel%2F" + browseId}>Facebook</a></li>
            <li><a href={"https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2F" + browseId}>Twitter</a></li>
            <li><a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2F" + browseId}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      {context.artist[0].products.songs.content.map(artistsong => (
        <div className="artistsSongs" onClick={() => songClick(artistsong.videoId)}>
          {artistsong.name}
        </div>
      ))}
      <h1 className="aboutH1">About</h1>
      <div className="aboutTextDiv">
        <p>
          {context.artist[0].description}
        </p>
      </div>

    </div>
  )
}

export default ArtistPage
