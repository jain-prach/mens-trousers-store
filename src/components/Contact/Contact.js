import React from 'react';
import { contactContent } from '../../data/content';
import './Contact.css';

const Contact = () => {
  const handleIconHover = (event) => {
    event.target.style.color = 'red'; // Change the color to red upon hover
  };

  const handleIconLeave = (event) => {
    event.target.style.color = ''; // Reset the color when the mouse leaves
  };

  return (
    <section className="contact">
      <h1>{contactContent.title}</h1>
      <p>
        <i className="fas fa-envelope" onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}></i> Email: {contactContent.email}
      </p>
      <p>
        <i className="fas fa-phone" onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}></i> Phone: {contactContent.phone}
      </p>
      <p>
        <i className="fas fa-map-marker-alt" onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}></i> Address: {contactContent.address}
      </p>
    </section>
  );
};

export default Contact;

