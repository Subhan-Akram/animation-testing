import React, { useEffect, useRef } from 'react'
import "../App.css"
import "./style.css"
import gsap from 'gsap';
import circle from "../animation-assets/Oval.png"
function Section1() {
    const circleRefs = useRef([]);

    useEffect(() => {
      // GSAP animation timeline
      const tl = gsap.timeline({ repeat: -1 });
  
      // Add animations for each circle
      circleRefs.current.forEach((circle, index) => {
        tl.to(circle, {
          rotation: '360deg',
          duration: 2,
          transformOrigin: 'center',
          ease: 'linear',
        }, index * 0.2); // stagger the animations
      });
  
      // Optionally, pause the timeline when the component unmounts
      return () => {
        // tl.pause();
      };
    }, []);
  
  return (
    <div className='section1'>
        <div className='section1_content'>
        <div className='circle circle1'>
            <img  ref={el => circleRefs.current[0] = el} src={circle}></img>
         </div>
         {/* <div className='circle circle2'>
            <img  ref={el => circleRefs.current[1] = el} src={circle}></img>
         </div>
         <div className='circle circle3'>
            <img  ref={el => circleRefs.current[2] = el} src={circle}></img>
         </div> */}
         {/* <div ref={el => circleRefs.current[1] = el} className='circle  circle2'>
         </div>
         <div ref={el => circleRefs.current[2] = el} className='circle  circle3'>
         </div> */}
        </div>
    </div>
  )
}

export default Section1