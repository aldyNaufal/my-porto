import React from 'react';

import Contact from '../pages/contact/Contact';
import Header from '../components/header/Header';

import ScrollReveal from '../components/scroolreveal/ScrollReveal';
import StarsCanvas from '../components/meteor/Star';
import '../App.css';


function ContactPage() {
  return (
    <div className="app-container">
      <StarsCanvas />
      <div className="main-content">
        <Header />
        <Contact />
      </div>
    </div>
  );
}

export default ContactPage;