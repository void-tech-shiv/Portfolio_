import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import clsx from 'clsx';
import styles from './Navbar.module.css';

const desktopLinks = [
  ['Work', '/projects'], ['About', '/about'], ['Experience', '/experience'], ['Skills', '/skills']
] as const;
const mobileLinks = [
  ['Home', '/'], ...desktopLinks, ['Certifications', '/certifications'], ['Contact', '/contact']
] as const;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);


  return (
    <>
      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.container}>
          <Link className={styles.logo} to="/" aria-label="Shivanshu Satyajeet — home">
            <span className={styles.monogram}>SS<span>.</span></span>
            <span className={styles.logoLabel}>Shivanshu Satyajeet</span>
          </Link>
          <div className={styles.desktopNav}>
            {desktopLinks.map(([name, path]) =>
              <Link key={path} className={clsx(styles.navLink, location.pathname === path && styles.active)} to={path} aria-current={location.pathname === path ? 'page' : undefined}>{name}</Link>
            )}
          </div>
          <Link to="/contact" className={styles.contactButton}>Let's talk <ArrowUpRight size={15} aria-hidden="true" /></Link>
          <button className={styles.mobileMenuBtn} type="button" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-navigation"><Menu size={23} /></button>
        </div>
      </nav>
      {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className={styles.mobileMenu}>
        <div className={styles.mobileMenuHeader}>
          <span>MENU</span>
          <button type="button" className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close navigation"><X size={24} /></button>
        </div>
        <div className={styles.mobileNavLinks}>
          {mobileLinks.map(([name, path]) =>
            <Link to={path} key={path} className={clsx(styles.mobileNavLink, location.pathname === path && styles.active)} onClick={() => setOpen(false)} aria-current={location.pathname === path ? 'page' : undefined}>{name}</Link>
          )}
        </div>
        <a className={styles.mobileEmail} href="mailto:itsupport.shiv@gmail.com">itsupport.shiv@gmail.com <ArrowUpRight size={16} /></a>
      </nav>}
    </>
  );
};
