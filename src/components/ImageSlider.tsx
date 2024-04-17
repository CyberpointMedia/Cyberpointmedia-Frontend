import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import AboutSildeImg1 from '@/assets/about-slider-Img1.svg';
import AboutSildeImg2 from '@/assets/about-slider-Img2.svg';
import AboutSildeImg3 from '@/assets/about-slider-Img3.svg';
import AboutSildeImg4 from '@/assets/about-slider-Img4.svg';

const MultipleImageSlider = () => {
    const settings = {
        centerMode: true,
        slidesToShow: 4,
        autoplay: true,
        dots: false,
        infinite: true,
        rows: 1,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: false,
        initialSlide: 0,
        swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
  
    return (<>
            <section className='py-10'>
                <Slider {...settings} className='MultipleItemSildes'>
                    <div>
                        <Image src={AboutSildeImg1} alt='#' />
                    </div>
                    <div>
                        <Image src={AboutSildeImg2} alt='#' />
                    </div>
                    <div>
                        <Image src={AboutSildeImg3} alt='#' />
                    </div>
                    <div>
                        <Image src={AboutSildeImg4} alt='#' />
                    </div>
                    <div>
                        <Image src={AboutSildeImg2} alt='#' />
                    </div>
                </Slider>

            </section>
        </>
        
      
    );
  };
  
  export default MultipleImageSlider;
  