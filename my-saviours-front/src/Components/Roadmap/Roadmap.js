import React,{useEffect} from 'react'
import "./Roadmap.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMediaQuery } from "react-responsive";

function Roadmap() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  const isMobile = useMediaQuery({ maxWidth: 780 });
  return (
    <div className='roadmap' id='roadmaps'>
        <div className='roadmapContainer'>
            <div className='roadmapHeading'>
              <h1 data-aos="fade-up">ROADMAP</h1>
            </div>
            {isMobile ? 
            <div className='roadmapMain'>
                <div className='roadmapMain_target'>
                  <div data-aos="fade-up" className='target'>25%</div>
                </div>
                <div className='roadmapMain_middle'>
                  <div className='roadmapMain_point'>
                  </div>
                </div>
                <div className='roadmapMain_details'>
                  <h2 className='heading' data-aos="fade-up" >25% SOLD</h2>
                  <p className='paragraph' data-aos="fade-up">Plantation And Replenishment Of Trees</p>
                </div>
                <div className='roadmapMain_target'>
                  <div data-aos="fade-up" className='target'>50%</div>
                </div>
                <div className='roadmapMain_middle'>
                  <div className='roadmapMain_point'></div>
                </div>
                <div className='roadmapMain_details'>
                  <h2 className='heading' data-aos="fade-up">50% SOLD</h2>
                  <p className='paragraph' data-aos="fade-up" >In Addition To Our Tree-Planting Drive, We Will Conduct A Giveaway For Our Commuinty</p>
                </div>
                <div className='roadmapMain_target'>
                  <div data-aos="fade-up" className='target'>75%</div>
                </div>
                <div className='roadmapMain_middle'>
                  <div className='roadmapMain_point'></div>
                </div>
                <div className='roadmapMain_details'>
                  <h2 className='heading' data-aos="fade-up">75% SOLD</h2>
                  <p className='paragraph' data-aos="fade-up">We Will Start Investing In Community Ideas For The Betterment Of Our Planet, With Donation And Charity</p>
                </div>
            <div className='roadmapMain_target'>
                  <div data-aos="fade-up" className='target'>100%</div>
                </div>
                <div className='roadmapMain_middle'>
                  <div className='roadmapMain_point'></div>
                </div>
                <div className='roadmapMain_details'>
                  <h2 className='heading' data-aos="fade-up">100% SOLD</h2>
                  <p className='paragraph' data-aos="fade-up">Tuition Fee For Kids, And Will Giveaway A Speedy Car You Can't Dodge. WhatSoEver</p>
                </div>
                </div> : 
                <div className='roadmapImages'>
                  <div className="roadmapImageCard">
                      <img src={require("../../Assets/1.png")} alt="#" />
                      <div className='roadmapImagecard_details'>
                          <h1 data-aos="fade-up">25% Sold</h1>
                          <p data-aos="fade-up">Plantation And Replenishment Of Trees</p>
                      </div>
                  </div>
                  <div className="roadmapImageCard">
                  <img src={require("../../Assets/2.png")} alt="#" />
                      <div className='roadmapImagecard_details'>
                          <h1 data-aos="fade-up">50% Sold</h1>
                          <p data-aos="fade-up">In Addition To Our Tree-Planting Drive, We Will Conduct A Giveaway For Our Commuinty</p>
                      </div>
                  </div>
                  <div className="roadmapImageCard">
                      <img src={require("../../Assets/3.png")} alt="#" />
                      <div className='roadmapImagecard_details'>
                          <h1 data-aos="fade-up">75% Sold</h1>
                          <p data-aos="fade-up">We Will Start Investing In Community Ideas For The Betterment Of Our Planet, With Donation And Charity</p>
                      </div>
                  </div>
                  <div className="roadmapImageCard">
                      <img src={require("../../Assets/4.png")} alt="#" />
                      <div className='roadmapImagecard_details'>
                          <h1 data-aos="fade-up">100% Sold</h1>
                          <p data-aos="fade-up">Tuition Fee For Kids, And Will Giveaway A Speedy Car You Can't Dodge. WhatSoEver</p>
                      </div>
                  </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Roadmap