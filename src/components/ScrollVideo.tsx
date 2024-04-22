import styles from '@/styles/CustomCursor.module.css';
import Video1 from '../../public/videos/video.mp4';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollVideo() {
    const videoboxRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: videoboxRef,
        offset: ['start start', 'end end'],
    });

    // Define the transformations based on scrollYProgress
    const translateX = useTransform(scrollYProgress, [0, 1], [0, 1]); // Adjust the range as needed
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 1]); // Adjust the range as needed
    const scale = useTransform(scrollYProgress, [0, 1], [1, 4.1]);

    // Adjust translateX to fix video position from the right when scrolling down
    const fixedPositionTranslateX = useTransform(scrollYProgress, [0, 1], [0, -552]);
    const fixedPositionTranslateY = useTransform(scrollYProgress, [0, 1], [0, 1280]);

    // Combine the transformations into a single object
    const transformStyle = {
        translateX: fixedPositionTranslateX, // Use the adjusted translateX value
        translateY: fixedPositionTranslateY,
        scale,
        originX: "center", // Set the transform origin for the X-axis to center
        originY: "center", // Set the transform origin for the Y-axis to center
        perspective: '1200px',
    };

    return (
        <div ref={videoboxRef} className={styles.videobox}>
            <div className={styles.videowrp}>
                <motion.div className={`${styles.el} aspect-video`} style={transformStyle}>
                    <div className={styles.videodiv1}>
                        <div className={styles.videodiv2}>
                            <video
                                autoPlay
                                loop
                                muted
                                controls
                                className={`${styles.videos}`}
                            >
                                <source src={Video1} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
