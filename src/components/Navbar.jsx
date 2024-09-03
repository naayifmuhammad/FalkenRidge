import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('/')

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path)=>{
    setCurrentPage(path);
  }

  return (
    <nav className="navbar">
      <a href="/" className="logo-text"><img src="/company_assets/logo.png" width={70} alt="FalkenRidge" /></a>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="/" onClick={()=> handleLinkClick('/')} className={`clickable-text-primary ${currentPage === '/' ? 'current-page' : ''}`} >Home</a>
        <a href="/#projects" onClick={()=> handleLinkClick('/#projects')}  className={`clickable-text-primary ${currentPage === '/#projects' ? 'current-page' : ''}`}>Projects</a>
        <a href="/#team" onClick={()=> handleLinkClick('/#team')} className={`clickable-text-primary ${currentPage === '/#team' ? 'current-page' : ''}`}>Team</a>
        {/* <a href="https://facebook.com" target='_blank' rel="noreferrer">{isOpen ? "Facebook" : <i className='fa fa-facebook-official'></i>}</a>
        <a href="https://www.linkedin.com/company/falkenridge" target='_blank' rel="noreferrer">{isOpen ? "LinkedIn" : <i className='fa fa-linkedin'></i>}</a> */}
        <a href="/contact" className='contact-button clickable-text-primary'>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
