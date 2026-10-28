import { type Project } from '../../data/projects';
import { motion } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import clsx from 'clsx';
import styles from './ProjectCard.module.css';

interface Props { project: Project; onClick: () => void; }
const stageLabel = {
  'PUBLISHED DEMO': 'Published demo',
  'COMPLETED': 'Completed',
  'IN DEVELOPMENT': 'In development',
  'PROTOTYPE': 'Prototype',
};
export const ProjectCard = ({ project, onClick }: Props) => (
  <motion.article layout initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:8}} transition={{duration:.24}} className={styles.card}>
    {project.image ?
      <div className={styles.imageContainer}><img src={project.image} alt={project.title + (project.imageKind === 'illustration' ? ' illustrated project preview' : ' project preview')} className={styles.image} loading="lazy" decoding="async"/><div className={styles.imageOverlay}/>{project.imageKind === 'illustration' && <span className={styles.previewLabel}>Illustrative preview</span>}</div>
      : <div className={styles.imagePlaceholder}><span className={styles.placeholderLetter} aria-hidden="true">{project.title.split(' ').map(word=>word.charAt(0)).slice(0,2).join('')}</span><span className={styles.placeholderType}>{project.category}</span></div>}
    <div className={styles.content}>
      <div className={styles.header}>
        <span className={styles.number}>PROJECT / {project.number}</span>
        <span className={styles.status} data-stage={project.status}><span className={styles.statusDot} />{stageLabel[project.status]}</span>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.statusDescription}><strong>Current stage:</strong> {project.statusNote}</div>
      <div className={styles.footer}>
        <div className={styles.stack}>{project.technologies.slice(0,3).map(t=><span key={t} className={styles.tech}>{t}</span>)}{project.technologies.length>3&&<span className={styles.tech}>+{project.technologies.length-3}</span>}</div>
        <div className={styles.actions}>
          <button type="button" className={clsx(styles.actionBtn,styles.primaryBtn)} onClick={onClick} aria-label={'View details for '+project.title}>Details <Eye size={15}/></button>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} aria-label={'Source code for '+project.title}>GitHub <ArrowUpRight size={14}/></a>
          {project.liveUrl&&<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} aria-label={'Open published demo for '+project.title}>Demo <ArrowUpRight size={14}/></a>}
        </div>
      </div>
    </div>
  </motion.article>
);
