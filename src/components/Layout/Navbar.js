import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// Double check this extension! Is it .jpg or .svg?
import logo from '../../assets/logo.jpg';
import '../../App.css'; 

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
   { name: 'Compliance', path: '/compliance' },
     { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/About' },
     { name: 'Careers', path: '/Careers' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo-section">
          <div className="logo-wrapper">
            <img src={logo} alt="QUEST Logo" className="brand-logo-img" />
          </div>
          <div className="logo-text">
            <span className="brand-name">QUEST Pharma Solutions</span>
            <span className="brand-tagline">Global Quality & GMP Compliance</span>
          </div>
        </Link>

        <ul className="nav-menu">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact">
          <button className="nav-cta">Schedule Consultation</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;