import About from '../../components/Home/About';
import FAQ from '../../components/Common/FAQ';

export default function Page() {
  const aboutFAQs = [
    {
      question: "How long has QUEST Pharma Solutions been in operation?",
      answer: "Our team brings together experts with over a decade of hands-on experience in global pharmaceutical quality and regulatory compliance."
    },
    {
      question: "What scale of pharmaceutical manufacturers do you work with?",
      answer: "We partner with a diverse range of clients, from emerging biotech startups to large-scale Fortune 500 global pharmaceutical leaders."
    },
    {
      question: "Are your consultants former regulatory inspectors?",
      answer: "Yes, many members of our elite consulting team are former US FDA, EU GMP, or national regulatory body inspectors with deep tactical knowledge."
    },
    {
      question: "Do you provide on-site training for manufacturing plant staff?",
      answer: "Absolutely. We provide specialized, GxP-compliant training programs for site personnel to build a sustainable quality culture within the organization."
    }
  ];

  return (
    <>
      <About />
      <FAQ 
        questions={aboutFAQs}
        title="About Our Consultancy"
        subtitle="Insights into our industry standing and commitment to pharmaceutical quality excellence."
        background="#ffffff"
      />
    </>
  );
}
