import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { fadeIn } from "@/components/AnimationVariants";
import Image from "next/image";
import ChooseUsImg from '@/assets/why-choose-us.svg';  


const VerticalSlides = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 5000, // Adjust the speed as needed
    };

    
    return (
        <div className='flex flex-col justify-between md:flex-row gap-60'>
            <Slider {...settings} className='w-full md:w-4/5 3xl:w-2/5 verticalSlide pt-14'>
                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className='relative ps-32 h-screen'>
                        <div className='text-[#FF561D] text-base absolute left-0 top-0'>01</div>
                        <h6 className='text-[#2E2F30] text-4xl font-aeonik mb-20'>Tailored Solutions</h6>
                        <p>
                            In order to create a better future, we start by creating a futuristic work environment. A place where imaginative minds thrive, inspire and work towards a common goal: A tomorrow with fewer limits and true independence.
                        </p>
                    </motion.div>
                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className='relative ps-32 h-screen'>
                        <div className='text-[#FF561D] text-base absolute left-0 top-0'>02</div>
                        <h6 className='text-[#2E2F30] text-4xl font-aeonik mb-20'>Client-Centric Approach</h6>
                        <p>
                            We adopt a customer-first approach to make your business client-centric. Our commitment to excellence creates the best possible experience for your customers to cultivate loyalty.
                        </p>
                    </motion.div>
                    <motion.div 
                        variants={fadeIn("up", 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true, amount: 0.1}}
                        className='relative ps-32 h-screen'>
                        <div className='text-[#FF561D] text-base absolute left-0 top-0'>03</div>
                        <h6 className='text-[#2E2F30] text-4xl font-aeonik mb-20'>Wide Range of Services</h6>
                        <p>
                            As a team of digital solutions providers, we provide various digital solutions to elevate your business. We are your one-stop shop for design and engineering, digital product creation, cloud consulting, and digital marketing services.
                        </p>
                    </motion.div>
            </Slider>

            <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}
                className='w-full'>
                <Image src={ChooseUsImg} alt='#' className='mx-auto w-[500px]' />
            </motion.div>

        </div>
    );
};
export default VerticalSlides;