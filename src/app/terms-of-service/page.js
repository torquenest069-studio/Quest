'use client';
import React from 'react';
import Image from 'next/image';

import FAQ from '../../components/Common/FAQ';

export default function TermsOfServicePage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <>
      <div className="legal-container" style={{ padding: '80px 20px', maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Image src="/logo.jpg" alt="QUEST Pharma Solutions Logo" width={200} height={60} priority />
          <h1 style={{ fontSize: '3rem', margin: '20px 0 10px', color: '#0f172a' }}>Terms of Service</h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Last Updated: {lastUpdated} | Document ID: QP-TOS-V2</p>
        </div>
        
        <div className="legal-content" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' }}>
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>1. Scope of Engagement</h2>
            <p>By engaging QUEST Pharma Solutions, you agree to these Terms of Service. We provide technical consulting, GxP audits, and quality management advisory services within the global pharmaceutical regulatory framework.</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>2. Professional Integrity</h2>
            <p>Our consulting is provided by qualified experts with extensive experience in FDA, EU GMP, WHO, and other global standards. We maintain objectivity and technical rigor in all assessments and deliverables.</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>3. IP and Rights</h2>
            <p>Deliverables provided by QUEST Pharma Solutions, including Audit Reports, GAP Analysis, and specialized SOPs, are for the original client's use and are protected under pharmaceutical intellectual property frameworks unless otherwise stated in the Master Service Agreement (MSA).</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>4. Indemnification</h2>
            <p>QUEST Pharma Solutions provides advisory services to support your compliance efforts. The ultimate responsibility for product quality and regulatory adherence remains with the manufacturer or brand holder as per local laws and GxP guidelines.</p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', borderLeft: '4px solid #0d9488', paddingLeft: '15px', color: '#0f172a' }}>5. Legal Jurisdiction</h2>
            <p>These terms are governed by the laws applicable in the region of the engagement, in alignment with international commercial standards for specialized pharmaceutical consulting.</p>
          </section>
        </div>
      </div>
      <FAQ 
        questions={[
          {
            question: "Are project timelines strictly guaranteed under the TOS?",
            answer: "QUEST defines clear milestones in all MSAs, ensuring project execution and reporting meet your critical regulatory deadlines."
          },
          {
            question: "What is your rescheduling policy for site-specific force majeure?",
            answer: "We define clear business continuity protocols for site access disruptions, ensuring audit rescheduling with minimal financial impact."
          },
          {
            question: "Does the client retain all IP of the audit reports?",
            answer: "Yes. Upon full project completion, the customized audit reports and any site-specific advisory documents belong exclusively to the client."
          }
        ]}
        title="Terms & Engagements"
        subtitle="Exploring the contractual foundations of QUEST Pharma Solutions' consultancy services."
      />
    </>
  );
}
