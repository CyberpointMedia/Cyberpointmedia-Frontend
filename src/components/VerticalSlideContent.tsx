


import React from 'react';
import { motion } from 'framer-motion';  
import { fadeIn } from "@/components/AnimationVariants";
import Image from "next/image";
import ChooseUsImg from '@/assets/why-choose-us.svg';

const VerticalSlides = () => {

  
    return (<>
<div className='flex flex-col items-center justify-between md:flex-row gap-80'>
            <ul className='w-full md:w-4/5 3xl:w-2/5'>
                <li className='relative ps-32'>
                    <div className='text-[#FF561D] text-base absolute left-0 top-0'>01</div>
                    <h6 className='text-[#2E2F30] text-4xl font-aeonik mb-20'>Tailored Solutions</h6>
                    <p>
                        In order to create a better future, we start by creating a futuristic work environment. A place where imaginative minds thrive, inspire and work towards a common goal: A tomorrow with fewer limits and true independence.
                    </p>
                </li>
            </ul>                                                                 
            <motion.div 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount: 0.1}}
                className='w-full'>
                <Image src={ChooseUsImg} alt='#' className='mx-auto w-[500px]' />
            </motion.div>
          </div>
          </>
        
      
    );
  };
  
  export default VerticalSlides;