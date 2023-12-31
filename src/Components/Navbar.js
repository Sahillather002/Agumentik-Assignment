import React, { useCallback } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import logo from '../Images/promaLogo.png';
import {AiOutlineArrowRight} from "react-icons/ai"
import {BsList} from "react-icons/bs"

const Navbar = () => {

  return (
    
    <nav className="beautiful-navbar">
    

      <div className="navbar-container">
        <div>
          <img className="logo" src={logo} alt="My logo"></img>
        </div>
        <div>
        <ul className="nav-menu">
          <li><a href="/services">Product</a></li>
          <li><a href="/portfolio">Features</a></li>
          <li><a href="/about">Membership</a></li>
          <li><a href="/contact">Company</a></li>
        </ul>
        </div>
        <div className='list'>
            <BsList size={50}/>
        </div>
      </div>

      
      <button className='navButtons'>
        World Class Creatives
      </button>
      <div className='navHead'>
        <h1 style={{fontSize:"100px",marginBottom:"-80px"}}>
            JOIN OUR MEMBERSHIP
        </h1>
        <h1 style={{fontSize:"100px"}}>
            AND START PROJECT
        </h1>
            <div className='navP'>
            <h4>A membership program is a marketing startegy used by companies to reward their 
            </h4><h4>customers for their loyalty and repeat business.Joining a membership program usually
            </h4><h4>involves signing up and paying a fee or fulfilling certain criteria.
            </h4>
            </div>
      </div>
      <div>
        <button className='navButton'>
            <span style={{fontSize:"30px"}}>Lets go  </span>
            <span>
                <AiOutlineArrowRight size={30}/>
            </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
