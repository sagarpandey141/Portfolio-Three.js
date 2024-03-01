import React, { useState, useEffect } from 'react';
import techStack from '../constant/aboutarray';
import { styles } from '../style';
import { Tilt } from 'react-tilt';

const About = () => {
  const [isVisible, setIsVisible] = useState(Array(techStack.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const boundingBox = aboutSection.getBoundingClientRect();
        const sectionIsVisible = boundingBox.top < window.innerHeight / 2;

        // Update isVisible state for each card based on visibility
        setIsVisible((prevVisibility) => prevVisibility.map(() => sectionIsVisible));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='bg-[#0a071a]' id='about'>
      <div className='w-8/12 mx-auto h-full flex flex-col gap-10 '>
        <div className='mt-32'>
          <h1 className={`${styles.sectionSubText}`}>INTRODUCTION</h1>
          <p className={`${styles.sectionHeadText}`}>Overview</p>
          <p className='max-w-[55%] text-slate-400'>
            I'm a skilled software developer with experience in TypeScript and JavaScript and expertise in frameworks
            like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create
            efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to
            bring your ideas to life!
          </p>
        </div>
        <div className='  w-full flex flex-col md:flex-row    border border-red-500  gap-10 mb-32'>
          {techStack.map((data, index) => (
            <Tilt
              key={index}
              className={`${
                isVisible[index] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-16'
              } transition-opacity  duration-500 ease-in-out transition-transform bg-tertiary boxShadow rounded-xl border outline-2 py-5 px-12 min-h-[220px] md:full    flex justify-evenly items-center flex-col`}
            >
              <img className='w-16 h-16 object-contain' src={data.image} alt={data.heading} />
              <h1 className='text-white text-[20px] font-bold text-center'>{data.heading}</h1>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
