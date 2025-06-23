import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FDEFF9 0%, #ECF2FF 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px 20px'
    }}>
      <Row className='align-items-center justify-content-center gx-5' style={{ maxWidth: '1200px', width: '100%' }}>
        
        {/* Left Side Image */}
        <Col md={6} className='text-center mb-4 mb-md-0'>
          <img
            src="https://img.freepik.com/free-photo/people-analyzing-checking-finance-graphs-office_23-2150377185.jpg?uid=R204137181&ga=GA1.1.953968187.1750652647&semt=ais_hybrid&w=740"
            alt="Employee Management"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
            }}
          />
        </Col>

        {/* Right Side Text */}
        <Col md={6} className='text-center text-md-start'>
          <h1 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '700',
            color: '#333333',
            marginBottom: '20px',
            fontSize: '2.8rem'
          }}>
            Employee Management System
          </h1>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#555555',
            lineHeight: '1.8',
            fontSize: '1.1rem',
            marginBottom: '30px',
            textAlign: 'justify'
          }}>
            Empower your team with a simple, effective, and elegant employee management solution. Track performance, manage employee data, and enhance team productivity — all in one place. Get started today for seamless management!
          </p>
          <Link to={'/login'}>
            <button
              className='btn btn-lg'
              style={{
                backgroundColor: '#FF6F61',
                border: 'none',
                padding: '12px 35px',
                borderRadius: '30px',
                color: 'white',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={e => e.target.style.backgroundColor = '#FF4C4C'}
              onMouseOut={e => e.target.style.backgroundColor = '#FF6F61'}
            >
              Get Started
            </button>
          </Link>
        </Col>

      </Row>
    </div>
  );
}

export default LandingPage;
