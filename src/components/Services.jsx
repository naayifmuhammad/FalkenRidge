import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import { FaCode, FaCloud, FaLightbulb, FaPaintBrush, FaPencilRuler } from 'react-icons/fa';
import './Services.css';

const iconMap = {
  FaCode: <FaCode />,
  FaCloud: <FaCloud />,
  FaLightbulb: <FaLightbulb />,
  FaPaintBrush: <FaPaintBrush />,
  FaPencilRuler: <FaPencilRuler />
};

const Services = () => {
  const services = data.services;

  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.name} className="service-card">
            {iconMap[service.icon]} {/* Dynamically rendering the icon */}
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <Link to={service.link} className="learn-more">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
