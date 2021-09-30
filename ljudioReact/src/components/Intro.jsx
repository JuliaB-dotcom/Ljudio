import MiniPlayer from "./MiniPlayer"
import Search from './Search'
function Intro() {
  
  return (
    <div>
      
      <MiniPlayer />
      <div className="search">
        <Search />
      </div>
    </div>
  )
}
export default Intro