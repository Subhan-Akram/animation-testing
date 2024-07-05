// import React, { useCallback, useEffect, useRef, useState } from 'react'
// import {
//     ViewerApp,
//     AssetManagerPlugin,
//     GBufferPlugin,
//     timeout,
//     ProgressivePlugin,
//     TonemapPlugin,
//     SSRPlugin,
//     SSAOPlugin,
//     DiamondPlugin,
//     FrameFadePlugin,
//     GLTFAnimationPlugin,
//     GroundPlugin,
//     BloomPlugin,
//     TemporalAAPlugin,
//     AnisotropyPlugin,
//     GammaCorrectionPlugin,
//     addBasePlugins,
//     ITexture, TweakpaneUiPlugin, AssetManagerBasicPopupPlugin, CanvasSnipperPlugin,
//     mobileAndTableCheck,
//     IViewerPlugin, FileTransferPlugin,

//     // Color, // Import THREE.js internals
//     // Texture, // Import THREE.js internals
// } from "webgi";
// import animatedScene from "../animation-assets/scene.glb"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import {scrollAnimation} from '../lib/scroll-animation';
// gsap.registerPlugin(ScrollTrigger)
// function WebgiViewer() {
//     const canvaRef = useRef(null)
//     const memoizedScrollAnimation=useCallback((position, target ,onUpdate)=>{
//          if(position && target && onUpdate){
//             scrollAnimation(position,target,onUpdate)
//          }
//     },[])
//     const setupViewer = useCallback(async () => {
   
//         // Initialize the viewer
//         const viewer = new ViewerApp({
//             canvas: canvaRef.current,
//         })
  
//         const camera=viewer.scene.activeCamera
//         const manager = await viewer.addPlugin(AssetManagerPlugin)
//         const position=camera.position
//         const target=camera.target
//         // Add plugins individually.
      
//         await viewer.addPlugin(GBufferPlugin)
//         await viewer.addPlugin(new ProgressivePlugin(32))
//         await viewer.addPlugin(new TonemapPlugin(true))
//         await viewer.addPlugin(GammaCorrectionPlugin)
//         await viewer.addPlugin(SSRPlugin)
//         await viewer.addPlugin(SSAOPlugin)
//         await viewer.addPlugin(BloomPlugin)
//         // await addBasePlugins(viewer) // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.
//         viewer.renderer.refreshPipeline()
//         await manager.addFromPath(animatedScene)
//         viewer.getPlugin(TonemapPlugin).config.clipBackground = true
//         viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false})
//         window.scrollTo(0,0)
//         let needUpdate=true
//         const onUpdate=()=>{
//            needUpdate=true;
//            viewer.setDirty()
//         }
//         viewer.addEventListener("preFrame",()=>{
//            if(needUpdate){
//             camera.positionTargetUpdated(true)
//             needUpdate=false
//            }
//         })
//         memoizedScrollAnimation(position,target,onUpdate)
//         // await viewer.addPlugin(DiamondPlugin)
//         // await viewer.addPlugin(FrameFadePlugin)
//         // await viewer.addPlugin(GLTFAnimationPlugin)
//         // await viewer.addPlugin(GroundPlugin)
//         // or use this to add all main ones at once.
       

//         // Add a popup(in HTML) with download progress when any asset is downloading.
//         // await viewer.addPlugin(AssetManagerBasicPopupPlugin)

//         // Required for downloading files from the UI
//         // await viewer.addPlugin(FileTransferPlugin)

//         // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
//         // await viewer.addPlugin(CanvasSnipperPlugin)
       
//         // Import and add a GLB file.
//         // await viewer.load(animatedScene)
     
//         // Load an environment map if not set in the glb file
//         // await viewer.setEnvironmentMap("./assets/environment.hdr");
         

//     }
//         , [])
//     useEffect(() => {
//         setupViewer()
//     }, [])
//     return (
//         <canvas style={{ border: "1px solid red" }} id="webgi-canvas-conatiner" ref={canvaRef}></canvas>
//     )
// }

// export default WebgiViewer
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { scrollAnimation } from '../lib/scroll-animation';
// import { scrollAnimation } from '../scrollAnimation';

function WebgiViewer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add a cube to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    const onUpdate = () => {
      renderer.render(scene, camera);
    };

    // Call the scroll animation function
    scrollAnimation(camera.position, cube.position, onUpdate);

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <canvas ref={canvasRef}></canvas>
  );
}

export default WebgiViewer;
