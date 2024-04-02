// VideoComponent.js
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import playIcon from '@/assets/play-icon.svg';
import clickToplay from '@/assets/click-to-play.svg';
import videoScreenshot from '@/assets/video-screenshot1.svg';

const VideoComponent = () => {
    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollY / maxScroll; // Normalize scroll position to a value between 0 and 1

    // Adjust rotation and zoom based on scroll position
    const newRotation = progress * 360; // 360 degrees rotation
    const newZoom = 1 + progress; // Increase zoom as the user scrolls

    setRotation(newRotation);
    setZoom(newZoom);
  }, [scrollY]);


  return (
    <div className="video-bg-color">
        <div className="container 3xl:container mx-auto relative">
            {/* <video ref={videoRef} autoPlay={true} controls={true} loop={true}
                  className="video"
                  src="/videos/hero-video3.mp4"
                  style={{
                      opacity: 1,
                      transform: 'perspective(1200px)',
                  }}
              /> */}
              <Image src={videoScreenshot} alt='#' />
              <button className="absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2">
                <Image src={clickToplay} className="hero-video_root_playBtn_click hero-video_root_playBtn_click absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="click icon" />
                {isPlaying ? <Image src={playIcon} alt="play icon" /> : <Image src={playIcon} alt="play icon" />}
              </button>
        </div>
    </div>
  );
};

export default VideoComponent;
