import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "Will you provide the problem statement?",
    answer: "Yes, we will provide the problem statement during the hackathon."
  },
  {
    question: "Do participants need to carry a laptop?",
    answer: "Yes, all participants should carry their own laptops."
  },
  {
    question: "Can we form a team with students from other departments or years?",
    answer: "Yes, teams can include students from different departments and different academic years."
  },
  {
    question: "How will the initial assessment be conducted?",
    answer:
      "There will be a coding assessment. Team members can discuss the coding problem and write the solution. Based on the scores, teams will be shortlisted."
  },
  {
    question: "Will food be provided?",
    answer: "Yes, food will be provided."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-heading">FAQ</h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;