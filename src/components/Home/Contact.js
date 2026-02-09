

import '../../App.css';
import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    organization: '',
    email: '',
    service: '',
    details: '',
    agreed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submission Data:', formData);
    alert('Inquiry submitted successfully!');
  };

  return (
    <div className="consult-page">
      <div className="consult-wrapper">
        {/* Header Section */}
        <header className="consult-header">
          <p className="eyebrow">GET IN TOUCH</p>
          <h1>Schedule a Consultation</h1>
          <p className="header-desc">
            Discuss your pharmaceutical quality and GMP compliance requirements with our expert team. 
            We provide confidential, professional consultations tailored to your organization's needs.
          </p>
        </header>

        <div className="consult-layout">
          {/* Left Column: Info & Details */}
          <aside className="consult-info">
            <div className="blue-contact-card">
              <h3>Contact Information</h3>
              
              <div className="info-block">
                <span className="info-label">Email</span>
                <p>contact@questpharma.com</p>
              </div>

              <div className="info-block">
                <span className="info-label">Phone</span>
                <p>+1 (555) 123-4567</p>
              </div>

              <div className="info-block">
                <span className="info-label">Headquarters</span>
                <p>Global Operations<br />Serving All Major Markets</p>
              </div>

              <div className="response-footer">
                <span className="info-label">Response Time</span>
                <p>We typically respond to inquiries within 24 business hours.</p>
              </div>
            </div>

            <div className="white-confidentiality-card">
              <p className="eyebrow-small">CONFIDENTIALITY</p>
              <p>
                All consultations and engagements are conducted under strict confidentiality agreements. 
                We understand the sensitive nature of pharmaceutical quality matters.
              </p>
            </div>
          </aside>

          {/* Right Column: Interactive Form */}
          <main className="consult-form-container">
            <form onSubmit={handleSubmit} className="consult-form">
              <div className="field-row">
                <div className="field-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" name="fullName" placeholder="John Smith" 
                    required onChange={handleChange} 
                  />
                </div>
                <div className="field-group">
                  <label>Job Title *</label>
                  <input 
                    type="text" name="jobTitle" placeholder="Quality Assurance Director" 
                    required onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field-group">
                  <label>Organization *</label>
                  <input 
                    type="text" name="organization" placeholder="Company Name" 
                    required onChange={handleChange} 
                  />
                </div>
                <div className="field-group">
                  <label>Email *</label>
                  <input 
                    type="email" name="email" placeholder="john.smith@company.com" 
                    required onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="field-group">
                <label>Service Interest *</label>
                <select name="service" required onChange={handleChange} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="gmp">GMP Compliance</option>
                  <option value="quality">Quality Management</option>
                  <option value="audit">Audit Readiness</option>
                </select>
              </div>

              <div className="field-group">
                <label>Project Details *</label>
                <textarea 
                  name="details" rows="5" required onChange={handleChange}
                  placeholder="Please describe your quality and compliance requirements, timeline, and any specific concerns..."
                ></textarea>
              </div>

              <div className="consent-group">
                <input 
                  type="checkbox" id="agreed" name="agreed" 
                  required onChange={handleChange} 
                />
                <label htmlFor="agreed">
                  I agree to the terms of confidentiality and understand that this inquiry will be handled with professional discretion.
                </label>
              </div>

             <button type="submit" className="btn-submit">
  Submit Inquiry
  <svg viewBox="0 0 24 24">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
</button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Contact;


