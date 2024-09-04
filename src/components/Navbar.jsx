import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname + location.hash);

  useEffect(() => {
    setCurrentPage(location.pathname + location.hash);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setCurrentPage(path);
    if (isOpen) {
      toggleMenu(); // Close the menu when a link is clicked
    }
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo-text"><img src="/company_assets/logo.png" width={70} alt="FalkenRidge" /></a>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a
          href="/"
          onClick={() => handleLinkClick('/')}
          className={`clickable-text-primary ${currentPage === '/' ? 'current-page' : ''}`}
        >
          Home
        </a>
        <a
          href="/#projects"
          onClick={() => handleLinkClick('/#projects')}
          className={`clickable-text-primary ${currentPage === '/#projects' ? 'current-page' : ''}`}
        >
          Projects
        </a>
        <a
          href="/#team"
          onClick={() => handleLinkClick('/#team')}
          className={`clickable-text-primary ${currentPage === '/#team' ? 'current-page' : ''}`}
        >
          Team
        </a>
        <a
          href="/contact"
          onClick={() => handleLinkClick('/contact')}
          className={`clickable-text-primary ${currentPage === '/contact' ? 'current-page' : ''}`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
