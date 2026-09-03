import React from 'react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.leftSide}>
            <p className={styles.tagline}>BUILDING DIGITAL SYSTEMS THAT SOLVE REAL PROBLEMS.</p>
            <p className={styles.subTagline}>Software Development <span className={styles.dot}>•</span> AI/ML <span className={styles.dot}>•</span> Web <span className={styles.dot}>•</span> Security</p>
          </div>
          
          <div className={styles.rightSide}>
            <span className={styles.connectLabel}>LET'S CONNECT</span>
            <div className={styles.socialLinks}>
              <a href="https://github.com/void-tech-shiv" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/shivanshu-satyajeet" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="mailto:itsupport.shiv@gmail.com" className={styles.socialIcon} aria-label="Email">
                <FiMail />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.divider} />
        
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>© 2026 Shivanshu Satyajeet. All rights reserved.</p>
          <button onClick={scrollToTop} className={styles.backToTop}>
            BACK TO TOP ↑
          </button>
        </div>

        {/* Decorative Bottom Accent */}
        <div className={styles.footerAccentLine} />
      </div>
    </footer>
  );
};
