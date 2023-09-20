import { OrbitControls } from "@react-three/drei";

import React from 'react'




export const boxed = () => {

    return (
        <>
          
            <mesh>
                <meshNormalMaterial />
                <boxBufferGeometry />
            </mesh>
        
        </>
    );
};