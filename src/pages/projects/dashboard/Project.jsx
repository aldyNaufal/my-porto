import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { FaLaptopCode, FaDatabase, FaBrain } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Project.css';

function Project() {
  const navigate = useNavigate();

  // Project data with shorter descriptions
  const projects = [
    {
      title: "Web & Mobile Apps",
      description: "Building responsive websites and Android apps using modern frameworks.",
      icon: <FaLaptopCode className="project-icon" />,
      route: "/projects/web-mobile"
    },
    {
      title: "Data Science",
      description: "Data analysis, visualization, and big data processing projects.",
      icon: <FaDatabase className="project-icon" />,
      route: "/projects/data-science"
    },
    {
      title: "Machine Learning",
      description: "AI and machine learning models, algorithms, and applications.",
      icon: <FaBrain className="project-icon" />,
      route: "/projects/machine-learning"
    }
  ];

  const handleNavigate = (route) => {
    // Scroll to top before navigating
    window.scrollTo(0, 0);
    
    // Navigate to the route
    navigate(route);
  };

  return (
    <div className="card2" id="projects">
      <Container>
        <div className="project-content">
          <h2 className="project-content-h2">My Projects</h2>
          <div className="d-flex flex-nowrap project-container fade-element">
            {projects.map((project, index) => (
              <div key={index} className="project-card-wrapper">
                <Card className="project-card h-100">
                  <Card.Body className="text-center d-flex flex-column">
                    <div className="icon-container mb-3">
                      {project.icon}
                    </div>
                    <Card.Title className="project-title">{project.title}</Card.Title>
                    <Card.Text className="project-description">
                      {project.description}
                    </Card.Text>
                    <div className="mt-auto">
                      <Button 
                        variant="outline-primary" 
                        onClick={() => handleNavigate(project.route)}
                        className="project-button"
                      >
                        View Projects
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project;