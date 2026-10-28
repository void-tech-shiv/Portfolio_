import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <Link to="/" className={styles.name}>Shivanshu Satyajeet<span>.</span></Link>
          <p>Software developer working on useful products, websites and tools.</p>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className={styles.social}>
          <a href="https://github.com/void-tech-shiv" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={20}/></a>
          <a href="https://www.linkedin.com/in/shivanshusatyajeet/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={20}/></a>
          <a href="mailto:itsupport.shiv@gmail.com" aria-label="Email"><Mail size={20}/></a>
          <a href="https://wa.me/917541910379?text=Hi%20Shivanshu%2C%20I%27d%20like%20to%20discuss%20a%20website%20project." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp at +91 75419 10379"><FaWhatsapp size={20}/></a>
          <a href="https://t.me/xtshivanshu" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><ArrowUpRight size={20}/></a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2026 Shivanshu Satyajeet</span>
        <span>Built with React and TypeScript.</span>
      </div>
    </div>
  </footer>
);
