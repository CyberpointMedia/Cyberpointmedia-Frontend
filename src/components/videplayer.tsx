
import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import playIcon from '@/assets/play-icon.svg';
import clickToplay from '@/assets/click-to-play.svg';

  export default function VideoPlayer() {
    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


    return (
      <div className="hero_video_wraper">
        <div className="hero-video_play_iframe">
          <video ref={videoRef} autoPlay={true} controls={true} loop={true} >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>
        <button className="hero-video_root_playBtn">
          <Image src={clickToplay} className="hero-video_root_playBtn_click" alt="click icon" />
          {isPlaying ? <Image src={playIcon} alt="play icon" /> : <Image src={playIcon} alt="play icon" />}
        </button>
        
        </div>
      );
}