// src/useScrollAnimation.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (triggerClass, container, axis,start) => {
  useEffect(() => {
    const animationProps = {
    //   delay: .5,
      duration: 1,
      opacity:1,
      ease: "power2.out",
      [axis]: "0%",
    };
    const trigger = ScrollTrigger.create({
      trigger: container.current,
      start,
      // markers:true,
      onEnter: () => {
        gsap.to(triggerClass, {
          ...animationProps,
        });
        // trigger.kill(); // Disable the trigger after the animation
      },
    });

    // Cleanup function to kill the triggers if the component unmounts
    return () => {
      trigger.kill();
    };
  }, [triggerClass]);
};

export default useScrollAnimation;
