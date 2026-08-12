import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'


gsap.registerPlugin(ScrollTrigger)

const AnimatedTextLines = ({paratext ='', className}) => {

    const textContainerRef = useRef(null)
    const lineRef = useRef([])
    const lines = paratext.split("\n").filter((line) => line.trim() !== "")

     
     
    useGSAP(()=>{
     
        if(lineRef.current.length > 0){
            gsap.from(lineRef.current,{
                y:100,
                duration:1,
                opacity:0,
                stagger:0.3,
                ease:"back.out",
                scrollTrigger:{
                    trigger:textContainerRef.current
                }
            })
        }
         
    })
    
    



  return (
    <div ref={textContainerRef} className={className} >
         {

             lines.map((line , index)=>(
                <span
                key={index}
                ref={(el)=>lineRef.current[index] = el}
                className=' block text-pretty tracking-wide   leading-relaxed'
                >{line}</span>
             ))

         }
    </div>
  )
}

export default AnimatedTextLines