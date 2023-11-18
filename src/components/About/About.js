import React, { useEffect, useRef } from 'react';
import { aboutContent } from '../../data/content';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;
    const options = {
      root: null,
      threshold: 0.2, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about-visible'); // Apply the CSS animation when the element is visible
        }
      });
    }, options);

    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about__heading">
        <h1>{aboutContent.title}</h1>
      </div>
      <div className="about__content">
        <div>
          <p>{aboutContent.description}</p>
          <h3>Our Services</h3>
          <p>{aboutContent.services}</p>
          <h3>Quality Assurance</h3>
          <p>{aboutContent.qualityAssurance}</p>
          <h3>Customer Satisfaction</h3>
          <p>{aboutContent.customerSatisfaction}</p>
          <p>{aboutContent.conclusion}</p>
        </div>
        <div className="logo">
          <img src={`assets/${aboutContent.logo}`} alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default About;