
import React, { useRef } from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import AnimatedTextLines from '../components/AnimatedTextLines'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const About = () => {

  const paratext = `Passionate about clean architecture
I build experiences, high-performance solutions
from prototype to production.`

const aboutText = `I’m focused on building clean, scalable apps—from responsive React UIs to solid backend systems. I believe every line of code should be efficient, reliable, and user-focused.

When I’m not coding:
⚡️ Solving DSA & sharpening problem-solving
🚀 Building and shipping real-world projects
📚 Learning new tech & improving daily
🎯 Sharing my journey with the dev community`; 


   const imageRef = useRef(null)
   const aboutRef = useRef(null)

  
   useGSAP(()=>{

     gsap.to(aboutRef.current,{

       scale:0.95,
       scrollTrigger:{
        trigger:aboutRef.current,
        // markers:true,
        start:'bottom 80%',
        end:'bottom 20%',
        scrub:true,
       },
       ease:"power1.inOut"
     })

     gsap.set(imageRef.current ,{
      clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
     })
     gsap.to(imageRef.current,{
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration:2,
        ease:'power4.out',
        scrollTrigger:{trigger:imageRef.current}
     })
   })




  return (
    <div ref={aboutRef} className=' min-h-screen  bg-black rounded-b-4xl   '>  


                  <AnimatedHeaderSection 
                   subTitle={"Code with purpose, Build to scale"}
                   title={"About"}
                   paratext={paratext}
                   textColor={"text-white"}
                   withScrollTrigger={true}
                   />

                   <div className=' flex flex-col items-center justify-between gap-16
                    text-xl text-white/60 font-light tracking-wide px-10 pb-16
                     lg:flex-row md:text-2xl lg:text-3xl '>

                     <img 
                     ref={imageRef}
                     className=' w-md rounded-3xl object-cover' 
                     src="/images/port-image.png" 
                     alt="myphoto" />

                      <AnimatedTextLines paratext={aboutText} className={'w-full  '}  /> 
                   </div>

    </div>
  )
}

export default About