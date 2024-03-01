import React from 'react'
import TestimonialData from '../constant/TestiArray'
import { styles } from '../style'
import TestimonialCard from '../common/TestimonialCard'

const Testimonial = () => {
  return (
    <div className='bg-tertiary p-9 rounded-2xl  mt-[10%] w-9/12 mx-auto pb-32'>
        <p className={`${styles.sectionSubText}`}>What others say</p>
        <p className={`${styles.sectionHeadText}`}>Testimonials.</p>
        <div className=' mt-6 flex  md:flex-row flex-col gap-7 justify-between'>
            {
                TestimonialData.map((data,index)=>(
                <div key={index}>
                     <TestimonialCard testmonial={data}/>
                </div>
               ))
            }
        </div>
    </div>
  )
}

export default Testimonial