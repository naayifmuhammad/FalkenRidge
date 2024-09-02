import React from 'react';
import data from '../data/data.json';
import './SoftwareDevelopment.css';

const SoftwareDevelopment = () => {
  const { description, services } = data.softwareDevelopment;

  return (
    <section id="software-development">
      <h2>Software Development</h2>
      <p>{description}</p>
      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index} className="service-item">
            <h3>{service.type}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SoftwareDevelopment;
