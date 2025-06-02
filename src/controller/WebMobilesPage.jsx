import React from 'react';
import WebMobile from '../pages/projects/web/WebMobiles';
import Header from '../components/header/Header';
import ScrollReveal from '../components/scroolreveal/ScrollReveal';
import StarsCanvas from '../components/meteor/Star';
import '../App.css';

function WebMobilePage() {
  return (
    <div className="app-container">
      <StarsCanvas />
      <div className="main-content">
        <Header />
        <ScrollReveal>
          <WebMobile />
        </ScrollReveal>
      </div>
    </div>
  );
}

export default WebMobilePage;