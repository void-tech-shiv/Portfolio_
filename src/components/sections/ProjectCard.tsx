import { type Project } from '../../data/projects';
import { motion } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import clsx from 'clsx';
import styles from './ProjectCard.module.css';

interface Props { project: Project; onClick: () => void; }
export const ProjectCard = ({project,onClick}:Props) => (
  <motion.article layout initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.95}} transition={{duration:.3}} className={styles.card}>
    {project.image ? <div className={styles.imageContainer}><img src={project.image} alt={project.title+' screenshot'} className={styles.image} loading="lazy" decoding="async"/><div className={styles.imageOverlay}/></div>
      : <div className={styles.imagePlaceholder}><span className={styles.placeholderIcon}>&lt;/&gt;</span><div className={styles.scanline}/></div>}
    <div className={styles.content}>
      <div className={styles.header}><span className={styles.number}>PROJECT / {project.number}</span><span className={styles.status}>{project.status}</span></div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.footer}>
        <div className={styles.stack}>{project.technologies.slice(0,3).map(t=><span key={t} className={styles.tech}>{t}</span>)}{project.technologies.length>3&&<span className={styles.tech}>+{project.technologies.length-3}</span>}</div>
        <div className={styles.actions}>
          <button type="button" className={clsx(styles.actionBtn,styles.primaryBtn)} onClick={onClick} aria-label={'View details for '+project.title}>DETAILS <Eye size={15}/></button>
          {project.githubUrl&&<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} aria-label={'Source code for '+project.title}>GITHUB <ArrowUpRight size={14}/></a>}
          {project.liveUrl&&<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} aria-label={'Live demo of '+project.title}>LIVE <ArrowUpRight size={14}/></a>}
        </div>
      </div>
    </div>
  </motion.article>
);
