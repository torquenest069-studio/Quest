import React from 'react'
import '../../App.css';
import { 
  Globe, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Shield, 
  FileText, 
  ExternalLink 
} from 'lucide-react';

const GlobalCompliance = () => {
  return (
    <div>
      <section className="compliance-section">
  <div className="compliance-container">
    {/* Header Section */}
    <div className="compliance-header">
      <span className="section-subtitle">GLOBAL COMPLIANCE</span>
      <h2>Aligned with Global Regulatory Standards</h2>
      <p>Our audits and assessments are rigorously aligned with the world's most stringent pharmaceutical quality and GMP regulatory frameworks.</p>
    </div>

    {/* Top 2x2 Regulatory Grid */}
    <div className="compliance-grid">
      {/* US FDA Block */}
      <div className="regulatory-card">
        <div className="icon-wrap-navy"><Globe size={24} /></div>
        <span className="region-label">UNITED STATES</span>
        <h4>US FDA</h4>
        <ul className="compliance-list">
          <li>21 CFR Part 211 (Finished Pharmaceuticals)</li>
          <li>21 CFR Part 210 (cGMP)</li>
          <li>ICH Q7 (API)</li>
          <li>Process Validation Guidance</li>
        </ul>
      </div>

      {/* EU Block */}
      <div className="regulatory-card">
        <div className="icon-wrap-navy"><ShieldCheck size={24} /></div>
        <span className="region-label">EUROPEAN UNION</span>
        <h4>EMA / EU Commission</h4>
        <ul className="compliance-list">
          <li>EU GMP Annex 1 (Sterile)</li>
          <li>EU GMP Part I & II</li>
          <li>GDP Guidelines</li>
          <li>Annex 11 (Computerized Systems)</li>
        </ul>
      </div>

      {/* WHO Block */}
      <div className="regulatory-card">
        <div className="icon-wrap-navy"><Award size={24} /></div>
        <span className="region-label">WORLD HEALTH ORGANIZATION</span>
        <h4>WHO Prequalification</h4>
        <ul className="compliance-list">
          <li>WHO TRS Series</li>
          <li>WHO GMP Guidelines</li>
          <li>API Manufacturing Standards</li>
          <li>Quality Control Requirements</li>
        </ul>
      </div>

      {/* ICH Block */}
      <div className="regulatory-card">
        <div className="icon-wrap-navy"><BookOpen size={24} /></div>
        <span className="region-label">INTERNATIONAL COUNCIL</span>
        <h4>ICH Harmonization</h4>
        <ul className="compliance-list">
          <li>ICH Q7 (API GMP)</li>
          <li>ICH Q9 (Quality Risk)</li>
          <li>ICH Q10 (Pharmaceutical QS)</li>
          <li>ICH Q8 (Pharmaceutical Dev)</li>
        </ul>
      </div>
    </div>

    {/* Bottom 3-Column Strategy Row */}
    <div className="strategy-grid">
      <div className="strategy-card">
        <div className="icon-circle-outline"><Shield size={20} /></div>
        <h5>Inspection Readiness</h5>
        <p>Prepare for regulatory inspections with confidence through mock audits and gap assessments.</p>
      </div>
      <div className="strategy-card">
        <div className="icon-circle-outline"><FileText size={20} /></div>
        <h5>Documentation Excellence</h5>
        <p>Ensure quality systems meet the highest standards of regulatory compliance and traceability.</p>
      </div>
      <div className="strategy-card">
        <div className="icon-circle-outline"><ExternalLink size={20} /></div>
        <h5>Global Market Access</h5>
        <p>Navigate international requirements to enable compliant market entry and expansion.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default GlobalCompliance
