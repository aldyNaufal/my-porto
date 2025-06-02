import React from 'react';
import './Skill.css';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaJs, FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaPhp, 
  FaDatabase, FaJava, FaPython, FaCode,
  FaUsers, FaComments, FaMicrophone, FaProjectDiagram, FaLightbulb, FaClipboardCheck
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMysql, SiPostgresql, SiKotlin, 
  SiJetpackcompose, SiPytorch, SiTensorflow
} from 'react-icons/si';

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="card1">
        <Container>
          <div className="skills-content fade-in">
            <h2 className="skill-title">My Technical Skills</h2>
            
            <Row>
              {/* Left Column */}
              <Col md={6}>
                {/* Programming Languages */}
                <div className="skill-category">
                  <h3 className="category-title">Programming Languages</h3>
                  <div className="skill-icons">
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <FaPython />
                      </div>
                      <span className="skill-name">Python</span>
                    </div>
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <FaJava />
                      </div>
                      <span className="skill-name">Java</span>
                    </div>
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <SiKotlin />
                      </div>
                      <span className="skill-name">Kotlin</span>
                    </div>
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <FaJs />
                      </div>
                      <span className="skill-name">JavaScript</span>
                    </div>
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <FaPhp />
                      </div>
                      <span className="skill-name">PHP</span>
                    </div>
                  </div>
                </div>
                
                {/* Web Technologies */}
                <div className="skill-category">
                  <h3 className="category-title">Web Technologies</h3>
                  <div className="skill-icons">
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <FaHtml5 />
                      </div>
                      <span className="skill-name">HTML5</span>
                    </div>
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <FaCss3Alt />
                      </div>
                      <span className="skill-name">CSS3</span>
                    </div>
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <SiTailwindcss />
                      </div>
                      <span className="skill-name">Tailwind</span>
                    </div>
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <FaReact />
                      </div>
                      <span className="skill-name">React.js</span>
                    </div>
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <FaLaravel />
                      </div>
                      <span className="skill-name">Laravel</span>
                    </div>
                  </div>
                </div>
                
                {/* Databases */}
                <div className="skill-category">
                  <h3 className="category-title">Databases</h3>
                  <div className="skill-icons">
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <SiMysql />
                      </div>
                      <span className="skill-name">MySQL</span>
                    </div>
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <SiPostgresql />
                      </div>
                      <span className="skill-name">PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </Col>
              
              {/* Right Column */}
              <Col md={6}>
                {/* AI/ML Technologies */}
                <div className="skill-category">
                  <h3 className="category-title">AI/ML Technologies</h3>
                  <div className="skill-icons">
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <SiPytorch />
                      </div>
                      <span className="skill-name">PyTorch</span>
                    </div>
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <SiTensorflow />
                      </div>
                      <span className="skill-name">TensorFlow</span>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Development */}
                <div className="skill-category">
                  <h3 className="category-title">Mobile Development</h3>
                  <div className="skill-icons">
                    <div className="skill-icon-container">
                      <div className="skill-icon">
                        <SiJetpackcompose />
                      </div>
                      <span className="skill-name">Jetpack Compose</span>
                    </div>
                  </div>
                </div>
                
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Skills;