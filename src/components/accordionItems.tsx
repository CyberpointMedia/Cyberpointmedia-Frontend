import React, { useState } from 'react';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item border-b border-[#DAD2C7] mb-6 pb-6 ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
          <div className="question text-xl font-normal text-[#2C2D36]">{faq.question}</div>
          <div className="answer text-xl text-[#878787] font-normal">{activeIndex === index && <p>{faq.answer}</p>}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
