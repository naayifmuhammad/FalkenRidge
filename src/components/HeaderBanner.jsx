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
      <p>Building Solutions, Shaping Futures.</p>
      <a href="#contact" className="cta-button">Get in Touch</a>
    </div>
    <div className="right">
      <img src="header/header-image-3.png" className='header-image' alt="" />
    </div>
    </header>
  );
};

export default HeaderBanner;
