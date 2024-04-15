// ScrollVideo.js
import styles from '@/styles/CustomCursor.module.css';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ScrollVideo() {
  const heroSection = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroSection,
    offset: ['start start', 'end end']
  });

  return (
    <div className={styles.videoWrp}>
      <motion.div className={styles.videoInnerWrp}>
            <div className={styles.videoContainer}>
              <div className={styles.aaa}>
              <video autoPlay loop muted className={styles.video}>
                <source src="/videos/video.mp4" type="video/mp4" />
              </video>
              </div>
            </div>
          </motion.div>
    </div>
  );
}
