import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import styles from './Navbar.module.css';

const links = [
  ['HOME','/'],['ABOUT','/about'],['PROJECTS','/projects'],['EXPERIENCE','/experience'],
  ['SKILLS','/skills'],['CERTIFICATIONS','/certifications'],['CONTACT','/contact']
] as const;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 50);
    listener();window.addEventListener('scroll', listener, {passive:true});
    return () => window.removeEventListener('scroll', listener);
  }, []);
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if(!open)return;
    const previous = document.body.style.overflow;
    document.body.style.overflow='hidden';
    const esc=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false);};
    window.addEventListener('keydown',esc);
    return()=>{document.body.style.overflow=previous;window.removeEventListener('keydown',esc);};
  },[open]);
  return <>
    <motion.nav aria-label="Main navigation" className={clsx(styles.navbar,scrolled&&styles.scrolled)} initial={{y:-100,x:'-50%'}} animate={{y:0,x:'-50%'}} transition={{duration:.6}}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} aria-label="Shivanshu Satyajeet — home"><Terminal size={27} className={styles.logoIcon}/><span className={styles.brand}>SHIV.DEV</span></Link>
        <div className={styles.desktopNav}>
          {links.map(([name,path])=><Link key={path} to={path} className={clsx(styles.navLink,location.pathname===path&&styles.active)} aria-current={location.pathname===path?'page':undefined}>{name}</Link>)}
        </div>
        <span className={styles.status}><span className={styles.statusDot}/><span className={styles.statusText}>AVAILABLE</span></span>
        <button type="button" className={styles.mobileMenuBtn} onClick={()=>setOpen(true)} aria-controls="mobile-navigation" aria-expanded={open} aria-label="Open navigation menu"><Menu size={24}/></button>
      </div>
    </motion.nav>
    <AnimatePresence>
      {open&&<motion.nav id="mobile-navigation" role="navigation" aria-label="Mobile navigation" className={styles.mobileMenu} initial={{opacity:0,y:-16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{duration:.24}}>
        <div className={styles.mobileMenuHeader}><span className={styles.mobileMenuTitle}>NAVIGATE TO /</span><button type="button" onClick={()=>setOpen(false)} className={styles.closeBtn} aria-label="Close navigation"><X size={24}/></button></div>
        <div className={styles.mobileNavLinks}>{links.map(([name,path],i)=>
          <Link key={path} to={path} className={clsx(styles.mobileNavLink,location.pathname===path&&styles.active)} onClick={()=>setOpen(false)} aria-current={location.pathname===path?'page':undefined}><span className={styles.mobileNavNumber}>{String(i+1).padStart(2,'0')}</span>{name}</Link>
        )}</div>
      </motion.nav>}
    </AnimatePresence>
  </>;
};
