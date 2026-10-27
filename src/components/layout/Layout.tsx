import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Background } from './Background';
import { CustomCursor } from './CustomCursor';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './Layout.module.css';

export const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: .001 });
  return <>
    <CustomCursor />
    <Background />
    <div className={styles.appFrame} aria-hidden="true" />
    <motion.div className={styles.progressBar} style={{ scaleX }} aria-hidden="true" />
    <Navbar />
    <main id="main-content" className={styles.mainContent}>{children}</main>
    <Footer />
  </>;
};
