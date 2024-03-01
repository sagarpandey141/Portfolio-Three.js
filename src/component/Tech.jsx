import React from 'react'
import Tech from '../constant/Tech'
import BallCanvas from '../canvas/Ball'

const Symbol = () => {
  return (
    <div className=' '>
       <div className=' p-5   flex flex-row flex-wrap  w-8/12 gap-10 mx-auto '>
          {
              Tech.map((data,index)=>(
                <div key={index} className=' w-28 h-28'>
                    <BallCanvas icon={data}/>
                </div>
              ))
            }
       </div>
    </div>
  )
}

export default Symbol