import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import WebgiViewer from "./components/WebgiViewer";
// import AnimatedComponent from "./AnimationComponent";
// import AnimatedButton from "./AnimatedButton";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import MainPage from "./MainPage";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function App() {

  return (
    <div className="main">
    
      <Router>
        <Routes>
          <Route path="/" element={<MainPage ><h1 className="font-bold text-[2rem] mt-4 text-center">Main Page</h1></MainPage>} />
          <Route path="/gsap-animation" element={<MainPage><SectionDemo /></MainPage>} />
          <Route path="/gsap-animation/scroll-animation" element={<MainPage><Section4 /></MainPage>} />
          <Route path="/spring-animation" element={<MainPage><Section6 /></MainPage>} />
        </Routes>
      </Router>

    
     
    </div>
  );
}

export default App;
