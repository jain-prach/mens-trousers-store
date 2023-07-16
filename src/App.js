import React from 'react';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Bestseller from './components/Bestseller/Bestseller';
import Newarrival from './components/Newarrival/Newarrival';
import Navbar from './components/Navbar/Navbar';
import Instagram from './components/Instagram/Instagram';
import { bestsellerContent, newArrivalsContent, contactContent } from './data/content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Bestseller bestsellerContent={bestsellerContent} />
      <Newarrival newArrivalsContent={newArrivalsContent} />
      <Instagram />
      <Contact contactContent={contactContent} />
    </div>
  );
}

export default App;
