import { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { projects, projectStatuses, type Project, type ProjectCategory, type ProjectStatus } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import styles from './Projects.module.css';

const categories: Array<'ALL' | ProjectCategory> = ['ALL', 'SOFTWARE', 'AI / ML', 'WEB', 'SECURITY'];
const statusLabels: Record<ProjectStatus, string> = {
  'PUBLISHED DEMO': 'Published demo',
  'COMPLETED': 'Completed',
  'IN DEVELOPMENT': 'In development',
  'PROTOTYPE': 'Prototype',
};

export const Projects = () => {
  const [category, setCategory] = useState<'ALL' | ProjectCategory>('ALL');
  const [stage, setStage] = useState<'ALL' | ProjectStatus>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = projects.filter(project =>
    (category === 'ALL' || project.category === category) &&
    (stage === 'ALL' || project.status === stage)
  );

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="PROJECTS" number="04" />
        <div className={styles.introRow}>
          <p className={styles.sectionDesc}>
            Real repositories, working prototypes and shipped demos. Browse what I have built and what I'm still improving.
          </p>
          <span className={styles.projectCount}>{projects.length} SELECTED REPOSITORIES</span>
        </div>

        <div className={styles.statusOverview} aria-label="Project stage breakdown">
          {projectStatuses.map(status => (
            <button
              type="button"
              key={status}
              className={clsx(styles.statusSummary, stage === status && styles.statusSummaryActive)}
              onClick={() => setStage(current => current === status ? 'ALL' : status)}
              aria-pressed={stage === status}
            >
              <strong>{projects.filter(p => p.status === status).length}</strong>
              <span>{statusLabels[status]}</span>
            </button>
          ))}
        </div>

        <div className={styles.toolbar}>
          <div>
            <p className={styles.filterLabel}>CATEGORY</p>
            <div className={styles.filters} role="group" aria-label="Filter projects by category">
              {categories.map(cat => (
                <button key={cat} type="button"
                  className={clsx(styles.filterBtn, category === cat && styles.activeFilter)}
                  aria-pressed={category === cat} onClick={() => setCategory(cat)}>
                  {cat === 'ALL' ? 'All fields' : cat}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className={styles.filterLabel}>PROGRESS</p>
            <div className={styles.filters} role="group" aria-label="Filter projects by progress">
              <button type="button" className={clsx(styles.filterBtn, stage === 'ALL' && styles.activeFilter)}
                aria-pressed={stage === 'ALL'} onClick={() => setStage('ALL')}>All stages</button>
              {projectStatuses.map(status => <button type="button" key={status}
                className={clsx(styles.filterBtn, stage === status && styles.activeFilter)}
                aria-pressed={stage === status} onClick={() => setStage(status)}>{statusLabels[status]}</button>)}
            </div>
          </div>
        </div>

        <p className={styles.resultCount} role="status">{filteredProjects.length} of {projects.length} projects shown</p>
        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <div key={project.id} className={styles.projectWrapper}>
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length === 0 && <div className={styles.emptyState}>No projects match both filters. Try a different category or stage.</div>}
        <p className={styles.disclaimer}>Status reflects documented development milestones, not automatic uptime monitoring. Published demo links and complete feature flows may need independent verification.</p>
      </div>
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
};
