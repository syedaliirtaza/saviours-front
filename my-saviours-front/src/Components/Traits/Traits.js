import React, { useState, useEffect } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import "./Traits.css";
import styles from './styles.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import p1 from "../../Assets/n1.jpg";
import p2 from "../../Assets/n2.jpg";
import p3 from "../../Assets/n3.jpg";
import p4 from "../../Assets/n4.jpg";
import p5 from "../../Assets/n5.jpg";
import p6 from "../../Assets/n6.jpg";
import p7 from "../../Assets/n7.jpg";
import p8 from "../../Assets/n8.jpg";
import p9 from "../../Assets/n9.jpg";

const cards = [
  p5,
  p6,
  p4,
  p3,
  p7,
  p2,
  p8,
  p1,
  p9

]

const to = function (i) { return ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
}); };

var from = function (_i) { return ({ x: 0, rot: 0, scale: 1.5, y: -1000 }); };

var trans = function (r, s) {
  return "perspective(1500px) rotateX(30deg) rotateY(".concat(r / 10, "deg) rotateZ(").concat(r, "deg) scale(").concat(s, ")");
};

function Deck() {
  const [gone] = useState(() => new Set())
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  }))

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 
    const dir = xDir < 0 ? -1 : 1 
    if (!down && trigger) gone.add(index) 
    api.start(i => {
      if (index !== i) return 
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) 
      const scale = down ? 1.1 : 1 
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </>
  )
}


function Traits() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[])
  return (
    <div className='traits' id="traits">
    <h1>TRAITS</h1>
        <div className='traitsContainer'>
            <div data-aos="fade-left" className='traitsDetails'>
              <span>Backgrounds 125</span>
              <span>Skin 39</span>
              <span>Eyes 22</span>
              <span>Clothes 80</span>
              <span>Accessories	34</span>
              <span>Total 300</span>
            </div>
            <div data-aos="fade-right" className='traitsCards'><Deck /></div>
        </div>
    </div>
  )
}

export default Traits