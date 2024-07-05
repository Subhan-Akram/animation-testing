// src/HoverBorder.js
import React, { useRef } from "react";
import "../App.css";
import useScrollAnimation from "../hooks/useScrollAnimation";


const HoverBorder = () => {
  const container = useRef(null);
 const conatiner2=useRef(null)
  useScrollAnimation(".v1", container,"x","top bottom");
  useScrollAnimation(".v2", container,"x","center bottom");
  useScrollAnimation(".v3",  conatiner2, "y","top center");

  return (
    <div ref={container} className=" section4 text-center py-4">
      <div className="v1" style={{ transform: 'translateX(120%)' }}>
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
      </div>
      <div style={{ transform: 'translateX(-130%)' }} className="w-4/6 v2 m-auto content_cards4 flex justify-start gap-4 items-start mt-32">
        <div>
          <h3 className="font-bold text-start">High-quality Data Sets </h3>
          <p className="py-2 font-medium text-left">
            From automation to machine learning, our marketplace accelerates
            your projects with innovation at your fingertips
          </p>
          <p className="font-medium text-left">innovation at your fingertips</p>
        </div>
        <div className="card_1">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_612,h_408/https://sullyssandbox.com/wp-content/uploads/danielsnell._solid_white_background_with_Data_Visualization_usi_c8e97935-2f70-44d4-ac79-1635123bb2ba-removebg-preview-1.png"
            alt=""
          />
        </div>
      </div>
    
    <div ref={conatiner2}   style={{paddingBottom:"10rem"}}>
    <div style={{transform: 'translateY(120%)',opacity:"0"}} className="w-4/6 v3 m-auto content_cards4 flex justify-start gap-4 items-start mt-24">
        <div>
          <h3 className="font-bold text-start">High-quality Data Sets </h3>
          <p className="py-2 font-medium text-left">
            From automation to machine learning, our marketplace accelerates
            your projects with innovation at your fingertips
          </p>
          <p className="font-medium text-left">innovation at your fingertips</p>
        </div>
        <div className="card_1">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_612,h_408/https://sullyssandbox.com/wp-content/uploads/danielsnell._solid_white_background_with_Data_Visualization_usi_c8e97935-2f70-44d4-ac79-1635123bb2ba-removebg-preview-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default HoverBorder;
