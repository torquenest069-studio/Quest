import React from 'react';
import { FiCheckSquare, FiUsers, FiClipboard, FiShield, FiActivity, FiTrendingUp } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Services = () => {
  const navigate = useNavigate();
  const serviceData = [
 
 {
      icon: <FiCheckSquare />,
      title: "GMP Compliance Audits",
      desc: "Comprehensive on-site audits for API manufacturing, finished dosage forms, and quality control laboratories.",
      keyAreas: ["Site facility assessment", "Process validation review", "Documentation systems", "Personnel qualification"]
    },
    {
      icon: <FiUsers />,
      title: "CMO Qualification & Due Diligence",
      desc: "Independent assessment of contract manufacturing organizations to ensure quality and regulatory compliance.",
      keyAreas: ["Technical capability evaluation", "Quality system maturity", "Supply chain integrity", "Risk profiling"]
    },
    {
      icon: <FiClipboard />,
      title: "Regulatory Inspection Readiness",
      desc: "Preparation and mock inspections aligned with US FDA, EU GMP, WHO, and other regulatory expectations.",
      keyAreas: ["Pre-inspection gap analysis", "Mock inspection exercises", "Observation remediation", "Inspector interview prep"]
    },
    {
      icon: <FiShield />,
      title: "Quality System Assessment",
      desc: "In-depth evaluation of pharmaceutical quality systems against ICH Q7, Q9, and Q10 guidelines.",
      keyAreas: ["QMS architecture review", "Change control effectiveness", "Deviation management", "Quality metrics"]
    },
    {
      icon: <FiActivity />,
      title: "CAPA Effectiveness & Risk Management",
      desc: "Assessment of corrective and preventive action systems and quality risk management frameworks.",
      keyAreas: ["Root cause analysis review", "CAPA closure effectiveness", "Risk assessment protocols", "Trend analysis"]
    },
    {
      icon: <FiTrendingUp />,
      title: "Continuous Improvement Programs",
      desc: "Strategic guidance for building sustainable quality culture and operational excellence frameworks.",
      keyAreas: ["Quality culture development", "Performance KPI design", "Training program optimization", "Best practice adoption"]
    }
  
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <span className="section-label">OUR SERVICES</span>
          <h2>Comprehensive Quality & Compliance Solutions</h2>
          <p>Specialized pharmaceutical quality services designed for regulated manufacturing environments and global regulatory requirements.</p>
        </div>

        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-top">
                <div className="service-icon-box">{service.icon}</div>
                <div className="service-main-info">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
              
              <div className="key-areas-section">
                <span className="key-areas-label">KEY AREAS</span>
                <div className="key-areas-grid">
                  {service.keyAreas.map((area, i) => (
                    <div key={i} className="area-item">
                      <span className="teal-dot">•</span> {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Width Footer Card */}
        <div className="engagement-card">
          <h4>Customized Engagement Models</h4>
          <p>We tailor our services to meet specific organizational needs, from single-day focused assessments to comprehensive multi-site audit programs and ongoing quality advisory partnerships.</p>
          <button 
        className="btn-primary-neon" 
        onClick={() => navigate('/Contact')} > Your Requirements</button>
        </div>
      </div>
    </section>
  );
};

export default Services;