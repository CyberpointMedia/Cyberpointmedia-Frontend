import React, { useState } from 'react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Are you a full-service digital product development company?",
      answer: "Yes. We cover the whole life-cycle of a digital product, from digital product design services to testing, launch and post-launch evaluation.",
    },
    
    {
      question: "What are the stages of developing a digital product?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    {
      question: "What are the stages of developing a digital product?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    {
      question: "What are the stages of developing a digital product?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    {
      question: "What are the stages of developing a digital product?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    {
      question: "What are the stages of developing a digital product?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },

    {
      question: "What are the stages of developing a digital product?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <section className="bg-[#efeae3] py-16">
            <div className="max-w-[1190px] mx-auto px-6">
               <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>08 — FAQ</div>
               <h2 className="text-4xl md:text-[62px] text-black aeonik-trial-font mb-10 md:leading-[65px] leading-[42px]">Frequently Asked Questions</h2>
                {/* <FAQAccordion faqs={faqs} /> */}
                <div className="faq-accordion"> 
                  {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item border-b border-[#DAD2C7] mb-4 pb-4 ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                      <div className="question text-[22px] font-normal text-[#2C2D36] aeonik-trial-font">{faq.question}</div>
                      <div className="answer text-[22px] text-[#878787] font-normal">{activeIndex === index && <p>{faq.answer}</p>}</div>
                    </div>
                  ))}
                </div>
            </div>
      </section>
    </div>
  );
};

export default FAQAccordion;
