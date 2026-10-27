import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

export const Footer = () => (
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
            <a href="https://github.com/void-tech-shiv" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub profile"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shivanshusatyajeet/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn profile"><FaLinkedinIn /></a>
            <a href="mailto:itsupport.shiv@gmail.com" className={styles.socialIcon} aria-label="Email Shivanshu"><FiMail /></a>
            <a href="https://x.com/xt_shivanshu" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X profile"><FaXTwitter /></a>
          </div>
        </div>
      </div>
      <div className={styles.divider}/>
      <div className={styles.bottomSection}>
        <p className={styles.copyright}>© 2026 Shivanshu Satyajeet. Built with curiosity.</p>
        <Link to="/" className={styles.backToTop}>RETURN HOME ↑</Link>
      </div>
      <div className={styles.footerAccentLine}/>
    </div>
  </footer>
);
