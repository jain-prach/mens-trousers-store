import React from 'react';
import { contactContent } from '../../data/content';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h1>{contactContent.title}</h1>
      <p><i className="fas fa-envelope"></i> Email: {contactContent.email}</p>
      <p><i className="fas fa-phone"></i> Phone: {contactContent.phone}</p>
      <p><i className="fas fa-map-marker-alt"></i> Address: {contactContent.address}</p>
    </section>
  );
};

export default Contact;
