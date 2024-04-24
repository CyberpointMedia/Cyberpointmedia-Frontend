
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '../header';
import { motion } from 'framer-motion';
import { fadeIn } from "@/components/AnimationVariants";
import Image from 'next/image';
import OurValueImg from '@/assets/our-value.svg';
import TeamImg1 from '@/assets/team-member1.jpg';
import TeamImg2 from '@/assets/team-member2.jpg';
import FAQAccordion from "@/components/FaqAccordion";
import Footer from "@/pages/footer";
import ClientTestimonials from '@/components/Testimonials';
import LogoBrands from '@/components/LogoBrands';
import MultipleImageSlider from '@/components/ImageSlider';
import VerticalSlides from '@/components/VerticalSlideContent';

export default function Index() {

    return <div>
      <Header></Header>

    {/* about us start */}
    <section className="bg-white py-16">
        <div className="container 3xl:container mx-auto">
            <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}
                className="md:w-3/5 3xl:w-3/6 w-full">
                <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>About Us</div>
                <h2 className="text-4xl xl:text-[76px] lg:text-[52px] md:text-[30px] md:leading-[32px] text-black font-aeonik xl:leading-[86px] lg:leading-[65px] mb-[30px] leading-[42px]">CyberPoint Media<br />
    Talents brought together.</h2>
                <p className="mb-6 text-[22px]">
                Cyberpoint Media helps establish a powerful online presence for your business. We're passionate about transforming ideas into powerful digital solutions. These solutions will elevate your business reputation, build customer trust, drive sales, and help reach new clients.
                </p>
                <p className='text-[22px]'>
                With a focus on innovation and expertise, we specialize in delivering top-tier services in Design & Engineering, Cloud & DevOps, Digital Product Development, and Digital Marketing.
                </p>
            </motion.div>
        </div>
    </section>

    {/* slider start */}
    <MultipleImageSlider />

    {/* our mission start */}
    <section className="bg-white py-20">
        <div className="container 3xl:container mx-auto">
            <div className="flex flex-col justify-between md:flex-row">
                <motion.div 
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true, amount: 0.1}}
                    className="md:w-1/3 w-full mb-6 md:mb-0">
                    <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>Our Mission</div>
                </motion.div>

                <div className='md:w-2/3 w-full'>
                    <motion.h2 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className="text-4xl md:text-[30px] leading-[42px] text-black font-aeonik lg:leading-[48px] mb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante augue, condimentum a dapibus vel, congue ultricies justo. Praesent ac hendrerit tortor. Fusce convallis, nunc sit amet fermentum consectetur, felis ante pulvinar est, id dictum nulla eros in magna. 
                    </motion.h2>
                    <div className="flex flex-col justify-between sm:flex-row gap-6 mt-16">
                        <motion.div 
                            variants={fadeIn("up", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once: true, amount: 0.1}}
                            className='sm:w-2/6 w-full mb-6'>
                            <p className='text-[22px] font-medium line-clamp-2 h-14'>
                                Active users on<br /> product we created
                            </p>
                            <h4 className='font-aeonik text-[#2E2F30] text-[82px] mt-14'>40+</h4>
                        </motion.div>
                        <motion.div 
                            variants={fadeIn("up", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once: true, amount: 0.1}}
                            className='sm:w-2/6 w-full mb-6'>
                            <p className='text-[22px] font-medium line-clamp-2 h-14'>
                            Project we completed<br /> along the way
                            </p>
                            <h4 className='font-aeonik text-[#2E2F30] text-[82px] mt-14'>36+</h4>
                        </motion.div>
                        <motion.div 
                            variants={fadeIn("up", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once: true, amount: 0.1}}
                            className='sm:w-2/6 w-full mb-6'>
                            <p className='text-[22px] font-medium line-clamp-2 h-14'>
                            Years of oparation
                            </p>
                            <h4 className='font-aeonik text-[#2E2F30] text-[82px] mt-14'>20+</h4>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* our values section start */}
    <section className="bg-[#EFEAE3] py-16">
        <div className="container 3xl:container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
             className="md:w-2/5 w-full xl:me-64 lg:me-32 md:me-12">
              <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>Our Values</div>
              <h2 className="text-4xl xl:text-[62px] lg:text-[52px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-[30px] leading-[42px]">Get the job done with a team you can trust.</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu tempor diam. Maecenas congue ullamcorper blandit. Vestibulum massa nibh, vehicula congue mi eget, congue facilisis dui. Sed non augue vel.
              </p>
            </motion.div>

            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="md:w-3/5 w-full mb-6 md:mb-0">
              <Image src={OurValueImg} alt="About" />
            </motion.div>
          </div>

          <div className='grid lg:grid-cols-4 sm:grid-cols-2 items-center justify-between sm:mt-20 sm:border-t border-[#DAD2C7]'>
            <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}
                className='w-full sm:border-r border-[#DAD2C7] pt-10 pe-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0007 3C12.4149 3 12.7507 3.33579 12.7507 3.75V6.25C12.7507 6.66421 12.4149 7 12.0007 7C11.5865 7 11.2507 6.66421 11.2507 6.25V3.75C11.2507 3.33579 11.5865 3 12.0007 3ZM6.20932 5.10555C6.52662 4.8393 6.99969 4.88068 7.26594 5.19799L8.87291 7.1131C9.13916 7.43041 9.09777 7.90347 8.78047 8.16973C8.46316 8.43598 7.99009 8.39459 7.72384 8.07728L6.11687 6.16217C5.85062 5.84487 5.89201 5.3718 6.20932 5.10555ZM17.7802 5.10564C18.0975 5.37189 18.1389 5.84496 17.8726 6.16227L16.2656 8.07738C15.9994 8.39468 15.5263 8.43607 15.209 8.16982C14.8917 7.90357 14.8503 7.4305 15.1166 7.1132L16.7235 5.19809C16.9898 4.88078 17.4629 4.83939 17.7802 5.10564ZM5.22073 10.5C4.93568 10.5 4.67859 10.6714 4.56895 10.9345L4.17308 11.8846C3.76549 12.8628 2.80971 13.5 1.75 13.5C1.33579 13.5 1 13.1642 1 12.75C1 12.3358 1.33579 12 1.75 12C2.20416 12 2.61378 11.7269 2.78846 11.3077L3.18434 10.3576C3.52687 9.5355 4.33013 9 5.22073 9C5.95834 9 6.64715 9.36864 7.0563 9.98237L7.31396 10.3689C7.36858 10.4508 7.46053 10.5 7.559 10.5C9.84697 10.5 11.6391 12.468 11.4255 14.746L11.2637 16.4719C11.0763 18.4715 9.39779 20 7.38937 20H1.75C1.33579 20 1 19.6642 1 19.25C1 18.8358 1.33579 18.5 1.75 18.5H7.38937C8.62361 18.5 9.65508 17.5607 9.77029 16.3319L9.93209 14.606C10.0632 13.2079 8.96324 12 7.559 12C6.959 12 6.3987 11.7001 6.06589 11.2009L5.80823 10.8144C5.67727 10.618 5.45681 10.5 5.22073 10.5ZM16.8865 9.98237C17.2956 9.36864 17.9844 9 18.722 9C19.6126 9 20.4159 9.5355 20.7584 10.3576L21.1543 11.3077C21.329 11.7269 21.7386 12 22.1928 12C22.607 12 22.9428 12.3358 22.9428 12.75C22.9428 13.1642 22.607 13.5 22.1928 13.5C21.133 13.5 20.1773 12.8628 19.7697 11.8846L19.3738 10.9345C19.2642 10.6714 19.0071 10.5 18.722 10.5C18.486 10.5 18.2655 10.618 18.1345 10.8144L17.8769 11.2009C17.5441 11.7001 16.9838 12 16.3838 12C14.9795 12 13.8796 13.2079 14.0107 14.606L14.1725 16.3319C14.2877 17.5607 15.3192 18.5 16.5534 18.5H22.1928C22.607 18.5 22.9428 18.8358 22.9428 19.25C22.9428 19.6642 22.607 20 22.1928 20H16.5534C14.545 20 12.8665 18.4715 12.679 16.4719L12.5172 14.746C12.3037 12.468 14.0958 10.5 16.3838 10.5C16.4822 10.5 16.5742 10.4508 16.6288 10.3689L16.8865 9.98237Z" fill="black"/>
                </svg>
                <h5 className='text-[#2E2F30] text-[22px] font-aeonik my-4'>Sustainability</h5>
                <p>Conducting business with honesty and transparency.</p>
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}
                className='w-full lg:border-r border-[#DAD2C7] pt-10 sm:ps-8 pe-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.5C8.41015 2.5 5.5 5.41015 5.5 9C5.5 12.5899 8.41015 15.5 12 15.5C15.5899 15.5 18.5 12.5899 18.5 9C18.5 5.41015 15.5899 2.5 12 2.5ZM4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 11.5264 18.8289 13.7793 17 15.2454V22.25C17 22.5068 16.8687 22.7457 16.6519 22.8832C16.4351 23.0208 16.163 23.0379 15.9307 22.9286L12 21.0789L8.06935 22.9286C7.83703 23.0379 7.56493 23.0208 7.34814 22.8832C7.13135 22.7457 7 22.5068 7 22.25V15.2454C5.17107 13.7793 4 11.5264 4 9ZM8.5 16.1958V21.0682L11.6807 19.5714C11.8829 19.4762 12.1171 19.4762 12.3193 19.5714L15.5 21.0682V16.1958C14.4428 16.7109 13.2552 17 12 17C10.7448 17 9.5572 16.7109 8.5 16.1958Z" fill="black"/>
                </svg>
                <h5 className='text-[#2E2F30] text-[22px] font-aeonik my-4'>Quality</h5>
                <p>Conducting business with honesty and transparency.</p>
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}
                className='w-full sm:border-r border-[#DAD2C7] pt-10 lg:ps-8 pe-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9992 3.5C8.40884 3.5 5.49829 6.41055 5.49829 10.0009C5.49829 12.1006 6.49294 13.9677 8.03987 15.1574C8.36535 15.4078 8.71504 15.6279 9.08473 15.8136C9.33809 15.9409 9.49799 16.2002 9.49799 16.4838V17H14.5004V16.4838C14.5004 16.2002 14.6603 15.9409 14.9136 15.8136C15.2833 15.6279 15.633 15.4078 15.9585 15.1574C17.5054 13.9677 18.5001 12.1006 18.5001 10.0009C18.5001 6.41055 15.5895 3.5 11.9992 3.5ZM14.5004 18.5H9.49799V18.9988C9.49799 20.3802 10.6178 21.5 11.9992 21.5C13.3805 21.5 14.5004 20.3802 14.5004 18.9988V18.5ZM3.99829 10.0009C3.99829 5.58212 7.58041 2 11.9992 2C16.4179 2 20.0001 5.58212 20.0001 10.0009C20.0001 12.5861 18.7732 14.885 16.873 16.3465C16.5959 16.5595 16.3045 16.7549 16.0004 16.9308V18.9988C16.0004 21.2086 14.209 23 11.9992 23C9.78938 23 7.99799 21.2086 7.99799 18.9988V16.9308C7.69383 16.7549 7.4024 16.5595 7.1254 16.3465C5.22519 14.885 3.99829 12.5861 3.99829 10.0009Z" fill="black"/>
                </svg>
                <h5 className='text-[#2E2F30] text-[22px] font-aeonik my-4'>Team Work</h5>
                <p>Conducting business with honesty and transparency.</p>
            </motion.div>

            <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}
                className='w-full pt-10 sm:ps-8 pe-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 4.5C6.11929 4.5 5 5.61929 5 7C5 8.38071 6.11929 9.5 7.5 9.5C8.88071 9.5 10 8.38071 10 7C10 5.61929 8.88071 4.5 7.5 4.5ZM3.5 7C3.5 4.79086 5.29086 3 7.5 3C9.70914 3 11.5 4.79086 11.5 7C11.5 9.20914 9.70914 11 7.5 11C5.29086 11 3.5 9.20914 3.5 7ZM16.5 4.5C15.1193 4.5 14 5.61929 14 7C14 8.38071 15.1193 9.5 16.5 9.5C17.8807 9.5 19 8.38071 19 7C19 5.61929 17.8807 4.5 16.5 4.5ZM12.5 7C12.5 4.79086 14.2909 3 16.5 3C18.7091 3 20.5 4.79086 20.5 7C20.5 9.20914 18.7091 11 16.5 11C14.2909 11 12.5 9.20914 12.5 7ZM19.4521 14.4436C18.0194 13.4158 16.2589 13.2309 14.7127 13.8731C14.3302 14.0319 13.8913 13.8506 13.7324 13.4681C13.5735 13.0856 13.7549 12.6467 14.1374 12.4878C16.166 11.6452 18.4746 11.8962 20.3265 13.2249C22.1828 14.5567 23.5172 16.9193 23.7483 20.1973C23.7629 20.4048 23.6906 20.6091 23.5488 20.7613C23.4069 20.9136 23.2082 21 23.0001 21H16.75C16.3358 21 16 20.6642 16 20.25C16 19.8358 16.3358 19.5 16.75 19.5H22.1682C21.823 17.0282 20.7451 15.3713 19.4521 14.4436ZM1.83164 19.5H13.0255C12.4504 15.3665 9.8394 13.5 7.42857 13.5C5.01775 13.5 2.4067 15.3665 1.83164 19.5ZM7.42857 12C10.943 12 14.2314 14.8926 14.6053 20.1973C14.6199 20.4048 14.5477 20.6091 14.4058 20.7613C14.2639 20.9136 14.0652 21 13.8571 21H1C0.791928 21 0.593206 20.9136 0.451343 20.7613C0.30948 20.6091 0.237227 20.4048 0.251858 20.1973C0.625789 14.8926 3.91415 12 7.42857 12Z" fill="black"/>
                </svg>
                <h5 className='text-[#2E2F30] text-[22px] font-aeonik my-4'>Excellence</h5>
                <p>Conducting business with honesty and transparency.</p>
            </motion.div>
          </div>
        </div>    
      </section>

      {/* why choose us section start */}
      <section className="bg-white py-16">
        <div className="container 3xl:container mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
             className="md:w-2/4 w-full xl:me-64 lg:me-32 md:me-12">
              <div className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>Why Choose Us</div>
              <h2 className="text-4xl xl:text-[62px] lg:text-[52px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-[30px] leading-[42px]">Our values: the only code we insist on keeping!</h2>
            </motion.div>

            <motion.div 
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount: 0.1}}
            className="md:w-2/4 w-full mb-6 md:mb-0">              
              <p>
                In order to create a better future, we start by creating a futuristic work environment. A place where imaginative minds thrive, inspire and work towards a common goal: A tomorrow with fewer limits and true independence.
              </p>
            </motion.div>
          </div>
        </div>    
      </section>

      {/* vertical slides start */}
      <VerticalSlides />

      {/* our leadership section start */}

      <section className='bg-white py-16'>
            <div className='container 3xl:container mx-auto'>
                <motion.div                                                                                                             
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true, amount: 0.1}}
                    className="subtitle mb-4 flex items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>Our Leadership</motion.div>
                <hr className='mb-5' />
                <div className="flex flex-col items-start justify-between md:flex-row">
                    <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true, amount: 0.1}}
                    className="md:w-2/4 w-full xl:me-[300px] lg:me-32 md:me-12">
                    <h2 className="text-4xl xl:text-[62px] lg:text-[52px] md:text-[30px] md:leading-[32px] text-black font-aeonik lg:leading-[65px] mb-[30px] leading-[42px]">Founders leading the way</h2>
                    <a href="javasript:void(0);" className="uppercase rounded-full py-[10px] px-5 border border-[#2E2F30] hover:bg-[#FF561D] hover:border-[#FF561D] hover:text-white inline-block transition duration-500 mb-10">Meet The Team</a>
                    </motion.div>

                    <motion.div 
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true, amount: 0.1}}
                    className="md:w-2/4 w-full mb-6 md:mb-0">              
                        <div className='grid sm:grid-cols-2 grid-cols gap-5'>
                            <div className=''>
                                <Image src={TeamImg1} alt='#' />
                                <div className='py-4'>
                                    <h6 className='text-[#2E2F30] text-[22px] font-aeonik mb-1'>Pooja Yadav</h6>
                                    <p className='text-sm'>Founder & CEO</p>
                                </div>
                            </div>
                            <div className=''>
                                <Image src={TeamImg2} alt='#' />
                                <div className='py-4'>
                                    <h6 className='text-[#2E2F30] text-[22px] font-aeonik mb-1'>Navdeep Yadav</h6>
                                    <p className='text-sm'>Director, Operations</p>
                                </div>
                            </div>
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
      <FAQAccordion/>

      {/* footer section start */}
      <Footer />
    </div>
  }