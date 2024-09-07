import {useRef, useEffect, React, useState} from 'react';
import './Projects.css';
import CountUp from 'react-countup';

const Projects = () => {
  
  const projectRef = useRef();
  const [startCounting, setStartCounting] = useState(false);


  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      const entry = entries[0];  
      setStartCounting(entry.isIntersecting);    
    })
  
    obs.observe(projectRef.current);

    window.ScrollReveal().reveal('.left ,.right', {
      duration: 1500,        
      distance: '20px',      
      origin: 'bottom',       
      reset: true,
    });

    return () => obs.disconnect();

  },[]);
  
  return (
    <section ref={projectRef} id="projects" className="projects-section">
      <div className='left'>
        <h3>{startCounting && <CountUp end={60} duration={4}/>}+ Projects Completed</h3>
        <p><i className='fa fa-truck'></i> We deliver quality work every time.</p>
      </div>
      <div className='right'>
        <h3>{startCounting && <CountUp end={100} duration={4}  />}+ Satisfied Clients</h3>
        <p><i className='fa fa-line-chart'></i> Your success is our priority.</p>
      </div>
    </section>
  );
};

export default Projects;
