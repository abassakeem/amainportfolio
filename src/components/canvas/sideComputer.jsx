import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

import React from 'react'

export default function sideComputer() {

    const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
    <hemisphereLight intensity={0.15} groundColor='black' />
    <ambientLight intensity={1}/>
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
      scale={ 0.75}
      position={ [0, 6.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  </mesh>
  )
}
