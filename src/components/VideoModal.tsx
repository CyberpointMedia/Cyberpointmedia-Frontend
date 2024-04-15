import styles from '@/styles/CustomCursor.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ModalProps {
  videoUrl: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ videoUrl, closeModal }) => {
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Enable body scroll when modal is closed
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.modalOverlay}
        initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={closeModal} // Close modal when clicking outside of it
      >
        <motion.div 
          className={styles.modalContent}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
          onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside it
        >
          <button className={styles.closeButton} onClick={closeModal}>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
          </button>
          <div className={styles.ModalVideoBox}>
            <video autoPlay loop controls className={styles.video}>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
