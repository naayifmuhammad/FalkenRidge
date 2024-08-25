import React from 'react';
import './Projects.css';
import CountUp from 'react-countup';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div>
        <h3><CountUp end={60} duration={4}/>+ Projects Completed</h3>
        <p><i className='fa fa-truck'></i> We deliver quality work every time.</p>
      </div>
      <div>
        <h3><CountUp end={100} duration={4}  />+ Satisfied Clients</h3>
        <p><i className='fa fa-line-chart'></i> Your success is our priority.</p>
      </div>
    </section>
  );
};

export default Projects;
