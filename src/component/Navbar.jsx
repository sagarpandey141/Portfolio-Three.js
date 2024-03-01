import React from 'react'
import logo from "../assets/logo.png"
import { styles } from '../style'

const Navbar = () => {
  return (
    <section className=''>
    <div className={`  ${styles.paddingX}  w-11/12 mx-auto flex justify-between  text-white `}>
        <div className=' flex mt-3  gap-3'>
            <img src={logo} className=' h-9 w-9' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>Sagar | Full Stack Developer</p>
        </div>
        <div className=' flex  mt-3'>
            <ul className=' flex  gap-6'>
                <a href='#about'>About</a>
                <a href='#work'>Work</a>
                <a href='#contact'>Contact</a>
            </ul>
        </div>
    </div>
  </section>
  )
}

export default Navbar