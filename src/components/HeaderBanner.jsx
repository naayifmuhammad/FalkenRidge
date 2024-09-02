import React from 'react';
import './HeaderBanner.css';

const HeaderBanner = () => {
  return (
    <header className="header-banner">
      <div className="left">
        <div className="company-name">
          <h1>Falken</h1>
          <h1>Ridge</h1>
        </div>
        <p className="tagline">Building Solutions, Shaping Futures.</p>
        <p className="description">
          At FalkenRidge, we leverage cutting-edge technology and innovative solutions to drive your business forward. From bespoke software development to scalable cloud solutions, our expertise spans the full spectrum of modern tech needs.
        </p>
        <div className="cta-container">
          <a href="#contact" className="cta-button">Get in Touch</a>
          <a href="#services" className="cta-button secondary">Our Services</a>
        </div>
      </div>
      <div className="right">
        <img src="header/header-image-3-min.png" className='header-image' alt="Technology and Innovation" />
      </div>
      <div className="scroll-indicator">
        <p>Scroll Down</p>
        <div className="arrow"></div>
      </div>
    </header>
  );
};

export default HeaderBanner;
