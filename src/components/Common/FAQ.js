'use client';
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import '../../App.css';

const DEFAULT_FAQS = [
  {
    question: "What regulatory standards do you support for GMP audits?",
    answer: "We support all major global standards, including US FDA (21 CFR Part 210/211), EU GMP (Eudralex Vol 4), WHO TRS guidelines, and ICH Quality Systems (Q7-Q10)."
  },
  {
    question: "Do you perform mock inspections to prepare for regulatory audits?",
    answer: "Yes, we specialize in regulatory readiness. We conduct comprehensive mock inspections simulating actual FDA or EU GMP audits, including facility walkthroughs and documentation reviews."
  },
  {
    question: "Which manufacturing facilities do your consultancy services cover?",
    answer: "Our expertise spans API manufacturing, Finished Dosage Forms (Oral Solids, Liquids, Topicals), Sterile Manufacturing, and modern Quality Control Laboratories."
  },
  {
    question: "Are my site audit reports and proprietary data kept confidential?",
    answer: "Confidentiality is a core pillar. We sign formal NDAs before any project, and all audit reports are handled through secure, encrypted data channels."
  }
];

const FAQ = ({ 
  questions = DEFAULT_FAQS, 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common inquiries about our pharmaceutical consultancy and compliance expertise.",
  background = "#ffffff"
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!questions || questions.length === 0) return null;

  return (
    <section className="faq-section" style={{ backgroundColor: background }}>
      <div className="faq-container">
        <div className="faq-header">
          <span className="section-label">FAQ</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
