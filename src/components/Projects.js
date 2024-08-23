import React from 'react';
import './Projects.css';
import CountUp from 'react-countup';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div>
      
        <h3><CountUp end={60}/>+ Projects Completed</h3>
        <p>We deliver quality work every time.</p>
      </div>
      <div>
        <h3><CountUp end={100} />+ Satisfied Clients</h3>
        <p>Your success is our priority.</p>
      </div>
    </section>
  );
};

export default Projects;
