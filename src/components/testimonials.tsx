import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import doubleQuotes from '@/assets/quotes.svg';
import UserImg1 from '@/assets/testimonials-user1.svg';


const ClientTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    margin:10,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nav: false,
  };
  return (
    <div>

      <section className="bg-[#efeae3] py-16 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
               <div className="subtitle mb-4 flex mx-auto justify-center items-center"><span className="bg-[#FF561D] w-2 h-2 inline-block mr-2"></span>06 —Testimonials</div>
               <h2 className="text-5xl text-black mb-10">What Our Clients Say</h2>

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
            </div>
      </section>
</div>
    
  );
};

export default ClientTestimonials;