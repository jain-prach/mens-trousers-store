import React from 'react';
import { headerContent } from '../../data/content';
import './Header.css';

const Header = () => {
  return (
    <header className="header" id="home">
      <h1>{headerContent.title}</h1>
      <p>{headerContent.slogan}</p>
      <div className="ad-container">
        {headerContent.ads.map((ad) => (
          <img key={ad.id} src={`assets/${ad.image}`} alt={ad.alt} />
        ))}
      </div>
      <a href="#bestseller" className="button">Shop Now</a>
    </header>
  );
};

export default Header;
