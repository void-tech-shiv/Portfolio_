import React from 'react';
import { GlassCard } from '../common/GlassCard';
import { type Project } from '../../data/projects';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import styles from './ProjectCard.module.css';
import clsx from 'clsx';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
      <GlassCard 
        interactive 
        className={styles.card}
        onClick={onClick}
      >
        {project.image ? (
          <div className={styles.imageContainer}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <div className={styles.imageOverlay} />
          </div>
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderIcon}>&lt;/&gt;</span>
            <div className={styles.scanline} />
          </div>
        )}
        
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.number}>PROJECT / {project.number}</span>
            <span className={styles.status}>{project.status}</span>
          </div>
          
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          
          <div className={styles.footer}>
            <div className={styles.stack}>
              {project.technologies.slice(0, 3).map(tech => (
                <span key={tech} className={styles.tech}>{tech}</span>
              ))}
              {project.technologies.length > 3 && (
                <span className={styles.tech}>+{project.technologies.length - 3}</span>
              )}
            </div>
            
            <div className={styles.actions}>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.actionBtn}
                  onClick={(e) => e.stopPropagation()}
                >
                  GITHUB REPO <ArrowUpRight size={14} />
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={clsx(styles.actionBtn, styles.primaryBtn)}
                  onClick={(e) => e.stopPropagation()}
                >
                  LIVE DEMO <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
