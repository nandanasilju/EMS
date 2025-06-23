import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-dark py-4 mt-5 border-top">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        
        {/* Company Info */}
        <div className="mb-3 mb-md-0">
          <h5>Employee Management System</h5>
          <p>Managing your employees efficiently.</p>
        </div>

        {/* Quick Links */}
        <div className="mb-3 mb-md-0">
          <h6>Quick Links</h6>
          <ul className="list-unstyled">
            <li><a href="/" className="text-decoration-none text-dark">Home</a></li>
            <li><a href="/employees" className="text-decoration-none text-dark">Employees</a></li>
            <li><a href="/add-employee" className="text-decoration-none text-dark">Add Employee</a></li>
            <li><a href="/reports" className="text-decoration-none text-dark">Reports</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h6>Contact Us</h6>
          <p>Email: support@ems.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Kochi, Kerala</p>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center mt-3">
        <small>© 2025 Employee Management System. All Rights Reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
