
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger , useGSAP)
const AboutSummery = () => {

    useGSAP(()=>{

         gsap.to('#title-about-1',{
        xPercent: 20,
        scrollTrigger: {
            target: "#title-about-1",
            scrub: true,
        },
       })
        gsap.to('#title-about-2',{
        xPercent: -30,
        scrollTrigger: {
            target: "#title-about-2",
            scrub: true,
        },
       })
       gsap.to('#title-about-3',{
        xPercent: 50,
        scrollTrigger: {
            target: "#title-about-3",
            scrub: true,
        },
       })
        gsap.to('#title-about-4',{
        xPercent: -100,
        scrollTrigger: {
            target: "#title-about-4",
            scrub: true,
        },
       })
        
    })


  return (
    <section  className=' mt-10  overflow-hidden  font-light  leading-snug  text-center mb-45 contact-text-responsive'>
        <div id='title-about-1'>
             <p>Architechture</p>
        </div>

         <div id='title-about-2'
         className=' flex items-center justify-center gap-3 translate-x-16 ' 
          >
             <p className=' font-normal'> Development </p>
             <div className=' w-10 h-1 bg-gold md:w-32' />
             <p>Deployment </p>
        </div>

        <div id='title-about-3'
         className=' flex items-center justify-center gap-3 -translate-x-48 ' 
          >
             <p className=''> APIs </p>
             <div className=' w-10 h-1 bg-gold md:w-32' />
             <p className=' italic'>Frontends </p>
              <div className=' w-10 h-1 bg-gold md:w-32' />
             <p>Scalability </p>
        </div>

         <div id='title-about-4' className='translate-x-60'>
             <p>Database</p>
        </div>

    </section>
  )
}

export default AboutSummery