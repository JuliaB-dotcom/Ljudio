import '/src/BigPlayer.css'

function BigPlayer() {

  return (

    <div>
      <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/cO1cx9oXp1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div className="btnDiv">

        <button type="button" className="shuffle">shuffle</button>
        <button type="button" className="previous"></button>
        <button type="button" className="play"></button>
        <button type="button" className="next"></button>
        <button type="button" className="loop">Loop</button>
      </div>
    </div>
  )
}

export default BigPlayer
