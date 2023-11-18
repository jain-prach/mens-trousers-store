import React from 'react';
import "./Instagram.css";
import { instaContent } from '../../data/content';
const Instagram = () => {
  return (
    <section className="instagram" id="instagram">
      <h1>{instaContent.title}</h1>
      <div className="feed">
        {instaContent.feed.map((feed) => (
          <img
            key={feed.id}
            className="feed__item"
            src={`assets/${feed.image}`}
            alt={feed.alt}
          />
        ))}
      </div>
    </section>
  )
}

export default Instagram