import FAQAccordion from '@/components/accordionItems';

const FaqPage = () => {
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
            <div className="max-w-5xl mx-auto px-6">
               <div className="subtitle mb-4"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>08 — FAQ</div>
               <h2 className="text-5xl text-black mb-6">Frequently Asked Questions</h2>
                <FAQAccordion faqs={faqs} />
            </div>
      </section>
    </div>
  );
};

export default FaqPage;
