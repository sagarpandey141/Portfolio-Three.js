import React from 'react'
import { styles } from '../style'
import Projects from '../constant/ProjectArray'
import ProjectCard from '../common/ProjectCard'
import { Tilt } from 'react-tilt'

const Project = () => {

  
  return (
    <div className='  mt-24 w-9/12 mx-auto ' id='work'>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <p  className={`${styles.sectionHeadText}`}>Projects.</p>
        <p className=' text-slate-400 mt-4 max-w-[63%]'>Following projects showcases my skills and experience through real-world examples of my work. Fach project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
         <div className='  flex flex-col gap-4 md:flex-row flex-wrap justify-start items-start mt-20 '>
          {
            Projects.map((data,index)=>{
              return (
                <Tilt key={index}>
                    <ProjectCard project={data}/>
                </Tilt>
              )
            })
          }
         </div>
    </div>
  )
}

export default Project