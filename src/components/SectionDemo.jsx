// import React, { useRef } from 'react'
// import "./demo.css"
// import frame from "../animation-assets/frame.png"
// import shape from "../animation-assets/shape.png"
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// function SectionDemo() {
//     const shadowDivRef = useRef(null);
//     const dShapeRef = useRef(null);
//     const frameRef = useRef(null);
//     useGSAP(() => {
//         const tl = gsap.timeline();


//         tl.from(".frames", { opacity: 1, duration: 1 })
//             .to(shadowDivRef.current, { opacity: 1, duration: 1 })
//             .to(dShapeRef.current, { opacity: 1, duration: 1 });

//         gsap.set(frameRef.current, { opacity: 1 });
//         frameRef.current.style.opacity = 1;
//         gsap.set(shadowDivRef.current, { opacity: 2 });
//         gsap.set(dShapeRef.current, { opacity: 2 });

//         return () => {

//             tl.kill();
//         };
//     })

//     return (
//         <div className='hero'>
//             <div className='frames' style={{ opacity: "0" }} ref={frameRef}>
//                 <div className='shadow_div' style={{ opacity: "0" }} ref={shadowDivRef}></div>
//                 <div className='cotnent_div_d'>
//                     <h1 className='title2'>Hi, John 👋</h1>
//                     <br />
//                     <p className='text2'>Evaluate Leading <span >LLMs</span> Performance, Features, and Use Cases</p>
//                     <div className='dshape' ref={dShapeRef} style={{ background: "", zIndex: "", opacity: "0" }}>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     )
// }

// export default SectionDemo

import React, { useEffect, useRef, useState } from 'react';
import "./demo.css";
import frame from "../animation-assets/frame.png";
import shape from "../animation-assets/shape.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useScrollAnimation from '../hooks/useScrollAnimation';
import "../font.css"
function SectionDemo() {
    const navRef = useRef(null);
    const hamburgerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const shadowDivRef = useRef(null);
    const dShapeRef = useRef(null);
    const frameRef = useRef(null);
    const title2Ref = useRef(null)
    const text2Ref = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({ autoPlay: false }); // Set autoPlay: false to prevent immediate playback
        // Set initial position
        gsap.to(navRef.current, { x: '-100%', duration: 0, });

        console.log("navRef.current.children", navRef.current.children)
        gsap.to(navRef.current.children, { x: '-100%', duration: 0, opacity: 1 });
        hamburgerRef.current.addEventListener('click', () => {
            setIsOpen(!isOpen); // Toggle state on click
        });
        // Set initial opacity to 0 for all elements using CSS
        gsap.set([frameRef.current, shadowDivRef.current, dShapeRef.current], { opacity: 0 });
        // Animate opacity 1 by 1 with 1-second duration and stagger
        tl.fromTo(frameRef.current, { opacity: 0, delay: 1, }, { opacity: 0, duration: 1 })
            .fromTo(frameRef.current, { opacity: 0, duration: 1 }, { opacity: 1, duration: 1 })
            .fromTo(dShapeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, 2.5) // Stagger by 0.5 seconds
            .fromTo(shadowDivRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, 3.5)

            .from(title2Ref.current, { y: -110, opacity: 0, duration: 1, ease: "power2.inOut" }, '+=0.2')
            .from(text2Ref.current, { y: 110, opacity: 0, duration: 1, ease: "power2.inOut" }, '+=0.2');
        const startShadowFlicker = () => {
            console.log("run now===")
            gsap.to(shadowDivRef.current, { opacity: .75, duration: 2, repeat: -1, yoyo: true });
        };
        // Cleanup function (optional)
        tl.play().then(startShadowFlicker);
        return () => {
            tl.kill();
            // shadowFlicker.kill(); // Kill the flickering animation separately
        };
    });

    const handleClose = (value) => {
        gsap.to(navRef.current.children, {
            duration: .6,
            ease: 'power3.inOut', // Customize easing for smooth transition
            x: value, // Animate based on isOpen state,
            opacity: 1,
            stagger: { amount: 1 }
        });
        gsap.to(navRef.current, {
            delay: .8,
            duration: 0.8,
            ease: 'power3.inOut', // Customize easing for smooth transition
            x: value, // Animate based on isOpen state,
        });
    }
    const handleNav = (value) => {

        gsap.to(navRef.current, {
            duration: 0.8,
            ease: 'power3.inOut', // Customize easing for smooth transition
            x: value, // Animate based on isOpen state,
        });

        gsap.to(navRef.current.children, {
            // delay:.5,
            duration: 1,
            ease: 'power3.inOut', // Customize easing for smooth transition
            x: value, // Animate based on isOpen state,
            opacity: 1,
            stagger: { amount: 1 }
        });

    }
    return (
        <>
            <navbar className="nav" >
                <div id="play" className='hamburger' ref={hamburgerRef} onClick={() => handleNav("0%")}>
                    <div />
                    <div />
                    <div />
                </div>
                <div className='nav_content' ref={navRef}>
                    <h2 className='title1' style={{cursor:"pointer", position: "absolute", top: "10px", right: "10px", textAlign: "right", fontWeight: "bold" }} onClick={() => { handleClose("-100%") }}>X</h2>
                    <h1 className='title2' style={{ width: "100%" }}>Home</h1>
                    <h1 className='title2'>About Us</h1>
                    <h1 className='title2'>Contact Us</h1>
                    <h1 className='title2'>Profile</h1>

                </div>

            </navbar>
            <div className='hero'>
                <div className='frames' style={{ opacity: 0 }} ref={frameRef}>
                    <div className='shadow_div' ref={shadowDivRef} style={{ opacity: 0 }}>{/* Shadow content */}</div>
                    <div className='cotnent_div_d' ref={dShapeRef} >
                        <h1 className='title2' style={{ fontFamily: 'MyFont-Bold' }} ref={title2Ref}>Hi, John </h1>
                        <br />
                        <p className='text2' style={{ fontFamily: 'MyFont-Bold' }} ref={text2Ref}>Evaluate Leading <span>LLMs</span> Performance, Features, and Use Cases</p>
                        <div className='dshape' style={{ background: "", zIndex: "", opacity: 0 }}>{/* Shape content */}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionDemo;
