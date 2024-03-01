import React, { useEffect, useRef, useState } from 'react';
import { styles } from '../style';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../../src/App.css"
import { experiences } from '../constant/Challenges';
import ExperienceCard from "../common/Card"

const Experience = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = sectionRef.current;
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const isSectionVisible = scrollY > sectionTop - windowHeight + sectionHeight / 2;
      setIsVisible(isSectionVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='' ref={sectionRef}>
      <div className='w-8/12 mx-auto flex flex-col gap-10 '>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h1 className={`${styles.sectionHeadText}`}>Key Tech Stack Of My Project.</h1>

        <div className='mt-20 flex  flex-col '>
          <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      </div>
    </section>
  );
};

export default Experience;
