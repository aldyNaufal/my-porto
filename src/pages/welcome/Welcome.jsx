import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Profiel from '../../assets/profile.png';
import './Welcome.css';

function Welcome() {
  return (
    <div className="background-start" id='aldy'>
      <Container>
        <div className="hero-content">
          <div className="text-content fade-in">
            <h1 className="greeting">Hello Everyone, <span className="highlight">I'm</span></h1>
            <h1 className="name">Muhammad Aldy Naufal Fadhilah</h1>
            <h2 className="profession">Full Stack Developer & AI Engineer</h2>
            {/* Social Icons */}
            <div className="social-icons">
              <a href="https://www.instagram.com/aldy_naufal/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/aldy-naufal/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://github.com/aldyNaufal" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="profile-container fade-in">
            <img src={Profiel} alt="Profile" className="profile-image" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Welcome;