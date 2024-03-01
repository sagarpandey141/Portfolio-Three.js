import React from 'react'
import { motion } from "framer-motion";
import "./../input.css"
import { styles } from '../style'
import ComputersCanvas from '../canvas/ComputerCanvas'
const Hero = () => {
  return (
   <section >
     <div  className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className=' flex flex-col justify-center items-center mt-3'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
           <p className={`${styles.heroHeadText}`}> Hi,I'm <span className='text-[#915EFF]'>Sagar</span></p>
           <p className={`${styles.heroSubText} max-w-[57%]`}>I develop 3D visuals, user interface and web applications</p>
        </div>
    </div>
    <div className='  h-[600px]'>
    <ComputersCanvas/>
    </div>
   
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary '
            />
          </div>
        </a>
      </div>
   </section>
  )
}

export default Hero