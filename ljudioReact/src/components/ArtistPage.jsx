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

  function songClick(videoId) {
    setCurrentVideoId(videoId)
    context.player.loadVideoById(videoId)
  }

  return (
    <div className="artistPageMainDiv">
      <div className="artistImgAndName" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/lvljPphlOujSX0U4nt-RM2dKJNtJnLhtRuf1QdPRmU4ci1eCAtDV8Xne2NU02Y6UHoa5tGO15ZNOhIE=w1440-h600-p-l90-rj')" }}>
        {/* <img src="/src/image/testImage.png" alt="" /> */}
        {/* <div className="artistName"> */}
        <h1>{context.artist[0].name}</h1>
        {/* </div> */}
      </div>
      <div className="songsDiv">
        <h1>Songs</h1>
        <button>Share</button>
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
