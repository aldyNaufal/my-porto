import React from 'react';
import MachineLearning from '../pages/projects/model/MachineLearning';
import Header from '../components/header/Header';
import ScrollReveal from '../components/scroolreveal/ScrollReveal';
import StarsCanvas from '../components/meteor/Star';
import '../App.css';

function MachineLearningPage() {
  return (
    <div className="app-container">
      <StarsCanvas />
      <div className="main-content">
        <Header />
        <ScrollReveal>
          <MachineLearning />
        </ScrollReveal>
      </div>
    </div>
  );
}

export default MachineLearningPage;