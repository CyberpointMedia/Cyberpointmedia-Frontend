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
        <div className="container mx-auto px-6 relative">
            {/* <video ref={videoRef} autoPlay={true} controls={true} loop={true}
                  className="video"
                  src="/videos/hero-video3.mp4"
                  style={{
                      opacity: 1,
                      transform: 'perspective(1200px)',
                  }}
              /> */}
              <Image src={videoScreenshot} alt='#' />
              <button className="hero-video_root_playBtn2">
                <Image src={clickToplay} className="hero-video_root_playBtn_click" alt="click icon" />
                {isPlaying ? <Image src={playIcon} alt="play icon" /> : <Image src={playIcon} alt="play icon" />}
              </button>
        </div>
    </div>
  );
};

export default VideoComponent;
