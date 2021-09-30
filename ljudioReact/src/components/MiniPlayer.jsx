
import '/src/MiniPlayer.css'
function MiniPlayer() {
  return (
    <div className="playItems">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <p className="songName">Songname</p>
       
          <div className="prevBtns">
        <svg onclick={""} className="prevBtn1" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4671 23.7391L1.1976 13.079L22.7149 1.29243L24.4671 23.7391Z" fill="white" stroke="#350E88" />
        </svg>
        <svg onclick={""} className="prevBtn2" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.4671 23.7391L1.1976 13.079L22.7149 1.29243L24.4671 23.7391Z" fill="white" stroke="#350E88" />
            </svg>
      </div>
      <div className="play">
      
       <svg onclick={""} className="playBtn" width="36" height="25" viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.01459 1.18008L33.5442 12.4763L1.10814 23.8588L1.01459 1.18008Z" fill="white" stroke="#350E88" />
        </svg>
        
      </div>
          <div className="nextBtns">
        <svg onclick={""} className="nextBtn1" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.523226 1.71076L22.9756 12.9085L0.60002 24.1781L0.523226 1.71076Z" fill="white" stroke="#350E88" />
        </svg>
        <svg onclick={""} className="nextBtn2" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.525107 1.29047L22.9854 12.4943L0.617789 23.7577L0.525107 1.29047Z" fill="white" stroke="#350E88" />
            </svg>
            </div>
  
  
     
  </div>
)
}
export default MiniPlayer