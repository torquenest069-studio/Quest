import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import  { useState, useEffect, useRef } from 'react';
// Double check this extension! Is it .jpg or .svg?
import logo from '../../assets/logo.jpg';
import '../../App.css'; 

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navMenuRef = useRef(null);
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
   { name: 'Compliance', path: '/compliance' },
     { name: 'Leadership', path: '/leadership' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/About' },
     { name: 'Careers', path: '/Careers' }
  ];

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  /* Outside click close */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isMobileOpen &&
        navMenuRef.current &&
        !navMenuRef.current.contains(e.target) &&
        !e.target.closest('.menu-toggle')
      ) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMobileOpen]);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo (unchanged) */}
        <Link to="/" className="logo-section" onClick={() => setIsMobileOpen(false)}>
          <div className="logo-wrapper">
            <img src={logo} alt="QUEST Logo" className="brand-logo-img" />
          </div>
        
        </Link>

        {/* Hamburger button (NEW – mobile only via CSS) */}
        <button
          className={`menu-toggle ${isMobileOpen ? 'open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Existing nav-menu (class name untouched) */}
        <ul
          ref={navMenuRef}
          className={`nav-menu ${isMobileOpen ? 'active' : ''}`}
        >
          {navLinks.map((item) => (
            <li key={item.name} onClick={() => setIsMobileOpen(false)}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? 'nav-item active' : 'nav-item'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA (unchanged) */}
        <Link to="/contact" onClick={() => setIsMobileOpen(false)}>
          <button className="nav-cta">Schedule Consultation</button>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;