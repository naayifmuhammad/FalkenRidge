import React from 'react';
import data from '../data/data.json';
import './ServicesPage.css';

const SoftwareDevelopment = () => {
  const { description, services } = data.softwareDevelopment;

  return (
    <section id="service-section">
      <div className="text-wrapper">
      <h1 className='heading-gradient'>Software Development</h1>
      </div>
      <p className='para-primary'>{description}</p>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="service-list">
      {services.map((service, index) => (
        <div className="service">
           <div className="left">
            <h2>{service.type}</h2>
            <p>{service.description}</p>
           </div>
           <div className="right">
            <img src={service.image} alt="" />
           </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default SoftwareDevelopment;
