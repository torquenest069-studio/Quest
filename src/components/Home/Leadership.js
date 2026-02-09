import React from 'react';
import { Briefcase, ShieldCheck, Globe, Award } from 'lucide-react'; // Updated imports
import '../../App.css';

const Leadership = () => {
  return (
    <section className="leadership-section">
      <div className="leadership-container">
        <div className="leadership-header">
          <span className="section-tag-teal">LEADERSHIP</span>
          <h2>Principal Consultant</h2>
          <p className="header-description">
            QUEST Pharma Solutions is led by Ravi B, a recognized authority in pharmaceutical quality 
            assurance with over two decades of global regulatory and operational experience.
          </p>
        </div>

        <div className="leadership-main-grid">
          {/* Left: Ravi's Professional Profile Card */}
          <div className="profile-card-vertical">
            <div className="profile-visual">
              <div className="avatar-circle">RB</div>
            </div>
            <div className="profile-info">
              <h3>Ravi B</h3>
              <p className="subtitle">M. Pharm | Founder & Principal Consultant</p>
              
              <div className="profile-stat-rows">
                <div className="p-row"><span>Experience</span> <strong>24+ Years</strong></div>
                <div className="p-row"><span>Audits Led</span> <strong>500+</strong></div>
                <div className="p-row"><span>Certification</span> <strong className="teal-text">NSF & APIC</strong></div>
              </div>
            </div>
          </div>

          {/* Right: Operational Depth & Expertise Matrix */}
          <div className="expertise-container">
            <div className="background-summary-box">
              <h4>Professional Background</h4>
              <p>
                As the Head of India Operations for RelonChem and a certified NSF/APIC auditor, Ravi brings 
                a rare combination of regulatory insight and operational depth. His career is built on 
                leadership roles at industry leaders including Medreich, Glenmark, and Apotex.
              </p>
            </div>

            <div className="expertise-matrix">
              {/* FIXED: Replaced fragment with expertise-item div */}
            
              {/* Item 1 - FIXED: Replaced fragment with expertise-item div */}
      <div className="expertise-item">
        <div className="icon-wrap-teal"><Briefcase size={22} /></div>
        <h5>Operational Leadership</h5>
        <p>Extensive experience managing India operations for global pharmaceutical entities like RelonChem.</p>
      </div>

           {/* Item 2 */}
      <div className="expertise-item">
        <div className="icon-wrap-teal"><ShieldCheck size={22} /></div>
        <h5>Certified Auditing</h5>
        <p>NSF and APIC Certified Auditor with specialized expertise in risk-based decision making.</p>
      </div>
             {/* Item 3 */}
      <div className="expertise-item">
        <div className="icon-wrap-teal"><Globe size={22} /></div>
        <h5>Global Compliance</h5>
        <p>Conducted 500+ audits across APIs, Finished Dosage Forms, and QC Laboratories worldwide.</p>
      </div>

             {/* Item 4 */}
      <div className="expertise-item">
        <div className="icon-wrap-teal"><Award size={22} /></div>
        <h5>Philosophy of Intent</h5>
        <p>Driving compliance with intent, ensuring quality systems are robust and sustainable.</p>
      </div>
            </div>
          </div>
        </div>

        {/* Bottom Credentials Footer */}
        <div className="leadership-credentials-footer">
          <div className="footer-block">
            <h6>ACADEMIC FOUNDATION</h6>
            <p>M. Pharm<br/>Pharmaceutical Sciences</p>
          </div>
          <div className="footer-block">
            <h6>PROFESSIONAL CREDENTIALS</h6>
            <p>NSF Certified Auditor<br/>APIC Certified Auditor</p>
          </div>
          <div className="footer-block">
            <h6>FORMER ASSOCIATIONS</h6>
            <p>Glenmark | Apotex<br/>Medreich Pharmaceuticals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;