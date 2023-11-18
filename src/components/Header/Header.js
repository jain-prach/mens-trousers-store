import React, { useEffect } from 'react';
import { headerContent } from '../../data/content';
import './Header.css';

const Header = () => {
  useEffect(() => {
    document.querySelector('.header').style.opacity = 1; // Ensure opacity is set to 1 after component mounts
  }, []);

  const headerStyle = {
    backgroundImage: `url('assets/background.jpg')`, // Replace with the correct path
  };

  return (
    <header className="header" id="home" style={headerStyle}>
      <div className="header-content">
        <h1>{headerContent.title}</h1>
        <p>{headerContent.slogan}</p>
        <a href="#bestseller" className="button">Shop Now</a>
      </div>
    </header>
  );
};

export default Header;