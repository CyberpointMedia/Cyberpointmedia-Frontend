
import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import playIcon from '@/assets/play-icon.svg';
import clickToplay from '@/assets/click-to-play.svg';
import BackgroundVideo from "@/components/HomeBackgroundVideo";
import readmoreIcon from '@/assets/read-more-icon.svg';
import ScrollVideo from './ScrollVideo';
import Modal from './VideoModal';

  export default function VideoPlayer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    const videoSrc = '/videos/video.mp4';
    
    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


    return (
      <section className="bg-white lg:flex lg:items-center lg:justify-center lg:h-screen hero_sec">
        <div className="container mx-auto 3xl:container relative">
          
          <div className="flex flex-col md:flex-row items-center justify-between hero_content mb-20 relative md:py-16 lg:pt-0">
              <div className="absolute md:top-36 lg:top-20 xl:top-20 2xl:top-32 top-28 left-2/4 -translate-x-1/2 -translate-y-1/2 xl:w-[400px] 2xl:w-[500px] lg:w-[330px] md:w-[290px] w-[250px]">
                <BackgroundVideo url="/videos/bg-video.webm" />
              </div>
                <motion.div className="hero_left xl:w-[858px] lg:w-[640px] w-full relative mb-28 md:mb-0" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}   transition={{ duration: 2 }} >
                    <h1 className="text-[36px] leading-[50px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[76px] text-black xl:leading-[85px] font-aeonik">Transform Your Business With Cyberpoint Media's Digital Excellence</h1>
                </motion.div>

                <div className="">
                  {/* for desktop */}
                    <div className="relative xl:w-[350px] xl:h-[320px] lg:w-[255px] lg:h-[190px] md:w-[205px] md:h-[160px] hidden lg:block">
                      <ScrollVideo />
                      <button className="absolute left-2/4 -top-9 md:-left-1 lg:-left-5 lg:-top-8 md:-top-1 -translate-x-1/2 -translate-y-1/2 md:w-20 lg:w-auto -z-10" onClick={openModal}>
                        <Image src={clickToplay} className="hero-video_root_playBtn_click absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="click icon" />
                        {isPlaying ? <Image src={playIcon} alt="play icon" /> : <Image src={playIcon} alt="play icon" />}
                      </button>

                        {/* {isModalOpen && (
                          <Modal videoUrl={videoSrc} closeModal={closeModal} />
                        )} */}
                    </div>

                    {/* for mobile */}
                    <div className="relative xl:w-[350px] xl:h-[320px] lg:w-[255px] lg:h-[190px] md:w-[205px] md:h-[160px] lg:hidden">
                      <div className="md:absolute md:inset-0 md:z-10 w-full h-full">
                        <video autoPlay={true} controls={true} loop={true}
                            className="video"
                            src="/videos/video.mp4"
                        />
                      </div>
                      <button className="absolute left-2/4 -top-9 md:-left-1 lg:-left-5 lg:-top-8 md:-top-1 -translate-x-1/2 -translate-y-1/2 md:w-20 lg:w-auto -z-10" onClick={openModal}>
                        <Image src={clickToplay} className="hero-video_root_playBtn_click absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="click icon" />
                        {isPlaying ? <Image src={playIcon} alt="play icon" /> : <Image src={playIcon} alt="play icon" />}
                      </button>
                    </div>

                </div>
            </div>
        </div>
        <div className="lg:absolute lg:bottom-0 lg:left-0 w-full">
            <div className="container mx-auto 3xl:container relative">
            <div className="flex flex-col md:flex-row mt-10 justify-between gap-4 h-full">
              <motion.div className="border py-4 lg:px-5 px-4 2xl:w-4/5 md:w-3/4 w-full border-b-0" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}   transition={{ duration: 1 }}>
                <p className="xl:text-[22px] lg:text-[17px] md:text-[14px] text-[18px] md:leading-5 lg:leading-normal text-[#2E2F30]">
                We are an industry leader in <b className="">Design and Engineering, Digital Product Design and<br className="md:hidden lg:block" /> Development, Digital Marketing,</b> and <b className="">Cloud and DevOps.</b>
                </p>
              </motion.div>
              <motion.div className="border py-4 lg:px-5 px-4 2xl:w-1/5 md:w-1/4 w-full border-b-0" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}   transition={{ duration: 1 }}>
                <a href="javascript:void(0)" className="text-black xl:text-[22px] lg:text-[17px] md:text-[14px] text-[18px] flex justify-between items-center">
                  <span>Become a Client</span>
                <Image src={readmoreIcon} alt="" className="md:w-6 lg:w-auto" />
                </a>
              </motion.div>
            </div>
            </div>
        </div>
        
      </section>

      
      );
}