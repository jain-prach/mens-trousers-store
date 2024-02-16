// Instagram.js
import React from 'react';
import './Instagram.css';
import { instaContent } from '../../data/content';

const Instagram = () => {
  return (
    <section className="instagram" id="instagram">
      <h1>{instaContent.title}</h1>
      <div className="feed">
        {instaContent.feed.map((feed) => (
          <div key={feed.id} className="feed__item">
            <img className="feed__image" src={`assets/${feed.image}`} alt={feed.alt} />
            <div className="overlay">
              <a href={feed.instagramLink} className="see-more-text" target="_blank" rel="noopener noreferrer">
                See more
              </a>
            </div>
          </div>
        ))}
        <div className="see-more-mobile">
          <a href="https://www.instagram.com/c2c_legwear" className="see-more-text" target="_blank" rel="noopener noreferrer">
            See more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
