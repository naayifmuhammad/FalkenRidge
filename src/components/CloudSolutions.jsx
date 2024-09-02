import React from 'react';
import data from '../data/data.json';
import './CloudSolutions.css';

const CloudSolutions = () => {
  const { description, services } = data.cloudSolutions;

  return (
    <section id="cloud-solutions">
      <h2>Cloud Solutions</h2>
      <p>{description}</p>
      <div className="cloud-services">
        <h3>Our Cloud Solutions:</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <h4>{service.type}</h4>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CloudSolutions;
