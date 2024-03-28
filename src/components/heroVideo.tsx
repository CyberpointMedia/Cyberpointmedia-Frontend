import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useViewportScroll } from 'framer-motion';

const AnimatedVideo = ({ videoSrc, translateX, translateY, scale }) => {
    const [scrollY, setScrollY] = useState(0);
    const scrollYRef = useRef(0);
    const videoRef = useRef(null);

    const { ref, inView } = useInView({ threshold: 0.5 }); // Observe 50% visibility

    useEffect(() => {
        const handleScroll = () => {
            scrollYRef.current = window.scrollY;
            setScrollY(scrollYRef.current);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollYProgress = useViewportScrollY(); // Get viewport scroll progress from Framer Motion

    const animationVariants = {
        hidden: {
            opacity: 0,
            transform: `translate(${translateX}px, <span class="math-inline">\{translateY\}px\) scale\(</span>{scale})`,
        },
        visible: {
            opacity: 1,
            transform: `translate(0px, 0px) scale(1)`,
            transition: { duration: 1, ease: 'easeInOut' },
        },
    };

    return (
        <motion.div ref={ref} variants={animationVariants} animate={inView ? 'visible' : 'hidden'} className="animated-video-wrapper">
            <video ref={videoRef} src={videoSrc} autoPlay muted loop playsInline />
        </motion.div>
    );
};

export default AnimatedVideo; 