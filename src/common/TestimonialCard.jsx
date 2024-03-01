import React from 'react'
import { styles } from '../style'

const TestimonialCard = ({testmonial}) => {
  return (
    <div>
       <div className='bg-[#0a071a] w-[20rem] rounded-2xl p-5 shadow-2xl'>
            <p className=' font-bold text-5xl text-orange-400'>""</p>
            <p className=' max-w-[80%]'>{testmonial.thought}</p>
            <div className=' mt-4 flex justify-between'>
               <div>
                   <p className=' text-green-500'>{testmonial.name}</p>
                   <p className=' text-slate-400'>{testmonial.desi}</p>
               </div>
               <div>
                  <img src={testmonial.image}   className='w-10 h-10 rounded-full object-cover'/>
               </div>
            </div>
       </div>
    </div>
  )
}

export default TestimonialCard