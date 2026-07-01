'use client';


import '../../App.css';
import React, { useState } from 'react';
import SEO from '../Common/SEO';


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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS Configuration (Same as ChatBot)
    const EMAILJS_SERVICE_ID = 'service_m0eph59';
    const EMAILJS_TEMPLATE_ID = 'template_k8oq4fa';
    const EMAILJS_PUBLIC_KEY = 'qxRy98AZheyqknnZF';

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      from_phone: 'N/A', // Not in this form
      company: formData.organization,
      requirement: `[Service: ${formData.service}] - Job Title: ${formData.jobTitle}`,
      full_details: `
        Name: ${formData.fullName}
        Job Title: ${formData.jobTitle}
        Organization: ${formData.organization}
        Email: ${formData.email}
        Interest: ${formData.service}
        Details: ${formData.details}
      `,
      timestamp: new Date().toLocaleString()
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`EmailJS Error: ${errText}`);
      }

      setSubmitStatus('success');
      // Reset form on success
      setFormData({
        fullName: '',
        jobTitle: '',
        organization: '',
        email: '',
        service: '',
        details: '',
        agreed: false
      });
      e.target.reset();
    } catch (error) {
      console.error('Submission Error Details:', {
        message: error.message,
        formData: formData
      });
      setSubmitError(error.message || 'Server error occurred');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Quest Pharma for global pharmaceutical quality and GMP compliance consultations. Schedule your professional consultation today."
        keywords="Quest Pharma contact, schedule consultation, pharma quality consulting, GMP contact"
        canonical="/contact"
      />
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
                  <p>ravi@questpharmasolution.com</p>
                </div>

                <div className="info-block">
                  <span className="info-label">Phone</span>
                  <p>+91 8431077234</p>
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
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text" id="fullName" name="fullName" placeholder="John Smith"
                      required onChange={handleChange}
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="jobTitle">Job Title *</label>
                    <input
                      type="text" id="jobTitle" name="jobTitle" placeholder="Quality Assurance Director"
                      required onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field-group">
                    <label htmlFor="organization">Organization *</label>
                    <input
                      type="text" id="organization" name="organization" placeholder="Company Name"
                      required onChange={handleChange}
                    />
                  </div>
                  <div className="field-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email" id="email" name="email" placeholder="john.smith@company.com"
                      required onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="service">Service Interest *</label>
                  <select id="service" name="service" required onChange={handleChange} defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option value="gmp">GMP Compliance</option>
                    <option value="quality">Quality Management</option>
                    <option value="audit">Audit Readiness</option>
                  </select>
                </div>

                <div className="field-group">
                  <label htmlFor="details">Project Details *</label>
                  <textarea
                    id="details" name="details" rows="5" required onChange={handleChange}
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

                <div className="form-status-msg">
                  {submitStatus === 'success' && <p className="success-msg">✅ Inquiry sent successfully!</p>}
                  {submitStatus === 'error' && (
                    <div className="error-box">
                      <p className="error-msg">❌ Submission Failed</p>
                      <p className="error-details">{submitError}</p>
                      <p className="error-hint">Please try again or contact ravi@questpharmasolution.com directly.</p>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className={`btn-submit ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                  aria-label="Submit Inquiry Form"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  {!isSubmitting && (
                    <svg viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  )}
                </button>
              </form>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;


