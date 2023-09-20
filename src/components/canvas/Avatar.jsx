import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows,  OrbitControls, Preload, Scroll, ScrollControls, Sky, useAnimations, useFBX, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useControls } from "leva";
import Interface from "../Interface";
import {ScrollManager} from "../ScrollManager";
import Navbar from "../Navbar";
import { MotionConfig } from "framer-motion";


const Avatar = ( props) => {

  const {animation} = props;
const {headFollow, cursorFollow,wireframe} = useControls({
  headFollow:false,
  cursorFollow:false,
  wireframe:false
})
  const mesh = useRef()
  const desktop = useGLTF("./desktop_pc/scene.gltf");
  const computer = useGLTF("./abass.gltf");
  const {animations: typingAnimation} = useFBX("./animations/Typing.fbx");
  const {animations: standingAnimation} = useFBX("./animations/Standing W_Briefcase Idle.fbx");
  const {animations: fallingAnimation} = useFBX("./animations/Jumping Down.fbx");

  typingAnimation[0].name = "Typing"
  standingAnimation[0].name = "Standing"
  fallingAnimation[0].name = "Falling"


  const { actions } = useAnimations([typingAnimation[0], standingAnimation[0], fallingAnimation[0]], mesh);


// useFrame((state)=>{
//   if (headFollow){
//     mesh.current.getObjectByName("Head").lookAt(state.camera.position)
//    } 
//   if (cursorFollow){
//    const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1)
//    mesh.current.getObjectByName("Spine2").lookAt(target) 
//   } })

useEffect(() => {
  actions[animation].reset().fadeIn(0.5).play();
  {actions[animation].reset().fadeIn(0.5).play() ? console.log("yes"): ("no")}
  
  return () => {
    actions[animation].reset().fadeOut(0.5);
  };
}, [animation, actions]);

 

  useEffect(()=>{
    Object.values(computer).forEach((comp) => {
      comp.wireframe = wireframe
    })
  },[wireframe])


  return (
    
    <mesh ref={mesh}>
  
     
      <spotLight  
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
     
      <primitive 
        object={computer.scene}
        scale= {1.75}
        position={ [0, -2.55, -1.75]}
        rotation={[-0.0, -0.3, 0]}
      />
      <primitive 
        object={desktop.scene}
        scale= {0.6}
        position={ [7.5, -1.55, -6.75]}
        rotation={[0, 4.1, -0.2]}
      />
 
    </mesh>
    
  );
};










const AvatarCanvas = () => {



    const [section, setSection] = useState(0);
    const [navbarOpened, setNavbarOpened] = useState(false)

    const {animation} = useControls({
    animation:{
    value: "Typing",
    options: ["Typing","Falling","Standing"],},
  })


  useEffect(() => {
    setNavbarOpened(false)
  },[section])

  return (
    <MotionConfig
    transition={{
      type:"spring",
      mass:5,
      stiffness:25,
      restDelta: 0.0001
    }}
    >
    <div className="vh-100 "  >

  
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      shadows
      dpr={[1, 2]}
      camera={{ position: [-1, 3, 5], fov: 45 }}
      
    >
      <color attach="background" args={["#ececec"]} />



      
      <ScrollControls pages={4} damping={0.1}>
         <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll html>
           <Interface />
          </Scroll>
        </ScrollControls>
        






      <group position-y={1}>
       

      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls
          enableZoom={false} 
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}

        />
        <Sky/>
        {/* <Environment preset="sunset"/> */}
        <ContactShadows opacity={1} scale={10} blur={1} resolution={256} color="#000000" />
        
        <Scroll>
        <Avatar  animation={animation}/> 
        </Scroll>
        
        </Suspense>

       

      
         <mesh receiveShadow
        scale={1.5}
        rotation-x={-Math.PI * 0.5} position-z={-1.5} position-y={-2.55} >
          <planeGeometry/>
          <meshStandardMaterial color="white"/> 
        </mesh>  
       
        <ambientLight intensity={1}/>
       
      <Preload all /> </group>
         
    </Canvas>
<Navbar onSectionChange={setSection} navbarOpened={navbarOpened} setNavbarOpened={setNavbarOpened}/>

 


      </div>
      </MotionConfig>
  );
};

export default AvatarCanvas;
