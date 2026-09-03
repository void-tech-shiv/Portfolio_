import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { skills } from '../../data/skills';
import { projects } from '../../data/projects';
import styles from './Skills.module.css';
import clsx from 'clsx';

export const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Find projects that use the hovered skill (case insensitive)
  const relatedProjects = hoveredSkill 
    ? projects.filter(p => p.technologies.some(t => t.toLowerCase() === hoveredSkill.toLowerCase()))
    : [];

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="SKILLS" number="05" />
        
        <div className={styles.grid}>
          <div className={styles.skillsArea}>
            {skills.map((category, idx) => (
              <motion.div 
                key={category.title}
                className={styles.skillCluster}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.skillList}>
                  {category.skills.map(skill => (
                    <div 
                      key={skill}
                      className={clsx(styles.skillNode, hoveredSkill === skill && styles.activeNode)}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive HUD Panel for Related Projects */}
          <div className={styles.hudArea}>
            <GlassCard className={styles.hudPanel}>
              <div className={styles.hudHeader}>
                <span className={styles.hudLabel}>SYSTEM QUERY</span>
                <span className={styles.hudStatus}>{hoveredSkill ? 'ACTIVE' : 'IDLE'}</span>
              </div>
              
              <div className={styles.hudContent}>
                {hoveredSkill ? (
                  <motion.div
                    key={hoveredSkill}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h4 className={styles.hudTitle}>TARGET: <span>{hoveredSkill}</span></h4>
                    
                    {relatedProjects.length > 0 ? (
                      <>
                        <p className={styles.hudSubtitle}>VERIFIED IN PROJECTS:</p>
                        <ul className={styles.hudProjects}>
                          {relatedProjects.map(p => (
                            <li key={p.id}>{p.title}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className={styles.hudEmpty}>NO PUBLIC PROJECTS INDEXED.</p>
                    )}
                  </motion.div>
                ) : (
                  <div className={styles.hudIdle}>
                    <p>HOVER SKILL NODE TO QUERY DATABASE.</p>
                    <div className={styles.hudGrid} />
                  </div>
                )}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
