import Leadership from '../../components/Home/Leadership';
import FAQ from '../../components/Common/FAQ';

export default function Page() {
  const leadershipFAQs = [
    {
      question: "How is a typical auditing project overseen?",
      answer: "Every client engagement is managed by a senior technical lead who directs the strategy and ensures all deliverables meet our rigorous quality benchmarks."
    },
    {
      question: "What is the collective background of your leadership team?",
      answer: "Our leaders are veterans of top-tier pharmaceutical organizations, having held key director roles in Quality Control (QC), Quality Assurance (QA), and Manufacturing Operation."
    },
    {
      question: "Do your project leaders participate in audit executions?",
      answer: "For complex mock-inspections or critical due-diligence projects, our leadership team actively participates on-site to provide authoritative, inspection-ready guidance."
    },
    {
      question: "How do you ensure audit consistency across diverse sites?",
      answer: "By utilizing the QUEST Unified Audit Platform (QUAP), a standardized set of protocols and reports that guarantees a baseline of high-quality inspection outputs globaly."
    }
  ];

  return (
    <>
      <Leadership />
      <FAQ 
        questions={leadershipFAQs}
        title="Leadership & Management Insights"
        subtitle="Exploring our team's operational excellence and elite consultancy standards."
        background="#ffffff"
      />
    </>
  );
}
