import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, GitBranch, ExternalLink } from 'lucide-react';
import { type Project } from '../../data/projects';
import { GlassButton } from '../common/GlassButton';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <motion.div 
        className={styles.modal}
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <span className={styles.number}>PROJECT / {project.number}</span>
            <button className={styles.closeBtn} onClick={onClose}>
              <X size={24} />
            </button>
          </div>
          <h2 className={styles.title}>{project.title}</h2>
          <div className={styles.stack}>
            {project.technologies.map(tech => (
              <span key={tech} className={styles.tech}>{tech}</span>
            ))}
          </div>
        </div>
        
        {project.image && (
          <div className={styles.heroImageContainer}>
            <img src={project.image} alt={project.title} className={styles.heroImage} />
            <div className={styles.heroOverlay} />
          </div>
        )}
        
        <div className={styles.body}>
          <div className={styles.section}>
            <h3>OVERVIEW</h3>
            <p>{project.overview}</p>
          </div>
          
          <div className={styles.section}>
            <h3>KEY FEATURES</h3>
            <ul className={styles.list}>
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.section}>
              <h3>PROBLEM</h3>
              <p>{project.problem}</p>
            </div>
            
            <div className={styles.section}>
              <h3>APPROACH</h3>
              <p>{project.approach}</p>
            </div>
          </div>
          
          <div className={styles.section}>
            <h3>ARCHITECTURE</h3>
            <p>{project.architecture}</p>
          </div>
        </div>
        
        <div className={styles.footer}>
          {project.githubUrl && (
            <GlassButton href={project.githubUrl} variant="secondary" icon={<GitBranch size={18} />}>
              GITHUB REPO
            </GlassButton>
          )}
          {project.liveUrl && (
            <GlassButton href={project.liveUrl} icon={<ExternalLink size={18} />}>
              LIVE DEMO
            </GlassButton>
          )}
        </div>
      </motion.div>
    </div>
  );
};
