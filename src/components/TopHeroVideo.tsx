import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface HeroVideoProps {
  videoSrc: string; // Specify videoSrc as a string
  scaleFactor?: number; // Optional prop with type number
}

const HeroVideo: React.FC<HeroVideoProps> = ({ videoSrc }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Set default scale transformation
  const scale = useSpring(1);

  return (
    <div ref={containerRef} className="zoom-video-parallax">
      <motion.video
        style={{ scale }}
        src={videoSrc}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default HeroVideo;
