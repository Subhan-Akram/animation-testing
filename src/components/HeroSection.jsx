import React from 'react'
import "./heroStyle.css"
import frame from "../animation-assets/frame.png"
import shape from "../animation-assets/shape.png"
function HeroSection() {
  return (
    <div className='hero'>

      <div className='frame'>
        <div className='shadow_div'></div>
        <div className='cotnent_div'>
          <h1 className='title'>Hi, John 👋</h1>
          <br />
          <p className='text'>Evaluate Leading <span >LLMs</span> Performance, Features, and Use Cases</p>
          <div className='shape' style={{ background: "", zIndex: "" }}>
            <img alt="shape" className='shape' style={{ background: "transparent" }} src={shape} />

          </div>
        </div>
        

        {/* <img src={frame} /> */}
      </div>
    </div>
  )
}

export default HeroSection