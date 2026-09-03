import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import styles from './GlassCard.module.css';
import clsx from 'clsx';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, interactive = false, ...props }) => {
  return (
    <motion.div
      className={clsx(styles.card, interactive && styles.interactive, className)}
      {...props}
    >
      {/* Background inner glow */}
      <div className={styles.ambientGlow} />
      
      {/* Moving glass reflection */}
      {interactive && <div className={styles.reflection} />}
      
      <div className={styles.content}>
        {children}
      </div>
    </motion.div>
  );
};
