import React from 'react';
import styles from './Background.module.css';

export const Background: React.FC = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.noiseOverlay} />
      <div className={styles.gridOverlay} />
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
      <div className={styles.gradientOrb3} />
    </div>
  );
};
