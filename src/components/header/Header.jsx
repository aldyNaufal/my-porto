import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container fluid className="px-4">
        {/* Brand / Nama */}
        <Navbar.Brand className="navbar-brand">
          <Nav.Link href="/#aldy">Aldy Naufal</Nav.Link>
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />

        {/* Collapse Menu */}
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="nav-links mx-auto">
            <Nav.Link href="/#about">About Me</Nav.Link>
            <Nav.Link href="/#skills">Skills</Nav.Link>
            <Nav.Link href="/#projects">Projects</Nav.Link>
            <Nav.Link href="/#experience">Experiences</Nav.Link>
          </Nav>

          {/* Button Contact */}
          <Button
            as={Link}
            to="/contact"
            className="contact-button"
            variant="outline-light"
          >
            Contact Me
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
