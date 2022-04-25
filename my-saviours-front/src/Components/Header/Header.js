import React from 'react'
import "./Header.css";
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import LaptopRes from './Laptop/LaptopRes';
import MobileRes from "./Mobile/MobileRes";
import { useMediaQuery } from "react-responsive";
import {Link} from "react-router-dom";

function Header() {
    
    const isMobile = useMediaQuery({ maxWidth: 780 });
  
    return (
    <div className='headerContainer'>
        <div className='headerContainer_logo'>
            <h1 className='logo_heading'>SAVIOURS</h1>
        </div>
        <div className='headerContainer'>
            {isMobile ? <MobileRes /> : <LaptopRes />}
        </div>
        <div className='headerContainer_Socials'>
            <div>
                <a href='https://twitter.com/saviorssociety'>  
                 <FaTwitter size={isMobile ? 22 : 30}/>
                 </a>
            </div>
            <div>
                 <a href='https://discord.gg/hP3jvW36Nx'> 
                 <FaDiscord size={isMobile ? 22 : 30}/>
                </a>
            </div>
            <div>
                 <a href='https://instagram.com/saviorssociety?igshid=YmMyMTA2M2Y='> 
                 <FaInstagram size={isMobile ? 22 : 30}/>
                 </a>
            </div>
        </div>
    </div>
  )
}

export default Header