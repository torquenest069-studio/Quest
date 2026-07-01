import Hero from '../components/Home/Hero';
import FAQ from '../components/Common/FAQ';

export default function Page() {
  const homeFAQs = [
    {
      question: "What core services does QUEST Pharma Solutions provide?",
      answer: "We specialize in global GMP auditing, regulatory inspection readiness, CMO qualification, and pharmaceutical quality system (PQS) assessments."
    },
    {
      question: "Which global regions do your consultancy services cover?",
      answer: "Our network of consultants provides on-site auditing and advisory services worldwide, covering established and emerging markets in Asia, Europe, and the Americas."
    },
    {
      question: "Do you offer end-to-end support for new manufacturing sites?",
      answer: "Yes, we provide lifecycle support—from initial facility design review and equipment qualification to final pre-approval inspection (PAI) readiness."
    },
    {
      question: "How do we begin a new engagement with your team?",
      answer: "Simply use our 'Schedule Consultation' form. We typicaly respond within 24 hours to define project scope, confidentiality agreements (NDAs), and technical timelines."
    }
  ];

  return (
    <>
      <Hero />
      <FAQ 
        questions={homeFAQs}
        title="General Inquiries"
        subtitle="Learn more about how QUEST Pharma Solutions supports global manufacturing compliance."
        background="#ffffff"
      />
    </>
  );
}
