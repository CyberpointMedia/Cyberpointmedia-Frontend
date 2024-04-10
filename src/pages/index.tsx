
import React from "react";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import VideoPlayer from "@/components/videplayer";
import { fadeIn } from "@/components/variants";
import Image from 'next/image';
import designEngineering from '@/assets/design-engineering.svg';
import devopsIcon from '@/assets/devops-icon.svg';
import OurTechnology from '@/components/ourTechnology';
import AboutImg from '@/assets/about-img.svg';
import LogoBrands from "@/components/logoBrands";
import ClientTestimonials from "@/components/testimonials";
import FAQAccordion from "@/components/faqAccordion";
import Footer from "@/components/footer";
import DragSlider from "@/components/DragSlider";
import ZoomVideoParallax from "@/components/videoParallax";

export default function Page() {
  const videoSrc = '/videos/video.mp4';

    return <div>
      <Header></Header>

      {/* Hero Section Start */}
      <VideoPlayer />
      
      {/* 2nd Section Start */}
      <section className="md:-mt-[60px]">
        <div className="">
        <ZoomVideoParallax videoSrc={videoSrc} />
        {/* <ScrollVideo /> */}
        </div>
      </section>

      {/* service section start */}
      <section className="bg-[#efeae3] py-16">
        <div className="container mx-auto 3xl:container">
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}
          className="text-center">
            <div className="subtitle mb-4 flex mx-auto justify-center items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>03 - Our Services</div>
            <h2 className="lg:text-7xl md:text-5xl text-4xl text-black underline aeonik-trial-font">Explore our services <br />and engagement models</h2>
          </motion.div>
          {/* service box start */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-7">
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white lg:p-12 p-4 shadow-sm">
                <div className="service_icon"><Image src={designEngineering} alt="#" className="lg:w-16 w-8" /></div>
                <h3 className="my-5 lg:text-4xl text-2xl aeonik-trial-font">Design &amp; Engineering</h3>
                <p>Your online business needs to be appealing and functional for excellent user engagement. We bring your concepts to life through MVP Software Development and UI/UX Design.</p>
            </motion.div>

            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white lg:p-12 p-4 shadow-sm">
                <div className="service_icon"><Image src={devopsIcon} alt="#" className="lg:w-16 w-8" /></div>
                <h3 className="my-5 lg:text-4xl text-2xl aeonik-trial-font">Cloud &amp; DevOps</h3>
                <p>Our Cloud Consulting and DevOps services will enhance the agility and scalability of your projects. Harness the power of AWS, Azure and Google Cloud for agile development.</p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white lg:p-12 p-4 shadow-sm">
                <div className="service_icon"><Image src={designEngineering} alt="#" className="lg:w-16 w-8" /></div>
                <h3 className="my-5 lg:text-4xl text-2xl aeonik-trial-font">Digital Marketing</h3>
                <p>Connect with existing and prospective clients through strategic digital marketing solutions. Our tailored strategies, including SEO and SMM, will drive growth and engagement.</p>
            </motion.div>
          </div>
          {/* service box end */}
        </div>
      </section>

      {/* showcase section start */}
      <section className="bg-white py-16">
        <div className="container 3xl:container mx-auto">
          <div className="flex flex-col md:items-center md:justify-between md:flex-row mb-10">
            <motion.h2 className="text-4xl lg:text-[62px] md:text-[30px] md:leading-[32px] text-black lg:w-[812px] md:w-[362px] w-full aeonik-trial-font mb-6 md:mb-0 lg:leading-[65px] leading-[42px]" variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}>Showcase of selected projects and archive</motion.h2>
            <motion.div className=""
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}>
              <div className="flex flex-col lg:flex-row uppercase lg:items-center">
                <p className="md:mr-5 mb-6 md:mb-0">Featuring</p>
                <div className="gap-3 flex items-center text-base md:text-lg">
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">UX-UI</span>
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">Visual Identity</span>
                </div>
              </div>

              <div className="flex uppercase mt-4 justify-end items-center">
                <p className="mr-5">From</p>
                <div className="gap-3 flex items-center text-base md:text-lg">
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">2020</span>
                  <span>To</span>
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">2024</span>
                </div>
              </div>
            </motion.div>
          </div>
          <DragSlider />
        </div>
      </section>

      {/* work with section start */}
      <section className="bg-[#efeae3] py-16">
      <div className="container 3xl:container mx-auto">
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}
          className="flex flex-col items-center justify-between md:flex-row mb-10">
            <h2 className="text-4xl lg:text-[62px] md:text-[30px] md:leading-[32px] text-black lg:w-2/3 md:w-2/4 w-full aeonik-trial-font mb-6 md:mb-0 lg:leading-[65px] leading-[42px]">Tools And Technologies<br /> That We Work With</h2>
            <div className="lg:w-1/3 md:w-2/4 w-full">
               <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>07 - Technologies</div>
               <h2 className="text-[22px] text-black">Our proficiency spans cutting-edge technologies, ensuring the best solutions for your business needs.</h2>
            </div>
          </motion.div>

          {/* our technology work list */}
          <OurTechnology />
        </div>
      </section>

      {/* about section start */}
      <section className="bg-white py-16">
        <div className="container 3xl:container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="md:w-2/4 w-full mb-6 md:mb-0">
              <Image src={AboutImg} alt="About" />
            </motion.div>
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
             className="md:w-2/4 w-full md:ms-32">
              <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>03 - About Us</div>
              <h2 className="text-4xl lg:text-[62px] md:text-[30px] md:leading-[32px] text-black aeonik-trial-font lg:leading-[65px] mb-[30px] leading-[42px]">We’re Your Digital Technological Partners</h2>
              <p className="mb-6">
                Cyberpoint Media helps establish a powerful online presence for your business. We're passionate about transforming ideas into powerful digital solutions. These solutions will elevate your business reputation, build customer trust, drive sales, and help reach new clients.
              </p>
              <p>
                With a focus on innovation and expertise, we specialize in delivering top-tier services in Design & Engineering, Cloud & DevOps, Digital Product Development, and Digital Marketing.
              </p>
              <div className="items-center my-8 flex gap-[30px]">
                  <a href="javasript:void(0);" className="uppercase rounded-full py-[10px] px-5 border border-[#2E2F30] hover:bg-[#FF561D] hover:border-[#FF561D] hover:text-white inline-block transition duration-500">More About Us</a>
                  <a href="javascript:void(0);" className="underline hover:text-[#FF561D] transition duration-300">Get In Touch</a>
              </div>
            </motion.div>
          </div>
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