
import React from 'react'
import About from './About'
import Hero from '../sections/Hero'
import AboutSummery from '../sections/AboutSummery'
import Projects from './Projects'
import Contact from './Contact'
import ContactSummary from '../components/ContactSummary'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto' >
       <Hero /> 
       <AboutSummery />  
       <About />
       <Projects /> 
       <ContactSummary /> 
       <Contact />
       <Footer />
    </div>
  )
}

export default Home