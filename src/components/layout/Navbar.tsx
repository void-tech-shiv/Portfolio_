import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import styles from './Navbar.module.css';
import clsx from 'clsx';

import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'EXPERIENCE', href: '/experience' },
  { name: 'SKILLS', href: '/skills' },
  { name: 'CERTIFICATIONS', href: '/certifications' },
  { name: 'CONTACT', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav 
        className={clsx(styles.navbar, scrolled && styles.scrolled)}
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.container}>
          <Link to="/" className={styles.logo} aria-label="Home">
            <Terminal className={styles.logoIcon} size={28} />
          </Link>

          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={clsx(styles.navLink, location.pathname === link.href && styles.active)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className={styles.status}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>ONLINE</span>
          </div>

          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Command Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileMenuHeader}>
              <span className={styles.mobileMenuTitle}>NAVIGATE TO</span>
              <button onClick={() => setMobileMenuOpen(false)} className={styles.closeBtn}>
                <X size={24} />
              </button>
            </div>
            <div className={styles.mobileNavLinks}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={clsx(styles.mobileNavLink, location.pathname === link.href && styles.active)}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className={styles.mobileNavNumber}>0{index + 1}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
