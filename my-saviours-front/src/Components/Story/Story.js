import React, { useEffect } from 'react';
import "./Story.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Story() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  return (
    <div className='story' id="story">
         <div className='storyContainer'>
            <h1 data-aos="fade-up">About</h1>
            <p data-aos="fade-up">It is our purpose that defines us. What we choose to do in the time given us is what shapes us into who we are.</p>
            <p data-aos="fade-up">So why not pursue something greater? Something greater than the lives we choose to confine ourselves in? </p>
            <p data-aos="fade-up">Especially when the world needs us to play the role we were always meant to play, as the successors of the world? </p>
            <p data-aos="fade-up">Global warming is a phenomenon that we are all facing the consequences of, in the form of rising sea levels, forest wildfires and worsening droughts. This is having drastic effects on the balance of our ecosystem, where much of the wild species on land and sea are at the brink of extinction. </p>
            <p data-aos="fade-up">Fortunately, it is not too late to redeem our ways and start anew. The twenty twenties is the decade that determines the fate of the Earth, so a huge responsibility lies on us. With responsibility arises hope and strength of one positive community, that has sought out to bring about a change the world desperately needs. </p>
            <p data-aos="fade-up">We are giving this era of digitalization another chance, through the power of NFTs; a digital space where the impossible becomes possible. With 10,000 unique pieces of art portraying Legends both past and present, the Saviours aim to instill inspiration in individuals to think beyond oneself, for the welfare of humanity as a whole.</p>
            <p data-aos="fade-up">Join us in our movement in this Decade of Determination, in the pursuit of something that may have what it takes to shape the future of our generations hence.</p>
            <p data-aos="fade-up">For the legacy of humanity.</p>
            <p data-aos="fade-up">A legacy to be remembered as Saviours. </p>
            <h1 className="two" data-aos="fade-up">The Story</h1>
            <p data-aos="fade-up">Three siblings, driven with passion.</p>
            <p data-aos="fade-up">One dream to unite humanity, under a profound purpose. </p>
            <p data-aos="fade-up">All that was needed was a plan to spark their vision into life…</p>
            <p data-aos="fade-up">When they realized that the efforts of three individuals could only do so much to bring about the change they were looking for, they thought, why not spread the message? Why not join hands in making the world a better place, when we have the power to do so?</p>
            <p data-aos="fade-up">The dream comes alive with the formation of a community called Saviors, where all are welcome to share their ideas for the welfare of humanity and the planet in general. Saviors aim to inspire individuals to go beyond ideas that surround oneself and think of the human race as a whole, using the power of NFTs. </p>
            <p data-aos="fade-up">Let us counteract the general narrative of NFTs together, and use it to create the strongest community known to mankind, determined to change the world for the better.</p>
            <div data-aos="fade-up" className='storyConatiner_button'>
                <button><a href='https://twitter.com/saviorssociety'>Join Twitter</a></button>
                <button><a href='https://discord.gg/hP3jvW36Nx'>Join Discord</a></button>
            </div>
        </div>
    </div>
  )
}

export default Story