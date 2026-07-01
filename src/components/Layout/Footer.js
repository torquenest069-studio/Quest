'use client';
import Link from 'next/link';
import React from 'react';
import '../../App.css';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <div className="logo-wrapper" style={{ width: '160px', marginBottom: '8px' }}>
              <Image
                src="/logo.png"
                alt="QUEST Pharma Solutions"
                width={160}
                height={60}
                className="brand-logo-img"
              />
            </div>
          </Link>
          <p className="brand-desc">
            Trusted pharmaceutical quality and GMP compliance consultancy serving
            regulated manufacturers worldwide with authoritative, inspection-ready advisory services.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com" className="social-btn" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ravi@questpharmasolution.com" className="social-btn" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          <span className="developer-credit">
            designed and developed by <a href="https://luminexistechnologies.com/">Luminexis Technologies</a>
          </span>
        </div>

        {/* Navigation Grid */}
        <div className="footer-nav-grid">
          <nav className="nav-col" aria-label="Services Navigation">
            <h4>SERVICES</h4>
            <ul>
              <li><Link href="/services">GMP Audits</Link></li>
              <li><Link href="/services">CMO Qualification</Link></li>
              <li><Link href="/services">Inspection Readiness</Link></li>
              <li><Link href="/services">Quality System Assessment</Link></li>
              <li><Link href="/services">CAPA & Risk Management</Link></li>
            </ul>
          </nav>
          <nav className="nav-col" aria-label="Company Navigation">
            <h4>COMPANY</h4>
            <ul>
              <li><Link href="/About">About Us</Link></li>
              <li><Link href="/leadership">Leadership</Link></li>
              <li><Link href="/compliance">Global Compliance</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-row">
          <p>© 2026 QUEST Pharma Solutions. All rights reserved.</p>
          <nav className="legal-links" aria-label="Legal Links">
            <Link href="/privacy-policy" aria-label="View Privacy Policy">Privacy Policy</Link>
            <Link href="/terms-of-service" aria-label="View Terms of Service">Terms of Service</Link>
            <Link href="/confidentiality-policy" aria-label="View Confidentiality Agreement">Confidentiality</Link>
          </nav>
        </div>
        <div className="compliance-footer-tag">
          US FDA | EU GMP | WHO | ICH ALIGNED PHARMACEUTICAL QUALITY CONSULTANCY
        </div>
      </div>
    </footer>
  );
};

export default Footer;
