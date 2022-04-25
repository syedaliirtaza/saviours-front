import React, {useState, useEffect} from 'react'
import "./Team.css";
import { Avatar } from '@mui/material';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {FiLink} from "react-icons/fi"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Team() {
  useEffect(function(){
      AOS.init({duration: 2000});
    },[]); 

  return (
   
    <div className='team' id='teams'>
      <div className='teamContainer'>
      <div className='teamContainer_heading'>
        <h1 data-aos="fade-up">TEAM</h1>
      </div>
        <div className='teamBody'>
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/ali.jpg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Ali</h1>
            <p className='teamPosition'>Founder & Project Director</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <a href='https://twitter.com/Nessie_eth'><FaTwitter size={20}/></a>
            </div>
          </div>
          {/* person 2 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/mariam.jpg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Maryam</h1>
            <p className='teamPosition'>Co-Founder & Director of Community</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <a href='https://twitter.com/i_candyyyyy?s=11'><FaTwitter size={20}/></a>
            </div>
          </div>
          {/* person 3  */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/raafi.jpeg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Raafi</h1>
            <p className='teamPosition'>Co-Founder & Project Advisor</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <FaTwitter size={20}/>
            </div>
          </div>
          {/* person 4 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/faiq.jpeg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Faiq</h1>
            <p className='teamPosition'>Moderator</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <a href='https://twitter.com/PapaBlackSheeep'><FaTwitter size={20}/></a>
            </div>
          </div>
          {/* person 5 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/saad.jpg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Saad</h1>
            <p className='teamPosition'>Developer</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <a href='https://mobile.twitter.com/Saad_naveed1'><FaTwitter size={20}/></a>
            </div>
          </div>
          {/* person 6 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/irtaza.jpeg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Irtaza</h1>
            <p className='teamPosition'>Web3/Frontend Developer</p>
            </div>
            <div className='teamSocials' data-aos="fade-up">
            <a href='https://twitter.com/Irtaza_eth'><FaTwitter size={20}/></a>
            <a href='https://instagram.com/s.aliirtaza?igshid=YmMyMTA2M2Y='><FaInstagram size={20}/></a>
            <a href='https://syedaliirtaza.ga/'><FiLink size={20}/></a>
            </div>
          </div>
          {/* person 7 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/hina.jpg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Hina</h1>
            <p className='teamPosition'>Community Manager</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <a href='https://twitter.com/hina_basheer'><FaTwitter size={20}/></a>
            </div>
          </div>
          {/* person 8 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/marry.jpg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Marry</h1>
            <p className='teamPosition'>Community Manager</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <a href='https://twitter.com/Marymeow22'><FaTwitter size={20}/></a>
            </div>
          </div>
          {/* person 9 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/Wahaj.jpg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Wahaj</h1>
            <p className='teamPosition'>Artist & illustrator</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <a href='https://twitter.com/wahajography?t=aKXKwbpg5CBTeffwYVJRKw&s=09'><FaTwitter size={20}/></a>
            </div>
          </div>
          {/* person 10 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/noor.jpeg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Noorulhuda</h1>
            <p className='teamPosition'>Content Writer</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <a href='https://twitter.com/Noorulhuda2000'><FaTwitter size={20}/></a>
            </div>
          </div>
          {/* person 11  */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/t1.jpg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Kurtey</h1>
            <p className='teamPosition'>Artist & illustrator</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <FaTwitter size={20}/>
            </div>
          </div>
          {/* person 12 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/sania.jpg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Sania</h1>
            <p className='teamPosition'>Artist & illustrator</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <a href='https://www.instagram.com/invites/contact/?i=sexqgpmzje4h&utm_content=kbm51bd'><FaInstagram size={20}/></a>
            </div>
          </div>
          {/* person 13 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/mudasir.jpg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Muddasir</h1>
            <p className='teamPosition'>Researcher</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <a href='https://twitter.com/MuddasirShabbi3?t=59LE6ItWZ-62kLFA6LRv3Q&s=09'><FaTwitter size={20}/></a>
            </div>
          </div>
          {/* person 14 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/zahra.jpg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Zahra</h1>
            <p className='teamPosition'>Content Writer</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <FaTwitter size={20}/>
            </div>
          </div>
          {/* person 15 */}
          <div className='teamBody_person' data-aos="fade-up">
            <div className='teamBody_personImage'>
            <Avatar src={require("../../Assets/t2.jpg")} alt="#" sx={{ width: 204, height: 204 }} />
            </div>
            <div className='teamBody_personDetails' data-aos="fade-up">
            <h1 className='teamHeading'>Areeb</h1>
            <p className='teamPosition'>Content writer & community manager</p>
            </div>
            <div className='teamSoacils' data-aos="fade-up">
            <a href='https://www.instagram.com/reeeb28/?hl=en'><FaInstagram size={20}/></a>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Team