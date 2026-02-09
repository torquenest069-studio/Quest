import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import '../../App.css';



const Hero = () => {
  const navigate = useNavigate();
  const compliancePoints = [
    "US FDA 21 CFR Part 211 Compliance",
    "EU GMP Annex 1-20 Implementation",
    "WHO TRS Guidelines Alignment",
    "ICH Q7-Q10 Quality Systems"
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="trust-pill">
            <span className="pulse-dot"></span>
            Trusted by Global Pharmaceutical Leaders
          </div>
          <h1 className="hero-title">
            Precision in <br />
            <span className="teal-highlight">Pharmaceutical</span> Quality
          </h1>
          <p className="hero-description">
            World-class GMP auditing and regulatory compliance consultancy 
            serving pharmaceutical manufacturers across API, formulations, 
            and quality control operations.
          </p>
          <div className="hero-btns">
           <button 
        className="btn-primary-neon" 
        onClick={() => navigate('/services')} 
      >Explore Our Services</button>
            
          </div>
        </div>

        {/* Right Card */}
        <div className="hero-card-perspective">
          <div className="regulatory-card">
            <h6 className="card-overline">REGULATORY EXCELLENCE</h6>
            <h3 className="card-headline">Inspection-Ready Quality Systems</h3>
            
            <ul className="premium-list">
              {compliancePoints.map((text, i) => (
                <li key={i}>
                  <IoCheckmarkCircleOutline className="teal-icon" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="card-footer-stats">
              <div className="metric-box">
                <span className="metric-label">Audit Completion Rate</span>
                <span className="metric-value">100%</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">Client Retention</span>
                <span className="metric-value">98%</span>
              </div>
            </div>
          </div>
          {/* Subtle glow effect behind card */}
          <div className="card-bg-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;