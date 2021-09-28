import '/src/BigPlayer.css'

function BigPlayer() {

  return (
    <div>
      <button type="button" className="shuffle">Shuffle</button>
      <button type="button" className="loop">Loop</button>
      <button type="button" className="previous">previous</button>
      <button type="button" className="play">play</button>
      <button type="button" className="next">next</button>

    </div>

  )
}

export default BigPlayer