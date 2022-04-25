import React, { useEffect,useState, useRef } from 'react'
import "./Main.css";
import mySong from "../../Assets/aaa.mp3";
import {FiPlay, FiPause} from "react-icons/fi"


function Main() {
  const [isPlaying, setIsPlaying] = useState(false); 
  const audioPlayer = useRef(); 

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }

  useEffect(()=>{
    setIsPlaying(true)
    audioPlayer.current.play();
  },[])

  return (
    <div className='mainHeroContainer' id="main">
        
        <div className='hero'>
            <div className='heroText'>
              <div className='music'>
                <p>WE ARE THE CHANGE</p>
                <div onClick={togglePlayPause} className="musicButton">
                  <audio ref={audioPlayer} src={mySong} preload="metadata"></audio>
                  {isPlaying ? <FiPause size={22}/> : <FiPlay size={22}/>}
                </div>
              </div>
                <h1>SAVI<span>OURS</span></h1>
                <div className='heroTime'>
                <p>MINTING SOON</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main