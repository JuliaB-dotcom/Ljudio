import '/src/BigPlayer.css'

function BigPlayer() {

  return (
    <div>

      <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/Ti4AHheNyVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <button type="button" className="shuffle">Shuffle</button>
      <button type="button" className="loop">Loop</button>
      <button type="button" className="previous">previous</button>
      <button type="button" className="play"> <img src="https://www.pngkit.com/png/full/0-4474_facebook-play-button-png-clip-art-white-video.png" alt="" /></button>
      <button type="button" className="next">next</button>

    </div>

  )
}

export default BigPlayer
