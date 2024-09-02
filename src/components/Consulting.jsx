import React from 'react';
import data from '../data/data.json';
import './Consulting.css';

const Consulting = () => {
  const { description, services } = data.consulting;

  return (
    <section id="consulting">
      <h2>Consulting</h2>
      <p>{description}</p>
      <div className="consulting-services">
        <h3>Our Consulting Services:</h3>
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

export default Consulting;
