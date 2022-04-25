import React from 'react'
import "./LaptopRes.css";
import {Link} from "react-scroll";

function LaptopRes() {
  return (
    <div className='headerContainer_items'>
        <div className='items'>
                <Link to="main" smooth={true} duration={1000}><p>Home</p></Link>
            </div>
            <div className='items'>
            <Link to="story" smooth={true} duration={1000}><p>About</p></Link>
            </div>
            <div className='items'>
            <Link to="traits" smooth={true} duration={1000}><p>Traits</p></Link>
            </div>
            <div className='items'>
            <Link to="roadmaps" smooth={true} duration={1000}><p>Roadmap</p></Link>
            </div>
            <div className='items'>
            <Link to="teams" smooth={true} duration={1000}><p>Team</p></Link>
            </div>
    </div>
  )
}

export default LaptopRes