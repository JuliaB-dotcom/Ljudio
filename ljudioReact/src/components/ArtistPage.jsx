import React from 'react'
import '/src/ArtistPage.css'
import Search from './Search'
import { useParams } from 'react-router-dom'
function ArtistPage() {
  let { browseId } = useParams()

  console.log(browseId);
  async function getArtistName() {
    let response = await fetch('https://yt-music-api.herokuapp.com/api/yt/artist/' + browseId)
    let result = await response.json()
    console.log(result);
  }
  return (
    <div className="artistPageMainDiv">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="artistImgAndName">
        {/* <img src="/src/image/testImage.png" alt="" /> */}
        {/* <div className="artistName"> */}
        <h1>ArtistName</h1>
        {/* </div> */}
      </div>
      <div className="songsDiv">
        <h1>Songs</h1>
        <button>Share</button>
        <button onClick={getArtistName}>getArtistName</button>
      </div>
      <div className="artistsSongs">
        <p>Here goes all the songs</p>
        <p>Here goes all the songs</p>
        <p>Here goes all the songs</p>
        <p>Here goes all the songs</p>
      </div>
      <h1 className="aboutH1">About</h1>
      <div className="aboutTextDiv">
        <p>
          Lorem ipsum dolor sit amet,
          consectetur blev fångad av en stormvind pharetra sodales.
          Nunc at urna eget neque egestas finibus. Nulla.
          consectetur blev fångad av en stormvind pharetra sodales.
          Nunc at urna eget neque egestas finibus. Nulla.
        </p>
      </div>
    </div>
  )
}

export default ArtistPage
