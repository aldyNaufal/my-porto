
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PolaroidImage from '../../components/polaroid/Polaroid';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="card2" id="about">
      <Container>
        <div className="about-me-content fade-in">
          <h2 className="about-me-content-h2">About Me</h2>
          <Row className="align-items-center mt-5">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="about-image-container">
                <PolaroidImage />
              </div>
            </Col>
            <Col lg={7}>
              <div className="about-text">
                <p>
                  I am a passionate Full Stack Developer and AI Engineer with a strong commitment to creating 
                  innovative and user-friendly digital solutions. My journey in tech started when I discovered 
                  my fascination with both the creative and logical aspects of programming.
                </p>
                <p>
                  With a background in computer science and continuous self-learning, I've developed 
                  expertise in modern web technologies and artificial intelligence solutions. I believe in 
                  building applications that not only function flawlessly but also deliver exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                  and sharing my knowledge with the developer community. I'm always seeking opportunities to grow 
                  and take on new challenges that push the boundaries of what's possible in tech.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default AboutMe;
