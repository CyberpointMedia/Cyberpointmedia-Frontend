
// import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

const BackgroundVideo = (videoSource:any) => {
    const videoRef = useRef() as any;
  
    useEffect(() => {
      const video = videoRef.current;
  
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error: any) => {
          // Auto-play was prevented
          // You can handle this situation here
          console.error('Auto-play prevented:', error);
        });
      }
  
      return () => {
        video.pause();
        video.currentTime = 0;
      };
    }, []);
  
    return (
      <div>
        <video ref={videoRef} autoPlay loop muted playsInline>
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
    );
  };
  
  export default BackgroundVideo;