'use client';
export const WHATSAPP_NUMBER = '919538601165';
export const EMAIL_ADDRESS = 'ravi@questpharmasolution.com';

export const CHAT_NODES = {

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // START
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  start: {
    id: 'start',
    message: `Welcome to *QUEST Pharma Solutions* 👋

We specialize in GMP audits, regulatory compliance, and pharmaceutical quality systems.`,
    options: [
      { label: 'Continue', next: 'ravi_intro' },
      { label: 'Talk to Consultant', next: 'lead_name' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🔥 RAVI INTRO (TRUST BUILDER)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ravi_intro: {
    id: 'ravi_intro',
    message: `👨‍⚕️ You will be guided by Ravi B, Founder & Principal Consultant.

With a strong foundation in pharmaceutical sciences and over two decades of global experience, he brings deep expertise in quality and regulatory excellence:

• M. Pharm (Pharmaceutical Sciences)
• 24+ years of experience in global pharmaceutical quality
• Conducted 500+ GMP audits across 35+ countries
• NSF & APIC Certified Auditor

How may we assist you today?`,
    options: [
      { label: 'GMP Audits', next: 'gmp_audit' },
      { label: 'Regulatory Readiness', next: 'inspection_ready' },
      { label: 'Quality Systems & CAPA', next: 'quality_system' },
      { label: 'Speak to Ravi B', next: 'lead_name' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // GMP AUDITS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  gmp_audit: {
    id: 'gmp_audit',
    message: `🔍 We conduct comprehensive GMP audits across APIs, formulations, and QC laboratories.

What type of facility do you operate?`,
    options: [
      { label: 'API Manufacturing', next: 'regulatory_market' },
      { label: 'Finished Dosage (FDF)', next: 'regulatory_market' },
      { label: 'QC Laboratory', next: 'regulatory_market' },
      { label: 'Multiple Facilities', next: 'regulatory_market' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // REGULATORY MARKET
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  regulatory_market: {
    id: 'regulatory_market',
    message:
      "🌍 Which regulatory markets are you targeting?",
    options: [
      { label: 'US FDA', next: 'audit_goal' },
      { label: 'EU GMP', next: 'audit_goal' },
      { label: 'WHO / Global', next: 'audit_goal' },
      { label: 'Multiple Markets', next: 'audit_goal' },
    ],
  },

  audit_goal: {
    id: 'audit_goal',
    message:
      "🎯 What is your primary objective?",
    options: [
      { label: 'Pre-inspection readiness', next: 'facility_scale' },
      { label: 'Gap assessment', next: 'facility_scale' },
      { label: 'Vendor qualification (CMO)', next: 'facility_scale' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // INSPECTION READINESS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  inspection_ready: {
    id: 'inspection_ready',
    message: `🛡️ We prepare organizations for regulatory inspections (US FDA, EU GMP, WHO).

What stage are you in?`,
    options: [
      { label: 'Upcoming inspection', next: 'urgency_check' },
      { label: 'Mock inspection required', next: 'urgency_check' },
      { label: 'Gap analysis', next: 'urgency_check' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // QUALITY SYSTEM
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  quality_system: {
    id: 'quality_system',
    message: `⚙️ We assess QMS, CAPA, and risk systems aligned with ICH Q7, Q9, Q10.

What do you need help with?`,
    options: [
      { label: 'CAPA effectiveness', next: 'facility_scale' },
      { label: 'Deviation management', next: 'facility_scale' },
      { label: 'Risk management', next: 'facility_scale' },
      { label: 'Full QMS assessment', next: 'facility_scale' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FACILITY SCALE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  facility_scale: {
    id: 'facility_scale',
    message:
      "🏭 What is the scale of your operations?",
    options: [
      { label: 'Single site', next: 'authority_push' },
      { label: 'Multiple sites', next: 'authority_push' },
      { label: 'Global operations', next: 'authority_push' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🔥 AUTHORITY PUSH
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  authority_push: {
    id: 'authority_push',
    message: `✅ This engagement will be handled directly by **Ravi B** (Founder & Principal Consultant).

With 24+ years of experience and 500+ GMP audits across 35+ countries, he brings deep expertise across US FDA, EU GMP, and WHO standards.

Would you like to connect for a detailed discussion?`,
    options: [
      { label: 'Yes, connect me', next: 'lead_name' },
      { label: 'Share requirement first', next: 'free_explain' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // URGENCY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  urgency_check: {
    id: 'urgency_check',
    message: `⏳ How soon do you need support?`,
    options: [
      { label: 'Immediate (within 7 days)', next: 'priority_route' },
      { label: 'Within 2–4 weeks', next: 'lead_name' },
      { label: 'Planning stage', next: 'free_explain' },
    ],
  },

  priority_route: {
    id: 'priority_route',
    message: `🚨 We prioritize critical regulatory timelines.

Let’s connect you with **Ravi B** immediately.`,
    next: 'lead_name',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FREE TEXT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  free_explain: {
    id: 'free_explain',
    message:
      "✍️ Please briefly describe your requirement:",
    freeText: true,
    freeTextNext: 'lead_name',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // LEAD CAPTURE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  lead_name: {
    id: 'lead_name',
    message:
      "👤 May I have your name?",
    inputField: 'name',
    inputNext: 'lead_company',
  },

  lead_company: {
    id: 'lead_company',
    message:
      "🏢 Company name?",
    freeText: true,
    freeTextNext: 'lead_email',
  },

  lead_email: {
    id: 'lead_email',
    message:
      "📧 Your email address?",
    inputField: 'email',
    inputNext: 'lead_whatsapp',
  },

  lead_whatsapp: {
    id: 'lead_whatsapp',
    message:
      "📱 Contact number (WhatsApp preferred):",
    inputField: 'whatsapp',
    inputNext: 'thank_you',
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // FINAL
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  thank_you: {
    id: 'thank_you',
    message: `🎉 Thank you for connecting with us.

Ravi B, Founder & Principal Consultant, will personally review your requirement and get in touch with you within 12–24 hours.

🔒 All discussions are handled with the utmost confidentiality and in full alignment with global GMP standards.`,
    options: [
      { label: 'Chat on WhatsApp', next: 'exit_whatsapp' },
      { label: 'Send Email', next: 'exit_email' },
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // EXIT
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  exit_whatsapp: {
    id: 'exit_whatsapp',
    message: 'Opening WhatsApp...',
    externalLink: `https://wa.me/${WHATSAPP_NUMBER}`,
    end: true,
  },

  exit_email: {
    id: 'exit_email',
    message: 'Opening email...',
    externalLink: `mailto:${EMAIL_ADDRESS}?subject=GMP Consulting Inquiry`,
    end: true,
  },
};