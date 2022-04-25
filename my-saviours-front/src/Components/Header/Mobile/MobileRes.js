import React, {useState} from 'react'
import "./MobileRes.css";
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import MenuToggle from "./MenuToggle";
import {Link} from "react-scroll";

function MobileRes() {
    const [isOpen, setOpen] = useState(false);
  return ( 
    <div className='mobileHeaderContainer'>
    <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
    {!isOpen ? 
    null:
        <div className='mobileHeaderContainer_items'>
            <div className='mobileItems'>
            <Link to="main" smooth={true} duration={1000}><p>Home</p></Link>
            </div>
            <div className='mobileItems'>
            <Link to="story" smooth={true} duration={1000}><p>About</p></Link>
            </div>
            <div className='mobileItems'>
            <Link to="traits" smooth={true} duration={1000}><p>Traits</p></Link>
            </div>
            <div className='mobileItems'>
            <Link to="roadmaps" smooth={true} duration={1000}><p>Roadmap</p></Link>
            </div>
            <div className='mobileItems'>
            <Link to="teams" smooth={true} duration={1000}><p>Team</p></Link>
            </div>
        </div>
     }
    </div>
  )
}

export default MobileRes