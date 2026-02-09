import React from 'react';
import '../../App.css'; 
import { Linkedin, Mail, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Brand Identity Column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <ShieldCheck size={28} className="logo-icon-svg" />
            <div className="logo-text">
              <h3>QUEST Pharma Solutions</h3>
              <span>Global Quality & GMP Compliance</span>
            </div>
          </div>
          <p className="brand-desc">
            Trusted pharmaceutical quality and GMP compliance consultancy serving 
            regulated manufacturers worldwide with authoritative, inspection-ready advisory services.
          </p>
       <div className="social-links">
  <a href="https://linkedin.com" className="social-btn" aria-label="LinkedIn">
    <Linkedin size={20} />
  </a>
  <a href="mailto:contact@questpharma.com" className="social-btn" aria-label="Email">
    <Mail size={20} />
  </a>
</div>
<span className="developer-credit">
            designed and developed by <a href="#!">Link</a>
          </span>
        </div>

        

        {/* Navigation Grid */}
        <div className="footer-nav-grid">
          <div className="nav-col">
            <h4>SERVICES</h4>
            <ul>
              <li><a href="#">GMP Audits</a></li>
              <li><a href="#">CMO Qualification</a></li>
              <li><a href="#">Inspection Readiness</a></li>
              <li><a href="#">Quality System Assessment</a></li>
              <li><a href="#">CAPA & Risk Management</a></li>
            </ul>
          </div>
          <div className="nav-col">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Global Compliance</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-row">
          <p>© 2026 QUEST Pharma Solutions. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Confidentiality</a>
          </div>
        </div>
        <div className="compliance-footer-tag">
          US FDA | EU GMP | WHO | ICH ALIGNED PHARMACEUTICAL QUALITY CONSULTANCY
        </div>
      </div>
    </footer>
  );
};

export default Footer;