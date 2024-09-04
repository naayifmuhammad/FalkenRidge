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
            <li><a href="/site-maintenance">Our Projects</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/software-development">Software Development</a></li>
            <li><a href="/cloud-solutions">Cloud Solutions</a></li>
            <li><a href="/consulting">Consulting</a></li>
            <li><a href="/product-design">Product Design</a></li>
            <li><a href="/portfolio">Portfolio Design</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:info@falkenridge.com">info@falkenridge.com</a></p>
          <p>Phone: +91-8304-084027</p>
          <p>Address: Falkenridge Pvt. Ltd, Kerala, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://www.linkedin.com/company/falkenridge" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
          <a href="https://x.com/FalkenRidge" target="_blank" rel="noreferrer" ><i className="fa fa-twitter"></i></a>
          <a href="https://github.com/FalkenRidge" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
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
