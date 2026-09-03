import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { experience } from '../../data/experience';
import styles from './Experience.module.css';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="EXPERIENCE" number="04" />
        
        <div className={styles.timeline}>
          {experience.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.timelineNode} />
              
              <GlassCard interactive className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.roleInfo}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <span className={styles.organization}>{exp.organization}</span>
                  </div>
                  <div className={styles.metaInfo}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                </div>
                
                <ul className={styles.description}>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
