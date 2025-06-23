import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaSignInAlt, FaUserPlus, FaTachometerAlt } from 'react-icons/fa';

// Styling (Inline)
const navLinkStyle = {
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 600,
  fontSize: '1.1rem',
  color: '#333333',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '5px 10px',
  borderRadius: '5px'
};

const hoverStyle = {
  backgroundColor: '#FFD6D6', // Soft pink hover background
  color: '#FF6F61', // Coral text color on hover
  transform: 'translateY(-2px)'
};

function Header() {
  const [hoveredLink, setHoveredLink] = React.useState('');

  return (
    <header>
      <Navbar
        expand="lg"
        style={{ backgroundColor: '#F4F4F4' }} // Light Gray Navbar
        sticky="top"
        className="shadow-sm py-3 border-bottom"
      >
        <Container>

          {/* Keep App Name Exactly the Same */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold fs-3"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#FF6F61',
              letterSpacing: '1px'
            }}
          >
            Employee Managment System
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto d-flex align-items-center gap-4">

              <Nav.Link
                as={Link}
                to="/"
                style={hoveredLink === 'home' ? { ...navLinkStyle, ...hoverStyle } : navLinkStyle}
                onMouseEnter={() => setHoveredLink('home')}
                onMouseLeave={() => setHoveredLink('')}
              >
                <FaHome size={20} /> Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/login"
                style={hoveredLink === 'login' ? { ...navLinkStyle, ...hoverStyle } : navLinkStyle}
                onMouseEnter={() => setHoveredLink('login')}
                onMouseLeave={() => setHoveredLink('')}
              >
                <FaSignInAlt size={20} /> Login
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/register"
                style={hoveredLink === 'register' ? { ...navLinkStyle, ...hoverStyle } : navLinkStyle}
                onMouseEnter={() => setHoveredLink('register')}
                onMouseLeave={() => setHoveredLink('')}
              >
                <FaUserPlus size={20} /> Register
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/dashboard"
                style={hoveredLink === 'dashboard' ? { ...navLinkStyle, ...hoverStyle } : navLinkStyle}
                onMouseEnter={() => setHoveredLink('dashboard')}
                onMouseLeave={() => setHoveredLink('')}
              >
                <FaTachometerAlt size={20} /> DashBoard
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
