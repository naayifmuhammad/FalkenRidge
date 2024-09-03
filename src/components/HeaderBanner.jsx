import React from 'react';
import './HeaderBanner.css';
import { FaAnglesDown } from "react-icons/fa6";
import { useEffect } from 'react';


const HeaderBanner = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollDownElement = document.querySelector('.scroll-indicator');
      if (window.scrollY > 80) { // Hide the element after scrolling 50px
        scrollDownElement.classList.add('hidden');
      } else {
        scrollDownElement.classList.remove('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }); 


  return (
    <header className="header-banner">
      <div className="left">
        <div className="company-name">
          <h1>Falken<span>Ridge</span></h1>
          
        </div>
        <p className="tagline">Building Solutions, Shaping Futures.</p>
        <p className="description">
          At FalkenRidge, we leverage cutting-edge technology and innovative solutions to drive your business forward. From bespoke software development to scalable cloud solutions, our expertise spans the full spectrum of modern tech needs.
        </p>
        <div className="cta-container">
          <a href="#contact" className="button-primary">Get in Touch</a>
          <a href="#services" className="button-primary">Our Services</a>
        </div>
      </div>
      <div className="right">
        <img src="header/header-image-3-min.png" className='header-image' alt="Technology and Innovation" />
      </div>
      <div className="scroll-indicator">
        <div className="arrow">
        <FaAnglesDown />
        </div>
      </div>
    </header>
  );
};

export default HeaderBanner;
