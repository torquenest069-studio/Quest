'use client';
import Image from 'next/image';
import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import '../../App.css';
import SEO from '../Common/SEO';
import useReveal from '../../hooks/useReveal';

const Hero = () => {
  const router = useRouter();
  const revealRef = useReveal();
  const compliancePoints = [
    "US FDA 21 CFR Part 211 Compliance",
    "EU GMP Annex 1-20 Implementation",
    "WHO TRS Guidelines Alignment",
    "ICH Q7-Q10 Quality Systems"
  ];

  return (
    <>
      <SEO
        title="Home"
        description="Quest Pharma Pvt Ltd is a leading global pharmaceutical supply chain expert, specialized in regulatory compliance, quality assurance, and distribution services."
        keywords="Quest Pharma, pharmaceutical quality, GMP auditing, regulatory compliance, API formulations"
        canonical="/"
      />
      <section className="hero">
        <div className="hero-container reveal-on-scroll" ref={revealRef}>
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-watermark"><Image src="/logo.jpg" alt="Watermark" width={300} height={100} style={{ opacity: 0.1, position: 'absolute', zIndex: -1, pointerEvents: 'none', top: '10%' }}/></div>
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
                onClick={() => router.push('/services')}
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
    </>
  );
};

export default Hero;