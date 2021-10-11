import React from 'react'
import { useState, useContext } from 'react'
import '/src/ArtistPage.css'
import Search from './Search'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '/src/contexts/PlayerContexts'

function ArtistPage() {
  let { browseId } = useParams()
  const [context, updateContext] = useContext(PlayerContext)

  // const [artist, setArtist] = useState()

  // getArtistName();

  console.log(browseId);
  // function getArtistName() {
  //   // let response = await fetch('https://yt-music-api.herokuapp.com/api/yt/artist/' + browseId)
  //   // let result = await response.json()
  //   // console.log(result);
  //   console.log(context.artist);
  //   console.log(context.artist[0].name);
  //   // setArtist(result);
  // }
  return (
    <div className="artistPageMainDiv">
      <div className="artistImgAndName">
        {/* <img src="/src/image/testImage.png" alt="" /> */}
        {/* <div className="artistName"> */}
        <h1>{context.artist[0].name}</h1>
        {/* </div> */}
      </div>
      <div className="songsDiv">
        <h1>Songs</h1>
        <button>Share</button>
      </div>
      <div className="artistsSongs">
        <p>{context.artist[0].products.songs.content[0].name}</p>
        <p>Here goes all the songs</p>
        <p>Here goes all the songs</p>
        <p>Here goes all the songs</p>
      </div>
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
