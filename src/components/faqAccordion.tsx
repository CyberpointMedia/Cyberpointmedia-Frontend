import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "@/components/AnimationVariants";

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
      answer: "A digital product development process involves five stages. These stages are research and ideation, project planning, prototype design, development and testing, and launch.",
    },

    {
      question: "What sets you apart from other digital product development services?",
      answer: "We focus on innovation, personalized solutions, and results-driven approaches to create your digital products. Besides, we employ cutting-edge technology that elevates your brand uniquely.",
    },

    {
      question: "How do you get digital product ideas?",
      answer: "As a leading digital product company, our focus is on solving our client's pain points. In this regard, our digital product ideas are inspired by the problem we are trying to solve with this product. We also look up trends on social media and draw inspiration from competing solutions.",
    },

    {
      question: "What is a digital product development agency?",
      answer: "It is a company that specializes in the strategy, planning, designing, and creating digital products like websites, apps, and software. It is also referred to as a digital product engineering company or digital product design company.",
    },

    {
      question: "Can I hire a digital product company to design my mobile application?",
      answer: "Sure. Designing a mobile application is within the project scope of digital product engineering services.",
    },

    {
      question: "How long do you take to develop a mobile app?",
      answer: "The timeline for mobile app development varies depending on the project. To give you an estimate, we would need your project's scope and complexity. At Cyberpoint Media, we prioritize quality but still aim for efficient delivery.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <section className="section bg-[#efeae3] py-16 2xl:py-16 xl:pt-8 min-h">
            <div className="xl:max-w-[1190px] mx-auto container">
              <motion.div 
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount: 0.1}}
              className=''>
                <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>08 — FAQ</div>
                <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] text-black font-aeonik 2xl:mb-10 xl:mb-5 mb-10 md:leading-[65px] leading-[42px]">Frequently Asked Questions</h2>
              </motion.div>
                {/* <FAQAccordion faqs={faqs} /> */}
                <div className="faq-accordion"> 
                  {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item border-b border-[#DAD2C7] mb-4 pb-4 ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                      <div className="question text-[22px] font-normal text-[#2C2D36] font-aeonik">{faq.question}</div>
                      <div className="answer text-[22px] text-[#878787] font-normal">{activeIndex === index && <p>{faq.answer}</p>}</div>
                    </div>
                  ))}
                </div>
            </div>
      </section>
  );
};

export default FAQAccordion;
