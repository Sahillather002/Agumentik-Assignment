import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import logo from '../Images/promaLogo.png';
import {AiOutlineArrowRight} from "react-icons/ai"
const Navbar = () => {
  return (
    <nav className="beautiful-navbar">
      <div className="navbar-container">
        <div>
          <img src={logo} alt="My logo"></img>
        </div>
        <ul className="nav-menu">
          <li ><a href="/">Home</a></li>
          <li><a href="/services">Product</a></li>
          <li><a href="/portfolio">Features</a></li>
          <li><a href="/about">Membership</a></li>
          <li><a href="/contact">Company</a></li>
        </ul>
      </div>
      <button className='navButtons'>
        World Class Creatives
      </button>
      <div className='navHead'>
        <h1>
            JOIN OUR MEMBERSHIP
        </h1>
        <h1>
            AND START PROJECT
        </h1>
        <p className='navP'>
            A membership program is a marketing startegy used by companies to reward their 
            {'\n'}customers for their loyalty and repeat business.Joining a membership program usually
            involves signing up and paying a fee or fulfilling certain criteria.
        </p>
      </div>
      <div>
        <button className='navButton'>
            <span>Lets go</span>
            <span>
                <AiOutlineArrowRight/>
            </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
