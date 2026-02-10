import React from 'react';
import { FiBriefcase, FiHeart, FiTrendingUp, FiMail, FiSend } from 'react-icons/fi';
import '../../App.css';

const Careers = () => {
  // Empty array to simulate "No Current Openings"
  const jobs = []; 

  const benefits = [
    {
      icon: <FiHeart />,
      title: "Impactful Work",
      desc: "Ensure global health by upholding the highest pharmaceutical quality standards."
    },
    {
      icon: <FiTrendingUp />,
      title: "Professional Growth",
      desc: "Continuous learning through exposure to diverse global regulatory landscapes."
    },
    {
      icon: <FiBriefcase />,
      title: "Expert Environment",
      desc: "Work alongside industry veterans with decades of FDA and EU GMP experience."
    }
  ];

  return (
    <section className="careers-page">
      <div className="careers-hero">
        <div className="carcontainer">
          <span className="section-label">JOIN OUR TEAM</span>
          <h2>Shape the Future of Quality</h2>
          <p>We are looking for passionate pharmaceutical experts dedicated to regulatory excellence and manufacturing safety.</p>
        </div>
      </div>

      <div className="container">
        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              <div className="service-icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="openings-section">
          <h3>Current Opportunities</h3>
          
          {jobs.length > 0 ? (
            <div className="jobs-list">
              {jobs.map((job, index) => (
                <div className="job-row" key={index}>
                  <div className="job-info">
                    <h4>{job.title}</h4>
                    <p>{job.location} • {job.type}</p>
                  </div>
                  <button className="btn-secondary">View Details</button>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-openings-card">
              <div className="no-openings-content">
                <FiMail className="no-openings-icon" />
                <h4>No Current Openings</h4>
                <p>We don't have any active vacancies at the moment, but we are always looking for exceptional talent to join our network.</p>
                <div className="cv-cta-box">
                  <p><strong>Please share your CV/Resume with us.</strong> We will reach out to you as soon as a requirement matches your profile.</p>
                  <a href="mailto:careers@questpharma.com" className="btn-primary-neon">
                    <FiSend /> Send Your CV
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Careers;