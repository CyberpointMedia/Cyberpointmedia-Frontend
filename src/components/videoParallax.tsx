import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import playIcon from '@/assets/play-icon.svg';
import clickToplay from '@/assets/click-to-play.svg';
interface ZoomVideoParallaxProps {
  videoSrc: string; // Specify videoSrc as a string
  scaleFactor?: number; // Optional prop with type number
}

const ZoomVideoParallax: React.FC<ZoomVideoParallaxProps> = ({ videoSrc }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Set default scale transformation
  const scale = useSpring(1);

  return (
    <div className="video-bg-color">
      <div ref={containerRef} className="container 3xl:container mx-auto relative">
        <motion.video
          style={{ scale }}
          src={videoSrc}
          autoPlay
          loop
          muted
        />

              <button className="absolute left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2">
                <Image src={clickToplay} className="hero-video_root_playBtn_click hero-video_root_playBtn_click absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="click icon" />
              </button>
      </div>
    </div>
  );
};

export default ZoomVideoParallax;
