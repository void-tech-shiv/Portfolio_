import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  number: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, number }) => {
  return (
    <div className={styles.headerContainer}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className={styles.accentBlock} />
        <span className={styles.title}>{title}</span>
        <span className={styles.separator}>/</span>
        <span className={styles.number}>{number}</span>
        <span className={styles.techLabel}>SYS.MODULE</span>
      </motion.div>
      <motion.div 
        className={styles.line}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
      />
    </div>
  );
};
