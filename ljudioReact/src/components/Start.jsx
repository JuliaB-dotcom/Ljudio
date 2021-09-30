import '/src/Start.css'
import Start from './Start'
function Start() {
  function test() {
    console.log("hey");
  }
  return (
    <div>
      <div>
        <h1 className="title">Ljudio</h1>
        <h1 className="title2">Ljudio</h1>

        <button className="play" onClick={test}></button>

      </div>
    </div>
  )
}

export default Start