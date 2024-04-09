import styles from '@/styles/CustomCursor.module.css';
// @ts-ignore
import video1 from '../../public/videos/video.mp4'; // Path to your video file
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollVideo() {
    
    const heroSection = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroSection,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 100]);

    const scrollEffect = [
        {
            scale: scale4
        },
    ]
 
    return (<>
        <div className={styles.videoWrp}>
            {
                scrollEffect.map( ({scale}, index) => {
                    return <motion.div key={index} style={{scale}} className={styles.videoInnerWrp}>
                                <div className={styles.videoContainer}>
                                    <div className={styles.aaa}>
                                        <video autoPlay loop muted className={styles.video}>
                                            <source src={video1}  type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </motion.div>
                })
            }
        </div>
        </>
    )
}
