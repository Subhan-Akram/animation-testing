import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AnimatedComponent() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.to(".box", { rotation: "+=360", duration: 3 });
    gsap.to(circleRef.current, { rotation: "-=360", duration: 3 });
  }, []);

  return (
    <div className="App">
      <div ref={containerRef} className="container">
        <div className="box gradient-blue">boc-css selector</div>
        <div className="circle gradient-green" ref={circleRef}>
          box ref
        </div>
      </div>
      <div className=" gradient-blue">selector</div>
    </div>
  );
}

export default AnimatedComponent;
