'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import '../../App.css';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="logo-section">
          <div className="logo-wrapper">
             <Image 
               src="/logo.png" 
               alt="QUEST Pharma Solutions" 
               width={280} 
               height={100} 
               className="brand-logo-img"
               priority
             />
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className={`menu-toggle ${isMobileOpen ? 'open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileOpen}
          aria-controls="main-nav-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        {/* Navigation Menu */}
        <ul
          id="main-nav-menu"
          ref={navMenuRef}
          className={`nav-menu ${isMobileOpen ? 'active' : ''}`}
          aria-hidden={!isMobileOpen}
        >
          {navLinks.map((item) => (
            <li key={item.name} onClick={() => setIsMobileOpen(false)}>
              <Link href={item.path} className={pathname === item.path ? 'nav-item active' : 'nav-item'}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact" onClick={() => setIsMobileOpen(false)} aria-label="Schedule a consultation">
          <button className="nav-cta">Schedule Consultation</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;