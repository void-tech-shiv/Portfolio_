import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, GitBranch, ExternalLink } from 'lucide-react';
import { type Project } from '../../data/projects';
import { GlassButton } from '../common/GlassButton';
import styles from './ProjectModal.module.css';

interface Props { project:Project; onClose:()=>void; }
export const ProjectModal = ({project,onClose}:Props) => {
  const dialog=useRef<HTMLDivElement>(null);
  const close=useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    const previous=document.activeElement as HTMLElement|null,overflow=document.body.style.overflow;
    document.body.style.overflow='hidden';close.current?.focus();
    const onKey=(e:KeyboardEvent)=>{
      if(e.key==='Escape')onClose();
      if(e.key==='Tab'&&dialog.current){
        const focusable=Array.from(dialog.current.querySelectorAll<HTMLElement>('button,[href],input,[tabindex]:not([tabindex="-1"])')).filter(e=>!e.hasAttribute('disabled'));
        if(!focusable.length)return;
        if(e.shiftKey&&document.activeElement===focusable[0]){e.preventDefault();focusable[focusable.length-1].focus();}
        else if(!e.shiftKey&&document.activeElement===focusable[focusable.length-1]){e.preventDefault();focusable[0].focus();}
      }
    };
    document.addEventListener('keydown',onKey);
    return()=>{document.body.style.overflow=overflow;document.removeEventListener('keydown',onKey);previous?.focus();};
  },[onClose]);
  return <div className={styles.overlay} onMouseDown={onClose}><motion.div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" className={styles.modal} onMouseDown={e=>e.stopPropagation()} initial={{opacity:0,y:25,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:15,scale:.98}} transition={{duration:.22}}>
    <div className={styles.header}><div className={styles.headerTop}><span className={styles.number}>PROJECT / {project.number}</span><button type="button" ref={close} className={styles.closeBtn} onClick={onClose} aria-label="Close project details"><X size={24}/></button></div>
      <h2 id="project-dialog-title" className={styles.title}>{project.title}</h2>
      <div className={styles.stack}>{project.technologies.map(t=><span className={styles.tech} key={t}>{t}</span>)}</div>
    </div>
    {project.image&&<div className={styles.heroImageContainer}><img loading="lazy" decoding="async" src={project.image} alt={project.title+' project screenshot'} className={styles.heroImage}/><div className={styles.heroOverlay}/></div>}
    <div className={styles.body}><div className={styles.section}><h3>OVERVIEW</h3><p>{project.overview}</p></div>
      <div className={styles.section}><h3>KEY FEATURES</h3><ul className={styles.list}>{project.features.map(f=><li key={f}>{f}</li>)}</ul></div>
      <div className={styles.grid}><div className={styles.section}><h3>PROBLEM</h3><p>{project.problem}</p></div><div className={styles.section}><h3>APPROACH</h3><p>{project.approach}</p></div></div>
      <div className={styles.section}><h3>ARCHITECTURE</h3><p>{project.architecture}</p></div>
    </div>
    <div className={styles.footer}>{project.githubUrl&&<GlassButton href={project.githubUrl} variant="secondary" icon={<GitBranch size={18}/>}>GITHUB REPO</GlassButton>}
      {project.liveUrl&&<GlassButton href={project.liveUrl} icon={<ExternalLink size={18}/>}>LIVE DEMO</GlassButton>}</div>
  </motion.div></div>;
};
