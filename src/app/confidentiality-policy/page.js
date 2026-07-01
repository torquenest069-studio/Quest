'use client';
import React from 'react';
import Image from 'next/image';

import FAQ from '../../components/Common/FAQ';

export default function ConfidentialsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <>
      <div className="legal-container" style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Image src="/logo.jpg" alt="QUEST Pharma Solutions Logo" width={200} height={60} priority />
          <h1 style={{ fontSize: '3rem', margin: '20px 0 10px', color: '#0f172a' }}>Confidentiality Policy</h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Last Updated: {lastUpdated} | Document ID: QP-POL-CONF-V1</p>
        </div>
        
        <div className="confidentiality-content" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>1. Professional Discretion</h2>
            <p>As a specialized pharmaceutical Quality & GMP consultancy, we understand that client information, including proprietary formulations, manufacturing processes, and audit results, are sensitive assets. We maintain a zero-tolerance policy regarding unauthorized disclosure.</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>2. Data Sanitization & Protection</h2>
            <p>All client data handled during audits, GAP assessments, or CMO qualifications is protected by enterprise-grade encryption. We utilize strictly controlled access protocols for all project-related documentation (SOPs, Batch Records, Risk Assessments).</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>3. Non-Disclosure Commitment</h2>
            <p>QUEST Pharma Solutions enters into formal Non-Disclosure Agreements (NDAs) with all clients and associates prior to the exchange of any proprietary pharmaceutical information. Our commitment extends beyond the termination of any single project or engagement.</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>4. Internal Controls</h2>
            <p>Our consultants are trained in global pharmaceutical ethics and confidentiality standards. We maintain internal audits of our own information systems to ensure full compliance with this policy.</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <p>For more information on our confidentiality frameworks, please reach out to: <strong>legal@questpharmasolution.com</strong></p>
          </section>
        </div>
      </div>
      <FAQ 
        questions={[
          {
            question: "Is an NDA mandatory before any project scoping begins?",
            answer: "Yes, we execute a comprehensive, legally binding NDA during the very first phase of engagement to protect your proprietary assets."
          },
          {
            question: "How is access to my audit record technically controlled?",
            answer: "We utilize multi-factor authenticated systems and strictly limited internal permissions to ensure only active project leads have access."
          },
          {
            question: "Does your confidentiality extend to external site auditors?",
            answer: "Yes, all our elite auditors and technical specialists are bound by the same rigorous QUEST NDAs and professional ethics."
          }
        ]}
        title="Confidentiality Inquiries"
        subtitle="Exploring our technical framework for absolute pharmaceutical information security."
      />
    </>
  );
}
