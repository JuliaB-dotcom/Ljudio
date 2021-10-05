import '/src/CSS/BigPlayer.css'

function BigPlayer() {

  return (

    <div className="bigPlayerDiv">
      <div className="videoDiv">
        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/mGeOehe3jIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="btnDiv">

        {/* <button type="button" className="shuffle">shuffle</button>
        <button type="button" className="previous"></button>
        <button type="button" className="play"></button>
        <button type="button" className="next"></button>
        <button type="button" className="loop">Loop</button> */}
      </div>
    </div>
  )
}

export default BigPlayer
