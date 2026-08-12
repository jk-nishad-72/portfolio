
import React, { useRef, useState } from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import { projects } from '../constants'

import { MdArrowOutward } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Projects = () => {


   const [currentIndex , setCurrentIndex] = useState(null)
   const previewRef = useRef(null)
   const overlayRefs = useRef([])
   const paratext = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`



     const mouse = useRef({x:0, y:0})
     const moveX = useRef(null)
     const moveY = useRef(null)


    useGSAP(()=>{


      //return a usable function , restarting the animation each time when value is changed
      moveX.current =  gsap.quickTo(previewRef.current ,"x",{
          duration:1.5,
          ease:"power3.out"
        })

      moveY.current =  gsap.quickTo(previewRef.current ,"y",{
          duration:2,
          ease:"power3.out"
        })


        gsap.from( "#project" ,{

            y:100,
            opacity:0,
            ease:'back.out',
            delay:0.5,
            duration:1,
            stagger:0.4,
            scrollTrigger: {
             trigger: "#projects"
            }

        } )

    },[])

    const handleMouseEnter = (curIndex)=>{

       if(window.innerWidth < 768) return;
         setCurrentIndex(curIndex)


         const elementForOverlay = overlayRefs.current[curIndex]

         if(!elementForOverlay) return;

          //kill previous image
         gsap.killTweensOf(elementForOverlay)
         gsap.fromTo(
          elementForOverlay,
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
          },{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            duration:0.15,
            ease:'power2.out'
          }
         )

         gsap.to(previewRef.current,{
          opacity:1,
          scale:1,
          duration:0.3,
          ease:"power2.out"
         })
    }

      const handleMouseLeave = (curIndex)=>{

       if(window.innerWidth < 768) return;
         setCurrentIndex(null)


         const elementForOverlay = overlayRefs.current[curIndex]

         if(!elementForOverlay) return;

          //kill previous image
         gsap.killTweensOf(elementForOverlay)
         gsap.to(
          elementForOverlay,
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            duration:0.15,
            ease:'power2.out'
          }
         )

         gsap.to(previewRef.current,{
          opacity:1,
          scale:1,
          duration:0.3,
          ease:"power2.out"
         })

         gsap.to(previewRef.current,{
          opacity:0,
          scale:0,
          duration:0.3,
          ease:"power2.out"
         })


    }


const handleMouseMove = (e)=>{

   if(window.innerWidth < 768) return;

   mouse.current.x = e.clientX + 24;
   mouse.current.y = e.clientY = 24;
   
   // animation on  mouse move x and y
    moveX.current(mouse.current.x)
    moveY.current(mouse.current.y)
}

  return (
    <section id='projects' className=' min-h-screen  flex flex-col'>

         <AnimatedHeaderSection 
         subTitle={"Logic meets Asthetics , Seamlessly"}
         title={"Projects"}
         paratext={paratext}
         textColor={"text-black"}
         withScrollTrigger={true}
         /> 

       {/* all projects container */}

         <div className=' flex flex-col  relative font-light '

          onMouseMove={(e)=>handleMouseMove(e)}
          >
            {
               projects.map((project , index)=>(

                <div
                key={index} 
                id='project'
                className=' flex flex-col gap-1 py-5 relative group cursor-pointer md:gap-0  '

                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                 >

                   {/* overlay */}
                   <div 
                   ref={(element)=>overlayRefs.current[index] = element} 
                   className=' absolute inset-0 hidden md:block  duration-200 bg-black -z-10  clip-path'
                    />

                   {/* titel */}
                   <div className='flex  justify-between px-10 text-black transition-all duration-500 
                   md:group-hover:px-12 md:group-hover:text-white  '>
                     <h2 className='lg:text-[32px] text-[26px] leading-none'> {project.name} </h2> <MdArrowOutward size={18} /> </div>   


                   {/* divider */}
                   <div className=' w-full bg-black/80  h-0.5 ' />

                   {/* frameworks */}
                   <div className=' flex px-10 text-xs gap-x-5 leading-loose uppercase 
                    transition-all duration-500 md:text-sm md:group-hover:px-12 
                    '> 
                       {
                        project.frameworks.map((framework,index)=>(
                          <p 
                          key={index}
                          className=' text-black transition-colors md:group-hover:text-white  '
                          >
                             {framework.name}
                          </p>
                        ))
                       }
                     </div>

                     {/* mobile preview  */}

                     <div className=' relative flex items-center justify-center  px-10 h-[400px] md:hidden  '>
                         {/* bg */}
                         <img 
                         src={project.bgImage} 
                         alt={project.name} 
                          className=' w-full h-full object-cover rounded-md brightness-50'
                          />

                         {/* product */}
                         <img src={project.image} alt={project.name} 
                           className=' absolute bg-center rounded-xl  px-15  '
                         
                         />
                     </div> 

                </div>
               ))
            }

            {/* desktop floating project images */}

                     <div 
                      ref={previewRef}
                     
                      className=' fixed -top-0 left-0 z-50 pointer-events-none  overflow-hidden border-8 border-black
                     md:block hidden w-[960px]  opacity-0'>   

                          {
                            currentIndex !== null && 
                            
                            <img 
                             src={projects[currentIndex].image}
                              onClick={()=>console.log('hello')}
                             alt='preview'
                             className=' object-cover w-full h-full'

                        />
                          }
                       
                     </div>
         </div>

    </section>

  )
}

export default Projects