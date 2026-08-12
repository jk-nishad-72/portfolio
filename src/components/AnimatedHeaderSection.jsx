
import React, { useRef } from 'react'
import AnimatedTextLines from './AnimatedTextLines';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AnimatedHeaderSection = ({
     subTitle,
     title,
     paratext,
     textColor,
     withScrollTrigger = false,
}) => {

     const contextRef = useRef(null);

     const headerRef = useRef(null)

     const splitTitleOrNot  = title.includes(' ')

     const titleParts = splitTitleOrNot ?  title.split(" ") :[title] ;


     useGSAP(()=>{

        const tl = gsap.timeline({scrollTrigger : withScrollTrigger ? {trigger:contextRef.current} :undefined})

        tl
        .from(contextRef.current,{
            y:'50vh',
            duration:1,
            ease:'circ.out',
        })
        .from(headerRef.current,{
            opacity:0,
            y:'100',
            duration:1,
            ease:'circ.out'
        } , "<+0.2")
     },[])

  return (
    <div ref={contextRef}>

         <div style={{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}>
            
              <div ref={headerRef} className=' flex  flex-col justify-center gap-12 pt-14 sm:gap-16'>

                     <p 
                      className={` text-sm uppercase font-light tracking-[0.5rem] px-10 ${textColor}`}
                     > {subTitle} </p>

                     <div className=' px-10 '>
                         <h1 className={`  flex flex-col  gap-12 uppercase  banner-text-responsive  sm:gap-16 md:block ${textColor} `}> 
                            {
                                titleParts.map((char , index)=>(
                                    <span key={index}> {char} </span>
                                ))
                            }
                         </h1>
                     </div>

              </div>

         </div>


         <div  className={` relative px-10 ${textColor}`}>
             <div className=' absolute inset-x-0 border-t-2'  /> 

                 <div className=' py-12 sm:py-16 text-end'> 
                    <AnimatedTextLines 
                       paratext = {paratext} 
                       className  ={` font-light  uppercase value-text-responsive ${textColor}`}
                     />
                 </div>
         </div>
         
    </div>
  )
}

export default AnimatedHeaderSection