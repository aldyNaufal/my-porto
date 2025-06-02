import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ScrollReveal from '../components/scroolreveal/ScrollReveal';
import StarsCanvas from '../components/meteor/Star';

import Header from '../components/header/Header';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from '../pages/main/AboutMe';
import Skill from '../pages/skill/Skill';
import Project from '../pages/projects/dashboard/Project';
import Welcome from '../pages/welcome/Welcome';
import Experience from '../pages/experiences/Experiences';




function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="app-container">
      <StarsCanvas />
      <div className="main-content">
        <Header />
        <ScrollReveal><Welcome /></ScrollReveal>
        <ScrollReveal><AboutMe /></ScrollReveal>
        <ScrollReveal><Skill /></ScrollReveal>
        <ScrollReveal><Project /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
      </div>
    </div>
  );
}

export default MainPage;