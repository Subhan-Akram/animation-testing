import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "./AnimatedBtn.css"
const AnimatedButton = () => {
  const wrapperRef = useRef(null);
  const shinyRef = useRef(null);

  useEffect(() => {
    gsap.to(shinyRef.current, {
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <a href="https://unglitch.activeno.de" className="wrapper" ref={wrapperRef}>
      <div className="inside">
        <div className="shiny" ref={shinyRef}></div>
        <div className="button">Unglitch</div>
      </div>
    </a>
  );
};

export default AnimatedButton;
