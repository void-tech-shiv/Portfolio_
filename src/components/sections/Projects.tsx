import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { projects, type Project } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import styles from './Projects.module.css';

const categories = ['ALL', 'SOFTWARE', 'AI / ML', 'WEB', 'SECURITY'];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader 
          title="PROJECTS" 
          number="04" 
        />
        
        <p className={styles.sectionDesc}>
          A selection of software systems, applications and engineering projects built by Shivanshu.
          <span className={styles.projectCount}>04 PROJECTS</span>
        </p>

        <div className={styles.filters}>
          {categories.map(cat => (
            <button 
              key={cat}
              className={clsx(styles.filterBtn, filter === cat && styles.activeFilter)}
              onClick={() => setFilter(cat)}
            >
              {cat}
              {filter === cat && (
                <motion.div layoutId="activeFilter" className={styles.activeFilterBg} />
              )}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className={styles.grid}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className={styles.projectWrapper}
              >
                <ProjectCard 
                  project={project} 
                  onClick={() => setSelectedProject(project)} 
                />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};
