import React from 'react'
import github from "../assets/github.png"
import "../input.css"

const ProjectCard = ({project}) => {

  return (
    <div  className='bg-tertiary p-5 rounded-xl sm:w-[360px] w-full'>
        <div className='w-full '>
            <img  src={project.icon} alt='Image' className=' relative w-full h-48 object-cover rounded-2xl'/>
            <a href={project.gitlink} 
            target='_blank' 
            rel='noopener noreferrer' 
           
            >
                <img src={github}  className=' absolute black-gradient w-1/8  h-[2rem] inset-0  translate-y-8  ml-6  object-contain'/>
            </a>
            <p className='text-white font-bold text-[24px] mt-2'>{project.title}</p>
            <p className='mt-2 text-secondary text-[14px]'>{project.para}</p>
            <div className=' flex gap-3 flex-wrap'>
                {
                    project.highlight.map((data,index)=>(
                        <div key={index} className={`${data.color}`}>
                             {data.name}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectCard