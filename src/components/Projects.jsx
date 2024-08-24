import React from 'react';
import './Projects.css';
import CountUp from 'react-countup';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div>
      
        <h3><CountUp end={60} duration={4}/>+ Projects Completed</h3>
        <div className="para-container">
        <i className='fa fa-truck'></i><p>We deliver quality work every time.</p>
        </div>
      </div>
      <div>
        <h3><CountUp end={100} duration={4}  />+ Satisfied Clients</h3>
        <div className="para-container">
        <i className='fa fa-line-chart'></i><p>Your success is our priority.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
