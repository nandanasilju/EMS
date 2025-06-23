import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#F8F9FA', color: '#333333', paddingTop: '40px', paddingBottom: '20px', borderTop: '1px solid #dee2e6', fontFamily: 'Montserrat, sans-serif' }}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

        {/* Company Info */}
        <div className="mb-4 mb-md-0 text-center text-md-start">
          <h5 style={{ fontWeight: '700', marginBottom: '10px' }}>Employee Management System</h5>
          <p style={{ marginBottom: '0', color: '#555555' }}>Managing your employees efficiently.</p>
        </div>

        {/* Quick Links */}
        <div className="mb-4 mb-md-0 text-center text-md-start">
          <h6 style={{ fontWeight: '600', marginBottom: '10px' }}>Quick Links</h6>
          <ul className="list-unstyled" style={{ paddingLeft: '0' }}>
            <li><a href="/" className="text-decoration-none" style={{ color: '#555555' }} onMouseOver={e => e.target.style.color = '#FF6F61'} onMouseOut={e => e.target.style.color = '#555555'}>Home</a></li>
            <li><a href="/employees" className="text-decoration-none" style={{ color: '#555555' }} onMouseOver={e => e.target.style.color = '#FF6F61'} onMouseOut={e => e.target.style.color = '#555555'}>Employees</a></li>
            <li><a href="/add-employee" className="text-decoration-none" style={{ color: '#555555' }} onMouseOver={e => e.target.style.color = '#FF6F61'} onMouseOut={e => e.target.style.color = '#555555'}>Add Employee</a></li>
            <li><a href="/reports" className="text-decoration-none" style={{ color: '#555555' }} onMouseOver={e => e.target.style.color = '#FF6F61'} onMouseOut={e => e.target.style.color = '#555555'}>Reports</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center text-md-start">
          <h6 style={{ fontWeight: '600', marginBottom: '10px' }}>Contact Us</h6>
          <p style={{ marginBottom: '5px', color: '#555555' }}>Email: support@ems.com</p>
          <p style={{ marginBottom: '5px', color: '#555555' }}>Phone: +91 98765 43210</p>
          <p style={{ marginBottom: '0', color: '#555555' }}>Location: Kochi, Kerala</p>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center mt-4">
        <small style={{ color: '#777777' }}>© 2025 Employee Management System. All Rights Reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
