import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "@/components/AnimationVariants";
import Image from "next/image";
import ChooseUsImg from '@/assets/why-choose-us.svg';  


const VerticalSlides = () => {
    
    return (
        <section className=''>
            <div className='container 3xl:container mx-auto'>
                <div className='flex flex-col justify-between md:flex-row gap-3 md:gap-8 xl:gap-60'>
                    <div className='w-full md:w-4/5 3xl:w-2/5 verticalSlide pt-4 md:pt-14 overflow-hidden h-fit'>
                            <motion.div 
                                variants={fadeIn("up", 0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{once: true, amount: 0.1}}
                                className='relative pl-8 xl:pl-28 md:h-screen md:pt-24 mb-12 md:mb-0'>
                                <h6 className='text-[#2E2F30] text-4xl font-aeonik relative md:mb-10 mb-4'>Tailored Solutions
                                    <div className='text-[#FF561D] text-base absolute top-1/4 xl:-left-24 -left-8'>01</div>
                                </h6>
                                <p>
                                    In order to create a better future, we start by creating a futuristic work environment. A place where imaginative minds thrive, inspire and work towards a common goal: A tomorrow with fewer limits and true independence.
                                </p>
                            </motion.div>
                            <motion.div 
                                variants={fadeIn("up", 0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{once: true, amount: 0.1}}
                                className='relative pl-8 xl:pl-28 md:h-screen md:pt-24 mb-12 md:mb-0'>
                                <h6 className='text-[#2E2F30] text-4xl font-aeonik relative md:mb-10 mb-4'>Client-Centric Approach
                                    <div className='text-[#FF561D] text-base absolute top-1/4 xl:-left-24 -left-8'>02</div>
                                </h6>
                                <p>
                                    We adopt a customer-first approach to make your business client-centric. Our commitment to excellence creates the best possible experience for your customers to cultivate loyalty.
                                </p>
                            </motion.div>
                            <motion.div 
                                variants={fadeIn("up", 0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{once: true, amount: 0.1}}
                                className='relative pl-8 xl:pl-28 md:h-screen md:pt-24 mb-12 md:mb-0'>
                                <h6 className='text-[#2E2F30] text-4xl font-aeonik relative md:mb-10 mb-4'>Wide Range of Services
                                    <div className='text-[#FF561D] text-base absolute top-1/4 xl:-left-24 -left-8'>03</div>
                                </h6>
                                <p>
                                    As a team of digital solutions providers, we provide various digital solutions to elevate your business. We are your one-stop shop for design and engineering, digital product creation, cloud consulting, and digital marketing services.
                                </p>
                            </motion.div>
                    </div>

                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className='w-full h-full md:sticky md:top-20 md:bottom-auto'>
                        <Image src={ChooseUsImg} alt='#' className='mx-auto w-[500px]' />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
export default VerticalSlides;