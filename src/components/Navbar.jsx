import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo-text"><img src="company_assets/logo.png" width={70} alt="FalkenRidge" /></a>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="/#projects">Projects</a>
        <a href="/#team">Team</a>
        <a href="https://facebook.com" target='_blank'>{isOpen ? "Facebook" : <i className='fa fa-facebook-official'></i>}</a>
        <a href="https://linkedin.com" target='_blank'>{isOpen ? "LinkedIn" : <i className='fa fa-linkedin'></i>}</a>
        <a href="/contacts" className='contact-button'>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
