import React, {useState} from 'react'
import "./Mint.css";
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {Link} from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Mint() {
  const [connect, setConnect ] = useState(false)
  const [count, setCount] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const increment = () =>{
    let c = 5;
    if(count <= 5){
      setCount = count + 1;
    }
    else {
      return false
    }
  }

  const decrement = () =>{
    let c = 0;
    if(count >= 0){
      setCount = count -1;
    }
    else {
      return false
    }
  }

  return (
    <div className='mint'>
    <div className='mintHeaderContainer'>
        <div className='mintHeaderContainer_logo'>
            <h1 className='mintLogo_heading'><Link style={{textDecoration: "none", color: "white"}} to='/'>SAVIOURS</Link></h1>
        </div>
        {!isMobile ? 
          <div className='connect mintHeaderContainer'>
            <p onClick={()=> setConnect(prev=> !prev)}>{!connect ? "Connect Wallet" : "Disconnect Wallet"}</p>
        </div>
        : null}
        <div className='mintHeaderContainer_Socials'>
            <FaTwitter size={30}/>
            <FaDiscord size={30}/>
            <FaInstagram size={30}/>
        </div>
    </div>
    <div className='mintContainer'>
      <div className='mintContainerWelcome'>
        <p>WELCOME TO THE SAVIOURS COMMUNITY</p>
      </div>
        <div className='mintContainerPara'>
        <p>Mint your own saviour</p>
        </div>
        <div className='minter'>
          <div className='minterPara'>
          <p>Amount 0.25 + Gas</p>
          </div>
          <div className='minterButton'>
          <button onClick={increment}>-</button>
          <p>{count}</p>
          <button onClick={decrement}>+</button>
          </div>
          <div className='minterButton mint'>
          <button title='disable'>Mint</button>
          </div>
        </div>
        <div className='note'>
          <p>NOTE: 1- Whitelisted member can now mint 2 Nfts</p>
          <p>2- Public mint will be live on 15th april 2022 at 12:00 Pm Eastern Time (ET)</p>
        </div>
    </div>
    <div className='mintFooterContainer'>
        <div className='mintFooter'>
            <small>Made Saviours with ❤️</small>
        </div>
    </div>
    </div>
  )
}

export default Mint