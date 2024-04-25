import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "@/components/AnimationVariants";

const Counter = ({ id, start, end, duration }) => {
  useEffect(() => {
    const obj = document.getElementById(id);
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const step = Math.abs(Math.floor(duration / range));
    const timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
    
    // Cleanup function
    return () => clearInterval(timer);
  }, [id, start, end, duration]);

  return <span id={id}></span>;
};

const CounterComponent = () => {
  return (
    <>
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
                            <h4 className='font-aeonik text-[#2E2F30] text-[82px] mt-14'>
                                <Counter id="count1" start={0} end={40} duration={3000} />+
                            </h4>
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
                            <h4 className='font-aeonik text-[#2E2F30] text-[82px] mt-14'>
                                <Counter id="count2" start={0} end={36} duration={3000} />+
                            </h4>
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
                            <h4 className='font-aeonik text-[#2E2F30] text-[82px] mt-14'>
                                <Counter id="count3" start={0} end={20} duration={3000} />+
                            </h4>
                        </motion.div>
                    </div>
    </>
  );
};

export default CounterComponent;
