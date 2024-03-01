import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './input.css'
import image1 from "../src/assets/herobg.png"
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Expierence from './component/Expierence'
import Symbol from './component/Tech'
import Ball from './component/Ball'
import Project from './component/Project'
import { BrowserRouter } from 'react-router-dom'
import Testimonial from "./component/Testimonial"
import Contact from './component/Contact'
import StarsCanvas from './canvas/Star'
function App() {
  
  const backgroundImageStyle = {
    background: `url(${image1}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };
  // #151030

  return (
  <BrowserRouter>
      <div className=' overflow-hidden'>
      <div className='  w-screen h-screen text-white ' style={backgroundImageStyle}>
        <Navbar/>
        <Hero/>
      </div>
        <div className='bg-[#0a071a] '>
            <About/>
            <Expierence/>
            <Symbol/>
            <Project/>
            <Testimonial/>
            <div className=' relative z-0 '>
                <Contact/>
                <StarsCanvas/>
            </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
