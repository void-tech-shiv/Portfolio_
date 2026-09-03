import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WelcomeScreen.module.css';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button after the text animation completes (approx 2.5 seconds)
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className={styles.overlay}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className={styles.content}>
        <motion.div 
          className={styles.greeting}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi there <span className={styles.wave}>👋</span>
        </motion.div>
        
        <motion.div 
          className={styles.message}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Welcome to my digital space.
        </motion.div>

        <div className={styles.actionContainer}>
          <AnimatePresence>
            {showButton && (
              <motion.button 
                className={styles.enterButton}
                onClick={onEnter}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <span className={styles.pulse}></span>
                INITIALIZE SYSTEM
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <div className={styles.gridOverlay}></div>
    </motion.div>
  );
};
