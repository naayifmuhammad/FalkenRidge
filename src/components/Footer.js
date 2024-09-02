import React from 'react';

import './Footer.css';



const Footer = () => {


  return (
    <footer className="footer">
      <div className="footer-top">
        

        <div className="footer-section">
          <h4>About FalkenRidge</h4>
          <p>FalkenRidge is a leading tech solutions provider, specializing in innovative software development, cloud services, and digital transformation.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#projects">Our Projects</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="">Software Development</a></li>
            <li><a href="/">Cloud Solutions</a></li>
            <li><a href="/">Consulting</a></li>
            <li><a href="/">Product Design</a></li>
            <li><a href="/">Portfolio Design</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:info@falkenridge.com">info@falkenridge.com</a></p>
          <p>Phone: <a href="tel:+918304084027">+91-83040 84027</a></p>
          <p>Address: Falkenridge Pvt. Ltd, Kerala, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://www.facebook.com/people/Falken-Ridge/61564968281037/" target="_blank"><i className="fa fa-facebook"></i></a>
          <a href="https://www.linkedin.com/company/falkenridge/" target="_blank"><i className="fa fa-linkedin"></i></a>
          <a href="https://x.com/FalkenRidge" target="_blank"><i className="fa fa-twitter"></i></a>
          <a href="https://github.com/FalkenRidge" target="_blank"><i className="fa fa-github"></i></a>
        </div>
        <div className="footer-legal">
          <p>&copy; 2024 FalkenRidge Pvt. Ltd. All Rights Reserved.</p>
          <p><a href="/terms-and-conditions">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
