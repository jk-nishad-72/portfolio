
import React from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, Lightformer, Plane } from '@react-three/drei'
import { Planet } from '../components/Planet'
import { useMediaQuery } from "react-responsive";

const Hero = () => {

const isMobile = useMediaQuery({maxWidth:853});

console.log(isMobile);

const text = `I am a full stack developer and  content creator.
I provide unfair advantage through premium
results driven webs/apps`


  return (
    <section id='home' className=' flex flex-col justify-end min-h-screen'> 

     <AnimatedHeaderSection

       subTitle={"404 Bugs Not found"}
       title={'JK Nishad'}
       paratext={text}
       textColor={"text-black"}
      />

      <figure className=' absolute inset-0 -z-50' style={{width:'100vw' , height:'100vh'}}>

         <Canvas
         
          shadows
          camera={{position:[0 , 0 ,-10] , fov:17.5 , far:20 ,near:1,}}
          
         >
             
             <ambientLight intensity={0.5} />

             <Float speed={0.5}>
                 <Planet scale = {isMobile ? 0.7 :1} />
             </Float>

             <Environment resolution={256} >

                 <group  rotation={[-Math.PI /3 , 4 , 1]}>
              
                       <Lightformer 
                        form={"circle"}
                        intensity={2}
                        position={[0,5,-9]}
                        scale={10}
                        />
                         <Lightformer 
                        form={"circle"}
                        intensity={2}
                        position={[3,0,1]}
                        scale={10}
                        />
                        <Lightformer 
                        form={"circle"}
                        intensity={2}
                        position={[-5,-1,-1]}
                        scale={10}
                        />
                         <Lightformer 
                        form={"circle"}
                        intensity={2}
                        position={[10,1,0]}
                        scale={10}
                        />

                 </group>

            </Environment>
         </Canvas>
      </figure>

    </section>
  )
}

export default Hero