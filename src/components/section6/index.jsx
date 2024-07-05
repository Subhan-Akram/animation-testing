import React from 'react';
import '../demo.css';

import { useSpring, animated } from '@react-spring/web';
import MainPage from '../../MainPage';

function Section6() {
  const [frameValues] = useSpring(() => ({
    from: { opacity: 0 }, // Initial opacity 0
    to: { opacity: 1 }, // Animate to full opacity
    config: { duration: 1000,delay:1000 }, // Adjust animation duration as needed
  }));

  const [shadowValues] = useSpring(() => ({
    from: { opacity: 0 }, // Initial opacity 0
    to: { opacity: 1 }, // Animate to full opacity
    config: { duration: 2000,delay:1000 }, // Adjust animation duration as needed
  }));

  const [titleValues] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(-100%)' }, // Initial opacity 0, start off-screen (100% above viewport)
    to: { opacity: 1, transform: 'translateY(0%)' }, // Animate to full opacity and top position
    config: { duration: 700 ,delay:1000}, // Adjust animation duration as needed
  }));

  const [textValues] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(100%)' }, // Initial opacity 0, start off-screen (100% below viewport)
    to: { opacity: 1, transform: 'translateY(0%)' }, // Animate to full opacity and top position
    config: { duration: 1000 ,delay:1000}, // Adjust animation duration as needed
  }));
  const [shadowValues2] = useSpring(() => ({
    from: { opacity: 0 }, // Initial opacity 0
    to: { opacity: 1 }, // Animate to full opacity
    config: { duration: 1000,delay:1000 }, // Adjust animation duration as needed
    loop: true, 
  }));
  return (
   <>
    <div className='hero' style={{ marginTop: '2rem' }}>
      <animated.div className='frames' style={{ ...frameValues }}>
        <div className='shadow_div' style={{ ...shadowValues,...shadowValues2 }}> {/* Content for shadow */}</div>
        <animated.div className='cotnent_div_d' style={{ ...shadowValues }}>
          <animated.h1 className='title2' style={{ fontFamily: 'MyFont-Bold', ...titleValues }}>Hi, John</animated.h1>
          <br />
          <animated.p className='text2' style={{ ...textValues }}>
            Evaluate Leading <span>LLMs</span> Performance, Features, and Use Cases
          </animated.p>
          <div className='dshape' style={{ background: '', zIndex: '' }}> {/* Content for dshape */}</div>
        </animated.div>
      </animated.div>
    </div>
   </>
  );
}

export default Section6;
