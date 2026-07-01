import GlobalCompliance from '../../components/Home/GlobalCompliance';
import FAQ from '../../components/Common/FAQ';

export default function Page() {
  const complianceFAQs = [
    {
      question: "Which global regulatory standards do you prioritize for audits?",
      answer: "We prioritize current US FDA (211/212), EU GMP (Annex 1-20), WHO, ICH Q7, and local national regulatory GxP standards."
    },
    {
      question: "How do you stay abreast of shifting global guidelines?",
      answer: "By active engagement with regulatory body publications, participation in industry forums, and close monitoring of FDA Guidance for Industry releases."
    },
    {
      question: "Can your team assist with Warning Letter or 483 remediation?",
      answer: "Yes, we specialize in high-stakes remediation strategies, CAPA management, and regulatory response drafting to address critical observations."
    },
    {
      question: "What is your approach to Data Integrity auditing?",
      answer: "We use a rigorous ALCOA+ based approach to ensure data remains Attributable, Legible, Contemporaneous, Original, and Accurate across all systems."
    }
  ];

  return (
    <>
      <GlobalCompliance />
      <FAQ 
        questions={complianceFAQs}
        title="Compliance & Regulatory FAQs"
        subtitle="Detailed insights into our global regulatory knowledge and technical auditing focus."
        background="#fcfdfe"
      />
    </>
  );
}
