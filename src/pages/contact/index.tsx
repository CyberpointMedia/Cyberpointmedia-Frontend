
import React from "react";
import Header from '../header';
import Image from 'next/image';
import LogoBrands from "@/components/logoBrands";
import ClientTestimonials from "@/components/testimonials";
import FAQAccordion from "@/components/faqAccordion";
import Footer from "@/pages/footer";

export default function Index() {
    return <div>
      <Header></Header>

    {/* contact form start */}
    <section>
        <div className="container">
            <h1>Contact Page</h1>
        </div>
    </section>

                
      {/* client testimonials section start */}
      <ClientTestimonials />

      {/* company logos section start */}
      <LogoBrands />

      {/* faq section start */}
      <FAQAccordion />

      {/* footer section start */}
      <Footer />
    </div>
  }