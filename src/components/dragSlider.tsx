import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import showcaseImg1 from '@/assets/showcase-img1.svg';
import showcaseImg2 from '@/assets/showcase-img2.svg';
import showcaseImg3 from '@/assets/showcase-img3.svg';
import CustomDragCursor from '@/components/CustomDragCursor';

const DragSlider = () => {

    const settings = {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        rows: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,

        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
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
      };

      

  return (
    <div className='relative overflow-hidden' id="drag-section">
        <CustomDragCursor />
        <Slider {...settings}>
        <div className="card">
            <figure className="relative">
            <div className="absolute top-5 left-0 right-0 w-full px-5 hidden md:block">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="gap-3 flex lg:flex-row lg:items-center items-start flex-wrap">
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">Visual Identity</span>
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">UI/UX</span>
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">Art Direction</span>
                    </div>
                    <div className="mt-3 lg:mt-0">
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">2023</span>
                    </div>
                </div>
                </div>
                <Image src={showcaseImg1} alt="" />
            </figure>

            <div className="card-body md:pr-12">
                <h3 className="text-[28px] mt-4 mb-3 font-aeonik">Flourish</h3>
                <p>Financial service that offers premium credit cards with a unique health & wellness reward program.</p>
            </div>
            </div>

            <div className="card">
            <figure className="relative">
            <div className="absolute top-5 left-0 right-0 w-full px-5 hidden md:block">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="gap-3 flex lg:flex-row lg:items-center items-start flex-wrap">
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">Visual Identity</span>
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">UI/UX</span>
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">Art Direction</span>
                    </div>
                    <div className="mt-3 lg:mt-0">
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">2023</span>
                    </div>
                </div>
                </div>
                <Image src={showcaseImg2} alt="" />
            </figure>

            <div className="card-body md:pr-12">
                <h3 className="text-[28px] mt-4 mb-3 font-aeonik">Flourish</h3>
                <p>Financial service that offers premium credit cards with a unique health & wellness reward program.</p>
            </div>
            </div>

            <div className="card">
            <figure className="relative">
            <div className="absolute top-5 left-0 right-0 w-full px-5 hidden md:block">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="gap-3 flex lg:flex-row lg:items-center items-start flex-wrap">
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">Visual Identity</span>
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">UI/UX</span>
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">Art Direction</span>
                    </div>
                    <div className="mt-3 lg:mt-0">
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">2023</span>
                    </div>
                </div>
                </div>
                <Image src={showcaseImg3} alt="" />
            </figure>

            <div className="card-body md:pr-12">
                <h3 className="text-[28px] mt-4 mb-3 font-aeonik">Flourish</h3>
                <p>Financial service that offers premium credit cards with a unique health & wellness reward program.</p>
            </div>
            </div>

            <div className="card">
            <figure className="relative">
            <div className="absolute top-5 left-0 right-0 w-full px-5 hidden md:block">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="gap-3 flex lg:flex-row lg:items-center items-start flex-wrap">
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">Visual Identity</span>
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">UI/UX</span>
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">Art Direction</span>
                    </div>
                    <div className="mt-3 lg:mt-0">
                    <span className="py-1 px-3 rounded-full border border-white text-white text-sm">2023</span>
                    </div>
                </div>
                </div>
                <Image src={showcaseImg2} alt="" />
            </figure>

            <div className="card-body md:pr-12">
                <h3 className="text-[28px] mt-4 mb-3 font-aeonik">Flourish</h3>
                <p>Financial service that offers premium credit cards with a unique health & wellness reward program.</p>
            </div>
            </div>
        </Slider>
    </div>
  );
};

export default DragSlider;
