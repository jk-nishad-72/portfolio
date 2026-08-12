
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React from 'react'
import AppRoutes from './routes/AppRoutes';
import 'lenis/dist/lenis.css'
import { ReactLenis, } from 'lenis/react'
import { useProgress } from '@react-three/drei';
import { useState } from 'react';
import { useEffect } from 'react';



gsap.registerPlugin(useGSAP) 


const App = () => {

  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  return ( 

    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto '>

       {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )} 

      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <AppRoutes />
     
      </div>

     </ReactLenis>
  )
}

export default App