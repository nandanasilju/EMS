import React from 'react'  //rfce
import { Link } from 'react-router-dom'; // ✅ Add this line

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div>
      <Navbar expand="lg" bg="primary" variant="dark" sticky="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">Employee Managment System</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">DashBoard</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
