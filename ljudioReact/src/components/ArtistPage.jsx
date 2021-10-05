import React from 'react'
import '/src/ArtistPage.css'

function ArtistPage() {
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
      </div>
    </div>
  )
}

export default ArtistPage
