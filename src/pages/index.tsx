
import React from "react";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from './header';
import VideoPlayer from "@/components/VideoPlayer";
import { fadeIn } from "@/components/AnimationVariants";
import Image from 'next/image';
import designEngineering from '@/assets/design-engineering.svg';
import devopsIcon from '@/assets/devops-icon.svg';
import OurTechnology from '@/components/OurTechnology';
import AboutImg from '@/assets/about-img.svg';
import LogoBrands from "@/components/LogoBrands";
import ClientTestimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FaqAccordion";
import Footer from "@/pages/footer";
import DragSlider from "@/components/DragSlider";

export default function Index() {
  const videoSrc = '/videos/video.mp4';

    return <div>
      <Header></Header>

      {/* Hero Section Start */}
      <VideoPlayer />
      
      {/* 2nd Section Start */}
      <section className="lg:-mt-[60px] lg:block hidden h-70vh bg-[#efeae3]"></section>

      {/* service section start */}
      <section className="section bg-[#efeae3] pt-12 pb-16">
        <div className="container mx-auto 3xl:container">
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}
          className="text-center">
            <div className="subtitle mb-4 flex mx-auto justify-center items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>03 - Our Services</div>
            <h2 className="lg:text-7xl md:text-5xl text-4xl text-black underline font-aeonik">Explore our services <br />and engagement models</h2>
          </motion.div>
          {/* service box start */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-7">
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 2xl:p-12 xl:p-8 p-4 shadow-sm card-hover border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">
                    <svg className="lg:w-16 w-8" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path d="M77.9049 42.5675L30.4049 26.3175C30.1851 26.2422 29.9486 26.2296 29.7221 26.2812C29.4955 26.3328 29.2878 26.4464 29.1223 26.6095C28.9568 26.7726 28.84 26.9785 28.785 27.2043C28.73 27.43 28.7391 27.6666 28.8111 27.8875L45.0611 77.8876C45.1401 78.1298 45.2913 78.3421 45.4944 78.4961C45.6975 78.65 45.9428 78.7382 46.1974 78.7488H46.2499C46.4959 78.7489 46.7366 78.6763 46.9416 78.5402C47.1466 78.4042 47.3069 78.2106 47.4024 77.9838L57.2161 54.675L78.0324 44.88C78.2577 44.7743 78.4463 44.6037 78.574 44.3901C78.7018 44.1765 78.7629 43.9296 78.7494 43.6811C78.736 43.4325 78.6487 43.1937 78.4987 42.9951C78.3486 42.7965 78.1427 42.6472 77.9074 42.5663L77.9049 42.5675ZM46.4049 73.9213L32.7974 32.065L54.7711 54.04L46.4049 73.9213ZM56.5124 52.25L34.6949 30.4275L74.1736 43.9275L56.5124 52.25Z" fill="#FF561D" stroke="#FF561D"/>
                      <path d="M34.3584 56.5102C34.5496 57.6731 33.7618 58.7791 32.588 58.8843C27.3285 59.3556 22.025 58.3826 17.2572 56.0504C11.8487 53.4048 7.39782 49.1414 4.52199 43.8517C1.64615 38.5621 0.488004 32.5085 1.20824 26.5309C1.92848 20.5533 4.49138 14.9481 8.54136 10.4929C12.5913 6.03776 17.9276 2.95362 23.8096 1.6684C29.6917 0.383187 35.828 0.960626 41.367 3.3206C46.9061 5.68057 51.5733 9.70606 54.721 14.8385C57.4959 19.363 58.9687 24.55 58.9995 29.8305C59.0064 31.009 57.9803 31.8983 56.8045 31.8186C55.6287 31.7388 54.7498 30.7198 54.728 29.5414C54.6465 25.1466 53.3945 20.8387 51.083 17.0698C48.3985 12.6926 44.4181 9.25953 39.6942 7.24686C34.9703 5.23419 29.7371 4.74173 24.7206 5.8378C19.7042 6.93388 15.1533 9.56415 11.6993 13.3637C8.24534 17.1632 6.0596 21.9435 5.44536 27.0414C4.83112 32.1394 5.81882 37.3021 8.27144 41.8133C10.7241 46.3244 14.52 49.9604 19.1325 52.2167C23.1041 54.1594 27.5115 54.9963 31.8942 54.6596C33.0692 54.5693 34.1672 55.3473 34.3584 56.5102Z" fill="#484848"/>
                    </svg>

                </div>
                <h3 className="my-5 2xl:text-4xl lg:text-3xl text-2xl font-aeonik duration-300 transition"><a href="javascript:void(0);">Design &amp; Engineering</a></h3>
                <p className="line-clamp-3 2xl:line-clamp-4">Your online business needs to be appealing and functional for excellent user engagement. We bring your concepts to life through MVP Software Development and UI/UX Design.</p>
            </motion.div>

            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 2xl:p-12 xl:p-8 p-4 shadow-sm card-hover border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">
                    <svg className="lg:w-16 w-8" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <path d="M35.985 15.05L36.7675 14.2675C37.0063 14.0369 37.1967 13.761 37.3278 13.456C37.4588 13.151 37.5277 12.823 37.5306 12.491C37.5335 12.1591 37.4703 11.8299 37.3446 11.5226C37.2189 11.2154 37.0332 10.9362 36.7985 10.7015C36.5638 10.4668 36.2846 10.2812 35.9774 10.1554C35.6701 10.0297 35.3409 9.96649 35.009 9.96938C34.677 9.97226 34.349 10.0412 34.044 10.1723C33.739 10.3033 33.4631 10.4937 33.2325 10.7325L28.2325 15.7325C27.7638 16.2013 27.5005 16.8371 27.5005 17.5C27.5005 18.1629 27.7638 18.7987 28.2325 19.2675L33.2325 24.2675C33.704 24.7229 34.3355 24.9749 34.991 24.9692C35.6465 24.9635 36.2735 24.7006 36.737 24.2371C37.2006 23.7735 37.4635 23.1465 37.4692 22.491C37.4749 21.8355 37.2229 21.204 36.7675 20.7325L36.09 20.055C41.9577 20.3318 47.4841 22.8939 51.487 27.1932C55.4898 31.4926 57.6512 37.1876 57.5088 43.0602C57.3664 48.9327 54.9315 54.5163 50.7249 58.6165C46.5184 62.7167 40.8742 65.008 35 65H7.5C6.83696 65 6.20107 65.2634 5.73223 65.7322C5.26339 66.2011 5 66.837 5 67.5C5 68.163 5.26339 68.7989 5.73223 69.2678C6.20107 69.7366 6.83696 70 7.5 70H35C42.2174 70.0212 49.1536 67.2023 54.31 62.1523C59.4665 57.1023 62.4294 50.2265 62.5588 43.0102C62.6881 35.7939 59.9735 28.8163 55.0014 23.5847C50.0292 18.3531 43.1986 15.2875 35.985 15.05Z" fill="#444555"/>
                      <path d="M74.2675 65.7325L69.2675 60.7325C68.796 60.2771 68.1645 60.0251 67.509 60.0308C66.8535 60.0365 66.2265 60.2994 65.763 60.763C65.2994 61.2265 65.0365 61.8535 65.0308 62.509C65.0251 63.1645 65.2771 63.796 65.7325 64.2675L66.465 65H57.5C56.837 65 56.2011 65.2634 55.7322 65.7322C55.2634 66.2011 55 66.837 55 67.5C55 68.1631 55.2634 68.7989 55.7322 69.2678C56.2011 69.7366 56.837 70 57.5 70H66.465L65.7325 70.7325C65.4937 70.9631 65.3033 71.239 65.1722 71.544C65.0412 71.849 64.9723 72.1771 64.9694 72.509C64.9665 72.841 65.0297 73.1702 65.1554 73.4774C65.2811 73.7846 65.4668 74.0638 65.7015 74.2985C65.9362 74.5332 66.2154 74.7189 66.5226 74.8446C66.8299 74.9703 67.1591 75.0335 67.491 75.0306C67.823 75.0278 68.151 74.9588 68.456 74.8278C68.761 74.6967 69.0369 74.5063 69.2675 74.2675L74.2675 69.2675C74.7362 68.7987 74.9995 68.1629 74.9995 67.5C74.9995 66.8371 74.7362 66.2013 74.2675 65.7325Z" fill="#FF561D"/>
                      <path d="M21.2501 18.7075C17.0741 21.1205 13.6058 24.5887 11.1925 28.7645C8.77925 32.9403 7.50591 37.677 7.50007 42.5C7.48663 48.4568 9.42849 54.2534 13.0276 59C13.2604 59.3105 13.5624 59.5625 13.9095 59.7361C14.2567 59.9096 14.6395 60 15.0276 60C15.4918 60 15.947 59.8707 16.3419 59.6266C16.7368 59.3825 17.056 59.0333 17.2636 58.618C17.4713 58.2028 17.5592 57.7379 17.5175 57.2755C17.4758 56.8131 17.3061 56.3714 17.0276 56C14.0804 52.1174 12.4897 47.3745 12.5001 42.5C12.505 38.5552 13.547 34.681 15.5215 31.2659C17.496 27.8508 20.3338 25.0149 23.7501 23.0425C24.3249 22.711 24.7445 22.1647 24.9166 21.5238C25.0887 20.8829 24.9991 20.1999 24.6676 19.625C24.336 19.0502 23.7897 18.6305 23.1488 18.4585C22.5079 18.2864 21.8249 18.376 21.2501 18.7075Z" fill="#FF561D"/>
                    </svg>
                </div>
                <h3 className="my-5 2xl:text-4xl lg:text-3xl text-2xl font-aeonik"><a href="javascript:void(0);">Cloud &amp; DevOps</a></h3>
                <p className="line-clamp-3 2xl:line-clamp-4">Our Cloud Consulting and DevOps services will enhance the agility and scalability of your projects. Harness the power of AWS, Azure and Google Cloud for agile development.</p>
            </motion.div>

            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="bg-white 2xl:p-12 xl:p-8 p-4 shadow-sm card-hover border-t-8 border-white duration-500 transition hover:border-[#FF561D]">
                <div className="service_icon">
                  <svg className="lg:w-16 w-8" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d="M54.6933 64H50.3466C49.04 64 48 62.96 48 61.7067V41.3333H54.7466C54.6133 40.4533 54.64 39.5733 54.7466 38.6667H48V18.2933C48 17.04 49.04 16 50.3466 16H54.6933C54.6133 15.12 54.6933 14.16 54.88 13.3333H50.3466C47.5733 13.3333 45.3333 15.5467 45.3333 18.2933V38.6667H41.3333V24C41.3333 23.12 40.4 22.4 39.5466 22.7467L21.0133 29.3333H14.88C9.59997 29.3333 5.30664 33.52 5.30664 38.6667C5.30664 43.8133 9.46664 47.84 14.64 47.9733V57.3333C14.64 58.08 15.2266 58.6667 15.9733 58.6667H21.3066C22.0533 58.6667 22.64 58.08 22.64 57.3333V48.56L39.52 54.5867C40.3466 54.9067 41.3333 54.24 41.3066 53.3333V41.3333H45.3066V61.7067C45.3066 64.4533 47.5466 66.6667 50.32 66.6667H54.8533C54.72 65.84 54.6133 64.9333 54.6933 64ZM20 56H17.3333V48H20V56ZM20 45.3333H14.9066C11.0933 45.3333 7.99997 42.3467 7.99997 38.6667C7.99997 34.9867 11.0933 32 14.9066 32H20V45.3333ZM32 49.0667L22.6666 45.7333V31.6L32 28.2667V49.0667ZM38.6666 51.44L34.6666 50V27.3067L38.6666 25.8933V51.44Z" fill="#444555"/>
                    <path d="M64.6665 10C66.5065 10 67.9998 11.4933 67.9998 13.3333C67.9998 15.1733 66.5065 16.6667 64.6665 16.6667C62.8265 16.6667 61.3332 15.1733 61.3332 13.3333C61.3332 11.4933 62.8265 10 64.6665 10ZM64.6665 5.33333C59.1465 5.33333 54.6665 9.81333 54.6665 15.3333C54.6665 20.8533 59.1465 25.3333 64.6665 25.3333C70.1865 25.3333 74.6665 20.8533 74.6665 15.3333C74.6665 9.81333 70.1865 5.33333 64.6665 5.33333ZM69.1465 21.12C68.3732 19.7067 66.6132 18.6933 64.5598 18.6933C62.5065 18.6933 60.8532 19.6267 60.0532 20.9867C58.3998 19.6533 57.3332 17.6267 57.3332 15.3333C57.3332 11.28 60.6132 7.99999 64.6665 7.99999C68.7198 7.99999 71.9998 11.28 71.9998 15.3333C71.9998 17.68 70.8532 19.76 69.1465 21.12ZM64.6665 34.6667C66.5065 34.6667 67.9998 36.16 67.9998 38C67.9998 39.84 66.5065 41.3333 64.6665 41.3333C62.8265 41.3333 61.3332 39.84 61.3332 38C61.3332 36.16 62.8265 34.6667 64.6665 34.6667ZM64.6665 30C59.1465 30 54.6665 34.48 54.6665 40C54.6665 45.52 59.1465 50 64.6665 50C70.1865 50 74.6665 45.52 74.6665 40C74.6665 34.48 70.1865 30 64.6665 30ZM69.1465 45.7867C68.3732 44.3733 66.6132 43.36 64.5598 43.36C62.5065 43.36 60.8532 44.2933 60.0532 45.6533C58.3998 44.32 57.3332 42.2933 57.3332 40C57.3332 35.9467 60.6132 32.6667 64.6665 32.6667C68.7198 32.6667 71.9998 35.9467 71.9998 40C71.9998 42.3467 70.8532 44.4267 69.1465 45.7867ZM64.6665 59.3333C66.5065 59.3333 67.9998 60.8267 67.9998 62.6667C67.9998 64.5067 66.5065 66 64.6665 66C62.8265 66 61.3332 64.5067 61.3332 62.6667C61.3332 60.8267 62.8265 59.3333 64.6665 59.3333ZM64.6665 54.6667C59.1465 54.6667 54.6665 59.1467 54.6665 64.6667C54.6665 70.1867 59.1465 74.6667 64.6665 74.6667C70.1865 74.6667 74.6665 70.1867 74.6665 64.6667C74.6665 59.1467 70.1865 54.6667 64.6665 54.6667ZM69.1465 70.4533C68.3732 69.04 66.6132 68.0267 64.5598 68.0267C62.5065 68.0267 60.8532 68.96 60.0532 70.32C58.3998 68.9867 57.3332 66.96 57.3332 64.6667C57.3332 60.6133 60.6132 57.3333 64.6665 57.3333C68.7198 57.3333 71.9998 60.6133 71.9998 64.6667C71.9998 67.0133 70.8532 69.0933 69.1465 70.4533Z" fill="#FF561D"/>
                  </svg>
                </div>
                <h3 className="my-5 2xl:text-4xl lg:text-3xl text-2xl font-aeonik"><a href="javascript:void(0);">Digital Marketing</a></h3>
                <p className="line-clamp-3 2xl:line-clamp-4">Connect with existing and prospective clients through strategic digital marketing solutions. Our tailored strategies, including SEO and SMM, will drive growth and engagement.</p>
            </motion.div>
          </div>
          {/* service box end */}
        </div>
      </section>

      {/* showcase section start */}
      <section className="section bg-white pt-16">
        <div className="container 3xl:container mx-auto">
          <div className="flex flex-col md:items-center md:justify-between md:flex-row pb-10">
            <motion.h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black xl:w-[720px] lg:w-[560px] md:w-[362px] w-full font-aeonik mb-6 md:mb-0 lg:leading-[65px] leading-[42px]" variants={fadeIn("up", 0.1)}
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

              <div className="flex uppercase mt-4 lg:justify-end items-center">
                <p className="mr-5">From</p>
                <div className="gap-3 flex items-center text-base md:text-lg">
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">2020</span>
                  <span>To</span>
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">2024</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white min-h">
          <div className="container 3xl:container mx-auto">
              <DragSlider />
          </div>
      </section>

      {/* work with section start */}
      <section className="section bg-[#efeae3] py-16 min-h">
      <div className="container 3xl:container mx-auto">
          <motion.div 
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true, amount: 0.1}}
          className="flex flex-col items-center justify-between md:flex-row mb-5 3xl:mb-10">
            <h2 className="text-4xl lg:text-[48px] 3xl:text-[62px] xl:text-[56px] md:text-[30px] md:leading-[32px] text-black lg:w-2/3 md:w-2/4 w-full font-aeonik mb-6 md:mb-0 lg:leading-[65px] leading-[42px]">Tools And Technologies<br /> That We Work With</h2>
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
      <section className="section bg-white py-16 min-h">
        <div className="container 3xl:container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="md:w-2/4 w-full mb-6 md:mb-0">
              <Image src={AboutImg} alt="About" loading="lazy" />
            </motion.div>
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
             className="md:w-2/4 w-full 2xl:ms-32 xl:ms-24 lg:ms-16 md:ms-12">
              <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>03 - About Us</div>
              <h2 className="text-4xl 3xl:text-[62px] xl:text-[56px] lg:text-[48px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-[30px] leading-[42px]">We’re Your Digital Technological Partners</h2>
              <p className="mb-6">
                Cyberpoint Media helps establish a powerful online presence for your business. We're passionate about transforming ideas into powerful digital solutions. These solutions will elevate your business reputation, build customer trust, drive sales, and help reach new clients.
              </p>
              <p>
                With a focus on innovation and expertise, we specialize in delivering top-tier services in Design & Engineering, Cloud & DevOps, Digital Product Development, and Digital Marketing.
              </p>
              <div className="items-center my-8 flex flex-col sm:flex-row sm:gap-[30px] gap-5">
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