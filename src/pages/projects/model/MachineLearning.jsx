import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button, Modal, Badge, Row, Col, Nav, Alert } from 'react-bootstrap';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaPlay, FaLock } from 'react-icons/fa';
import { MachineLearningProjects } from './MachineLearningData';
import './MachineLearning.css';

function MachineLearning() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeStatus, setActiveStatus] = useState('all');

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedProject(null);
  };

  // Filter projects berdasarkan status
  const filteredProjects = MachineLearningProjects.filter(project => {
    if (activeStatus === 'all') return true;
    return project.status.toLowerCase() === activeStatus;
  });

  // Hitung jumlah untuk setiap status
  const completedCount = MachineLearningProjects.filter(p => p.status.toLowerCase() === 'completed').length;
  const ongoingCount = MachineLearningProjects.filter(p => p.status.toLowerCase() === 'ongoing').length;

  // Check if project is private (no links available or marked as private)
  const isPrivateProject = (project) => {
    return project.isPrivate || 
           (!project.githubLink && !project.liveLink && !project.playStoreLink);
  };

  return (
    <div className="project-detail-page">
      <Container>
        <div className="project-detail-header">
          
          <h2 className="project-category-title">Machine Learning Projects</h2>
          
          {/* Filter Tabs */}
          <Nav variant="pills" className="justify-content-center mb-4 project-status-nav">
            <Nav.Item>
              <Nav.Link 
                active={activeStatus === 'all'}
                onClick={() => setActiveStatus('all')}
                className="status-nav-link"
              >
                All Projects
                <Badge bg="secondary" className="ms-2">
                  {MachineLearningProjects.length}
                </Badge>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={activeStatus === 'completed'}
                onClick={() => setActiveStatus('completed')}
                className="status-nav-link"
              >
                Completed
                <Badge bg="success" className="ms-2">
                  {completedCount}
                </Badge>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                active={activeStatus === 'ongoing'}
                onClick={() => setActiveStatus('ongoing')}
                className="status-nav-link"
              >
                Ongoing
                <Badge bg="warning" className="ms-2">
                  {ongoingCount}
                </Badge>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <Row>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Col lg={12} className="mb-4" key={project.id}>
                <Card className="project-detail-card web-mobile-project-card">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center mb-2">
                          <Card.Title className="mb-0 me-3">
                            {project.title}
                            {isPrivateProject(project) && (
                              <FaLock className="ms-2 text-muted" size="14" />
                            )}
                          </Card.Title>
                          <Badge 
                            bg={project.status.toLowerCase() === 'completed' ? 'success' : 'warning'} 
                            className="status-badge"
                          >
                            {project.status}
                          </Badge>
                          <Badge 
                            bg="primary" 
                            className="ms-2 category-badge"
                          >
                            {project.category}
                          </Badge>
                          {isPrivateProject(project) && (
                            <Badge 
                              bg="secondary" 
                              className="ms-2"
                            >
                              Private
                            </Badge>
                          )}
                        </div>
                        
                        <Card.Text className="project-description-detail mb-2">
                          {project.description}
                        </Card.Text>
                        
                      </div>
                      
                      <Button 
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleShow(project)}
                        className="view-details-btn"
                      >
                        View Details
                      </Button>
                    </div>
                    
                    <div className="technologies-section">
                      <strong className="tech-label">Technologies: </strong>
                      <div className="technologies-container">
                        {project.technologies.map((tech, index) => (
                          <Badge 
                            key={index} 
                            bg="light" 
                            text="dark" 
                            className="me-1 mb-1 tech-badge"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col lg={12} className="text-center">
              <div className="no-projects-message">
                <h5>No projects found</h5>
                <p className="text-muted">Try selecting a different status filter</p>
              </div>
            </Col>
          )}
        </Row>
      </Container>

      {/* Modal untuk menampilkan detail project */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>
            <div className="d-flex align-items-center">
              <div>
                <div className="d-flex align-items-center">
                  <span className="modal-project-title">
                    {selectedProject?.title}
                  </span>
                  {selectedProject && isPrivateProject(selectedProject) && (
                    <FaLock className="ms-2 text-muted" size="16" />
                  )}
                  <Badge 
                    bg={selectedProject?.status.toLowerCase() === 'completed' ? 'success' : 'warning'} 
                    className="ms-2"
                  >
                    {selectedProject?.status}
                  </Badge>
                  {selectedProject && isPrivateProject(selectedProject) && (
                    <Badge 
                      bg="secondary" 
                      className="ms-2"
                    >
                      Private
                    </Badge>
                  )}
                </div>
                <small className="modal-project-category text-muted">
                  {selectedProject?.category} • {selectedProject?.duration}
                </small>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-md-6">
                    <strong>Period:</strong> {selectedProject.startDate} - {selectedProject.endDate}
                  </div>
                  <div className="col-md-6">
                    <strong>Duration:</strong> {selectedProject.duration}
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <strong>Category:</strong> {selectedProject.category}
                  </div>
                  <div className="col-md-6">
                    <strong>Status:</strong> {selectedProject.status}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h6>Project Description:</h6>
                <p className="text-justify">{selectedProject.description}</p>
              </div>
              
              <div className="mb-3">
                <h6>Key Responsibilities & Features:</h6>
                <ul>
                  {selectedProject.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-3">
                <h6>Technologies & Tools:</h6>
                <div>
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="badge me-1 mb-1 bg-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links Section */}
              <div className="project-links-section mt-4">
                {isPrivateProject(selectedProject) ? (
                  <Alert variant="warning" className="text-center">
                    <FaLock className="me-2" />
                    <strong>Sorry, this project is private so you can't see this project</strong>
                    <div className="mt-2 text-muted">
                      This project contains sensitive information and is not publicly accessible.
                    </div>
                  </Alert>
                ) : (
                  <div className="d-flex justify-content-center flex-wrap gap-2">
                    {selectedProject.githubLink && (
                      <a 
                        href={selectedProject.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm"
                      >
                        <FaGithub className="me-1" /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MachineLearning;