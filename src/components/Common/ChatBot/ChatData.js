'use client';
export const WHATSAPP_NUMBER = '919538601165';
export const EMAIL_ADDRESS = 'ravi@questpharmasolution.com';

export const CHAT_NODES = {

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // START
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  start: {
    id: 'start',
    message: `Greetings from *QUEST Pharma Solutions* 👋

I'm your digital compliance assistant. I can help you with GMP audits, regulatory remediation, and pharmaceutical quality systems.

How can we assist your organization today?`,
    options: [
      { label: 'Explore Our Expertise', next: 'ravi_intro' },
      { label: 'Urgent Regulatory Support', next: 'urgency_check' },
      { label: 'I\'m just looking around', next: 'browsing' },
    ],
  },

  browsing: {
    id: 'browsing',
    message: `No problem at all! Feel free to explore our expertise in GMP Audits, Regulatory Readiness, and Quality Systems.

Whenever you're ready to discuss a specific requirement, I'm here. Would you like a brief overview of our Principal Consultant's background?`,
    options: [
      { label: 'Yes, tell me more', next: 'ravi_intro' },
      { label: 'View Services', next: 'service_overview' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🔥 RAVI INTRO (TRUST BUILDER)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ravi_intro: {
    id: 'ravi_intro',
    message: `👨‍⚕️ You'll be working directly with **Ravi B**, Founder & Principal Consultant.

With a Master's in Pharmaceutical Sciences and **24+ years** of global experience, Ravi has:
• Conducted **500+ GMP audits** across 35+ countries.
• Expert knowledge in US FDA, EU GMP, and WHO standards.
• Specialized in complex remediation and system transformations.

Which area of expertise do you need to focus on?`,
    options: [
      { label: 'GMP Audits & Gap Analysis', next: 'gmp_audit' },
      { label: 'Warning Letter / 483 Remediation', next: 'remediation' },
      { label: 'Data Integrity & Digital Systems', next: 'data_integrity' },
      { label: 'Quality Systems (QMS)', next: 'quality_system' },
      { label: 'New Facility Setup', next: 'new_facility' },
    ],
  },

  service_overview: {
    id: 'service_overview',
    message: `We provide end-to-end consulting for:
• **Regulatory Readiness**: Preparing you for US FDA, MHRA, and EU inspections.
• **Compliance**: Data Integrity ALCOA+ audits and QMS implementation.
• **Technical Services**: Facility design review and validation support.

Which one peaks your interest?`,
    options: [
      { label: 'Regulatory Readiness', next: 'inspection_ready' },
      { label: 'Data Integrity', next: 'data_integrity' },
      { label: 'Talk to an Expert', next: 'lead_name' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // GMP AUDITS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gmp_audit: {
    id: 'gmp_audit',
    message: `🔍 Our audits are designed to identify risks before regulators do. We cover APIs, Formulations, and QC Labs.

What type of facility needs an assessment?`,
    options: [
      { label: 'API / Intermediate', next: 'regulatory_market' },
      { label: 'Finished Dosage (FDF)', next: 'regulatory_market' },
      { label: 'QC / Microbiology Lab', next: 'regulatory_market' },
      { label: 'Biologicals / Sterile', next: 'regulatory_market' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // REMEDIATION (NEW)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  remediation: {
    id: 'remediation',
    message: `🚨 Handling regulatory observations (483s, Warning Letters, or Import Alerts) requires a strategic and technical approach.

Are you looking for immediate support with a response or long-term remediation?`,
    options: [
      { label: 'Respond to 483/Warning Letter', next: 'urgency_check' },
      { label: 'Global Correction Plan', next: 'facility_scale' },
      { label: 'System Recovery', next: 'quality_system' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // DATA INTEGRITY (NEW)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  data_integrity: {
    id: 'data_integrity',
    message: `💻 Data Integrity is the backbone of trust in Pharma. We specialize in ALCOA+ audits and computerized system validation (CSV).

What is your current challenge?`,
    options: [
      { label: 'DI Gap Assessment', next: 'regulatory_market' },
      { label: 'Computerized System Validation', next: 'facility_scale' },
      { label: 'DI Training for Staff', next: 'free_explain' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // NEW FACILITY (NEW)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  new_facility: {
    id: 'new_facility',
    message: `🏗️ Building a new facility or expanding? We ensure your design and flow are compliant from day one.

At what stage is your project?`,
    options: [
      { label: 'Conceptual Design / URS', next: 'regulatory_market' },
      { label: 'Commissioning & Qualification', next: 'regulatory_market' },
      { label: 'Pre-approval Inspection (PAI)', next: 'urgency_check' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // REGULATORY MARKET
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  regulatory_market: {
    id: 'regulatory_market',
    message:
      "🌍 Understanding the target market is crucial for compliance strategy. Which markets are you targeting?",
    options: [
      { label: 'US FDA (United States)', next: 'audit_goal' },
      { label: 'EU GMP (Europe)', next: 'audit_goal' },
      { label: 'WHO / PICS', next: 'audit_goal' },
      { label: 'Multiple Global Markets', next: 'audit_goal' },
    ],
  },

  audit_goal: {
    id: 'audit_goal',
    message:
      "🎯 What is the primary goal of this engagement?",
    options: [
      { label: 'Pre-inspection Mock Audit', next: 'facility_scale' },
      { label: 'Routine Vendor Audit', next: 'facility_scale' },
      { label: 'Technical Gap Analysis', next: 'facility_scale' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // INSPECTION READINESS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  inspection_ready: {
    id: 'inspection_ready',
    message: `🛡️ We help you build a culture of "Always Ready." No more last-minute panics.

Do you have a confirmed inspection date?`,
    options: [
      { label: 'Yes, it\'s imminent', next: 'urgency_check' },
      { label: 'No, we are preparing early', next: 'facility_scale' },
      { label: 'Mock Audit required', next: 'facility_scale' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // QUALITY SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  quality_system: {
    id: 'quality_system',
    message: `⚙️ A robust QMS (ICH Q10) is more than just SOPs—it's about effective outcomes.

Which QMS element needs the most attention?`,
    options: [
      { label: 'CAPA & Deviations', next: 'facility_scale' },
      { label: 'Risk Management (QRM)', next: 'facility_scale' },
      { label: 'Change Control', next: 'facility_scale' },
      { label: 'Internal Audit Program', next: 'facility_scale' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FACILITY SCALE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  facility_scale: {
    id: 'facility_scale',
    message:
      "🏭 To provide an accurate estimate, could you tell me the scale of the operations involved?",
    options: [
      { label: 'Single Facility / Unit', next: 'authority_push' },
      { label: 'Multi-site Organization', next: 'authority_push' },
      { label: 'Global Corporate Level', next: 'authority_push' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🔥 AUTHORITY PUSH
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  authority_push: {
    id: 'authority_push',
    message: `Great. **Ravi B** personally oversees all strategic engagements to ensure the highest level of technical accuracy and regulatory alignment.

Would you like to schedule a confidential discussion with him?`,
    options: [
      { label: 'Yes, let\'s connect', next: 'lead_name' },
      { label: 'I have specific questions first', next: 'free_explain' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // URGENCY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  urgency_check: {
    id: 'urgency_check',
    message: `⏳ Timelines are critical in regulatory affairs. How fast do you need us to move?`,
    options: [
      { label: 'Immediate (Critical)', next: 'priority_route' },
      { label: 'Within 2–4 weeks', next: 'lead_name' },
      { label: 'Planning for next quarter', next: 'lead_name' },
    ],
  },

  priority_route: {
    id: 'priority_route',
    message: `🚨 Understood. We prioritize urgent regulatory risks.

I need a few details to flag this for Ravi B immediately.`,
    next: 'lead_name',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FREE TEXT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  free_explain: {
    id: 'free_explain',
    message:
      "✍️ Please share a brief summary of your requirement or any specific questions you have:",
    freeText: true,
    freeTextNext: 'lead_name',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LEAD CAPTURE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  lead_name: {
    id: 'lead_name',
    message:
      "To get started, may I have your full name?",
    inputField: 'name',
    inputNext: 'lead_company',
  },

  lead_company: {
    id: 'lead_company',
    message:
      "And which organization do you represent?",
    freeText: true,
    freeTextNext: 'lead_email',
  },

  lead_email: {
    id: 'lead_email',
    message:
      "Perfect. Where should we send the proposal or further information?",
    inputField: 'email',
    inputNext: 'lead_whatsapp',
  },

  lead_whatsapp: {
    id: 'lead_whatsapp',
    message:
      "Lastly, your contact number (WhatsApp is preferred for faster coordination):",
    inputField: 'whatsapp',
    inputNext: 'thank_you',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FINAL
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  thank_you: {
    id: 'thank_you',
    message: `🎉 Thank you! Your request has been logged.

**Ravi B** will review your details personally. You can expect a response within **12–24 hours**.

In the meantime, you can reach out directly via the buttons below.`,
    options: [
      { label: 'Chat on WhatsApp', next: 'exit_whatsapp' },
      { label: 'Send an Email', next: 'exit_email' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EXIT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  exit_whatsapp: {
    id: 'exit_whatsapp',
    message: 'Redirecting to WhatsApp...',
    externalLink: `https://wa.me/${WHATSAPP_NUMBER}`,
    end: true,
  },

  exit_email: {
    id: 'exit_email',
    message: 'Opening your email client...',
    externalLink: `mailto:${EMAIL_ADDRESS}?subject=Consultation Inquiry - QUEST Pharma`,
    end: true,
  },
};