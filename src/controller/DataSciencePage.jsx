// controller/DataSciencePage.js
import React from 'react';
import DataScience from '../pages/projects/data/DataScience';
import Header from '../components/header/Header';
import ScrollReveal from '../components/scroolreveal/ScrollReveal';
import StarsCanvas from '../components/meteor/Star';
import '../App.css';

function DataSciencePage() {
  return (
    <div className="app-container">
      <StarsCanvas />
      <div className="main-content">
        <Header />
        <ScrollReveal>
          <DataScience />
        </ScrollReveal>
      </div>
    </div>
  );
}

export default DataSciencePage;