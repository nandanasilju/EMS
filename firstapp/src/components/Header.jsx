import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
      <Navbar expand="lg" bg="light" variant="light" sticky="top" className="shadow-sm py-3 border-bottom">
        <Container>

          {/* App Name */}
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Employee Management System
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto d-flex align-items-center gap-4">
              <Nav.Link as={Link} to="/" className="text-dark fw-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-dark fw-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>Login</Nav.Link>
              <Nav.Link as={Link} to="/register" className="text-dark fw-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>Register</Nav.Link>
              <Nav.Link as={Link} to="/dashboard" className="text-dark fw-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
