import React from 'react';
import { FiTarget, FiGlobe, FiAward, FiTrendingUp } from 'react-icons/fi';

import '../../App.css';


const About = () => {
  const features = [
    {
      icon: <FiTarget />,
      title: "Unbiased Assessment",
      desc: "Independent evaluation focused solely on regulatory compliance and quality excellence."
    },
    {
      icon: <FiGlobe />,
      title: "Global Expertise",
      desc: "Deep regulatory knowledge across US FDA, EU GMP, WHO, and ICH frameworks."
    },
    {
      icon: <FiAward />,
      title: "Industry Authority",
      desc: "Decades of pharmaceutical quality leadership and inspection experience."
    },
    {
      icon: <FiTrendingUp />,
      title: "Continuous Excellence",
      desc: "Commitment to evolving with regulatory landscapes and industry best practices."
    }
  ];

  const stats = [
    { 
      value: "20+", 
      label: "YEARS OF EXPERIENCE", 
      text: "Two decades of pharmaceutical quality and regulatory leadership across global markets." 
    },
    { 
      value: "500+", 
      label: "GMP AUDITS CONDUCTED", 
      text: "Comprehensive assessments across API, formulations, and quality control facilities." 
    },
    { 
      value: "35+", 
      label: "COUNTRIES SERVED", 
      text: "Global reach spanning North America, Europe, Asia-Pacific, and emerging markets." 
    }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-header">
          <span className="section-label">ABOUT QUEST PHARMA SOLUTIONS</span>
          <h2>A Legacy of Quality Leadership</h2>
          <p>
            QUEST Pharma Solutions represents the convergence of deep pharmaceutical quality expertise, 
            regulatory authority experience, and an unwavering commitment to global GMP standards.
          </p>
        </div>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="service-icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="stats-banner">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-text">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;