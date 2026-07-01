const fs = require('fs');
const filePath = 'c:/Users/Akash/Desktop/Quest/Quest/src/components/Common/ChatBot/ChatBot.css';
let content = fs.readFileSync(filePath, 'utf8');

// Replace chatbot-trigger with new final production styles
const newTriggerBase = `.chatbot-trigger {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  overflow: hidden;

  /* Clean modern base */
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 🌈 Soft Pharma Neon Glow (Closed State) */
.chatbot-trigger.closed {
  box-shadow:
    0 0 8px rgba(59, 130, 246, 0.6),
    0 0 18px rgba(147, 51, 234, 0.5),
    0 8px 20px rgba(0, 0, 0, 0.25);
}

/* 🔥 Glow boost on hover */
.chatbot-trigger:hover {
  transform: scale(1.08) translateY(-4px);
  box-shadow:
    0 0 12px rgba(59, 130, 246, 0.8),
    0 0 25px rgba(147, 51, 234, 0.7),
    0 10px 25px rgba(0, 0, 0, 0.3);
}

.chatbot-trigger.open {
  background: linear-gradient(135deg, #7B61FF, #5B3DD9);
  box-shadow: 0 8px 24px rgba(123, 97, 255, 0.4);
}`;

content = content.replace(/\.chatbot-trigger\s*\{[\s\S]*?\.chatbot-trigger\.open\s*\{[\s\S]*?\}/, newTriggerBase);

const newTriggerLogo = `.trigger-logo {
  width: 100%;
  height: 100%;
  
  /* 🔥 CRITICAL FOR PERFECT FIT */
  object-fit: cover;
  
  /* Remove any inner spacing feel */
  transform: scale(1.05);
  
  border-radius: 50%;
  
  /* Extra sharpness */
  image-rendering: crisp-edges;
  display: block;
}`;

content = content.replace(/\.trigger-logo\s*\{[\s\S]*?\}/, newTriggerLogo);

// Extra adjustment for the pulse which should only be in open state
const newBeforePulse = `.chatbot-trigger.open::before {
  content: "";
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(123,97,255,0.4), transparent 70%);
  animation: pulseRing 2.5s infinite;
}`;
content = content.replace(/\.chatbot-trigger\.open::before\s*\{[\s\S]*?\}/, newBeforePulse);

fs.writeFileSync(filePath, content);
console.log('Successfully applied FINAL PRODUCTION CSS to ChatBot.css');
