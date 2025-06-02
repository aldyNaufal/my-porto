import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import { experienceData } from './ExperiencesData'; // Import data dari file terpisah
import './Experiences.css';

function Experience() {
    const [show, setShow] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'work', 'organization'

    const handleShow = (experience) => {
        setSelectedExperience(experience);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedExperience(null);
    };

    const formatDate = (startDate, endDate) => {
        return `${startDate} - ${endDate}`;
    };

    // Filter experience berdasarkan kategori
    const filteredExperiences = experienceData.filter(exp => {
        if (activeCategory === 'all') return true;
        return exp.category === activeCategory;
    });

    // Hitung jumlah untuk setiap kategori
    const workCount = experienceData.filter(exp => exp.category === 'work').length;
    const organizationCount = experienceData.filter(exp => exp.category === 'organization').length;

    return (
        <div className="card1" id="experience">
            <Container>
                <div className='experience-content'>
                    <h2 className="experience-title">My Experiences</h2>
                    
                    {/* Filter Tabs */}
                    <Nav variant="pills" className="justify-content-center mb-4 experience-nav">
                        <Nav.Item>
                            <Nav.Link 
                                active={activeCategory === 'all'}
                                onClick={() => setActiveCategory('all')}
                                className="experience-nav-link"
                            >
                                All Experiences
                                <Badge bg="secondary" className="ms-2">
                                    {experienceData.length}
                                </Badge>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                active={activeCategory === 'work'}
                                onClick={() => setActiveCategory('work')}
                                className="experience-nav-link"
                            >
                                Work Experience
                                <Badge bg="primary" className="ms-2">
                                    {workCount}
                                </Badge>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link 
                                active={activeCategory === 'organization'}
                                onClick={() => setActiveCategory('organization')}
                                className="experience-nav-link"
                            >
                                Organization Experience
                                <Badge bg="success" className="ms-2">
                                    {organizationCount}
                                </Badge>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Row>
                        {filteredExperiences.length > 0 ? (
                            filteredExperiences.map((exp) => (
                                <Col lg={12} className="mb-4" key={exp.id}>
                                    <Card className={`experience-card-horizontal ${exp.category}-experience-card`}>
                                        <Card.Body className="d-flex">
                                            <div className="logo-section me-3">
                                                <img 
                                                    src={exp.logo} 
                                                    alt={`${exp.company} logo`}
                                                    className="company-logo"
                                                />
                                                {/* Category Badge */}
                                                <Badge 
                                                    bg={exp.category === 'work' ? 'primary' : 'success'} 
                                                    className="category-badge"
                                                >
                                                    {exp.category === 'work' ? 'Work' : 'Organization'}
                                                </Badge>
                                            </div>
                                            <div className="content-section flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-start mb-2">
                                                    <div>
                                                        <Card.Title className="mb-1">
                                                            {exp.position}
                                                            {exp.category === 'organization' && (
                                                                <Badge bg="success" className="ms-2 position-badge">
                                                                    Organization
                                                                </Badge>
                                                            )}
                                                        </Card.Title>
                                                        <Card.Subtitle className="company-name mb-1">
                                                            {exp.company} · {exp.jobType}
                                                        </Card.Subtitle>
                                                        <Card.Text className="date-location text-muted mb-2">
                                                            {formatDate(exp.startDate, exp.endDate)} · {exp.duration}
                                                        </Card.Text>
                                                        <Card.Text className="location text-muted mb-3">
                                                            {exp.location} · {exp.onSite}
                                                        </Card.Text>
                                                    </div>
                                                    <Button 
                                                        variant={exp.category === 'work' ? 'outline-primary' : 'outline-success'}
                                                        size="sm"
                                                        onClick={() => handleShow(exp)}
                                                        className="view-details-btn"
                                                    >
                                                        Lihat Detail
                                                    </Button>
                                                </div>
                                                
                                                <div className="skills-section">
                                                    <strong className="skills-label">Keahlian: </strong>
                                                    <div className="skills-container">
                                                        {exp.skills.map((skill, index) => (
                                                            <span key={index}>
                                                                {skill}
                                                                {index < exp.skills.length - 1 && ' · '}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <Col lg={12} className="text-center">
                                <div className="no-experience-message">
                                    <h5>Tidak ada pengalaman ditemukan</h5>
                                    <p className="text-muted">Cobalah pilih kategori lain</p>
                                </div>
                            </Col>
                        )}
                    </Row>
                </div>
            </Container>

            {/* Modal untuk menampilkan detail experience */}
            <Modal show={show} onHide={handleClose} size="lg">       
                <Modal.Header closeButton className='modal-header-custom'>
                    <Modal.Title>
                        <div className="d-flex align-items-center">
                            <img 
                                src={selectedExperience?.logo} 
                                alt="Company logo"
                                className="modal-logo me-3"
                            />
                            <div>
                                <div className="d-flex align-items-center">
                                    {/* Position dengan class CSS */}
                                    <span className="modal-position-title">
                                        {selectedExperience?.position}
                                    </span>
                                    <Badge 
                                        bg={selectedExperience?.category === 'work' ? 'primary' : 'success'} 
                                        className="ms-2"
                                    >
                                        {selectedExperience?.category === 'work' ? 'Work' : 'Organization'}
                                    </Badge>
                                </div>
                                {/* Company name dengan class CSS */}
                                <small className="modal-company-name">
                                    {selectedExperience?.company}
                                </small>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedExperience && (
                        <div>
                            {/* Existing content tetap sama */}
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <strong>Period:</strong> {formatDate(selectedExperience.startDate, selectedExperience.endDate)}
                                    </div>
                                    <div className="col-md-6">
                                        <strong>Duration:</strong> {selectedExperience.duration}
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <strong>Category:</strong> {selectedExperience.category === 'work' ? 'Work' : 'Organization'}
                                    </div>
                                    <div className="col-md-6">
                                        <strong>Job Type:</strong> {selectedExperience.jobType}
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <strong>Location:</strong> {selectedExperience.onSite}
                                    </div>
                                    <div className="col-md-6">
                                        <strong>Address:</strong> {selectedExperience.location}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h6>{selectedExperience.category === 'work' ? 'Job Description' : 'Description of Role in Organization'}:</h6>
                                <p className="text-justify">{selectedExperience.description}</p>
                            </div>
                            
                            <div className="mb-3">
                                <h6>{selectedExperience.category === 'work' ? 'Responsibility' : 'Activities & Contributions'}:</h6>
                                <ul>
                                    {selectedExperience.responsibilities.map((resp, index) => (
                                        <li key={index}>{resp}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-3">
                                <h6>{selectedExperience.category === 'work' ? 'Teknologi & Tools' : 'Keahlian & Tools'}:</h6>
                                <div>
                                    {selectedExperience.technologies.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className={`badge me-1 mb-1 ${
                                                selectedExperience.category === 'work' 
                                                    ? 'bg-primary' 
                                                    : 'bg-success'
                                            }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Company/Organization Links Section - DIPINDAH KE BAWAH */}
                            <div className="company-links-section mt-4">
                                <div className="d-flex justify-content-center flex-wrap gap-2">
                                    {/* Website Link untuk Work Experience */}
                                    {selectedExperience.category === 'work' && selectedExperience.companyWebsite && (
                                        <a 
                                            href={selectedExperience.companyWebsite} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-primary btn-sm"
                                        >
                                            🌐 Visit Company Website
                                        </a>
                                    )}
                                    
                                    {/* Instagram Link untuk Organization Experience */}
                                    {selectedExperience.category === 'organization' && selectedExperience.organizationInstagram && (
                                        <a 
                                            href={selectedExperience.organizationInstagram} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-danger btn-sm"
                                        >
                                            📸 Visit Organization Instagram
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Experience;