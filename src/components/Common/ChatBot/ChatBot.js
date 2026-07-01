'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CHAT_NODES } from './ChatData';
import Image from 'next/image';
import './ChatBot.css';

// --- Constants & Helpers ---
const COUNTRY_CODES = [
  { name: "United States", code: "+1", flag: "🇺🇸", digits: 10 },
  { name: "China", code: "+86", flag: "🇨🇳", digits: 11 },
  { name: "Germany", code: "+49", flag: "🇩🇪", digits: [10, 11] },
  { name: "India", code: "+91", flag: "🇮🇳", digits: 10 },
  { name: "Japan", code: "+81", flag: "🇯🇵", digits: 10 },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧", digits: 10 },
  { name: "France", code: "+33", flag: "🇫🇷", digits: 9 },
  { name: "Italy", code: "+39", flag: "🇮🇹", digits: 10 },
  { name: "Russia", code: "+7", flag: "🇷🇺", digits: 10 },
  { name: "Canada", code: "+1", flag: "🇨🇦", digits: 10 },
  { name: "Brazil", code: "+55", flag: "🇧🇷", digits: 11 },
  { name: "Spain", code: "+34", flag: "🇪🇸", digits: 9 },
  { name: "Mexico", code: "+52", flag: "🇲🇽", digits: 10 },
  { name: "Australia", code: "+61", flag: "🇦🇺", digits: 9 },
  { name: "South Korea", code: "+82", flag: "🇰🇷", digits: 10 },
  { name: "Indonesia", code: "+62", flag: "🇮🇩", digits: [10, 11, 12] },
  { name: "Turkey", code: "+90", flag: "🇹🇷", digits: 10 },
  { name: "Netherlands", code: "+31", flag: "🇳🇱", digits: 9 },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", digits: 9 },
  { name: "Poland", code: "+48", flag: "🇵🇱", digits: 9 },
];

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && !/\s/.test(v);
}
function isValidName(v) {
  return /^[A-Za-z\s]{3,50}$/.test(v);
}
function isValidCompany(v) {
  return /^[A-Za-z0-9\s&.-]{2,100}$/.test(v);
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const [currentNode, setCurrentNode] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [answers, setAnswers] = useState({});
  const [started, setStarted] = useState(false);
  const [history, setHistory] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'sending', 'success', 'error'
  const [submissionError, setSubmissionError] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[3]); // Default: India (+91)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const scrollRef = useRef(null);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const idCounter = useRef(0);

  // --- Helpers ---
  const nextId = () => ++idCounter.current;

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
      }
    });
  }, []);

  const addBotBubble = useCallback((text) => {
    setBubbles(prev => [...prev, { id: nextId(), role: 'bot', text }]);
  }, []);

  const addUserBubble = useCallback((text) => {
    setBubbles(prev => [...prev, { id: nextId(), role: 'user', text }]);
  }, []);

  // --- Navigate to a node with typing animation ---
  const goToNode = useCallback((nodeId) => {
    const node = CHAT_NODES[nodeId];
    if (!node) return;

    setIsTyping(true);
    setCurrentNode(null); // hide options while "typing"
    setIsDropdownOpen(false); // close dropdown on node change

    const delay = Math.min(600 + node.message.length * 8, 1500);
    setTimeout(() => {
      addBotBubble(node.message);
      setCurrentNode(node);
      setIsTyping(false);

      // Auto-open external link on terminal nodes
      if (node.externalLink) {
        setTimeout(() => {
          window.open(node.externalLink, '_blank', 'noopener,noreferrer');
        }, 600);
      }
    }, delay);
  }, [addBotBubble]);

  // --- Start conversation ---
  useEffect(() => {
    if (open && !started) {
      setStarted(true);
      goToNode('start');
    }
  }, [open, started, goToNode]);

  // --- Auto-scroll ---
  useEffect(() => {
    scrollToBottom();
  }, [bubbles, isTyping, currentNode, scrollToBottom]);

  // --- Focus input when node has input ---
  useEffect(() => {
    if (currentNode?.inputField || currentNode?.freeText) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [currentNode]);

  // --- Click outside dropdown to close ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- Handle option click ---
  const handleOption = (label, next) => {
    // Save current state to history before moving forward
    setHistory(prev => [...prev, { node: currentNode, bubbles, answers }]);

    addUserBubble(label);
    setAnswers(prev => ({ ...prev, [currentNode?.id ?? '']: label }));
    setCurrentNode(null);
    setError('');
    setTimeout(() => goToNode(next), 200);
  };

  // --- Handle text input submit ---
  const handleSubmit = () => {
    const val = inputValue.trim();
    if (!val) return;

    // Strict Validation
    if (currentNode?.inputField === 'name') {
      if (!isValidName(val)) {
        setError('Enter a valid name (letters only)');
        return;
      }
    }

    if (currentNode?.id === 'lead_company') {
      if (!isValidCompany(val)) {
        setError('Enter a valid company name');
        return;
      }
    }

    if (currentNode?.inputField === 'email') {
      if (!isValidEmail(val)) {
        setError('Enter a valid email address');
        return;
      }
    }

    let finalVal = val;
    if (currentNode?.inputField === 'whatsapp') {
      const digitsCount = val.replace(/\D/g, '').length;
      const expected = selectedCountry.digits;
      const isValid = Array.isArray(expected) ? expected.includes(digitsCount) : digitsCount === expected;
      
      if (!isValid) {
        setError('Invalid phone number for selected country');
        return;
      }
      finalVal = `${selectedCountry.code}${val.replace(/\D/g, '')}`; // E.164 format
    }

    setError('');
    // Save current state to history before moving forward
    setHistory(prev => [...prev, { node: currentNode, bubbles, answers, selectedCountry }]);

    addUserBubble(finalVal);
    setAnswers(prev => ({ ...prev, [currentNode?.id ?? '']: finalVal }));
    setInputValue('');

    const nextNodeId = currentNode?.inputNext ?? currentNode?.freeTextNext;
    if (nextNodeId) {
      setCurrentNode(null);
      setTimeout(() => goToNode(nextNodeId), 200);
    }
  };

  // --- Back Navigation ---
  const handleBack = () => {
    if (history.length === 0) return;

    setIsTyping(false);
    const lastState = history[history.length - 1];
    setHistory(prev => prev.slice(0, -1));

    // Restore previous state
    setCurrentNode(lastState.node);
    setBubbles(lastState.bubbles);
    setAnswers(lastState.answers);
    if (lastState.selectedCountry) setSelectedCountry(lastState.selectedCountry);
  };

  // --- Storage Helpers: track multiple leads ---
  const getStoredLeads = () => {
    try {
      return JSON.parse(localStorage.getItem("leads") || "[]");
    } catch (e) {
      return [];
    }
  };

  const saveLead = (data) => {
    let leads = getStoredLeads();
    leads.push({
      email: data.lead_email,
      phone: data.lead_whatsapp,
      timestamp: Date.now()
    });

    // Keep only last 50 entries to prevent overflow
    if (leads.length > 50) {
      leads = leads.slice(-50);
    }
    localStorage.setItem("leads", JSON.stringify(leads));
  };

  const isDuplicate = (data) => {
    const leads = getStoredLeads();
    return leads.some(
      (lead) =>
        (data.lead_email && lead.email === data.lead_email) ||
        (data.lead_whatsapp && lead.phone === data.lead_whatsapp)
    );
  };

  // --- Final Duplicate Flow: professional-grade duplicate response ---
  const handleDuplicateFlow = () => {
    setSubmissionStatus('success');

    addBotBubble(`⚠️ It looks like this request has already been submitted.

Our team has already received your details and will be in touch with you shortly.

🔒 There is no need to submit again. All discussions remain strictly confidential and aligned with global GMP standards.`);

    // Set end state so no more input is possible
    setCurrentNode({
      id: "duplicate_end",
      end: true
    });
  };

  // --- Lead Data Submission ---
  const submitLeadData = async (data) => {
    // 🚫 Block if already submitted in session
    if (hasSubmitted || submissionStatus === 'sending') return;

    // 🚫 Smart Block: ONLY if specific data is duplicate
    if (isDuplicate(data)) {
      handleDuplicateFlow();
      return;
    }

    setSubmissionStatus('sending');
    console.log('--- SUBMITTING LEAD DATA ---', data);

    try {
      const EMAILJS_SERVICE_ID = 'service_m0eph59';
      const EMAILJS_TEMPLATE_ID = 'template_k8oq4fa';
      const EMAILJS_PUBLIC_KEY = 'qxRy98AZheyqknnZF';

      const templateParams = {
        from_name: data.lead_name || 'New Lead',
        from_email: data.lead_email || 'N/A',
        from_phone: data.lead_whatsapp || 'N/A',
        company: data.lead_company || 'N/A',
        requirement: data.free_explain || 'Detailed consultation requested',
        full_details: Object.entries(data)
          .map(([key, val]) => `${key.toUpperCase().replace(/_/g, ' ')}: ${val}`)
          .join('\n'),
        timestamp: new Date().toLocaleString()
      };

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
        throw new Error(`Failed to send email: ${errText}`);
      }

      // ✅ Lock session & Save to persistent lead list
      setHasSubmitted(true);
      saveLead(data);

      setSubmissionStatus('success');
      console.log('Lead data sent successfully to email!');
    } catch (err) {
      console.error('Error submitting lead data:', err);
      setSubmissionError(err.message || 'Unknown error occurred');
      setSubmissionStatus('error');
    }
  };

  // Trigger submission when arriving at the thank_you node
  useEffect(() => {
    if (currentNode?.id === 'thank_you' && submissionStatus === null) {
      submitLeadData(answers);
    }
  }, [currentNode, answers, submissionStatus]);

  // --- Restart ---
const handleRestart = () => {
  // 🧹 CLEAR EVERYTHING
  setBubbles([]);              // ✅ remove old messages
  setHistory([]);              // ✅ clear navigation history
  setAnswers({});              // ✅ clear collected answers
  setSubmissionStatus(null);   // ✅ reset submission state
  setCurrentNode(null);        // ✅ reset node
  setInputValue('');           // ✅ clear input
  setError('');                // ✅ clear errors
  setIsTyping(false);          // ✅ stop typing animation
  idCounter.current = 0;       // ✅ reset IDs

  // 🚀 Restart fresh
  setTimeout(() => {
    goToNode('start');
  }, 200);
};


  // --- Input placeholder based on field type ---
  const getPlaceholder = () => {
    if (currentNode?.inputField === 'name') return 'Your name (letters only)...';
    if (currentNode?.inputField === 'email') return 'your@email.com';
    if (currentNode?.inputField === 'whatsapp') {
      const expected = selectedCountry.digits;
      const label = Array.isArray(expected) ? expected.join('-') : expected;
      return `${label} digits...`;
    }
    return 'Type your message...';
  };

  const getInputType = () => {
    if (currentNode?.inputField === 'email') return 'email';
    if (currentNode?.inputField === 'whatsapp') return 'tel';
    return 'text';
  };

  const showInput = currentNode?.freeText || currentNode?.inputField;

  return (
    <>
      {/* --- Floating Trigger Button --- */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className={`chatbot-trigger ${open ? 'open' : 'closed'}`}
      >
        {open ? (
          <svg
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            className="trigger-icon"
            style={{ transform: 'rotate(90deg)' }}
          >
            <path d="M18 6L6 18M6 6l12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <div className="trigger-logo-wrapper">
            <Image 
              src="/chatbot-icon.png" 
              alt="Quest Pharma" 
              width={68} 
              height={68} 
              className="trigger-logo"
              priority
            />
          </div>
        )}

        {/* No pulse ring for cleaner look */}
      </button>

      {/* --- Chat Window --- */}
      {open && (
        <div className="chatbot-window">
          {/* --- Header --- */}
          <div className="chatbot-header">
            {/* Pulsing status dot */}
            <div className="status-container">
              <div className="bot-avatar">
                <Image src="/chatbot-icon.png" alt="QUEST Pharma" width={38} height={38} className="header-logo" />
              </div>
              <span className="status-dot" style={{ background: '#22c55e', borderColor: 'rgba(11,13,23,0.95)' }} />
            </div>
            <div className="header-info">
              <p className="bot-name">QUEST Pharma</p>
              <p className="bot-status" style={{ color: 'rgba(34,211,238,0.8)' }}>
                Consulting · Active
              </p>
            </div>
            <div className="header-actions">
              {history.length > 0 && (
                <button onClick={handleBack} title="Go back" className="back-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
              <button onClick={handleRestart} title="Restart conversation" className="restart-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M1 4v6h6M23 20v-6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button onClick={() => setOpen(false)} title="Close chat" className="close-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* --- Messages --- */}
          <div ref={scrollRef} className="messages-container">
            {bubbles.map((b) => (
              <div key={b.id} className={`bubble-row ${b.role}`}>
                <div
                  className="bubble"
                  style={b.role === 'bot' ? {
                    background: 'var(--bot-bubble-bg)',
                    border: '1px solid rgba(123,97,255,0.15)',
                    borderRadius: '4px 16px 16px 16px',
                    color: 'var(--bot-text)',
                  } : {
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    borderRadius: '16px 4px 16px 16px',
                    color: '#fff',
                  }}
                >
                  {b.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="bubble-row bot">
                <div className="typing-indicator">
                  <span className="dot" style={{ animationDelay: '0ms' }} />
                  <span className="dot" style={{ animationDelay: '150ms' }} />
                  <span className="dot" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {/* Submission Status Indicator */}
            {currentNode?.id === 'thank_you' && (
              <div className="submission-status">
                {submissionStatus === 'sending' && (
                  <div className="status-item loading">
                    <span className="mini-spinner" /> Saving lead data...
                  </div>
                )}
                {submissionStatus === 'success' && (
                  <div className="status-item success">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Requirement captured securely
                  </div>
                )}
                {submissionStatus === 'error' && (
                  <div className="status-item error">
                    <span className="error-title">Lead capture failed:</span>
                    <span className="error-detail">{submissionError}</span>
                    <button 
                      onClick={() => submitLeadData(answers)} 
                      className="retry-submission-btn"
                    >
                      Try Submitting Again
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* --- Options (buttons) --- */}
            {currentNode?.options && !isTyping && (
              <div className="options-area">
                <div className="options-container">
                  {currentNode.options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleOption(opt.label, opt.next)}
                      className="option-btn"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {history.length > 0 && (
                  <div className="back-link-container" style={{ justifyContent: 'flex-start', marginTop: '0.5rem' }}>
                    <button onClick={handleBack} className="back-link">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Go back to previous step
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* --- End state: restart option --- */}
            {currentNode?.end && !isTyping && (
              <div className="end-state">
                <button
                  onClick={handleRestart}
                  className="option-btn restart-confirm-btn"
                >
                  ↻ Start over
                </button>
              </div>
            )}
          </div>

          {/* --- Input bar --- */}
          {showInput && !isTyping && (
            <div className="input-bar-container">
              {error && <div className="input-error-msg">{error}</div>}
              {history.length > 0 && (
                <div className="back-link-container">
                  <button onClick={handleBack} className="back-link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Go back & change answer
                  </button>
                </div>
              )}
              <div className="input-bar">
                {currentNode?.inputField === 'whatsapp' && (
                  <div className="custom-country-selector" ref={dropdownRef}>
                    <button
                      type="button"
                      className="selector-button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className="selected-flag">{selectedCountry.flag}</span>
                      <span className="selected-code">{selectedCountry.code}</span>
                      <svg
                        width="10" height="6" viewBox="0 0 10 6" fill="none"
                        style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                      >
                        <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {isDropdownOpen && (
                      <div className="country-dropdown-list">
                        {COUNTRY_CODES.map((c) => (
                          <div
                            key={c.code + c.name}
                            className={`country-option ${selectedCountry.code === c.code && selectedCountry.name === c.name ? 'active' : ''}`}
                            onClick={() => {
                              setSelectedCountry(c);
                              setIsDropdownOpen(false);
                              inputRef.current?.focus();
                            }}
                          >
                            <span className="option-flag">{c.flag}</span>
                            <span className="option-name">{c.name}</span>
                            <span className="option-code">({c.code})</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <input
                  ref={inputRef}
                  type={getInputType()}
                  value={inputValue}
                  onChange={e => {
                    const val = e.target.value;
                    if (currentNode?.inputField === 'whatsapp') {
                      // Allow only digits in phone field
                      setInputValue(val.replace(/\D/g, ''));
                    } else {
                      setInputValue(val);
                    }
                    if (error) setError('');
                  }}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  placeholder={getPlaceholder()}
                  className="chat-input"
                  autoComplete={currentNode?.inputField === 'email' ? 'email' : currentNode?.inputField === 'whatsapp' ? 'tel' : 'off'}
                />
                <button
                  onClick={handleSubmit}
                  disabled={!inputValue.trim()}
                  className="send-btn"
                  style={{
                    background: inputValue.trim()
                      ? 'linear-gradient(135deg, #7B61FF, #5B3DD9)'
                      : 'rgba(123,97,255,0.1)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* --- Branding footer --- */}
          <div className="branding-footer">
            <span className="branding-text">
              Powered by QUEST Pharma Solutions
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
