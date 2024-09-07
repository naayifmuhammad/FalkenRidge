import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import { FaCode, FaCloud, FaLightbulb, FaPaintBrush, FaPencilRuler } from 'react-icons/fa';
import './Services.css';
import { ImProfile } from "react-icons/im";


const iconMap = {
  FaCode: <FaCode />,
  FaCloud: <FaCloud />,
  FaLightbulb: <FaLightbulb />,
  FaPaintBrush: <ImProfile />,
  FaPencilRuler: <FaPencilRuler />
};

const Services = () => {
  const services = data.services;

  useEffect(()=>{
    window.ScrollReveal().reveal('.odd', {
      duration: 1500,        
      distance: '40px',      
      origin: 'left',       
      reset: true,
    });
    window.ScrollReveal().reveal('.even', {
      duration: 1500,        
      distance: '40px',      
      origin: 'right',       
      reset: true,
    });
  },[])

  return (
    <section id="services">
      <div className="services-heading-container">
      <h1 className='heading-gradient'>Our Services</h1>
      </div>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={service.name} className={`service-card ${index%2 === 0 ? 'even' : 'odd'}`}>
            {iconMap[service.icon]} {/* Dynamically rendering the icon */}
            <h3 className='heading-gradient'>{service.name}</h3>
            <p>{service.description}</p>
            <div className="btn-container">
              <Link to={service.link} className="learn-more btn-secondary">
              Learn More
            </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
