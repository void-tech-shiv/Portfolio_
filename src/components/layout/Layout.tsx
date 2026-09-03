import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Background } from './Background';
import { CustomCursor } from './CustomCursor';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Simulate system initialization sequence
    const timer = setTimeout(() => {
      setInitializing(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {initializing && (
          <motion.div 
            className={styles.loadingScreen}
            key="loading"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div 
              className={styles.loadingIconWrapper}
              animate={{ 
                scale: [0.95, 1.05, 0.95],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Terminal size={48} className={styles.loadingIcon} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <Background />
      <div className={styles.appFrame} />
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <Navbar />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </>
  );
};
