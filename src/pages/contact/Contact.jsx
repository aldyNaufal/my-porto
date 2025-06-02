import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card, Modal } from 'react-bootstrap';
import { FaPaperPlane, FaEnvelope } from 'react-icons/fa';
import robotHalo from "../../assets/robot-halo.png";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  // Effect untuk menampilkan welcome alert saat komponen pertama kali dimuat
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeModal(true);
    }, 500); // Delay 500ms agar halaman sudah ter-render

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setAlertMessage('Please fill in all required fields');
      setShowAlert(true);
      return;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlertMessage('Please enter a valid email address');
      setShowAlert(true);
      return;
    }

    // Format isi email
    const emailBody = `Hello Aldy,

${formData.message}

`;

    const encodedBody = encodeURIComponent(emailBody);
    const encodedSubject = encodeURIComponent(formData.subject);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=aldy.naufal02@gmail.com&su=${encodedSubject}&body=${encodedBody}`;

    window.open(gmailUrl, '_blank');

    setAlertMessage('Gmail opened with your message! Please click Send in Gmail to complete.');
    setShowAlert(true);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="contact-background" id="contact">
      <Container>
        <div className="contact-content">
          <Row className="justify-content-center">
            <Col lg={8} md={10}>

              <Card className="contact-card shadow-lg">
                <Card.Body className="p-4">
                  {showAlert && (
                    <Alert 
                      variant="info" 
                      className="mb-4"
                      dismissible 
                      onClose={() => setShowAlert(false)}
                    >
                      {alertMessage}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            Your Name <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="form-input"
                            required
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            Email Address <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            className="form-input"
                            required
                          />
                        </Form.Group>
                      </Col>

                      <Col md={12} className="mb-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            Subject <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Project Inquiry / Collaboration / General Question"
                            className="form-input"
                            required
                          />
                        </Form.Group>
                      </Col>

                      <Col md={12} className="mb-4">
                        <Form.Group>
                          <Form.Label className="form-label">
                            Message <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell me about your project, idea, or how I can help you..."
                            className="form-input"
                            required
                          />
                        </Form.Group>
                      </Col>

                      <Col md={12} className="text-center">
                        <Button
                          type="submit"
                          className="submit-btn"
                          size="lg"
                        >
                          <FaPaperPlane className="me-2" />
                          Send via Gmail
                        </Button>
                      </Col>
                    </Row>
                  </Form>

                  <div className="text-center mt-3">
                    <small className="form-label">
                      This will open Gmail with your message pre-filled. Click <strong>Send</strong> in Gmail to complete. <br />
                      <strong>Note:</strong> If you want to <u>attach a file</u>, you can do so in the Gmail window before sending.
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Welcome Modal Alert - dengan tema starry night dan robot */}
      <Modal 
        show={showWelcomeModal} 
        onHide={() => setShowWelcomeModal(false)} 
        centered
        className="welcome-modal"
        backdrop="static"
        dialogClassName="custom-modal-dialog"
      >
        <div className="custom-modal-content">
          {/* Background stars effect */}
          <div className='star-effect' />

          <Modal.Body className="modal-body-content">
            <div className="mb-3">
              {/* Robot image container dengan posisi sebagai background/halo */}
              <div className="robot-container">
                {/* Robot image sebagai background/halo (paling belakang) */}
                <img 
                  src={robotHalo}
                  alt="Robot Assistant"
                  className="robot-halo-image"
                />
              </div>
            </div>
            
            <h5 className="modal-title">Hey there! 👋</h5>
            
            <p className="modal-description">
              Thanks for getting in touch. Got a project or idea to collaborate on? Just fill out this form — can't wait to hear from you!
            </p>
            
            <Button 
              onClick={() => setShowWelcomeModal(false)}
              className="modal-button shadow-sm"
            >
              Got it
            </Button>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default Contact;