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
        <a href="#projects">Projects</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
