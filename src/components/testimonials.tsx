import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doubleQuotes from '@/assets/quotes.svg';
import UserImg1 from '@/assets/testimonials-user1.svg';
import TestimonialsPrevArrow from "./testimonialsPrevArrow";
import TestimonialsNextArrow from "./testimonialsNextArrow";
import { useState, useEffect } from "react";


const ClientTestimonials = () => {

  const [progress, setProgress] = useState(10)
  const [slideToShow] = useState(5)

  const setSlides = () =>{
    useEffect(()=>{
      setSlides()
      setProgress(100 / (slideToShow + 1))
      window.addEventListener("resize", () => { setSlides() })
    }, [])
  }

  

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
    draggable: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
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
        <div className="container mx-auto px-6 text-center">
          <div className="subtitle mb-4 flex mx-auto justify-center items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>06 —Testimonials</div>
            <h2 className="text-4xl md:text-5xl text-black mb-10 aeonik_trialregular">What Our Clients Say</h2>
        </div>
        <div className="slider-container relative">
              <Slider {...settings}>
                    <div className="bg-white rounded-[20px] py-5 px-4 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc">
                        <p>
                          This team knows their stuff. I'm grateful for their guidance. The expertise and knowledge demonstrated by this team were invaluable to me.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-8">
                        <div className="me-3">
                          <Image src={UserImg1} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-medium mb-1">Nguyen, Shane</h3>
                          <p className="text-sm text-[#2C2D36] font-normal">President of Sales</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[20px] py-5 px-4 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc">
                        <p>
                          This team knows their stuff. I'm grateful for their guidance. The expertise and knowledge demonstrated by this team were invaluable to me.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-8">
                        <div className="me-3">
                          <Image src={UserImg1} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-medium mb-1">Nguyen, Shane</h3>
                          <p className="text-sm text-[#2C2D36] font-normal">President of Sales</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[20px] py-5 px-4 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc">
                        <p>
                          This team knows their stuff. I'm grateful for their guidance. The expertise and knowledge demonstrated by this team were invaluable to me.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-8">
                        <div className="me-3">
                          <Image src={UserImg1} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-medium mb-1">Nguyen, Shane</h3>
                          <p className="text-sm text-[#2C2D36] font-normal">President of Sales</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[20px] py-5 px-4 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc">
                        <p>
                          This team knows their stuff. I'm grateful for their guidance. The expertise and knowledge demonstrated by this team were invaluable to me.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-8">
                        <div className="me-3">
                          <Image src={UserImg1} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-medium mb-1">Nguyen, Shane</h3>
                          <p className="text-sm text-[#2C2D36] font-normal">President of Sales</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[20px] py-5 px-4 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc">
                        <p>
                          This team knows their stuff. I'm grateful for their guidance. The expertise and knowledge demonstrated by this team were invaluable to me.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-8">
                        <div className="me-3">
                          <Image src={UserImg1} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-medium mb-1">Nguyen, Shane</h3>
                          <p className="text-sm text-[#2C2D36] font-normal">President of Sales</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-[20px] py-5 px-4 relative text-left">
                      <div className="mb-4">
                        <Image src={doubleQuotes} alt="#" />
                      </div>

                      <div className="testimonials_desc">
                        <p>
                          This team knows their stuff. I'm grateful for their guidance. The expertise and knowledge demonstrated by this team were invaluable to me.
                        </p>
                      </div>

                      <div className="flex items-center justify-start mt-8">
                        <div className="me-3">
                          <Image src={UserImg1} alt="#" />
                        </div>
                        <div className="">
                          <h3 className="text-[#2E2F30] text-base font-medium mb-1">Nguyen, Shane</h3>
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

export default ClientTestimonials;