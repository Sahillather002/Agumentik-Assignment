import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="beautiful-navbar">
      <div className="navbar-container">
        <div className="brand-logo">
          {/* Add your logo or brand name here */}
          <a href="/">Logo</a>
        </div>
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Product</a></li>
          <li><a href="/portfolio">Features</a></li>
          <li><a href="/about">Membership</a></li>
          <li><a href="/contact">Company</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
