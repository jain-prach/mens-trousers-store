import React, { useState } from 'react';
import './Navbar.css';
import { Content } from '../../data/content';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <a href="#header">
            <img src={`assets/${Content.logo}`} alt="Logo" />
          </a>
        </div>
      </div>
      <div className={`navbar-right ${showMenu ? 'active' : ''}`}>
        <div className={`menu-icon ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#bestseller">Collection</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
