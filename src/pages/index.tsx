
import React from "react";
import Header from '../components/header';
import VideoPlayer from "@/components/videplayer";
import BackgroundVideo from "@/components/backgroundvideo";
import Image from 'next/image';
import readmoreIcon from '@/assets/read-more-icon.svg';
import VideoComponent from '@/components/homeVideo';
import AnimatedVideo from "@/components/heroVideo";
import designEngineering from '@/assets/design-engineering.svg';
import devopsIcon from '@/assets/devops-icon.svg';
import DraggableSlider from '@/components/draggableSlider';
import OurTechnology from '@/components/ourTechnology';
import AboutImg from '@/assets/about-img.svg';
import LogoBrands from "@/components/logoBrands";
import ClientTestimonials from "@/components/testimonials";
import FaqPage from "@/components/faqAccordion";
import Footer from "@/components/footer";

export default function Page() {
    return <div>
      <Header></Header>
      <section id="hero_sec" className="pt-48 bg-white">
        <div className="container mx-auto px-6 relative">
          <div className="hero_bg_Video">
            <BackgroundVideo videoSource="/videos/bg-video.webm" />
          </div>
            <div className="flex flex-col md:flex-row items-center justify-between hero_content">
                <div className="hero_left max-w-4xl w-full">
                    <h1 className="font-normal text-[40px] md:text-[76px] text-black leading-[85px]">Transform Your Business 
With Cyberpoint Media's 
Digital Excellence</h1>
                </div>
                <div className="">
                  <VideoPlayer/>
                  {/* <AnimatedVideo
                      videoSrc="/videos/video.mp4"
                      translateX={100} // Adjust translation values as needed
                      translateY={50}
                      scale={1.2}
                  /> */}
                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-10 items-center justify-between gap-4">
              <div className="border py-3 px-5 w-5/6 border-b-0">
                <p>
                We are an industry leader in Design and Engineering, Digital Product Design and<br /> Development, Digital Marketing, and Cloud and DevOps.
                </p>
              </div>
              <div className="border py-3 px-5 w-2/12 border-b-0">
                <a href="javascript:void(0)" className="text-black">Become a Client
                <Image src={readmoreIcon} alt="" className="inline-block ms-3" />
                </a>
              </div>
            </div>
        </div>
        <div className="">
          <VideoComponent />
        </div>
      </section>

      {/* service section start */}
      <section className="bg-[#efeae3] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-screen-md text-center mx-auto">
            <div className="subtitle mb-4"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>03 - Our Services</div>
            <h2 className="md:text-6xl text-4xl text-black underline">Explore our services <br />and engagement models</h2>
          </div>
          {/* service box start */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-7">
            <div className="bg-white py-8 px-8 shadow-sm">
                <div className="service_icon"><Image src={designEngineering} alt="#" className="w-16" /></div>
                <h3 className="my-5 font-normal text-4xl aeonik-font">Design & Engineering</h3>
                <p>Your online business needs to be appealing and functional for excellent user engagement. We bring your concepts to life through MVP Software Development and UI/UX Design.</p>
            </div>

            <div className="bg-white py-8 px-8 shadow-sm">
                <div className="service_icon"><Image src={devopsIcon} alt="#" className="w-16" /></div>
                <h3 className="my-5 font-normal text-4xl aeonik-font">Cloud & DevOps</h3>
                <p>Our Cloud Consulting and DevOps services will enhance the agility and scalability of your projects. Harness the power of AWS, Azure and Google Cloud for agile development.</p>
            </div>

            <div className="bg-white py-8 px-8 shadow-sm">
                <div className="service_icon"><Image src={designEngineering} alt="#" className="w-16" /></div>
                <h3 className="my-5 font-normal text-4xl aeonik-font">Digital Marketing</h3>
                <p>Connect with existing and prospective clients through strategic digital marketing solutions. Our tailored strategies, including SEO and SMM, will drive growth and engagement.</p>
            </div>
          </div>
          {/* service box end */}
        </div>
      </section>

      {/* showcase section start */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between md:flex-row mb-10">
            <h2 className="text-5xl text-black w-2/5">Showcase of selected projects and archive</h2>
            <div className="">
              <div className="flex uppercase items-center">
                <p className="mr-5">Featuring</p>
                <div className="gap-3 flex items-center">
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">UX-UI</span>
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">Visual Identity</span>
                </div>
              </div>

              <div className="flex uppercase mt-3 justify-end items-center">
                <p className="mr-5">From</p>
                <div className="gap-3 flex items-center">
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">2020</span>
                  <span>To</span>
                  <span className="py-1 px-3 rounded-full bg-[#EFEAE3]">2024</span>
                </div>
              </div>
            </div>
          </div>

          <DraggableSlider />
        </div>
      </section>

      {/* work with section start */}
      <section className="bg-[#efeae3] py-16">
      <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between md:flex-row mb-10">
            <h2 className="text-5xl text-black w-full md:w-2/5">Tools And Technologies That We Work With</h2>
            <div className="md:w-1/3 w-full">
               <div className="subtitle mb-4"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>07 - Technologies</div>
               <h2 className="text-xl text-black">Our proficiency spans cutting-edge technologies, ensuring the best solutions for your business needs.</h2>
            </div>
          </div>

          {/* our technology work list */}
          <OurTechnology />
        </div>
      </section>

      {/* about section start */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="md:w-2/4 w-full">
              <Image src={AboutImg} alt="About" />
            </div>
            <div className="md:w-2/4 w-full md:ms-32">
              <div className="subtitle mb-4"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>03 - About Us</div>
              <h2 className="md:text-6xl text-4xl text-black mb-6">We’re Your Digital Technological Partners</h2>
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
      <FaqPage />

      {/* footer section start */}
      <Footer />
    </div>
  }