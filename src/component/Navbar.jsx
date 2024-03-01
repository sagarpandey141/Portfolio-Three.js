import React from 'react'
import logo from "../assets/logo.png"
import { styles } from '../style'

const Navbar = () => {
  return (
    <section className=''>
    <div className={`  ${styles.paddingX}  w-11/12 mx-auto flex justify-between  text-white `}>
        <div className=' flex justify-center items-center mt-3  gap-3'>
            <img src={logo} className=' h-11 w-11' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>Sagar | Full Stack Developer</p>
        </div>
        <div className=' flex  mt-3'>
            <ul className=' flex  gap-6'>
                <a href='#about' className=' font-bold text-orange-500'>About</a>
                <a href='#work'>Work</a>
                <a href='#contact' className=' font-bold text-green-500'>Contact</a>
            </ul>
        </div>
    </div>
  </section>
  )
}

export default Navbar