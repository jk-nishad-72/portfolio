import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { socials } from '../constants';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {


     const navRef = useRef(null)
     const linkRef = useRef([]);
     const contactRef = useRef(null) 

     const topLineRef = useRef(null)
     const bottomLineRef = useRef(null)
     const [isOpen , setIsOpen] = useState(false) 

     const [showMenu , setShowMenu] = useState(true)
     const tl = useRef(null)
     const menuBtnTl = useRef(null)

//   gsap animation for nav bar 

     useGSAP(()=>{

           gsap.set(navRef.current ,{xPercent:100} )
           gsap.set([linkRef.current , contactRef.current],{
               autoAlpha:0,
               x:-20
           })

        tl.current =    gsap
           .timeline({paused:true})
           .to(navRef.current , {
               xPercent:0,
               duration:1,
               ease:'power3.out',
           })
           .to(linkRef.current,{
               autoAlpha:1,
               x:0,
               stagger:0.1,
               duration:0.5,
               ease:'power2.out'
           },"<") // start with navRef
           .to(contactRef.current,{
               autoAlpha:1,
               x:0,
               duration:0.5,
               ease:'power2.out'
           },"<+0.2") // start after 0.2 sec of navRef animation 


           menuBtnTl.current =   gsap.timeline({paused:true}) 
           .to(topLineRef.current,{
               rotate:45,
               y:3.3,
               duration:0.2,
               ease:'power2.inOut'
           })
           .to(bottomLineRef.current,{
               rotate:-45,
               y:-3.3,
               duration:0.2,
               ease:'power2.inOut'
           },"<") // start with topLineRef 
     },[])


     useEffect(()=>{

           let lastScrollY = window.scrollY;
          const handlScroll = ()=>{
           const currentScrollY = window.scrollY;
             setShowMenu( currentScrollY <= lastScrollY || currentScrollY <10 )

             lastScrollY = currentScrollY;

          }
        

          window.addEventListener('scroll',handlScroll , {passive:true})

              //  deleting event after unmounting component
          return () => window.removeEventListener('scroll',handlScroll) 
     },[])

     // toggle Menu 
     const openMenu = () => {

       if(isOpen){
           tl.current.reverse()
           menuBtnTl.current.reverse()
       }else{
            tl.current.play()
           menuBtnTl.current.play()
       }
       
       setIsOpen(prev => !prev)
        
     }

  return (

     <>

     {/* nav bar  */}
    <nav 
    ref={navRef} 
    className=' fixed z-50  flex flex-col  justify-between gap-y-10 w-full h-full bg-black text-white/80 
     uppercase px-10 py-28 md:w-1/2 md:left-1/2   '> 

         {/* routes */}
      <div className='flex  flex-col text-5xl  gap-y-2 md:text-6xl   lg:text-8xl'>
          {[
            {to :'/',label:'home'} , 
            // {to :'/services',label:'services'},
            {to :'/about',label:'about'},
            {to :'/projects',label:'projects'},
            {to :'/contact',label:'contact'}
          ]
          .map((route , index) => ( 
             <div
              key={index} 
              ref={(el) => linkRef.current[index] = el} 
              className=' flex flex-col hover:text-white  ' > 
                <Link 
                 to={`${route.to}`}
                 smooth
                 offset={0}
                 duration={2000}
                  > {route.label} </Link>
                 
              </div>
          ))}

      </div> 

          {/* social media links */}
      <div ref={contactRef}  className=' flex flex-col gap-8 justify-between  flex-wrap md:flex-row '>
            <div className='font-light'>
                <p className=' tracking-wider text-white/50'>E-mail</p>
                <p className=' lowercase tracking-widest text-pretty text-xl'> jkn18869@gmail.com </p>
            </div>

            <div className=' font-light'> 

                <p className=' tracking-wider text-white/50'> Social Media  </p>

                 <div className='flex gap-x-2  flex-col  flex-wrap md:flex-row'>
                    {socials.map((social,index)=>(
                         <a 
                         key={index} 
                         href={social.href}
                         className=' transition-all hover:text-white ' 
                         > 
                         {"{ "}  {social.name} {" }"} </a>
                    ))}
                 </div>

            </div>
      </div>

    </nav>


     {/* menu button */}
    <div
      onClick={openMenu}
      style={
          showMenu ? {
               clipPath:"circle(50% at 50% 50%)"
          }:{
            clipPath:"circle(0% at 50% 50%)"
          }
      }
     className='fixed z-50  flex flex-col items-center justify-center gap-1  bg-black cursor-pointer  transition-all duration-300 rounded-full  w-14 h-14  md:w-20 md:h-20  top-4 right-10  '>
        
        <span ref={topLineRef} className='block w-8 h-0.5 bg-white rounded-full origin-center transition-all '> </span>
        <span ref={bottomLineRef} className='block w-8 h-0.5 bg-white rounded-full origin-center transition-all '> </span>
     
    </div>
     </>
  )
}

export default Navbar