'use client';
import React from 'react';
import Image from 'next/image';

import FAQ from '../../components/Common/FAQ';

export default function PrivacyPolicyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <>
      <div className="legal-container" style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Image src="/logo.jpg" alt="QUEST Pharma Solutions Logo" width={200} height={60} priority />
          <h1 style={{ fontSize: '3rem', margin: '20px 0 10px', color: '#0f172a' }}>Privacy Policy</h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Last Updated: {lastUpdated} | Document ID: QP-POL-PRIV-V2</p>
        </div>
        
        <div className="legal-content" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>1. Commitment to Data Integrity</h2>
            <p>At QUEST Pharma Solutions, we handle data with the same precision and integrity required for GxP compliance. This Privacy Policy outlines how we collect, use, and protect your information.</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>2. Scope of Compliance</h2>
            <p>Our data handling practices are aligned with international standards, including GDPR, HIPAA, and relevant pharmaceutical regulatory requirements for data confidentiality and integrity (ALCOA+ principles).</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>3. Information Collection</h2>
            <p>We collect information necessary to provide specialized consulting services, including corporate identifiers, contact details, and project-specific requirements provided through our secure portals and consultation forms.</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>4. Security Measures</h2>
            <p>As a global quality solutions provider, we implement enterprise-grade security protocols, including encryption at rest and in transit, to ensure the absolute confidentiality of client documentation and sensitive quality management data.</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>5. Contact Information</h2>
            <p>For inquiries regarding data protection or to exercise your rights, please contact our Data Protection Officer at: <strong>compliance@questpharmasolution.com</strong></p>
          </section>
        </div>
      </div>
      <FAQ 
        questions={[
          {
            question: "How do you handle my facility's proprietary manufacturing data?",
            answer: "All client documentation is stored in encrypted, air-gapped project silos, ensuring it is only accessible by assigned technical subject matter experts."
          },
          {
            question: "Does QUEST share project data with third-party providers?",
            answer: "No. We maintain an in-house expert network and all data is strictly compartmentalized to prevent any unauthorized leakage."
          },
          {
            question: "How can I request a data purge after my audit project concludes?",
            answer: "Simply submit a formal request to compliance@questpharmasolution.com and we will execute a complete sanitization of your project record as per legal guidelines."
          }
        ]}
        title="Privacy & Data Integrity"
        subtitle="Learn how we protect your proprietary pharmaceutical information with elite security and GxP standards."
      />
    </>
  );
}
