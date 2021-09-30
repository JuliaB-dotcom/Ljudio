import '/src/Start.css'

function Start() {
  function test() {
    console.log("hey");
  }
  return (
    <div>
      <h1 className="title">Ljudio</h1>
      <h1 className="title2">Ljudio</h1>

      <button className="play" onClick={test}></button>

    </div>

  )
}

export default Start