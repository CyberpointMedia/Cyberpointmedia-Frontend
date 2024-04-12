import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doubleQuotes from '@/assets/quotes.svg';
import UserImg1 from '@/assets/testimonials-user1.svg';
import UserImg2 from '@/assets/testimonials-user2.svg';
import UserImg3 from '@/assets/testimonials-user3.svg';
import UserImg4 from '@/assets/testimonials-user4.svg';
import { useState } from "react";
import { BsChevronRight } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';


const ClientTestimonials = () => {

  const [progress, setProgress] = useState(10)
  const [slideToShow] = useState(5)  

  const settings = {
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 4,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <TestimonialsNextArrow />,
    prevArrow: <TestimonialsPrevArrow />,
    initialSlide: 0,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    afterChange: (current: number) => {
        setProgress(100 / ( slideToShow + 1) * (current + 1));
        console.log(slideToShow);
    }
  };
  
  return (
    <div>
      <section className="bg-[#efeae3] pt-16 pb-48 overflow-hidden">
        <motion.div 
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.1}}
        className="text-center">
          <div className="subtitle mb-4 flex mx-auto justify-center items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>06 —Testimonials</div>
            <h2 className="text-4xl xl:text-[62px] lg:text-[52px] md:text-[30px] text-black font-aeonik mb-10 md:leading-[65px] leading-[42px]">What Our Clients Say</h2>
        </motion.div>
        <div className="slider-container relative">
              <Slider {...settings}>
                    <div className="bg-white rounded-[20px] p-7 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc line-clamp-4">
                        <p>
                        Life-changing experience! I learned so much from their program. Participating in their program was a transformative experience for me.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-20">
                        <div className="me-3">
                          <Image src={UserImg1} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-semibold mb-1">Black, Marvin</h3>
                          <p className="text-sm text-[#2C2D36] font-normal">President of Sales</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[20px] p-7 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc line-clamp-4">
                        <p>
                        Prompt delivery and top-notch quality. Impressed with the speed and accuracy. The efficiency and speed at which they delivered the product were impressive.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-20">
                        <div className="me-3">
                          <Image src={UserImg2} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-semibold mb-1">Miles, Esther</h3>
                          <p className="text-sm text-[#2C2D36] font-normal">President of Sales</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[20px] p-7 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc line-clamp-4">
                        <p>
                          This team knows their stuff. I'm grateful for their guidance. The expertise and knowledge demonstrated by this team were invaluable to me.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-20">
                        <div className="me-3">
                          <Image src={UserImg1} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-semibold mb-1">Nguyen, Shane</h3>
                          <p className="text-sm text-[#2C2D36] font-normal">President of Sales</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[20px] p-7 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc line-clamp-4">
                        <p>
                        Reliable and trustworthy. They have earned my trust and loyalty. This company has consistently demonstrated reliability and trustworthiness.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-20">
                        <div className="me-3">
                          <Image src={UserImg3} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-semibold mb-1">Cooper, Kristin</h3>
                          <p className="text-sm text-[#2C2D36] font-normal">President of Sales</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[20px] p-7 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc line-clamp-4">
                        <p>
                        An absolute pleasure to work with. They made the process seamless. Working with this team was a seamless and enjoyable experience.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-20">
                        <div className="me-3">
                          <Image src={UserImg4} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-semibold mb-1">Miles, Esther</h3>
                          <p className="text-sm text-[#2C2D36] font-normal">President of Sales</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[20px] p-7 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc line-clamp-4">
                        <p>
                          This team knows their stuff. I'm grateful for their guidance. The expertise and knowledge demonstrated by this team were invaluable to me.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-20">
                        <div className="me-3">
                          <Image src={UserImg2} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-semibold mb-1">Nguyen, Shane</h3>
                          <p className="text-sm text-[#2C2D36] font-normal">President of Sales</p>
                        </div>
                      </div>
                    </div>
        </Slider>

        <div className='h-[2px] bg-gray-300 w-[250px] slider_progressbar'>
          <div className='bg-[#fab1a0] absolute h-[100%] transition-all' style={{ width: `${progress}%` }}></div>
        </div>

      </div>
      </section>
    </div>
  );
};

// next slide button
const TestimonialsNextArrow = ({ onClick }: any) => {
  return (
      <div className="absolute left-[50%] -bottom-[150px] -translate-x-1/2 -translate-y-1/2 buttonArrow" onClick={onClick}>
          <div className="nextArrow hover:bg-[#2E2F30] h-[45px] w-[45px] rounded-full grid place-items-center cursor-pointer hover:text-white">
              <BsChevronRight />
          </div>
      </div>
  )
};

// prev slide button
const TestimonialsPrevArrow = ({ onClick }: any) => {
  return (
      <div className="absolute left-[30%] sm:left-[40%] md:left-[43%] 2xl:left-[46%] -bottom-[150px] -translate-x-1/2 -translate-y-1/2 buttonArrow" onClick={onClick}>
          <div className="prevArrow hover:bg-[#2E2F30] h-[45px] w-[45px] rounded-full grid place-items-center cursor-pointer hover:text-white">
              <BsChevronLeft />
          </div>
      </div>
  )
};


export default ClientTestimonials;