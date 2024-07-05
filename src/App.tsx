import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import WebgiViewer from "./components/WebgiViewer";
// import AnimatedComponent from "./AnimationComponent";
// import AnimatedButton from "./AnimatedButton";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import HeroSection from "./components/HeroSection";
import SectionDemo from "./components/SectionDemo";
import CommentsSection from "./components/comments-section";
import Section6 from "./components/section6";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function App() {
  return (
    <div className="main">
      {/* <HeroSection /> */}
      <SectionDemo />
      {/* <AnimatedButton /> */}
   
      <Section6 />
      {/* <Section1 /> */}
      <div style={{ overflow: "hidden" }}>
        {" "}
        {/* <Section2 /> */}
      </div>
      
      <div style={{ overflow: "hidden" }}>
        {" "}
        {/* <Section3 /> */}
      </div>
      <div style={{ overflow: "hidden" }}>
        {" "}
        <Section4 />
      </div>
      {/* <div className="header box">
        <h1 style={{ textAlign: "center" }} className=" font-medium border-2 ">
          React 3D Animation Learning
        </h1>
      </div>
      <div className="hero box">
        <h1 style={{ textAlign: "center" }} className=" font-medium border-2 ">
          React 3D Animation Learning
        </h1>
      </div>
      <div className="content box">
        <h1 style={{ textAlign: "center" }} className="font-medium border-2 ">
          React 3D Animation Learning
        </h1>
      </div> */}
    </div>
  );
}

export default App;
