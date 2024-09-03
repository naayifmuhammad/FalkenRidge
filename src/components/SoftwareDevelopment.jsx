import React from 'react';
import data from '../data/data.json';
import './SoftwareDevelopment.css';

const SoftwareDevelopment = () => {
  const { description, services } = data.softwareDevelopment;

  return (
    <section id="software-development">
      <div className="text-wrapper">
      <h1 className='heading-gradient'>Software Development</h1>
      </div>
      <p className='para-primary'>{description}</p>
      <ul className="service-list">
      {services.map((service, index) => (
        <li key={index} className="service-item">
          <h3 className="service-title">{service.type}</h3>
          <p className="service-description">{service.description}</p>
        </li>
      ))}
      </ul>
    </section>
  );
};

export default SoftwareDevelopment;
