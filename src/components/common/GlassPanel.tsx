import React from 'react';
import clsx from 'clsx';
import styles from './GlassPanel.module.css';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({ children, className }) => {
  return (
    <div className={clsx(styles.panel, className)}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
