
import React from "react";
import Header from '../components/header';
import VideoPlayer from "@/components/videplayer";
import BackgroundVideo from "@/components/backgroundvideo";
import Image from 'next/image';
import readmoreIcon from '@/assets/read-more-icon.svg';
import VideoComponent from '@/components/homeVideo';
import designEngineering from '@/assets/design-engineering.svg';
import devopsIcon from '@/assets/devops-icon.svg';
import OurTechnology from '@/components/ourTechnology';
import AboutImg from '@/assets/about-img.svg';
import LogoBrands from "@/components/logoBrands";
import ClientTestimonials from "@/components/testimonials";
import FAQAccordion from "@/components/faqAccordion";
import Footer from "@/components/footer";
import DragSlider from "@/components/DragSlider";

export default function Page() {
    return <div>
      <Header></Header>
      <section id="hero_sec" className="bg-white lg:h-screen lg:flex lg:items-center lg:justify-center">
        <div className="container mx-auto 3xl:container relative">
          <div className="absolute md:top-10 xl:top-32 top-20 left-2/4 -translate-x-1/2 -translate-y-1/2 xl:w-[500px] 2xl:w-[600px] lg:w-[390px] md:w-[290px] w-full">
            <BackgroundVideo url="/videos/bg-video.webm" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between hero_content mb-20">
                <div className="hero_left xl:w-[858px] lg:w-[640px] w-full">
                    <h1 className="text-[40px] leading-[50px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[76px] text-black xl:leading-[85px] aeonik-trial-font mb-28 md:mb-0">Transform Your Business With Cyberpoint Media's Digital Excellence</h1>
                </div>
                <div className="">
                  <VideoPlayer/>
                </div>
            </div>
        </div>
        <div className="lg:absolute lg:bottom-0 lg:left-0 w-full">
            <div className="container mx-auto 3xl:container relative">
            <div className="flex flex-col md:flex-row mt-10 justify-between gap-4 h-full">
              <div className="border py-4 lg:px-5 px-4 2xl:w-4/5 md:w-3/4 w-full border-b-0">
                <p className="xl:text-[22px] lg:text-[17px] md:text-[14px] text-[18px] md:leading-5 lg:leading-normal text-[#2E2F30]">
                We are an industry leader in <b className="">Design and Engineering, Digital Product Design and<br className="md:hidden lg:block" /> Development, Digital Marketing,</b> and <b className="">Cloud and DevOps.</b>
                </p>
              </div>
              <div className="border py-4 lg:px-5 px-4 2xl:w-1/5 md:w-1/4 w-full border-b-0">
                <a href="javascript:void(0)" className="text-black xl:text-[22px] lg:text-[17px] md:text-[14px] text-[18px] flex justify-between items-center">
                  <span>Become a Client</span>
                <Image src={readmoreIcon} alt="" className="md:w-6 lg:w-auto" />
                </a>
              </div>
            </div>
            </div>
        </div>
        
      </section>
      <section className="">
        <div className="">
          <VideoComponent />
        </div>
      </section>

      {/* service section start */}
      <section className="bg-[#efeae3] py-16">
        <div className="container mx-auto 3xl:container">
          <div className="text-center">
            <div className="subtitle mb-4 flex mx-auto justify-center items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>03 - Our Services</div>
            <h2 className="lg:text-7xl md:text-5xl text-4xl text-black underline aeonik-trial-font">Explore our services <br />and engagement models</h2>
          </div>
          {/* service box start */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-7">
            <div className="bg-white lg:p-12 p-4 shadow-sm">
                <div className="service_icon"><Image src={designEngineering} alt="#" className="lg:w-16 w-8" /></div>
                <h3 className="my-5 lg:text-4xl text-2xl aeonik-trial-font">Design & Engineering</h3>
                <p>Your online business needs to be appealing and functional for excellent user engagement. We bring your concepts to life through MVP Software Development and UI/UX Design.</p>
            </div>

            <div className="bg-white lg:p-12 p-4 shadow-sm">
                <div className="service_icon"><Image src={devopsIcon} alt="#" className="lg:w-16 w-8" /></div>
                <h3 className="my-5 lg:text-4xl text-2xl aeonik-trial-font">Cloud & DevOps</h3>
                <p>Our Cloud Consulting and DevOps services will enhance the agility and scalability of your projects. Harness the power of AWS, Azure and Google Cloud for agile development.</p>
            </div>

            <div className="bg-white lg:p-12 p-4 shadow-sm">
                <div className="service_icon"><Image src={designEngineering} alt="#" className="lg:w-16 w-8" /></div>
                <h3 className="my-5 lg:text-4xl text-2xl aeonik-trial-font">Digital Marketing</h3>
                <p>Connect with existing and prospective clients through strategic digital marketing solutions. Our tailored strategies, including SEO and SMM, will drive growth and engagement.</p>
            </div>
          </div>
          {/* service box end */}
        </div>
      </section>

      {/* showcase section start */}
      <section className="bg-white py-16">
        <div className="container 3xl:container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row mb-10">
            <h2 className="text-4xl lg:text-[62px] md:text-[30px] md:leading-[32px] text-black lg:w-[812px] md:w-[362px] w-full aeonik-trial-font mb-6 md:mb-0 lg:leading-[65px] leading-[42px]">Showcase of selected projects and archive</h2>
            <div className="">
              <div className="flex flex-col lg:flex-row uppercase lg:items-center">
                <p className="md:mr-5 mb-6 md:mb-0">Featuring</p>
                <div className="gap-3 flex items-center">
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">UX-UI</span>
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">Visual Identity</span>
                </div>
              </div>

              <div className="flex uppercase mt-4 justify-end items-center">
                <p className="mr-5">From</p>
                <div className="gap-3 flex items-center">
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">2020</span>
                  <span>To</span>
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">2024</span>
                </div>
              </div>
            </div>
          </div>
          <DragSlider />
        </div>
      </section>

      {/* work with section start */}
      <section className="bg-[#efeae3] py-16">
      <div className="container 3xl:container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row mb-10">
            <h2 className="text-4xl lg:text-[62px] md:text-[30px] md:leading-[32px] text-black lg:w-2/3 md:w-2/4 w-full aeonik-trial-font mb-6 md:mb-0 lg:leading-[65px] leading-[42px]">Tools And Technologies<br /> That We Work With</h2>
            <div className="lg:w-1/3 md:w-2/4 w-full">
               <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>07 - Technologies</div>
               <h2 className="text-[22px] text-black">Our proficiency spans cutting-edge technologies, ensuring the best solutions for your business needs.</h2>
            </div>
          </div>

          {/* our technology work list */}
          <OurTechnology />
        </div>
      </section>

      {/* about section start */}
      <section className="bg-white py-16">
        <div className="container 3xl:container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="md:w-2/4 w-full mb-6 md:mb-0">
              <Image src={AboutImg} alt="About" />
            </div>
            <div className="md:w-2/4 w-full md:ms-32">
              <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>03 - About Us</div>
              <h2 className="text-4xl lg:text-[62px] md:text-[30px] md:leading-[32px] text-black aeonik-trial-font lg:leading-[65px] mb-[30px] leading-[42px]">We’re Your Digital Technological Partners</h2>
              <p className="mb-6">
                Cyberpoint Media helps establish a powerful online presence for your business. We're passionate about transforming ideas into powerful digital solutions. These solutions will elevate your business reputation, build customer trust, drive sales, and help reach new clients.
              </p>
              <p>
                With a focus on innovation and expertise, we specialize in delivering top-tier services in Design & Engineering, Cloud & DevOps, Digital Product Development, and Digital Marketing.
              </p>
              <div className="items-center my-8">
                  <a href="javasript:void(0);" className="uppercase rounded-full py-2 px-5 border border-[#2E2F30] me-4">More About Us</a>
                  <a href="javascript:void(0);" className="underline">Get In Touch</a>
              </div>
            </div>
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