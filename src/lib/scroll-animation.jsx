
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// export function scrollAnimation(position,target,onUpdate) {
//   const t1=gsap.timeline()
//    t1.to(position,{
//     x:-3.38,
//     y:10.74,
//     z:-5.93,
//     scrollTrigger:{
//         trigger:".hero",
//         start:"top bottom",
//         end:"top top",
//         scrub:true,
//         immediateRender:false
//     },
//     onUpdate,

//    })
//    .to('.header',{
//     x:-1.52,
//     y:0.77,
//     z:-1.06,
//     scrollTrigger:{
//         trigger:".hero",
//         start:"top bottom",
//         end:"top top",
//         scrub:true,
//         immediateRender:false
//     },
//    })
// }

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function scrollAnimation(cameraPosition, cubePosition, onUpdate) {
  const tl = gsap.timeline();

  tl.to(cameraPosition, {
    x: -3.38,
    y: 10.74,
    z: -5.93,
    scrollTrigger: {
      trigger: ".hero",
      start: "top bottom",
      end: "top top",
      scrub: true,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(cubePosition, {
      x: 1.52,
      y: 0.77,
      z: -1.06,
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
      onUpdate,
    })
    .to('.header', {
      x: -1.52,
      y: 0.77,
      z: -1.06,
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    });
}
