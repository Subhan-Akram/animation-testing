// src/HoverBorder.js
import React, { useState, useRef } from "react";
// import './style.css';
import "../App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HoverBorder = () => {
  const container = useRef();

  // add animations and labels to the timeline

  useGSAP(
    () => {
      // gsap code here...
        gsap.to(".box", { rotation: "+=360", duration: 3 });
      let tl = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".box",
          pin: true, // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          // end: '+=500', // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          },
        },
      });
      tl.addLabel("start")
        .from(".box p", { scale: 0.3, rotation: 45, autoAlpha: 0 })
        .addLabel("color")
        .from(".box", { backgroundColor: "#28a92b" })
        // .addLabel("spin")
        // .to(".box", { rotation: 360 })
        .addLabel("end");
    }
    // { scope: container }
  );

  return (
    <div ref={container} className="box  section2   text-center py-4">
      <h1 className="font-bold mt-5">Access to Diverse AI Solutions</h1>
      <p className="py-2 w-4/6 font-medium text-center m-auto">
        From automation to machine learning, our marketplace accelerates your
        projects with innovation at your fingertips
      </p>
      <p className="w-4/6 font-medium text-center m-auto">
        innovation at your fingertips
      </p>
      <button className="bg-black px-4 py-2 mt-4 rounded outline-black text-white">
        See Plans
      </button>
      <div className="w-4/6 m-auto content_cards flex justify-start gap-4 items-start mt-24">
        <div className="">
          <h3 className="font-bold text-start">High-quality Data Sets </h3>
          <p className="py-2  font-medium text-left ">
            From automation to machine learning, our marketplace accelerates
            your projects with innovation at your fingertips
          </p>
          <p className=" font-medium  text-left">
            innovation at your fingertips
          </p>
        </div>
        <div className="card_1">
          <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_612,h_408/https://sullyssandbox.com/wp-content/uploads/danielsnell._solid_white_background_with_Data_Visualization_usi_c8e97935-2f70-44d4-ac79-1635123bb2ba-removebg-preview-1.png"></img>
        </div>
      </div>
    </div>
  );
};

export default HoverBorder;
