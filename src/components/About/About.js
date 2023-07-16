import React from 'react';
import { aboutContent } from '../../data/content';
import './About.css';

const About = () => {
  return (
    <section className="about"  id="about">
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
          <img src={`assets/${aboutContent.logo}`} alt="Logo"/>
        </div>
      </div>
      {/* <h3>Testimonials</h3>
      <div className="testimonials">
        {aboutContent.testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <p>{testimonial.message}</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default About;
