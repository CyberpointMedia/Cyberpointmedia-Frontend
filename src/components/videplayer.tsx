
import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import playIcon from '@/assets/play-icon.svg';
import clickToplay from '@/assets/click-to-play.svg';

  export default function VideoPlayer() {
    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


    return (
      <div className="relative xl:w-[405px] xl:h-[320px] lg:w-[255px] lg:h-[190px] md:w-[205px] md:h-[160px]">
        <div className="md:absolute md:inset-0 md:z-10 w-full h-full">
          <video ref={videoRef} autoPlay={true} controls={true} loop={true} >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>
        <button className="absolute left-2/4 md:-left-1 lg:-left-5 lg:-top-8 md:-top-1 -translate-x-1/2 -translate-y-1/2 md:w-20 lg:w-auto -z-10">
          <Image src={clickToplay} className="hero-video_root_playBtn_click absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="click icon" />
          {isPlaying ? <Image src={playIcon} alt="play icon" /> : <Image src={playIcon} alt="play icon" />}
        </button>
        
        </div>
      );
}