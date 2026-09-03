import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassPanel } from '../common/GlassPanel';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { Terminal, BrainCircuit, Globe, Lightbulb, ChevronRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="ABOUT" number="02" />
        
        {/* SECTION 1 — WHO I AM */}
        <motion.div 
          className={styles.introSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.introHeader}>
            <span className={styles.sysLabel}>SYS.IDENTITY</span>
            <span className={styles.sysLine}></span>
          </div>
          <p className={styles.introHighlight}>
            I'm Shivanshu Satyajeet, a B.Tech AI & Data Science student at KL University who enjoys turning ideas into working software.
          </p>
          <p className={styles.introText}>
            I am actively exploring software engineering, artificial intelligence, modern web development, and real-world problem-solving. My goal is to build digital systems that are secure, efficient, and genuinely useful.
          </p>
        </motion.div>

        <div className={styles.bentoGrid}>
          {/* SECTION 2 — WHAT I WORK ON */}
          <motion.div 
            className={styles.workOnSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.sectionLabel}>WHAT I WORK ON</h3>
            <div className={styles.workGrid}>
              <GlassPanel className={styles.workCard}>
                <Terminal className={styles.workIcon} size={20} />
                <h4>SOFTWARE</h4>
                <p>Building practical applications and developer-focused tools.</p>
              </GlassPanel>
              
              <GlassPanel className={styles.workCard}>
                <BrainCircuit className={styles.workIcon} size={20} />
                <h4>AI / DATA</h4>
                <p>Exploring Artificial Intelligence, Machine Learning and Data Analytics.</p>
              </GlassPanel>
              
              <GlassPanel className={styles.workCard}>
                <Globe className={styles.workIcon} size={20} />
                <h4>WEB</h4>
                <p>Building and maintaining modern web applications and digital platforms.</p>
              </GlassPanel>
              
              <GlassPanel className={styles.workCard}>
                <Lightbulb className={styles.workIcon} size={20} />
                <h4>PROBLEM SOLVING</h4>
                <p>Improving DSA, algorithms and programming through continuous practice.</p>
              </GlassPanel>
            </div>
          </motion.div>

          {/* SECTION 5 — CURRENT FOCUS (Side Panel) */}
          <motion.div 
            className={styles.focusSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.sectionLabel}>CURRENT FOCUS</h3>
            <GlassPanel className={styles.sidePanel}>
              <ul className={styles.focusList}>
                <li><ChevronRight size={14} className={styles.chevron} /> AI / ML</li>
                <li><ChevronRight size={14} className={styles.chevron} /> Software Engineering</li>
                <li><ChevronRight size={14} className={styles.chevron} /> Full-Stack Development</li>
                <li><ChevronRight size={14} className={styles.chevron} /> Cybersecurity</li>
                <li><ChevronRight size={14} className={styles.chevron} /> DSA & Problem Solving</li>
              </ul>
            </GlassPanel>
          </motion.div>
        </div>

        {/* SECTION 3 — CURRENT ROLE */}
        <motion.div 
          className={styles.roleSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className={styles.sectionLabel}>CURRENTLY BUILDING</h3>
          <GlassPanel className={styles.rolePanel}>
            <div className={styles.roleHeader}>
              <div className={styles.roleTitleGroup}>
                <span className={styles.roleTitle}>TECHNICAL HEAD</span>
                <span className={styles.roleOrg}>Force Vega Racing</span>
              </div>
              <div className={styles.roleDate}>
                <span className={styles.statusDotAnimated}></span>
                September 2026 — Present
              </div>
            </div>
            
            <ul className={styles.roleResponsibilities}>
              <li>Managing the club website and digital platforms.</li>
              <li>Building and maintaining online registration systems for activities and events.</li>
              <li>Handling technical requirements and supporting digital operations.</li>
              <li>Working with the team to improve the student experience.</li>
            </ul>
          </GlassPanel>
        </motion.div>

        <div className={styles.splitGrid}>
          {/* SECTION 4 — HOW I LEARN */}
          <motion.div 
            className={styles.learnSection}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.sectionLabel}>HOW I LEARN</h3>
            <GlassPanel className={styles.textPanel}>
              <h4 className={styles.textPanelHighlight}>"I learn technology by building with it."</h4>
              <p>I enjoy experimenting with technologies, building projects, and solving problems hands-on. Debugging, improving existing implementations, and strengthening my development skills through practice are core to my methodology.</p>
            </GlassPanel>
          </motion.div>

          {/* SECTION 6 — BEYOND CODE */}
          <motion.div 
            className={styles.beyondSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className={styles.sectionLabel}>BEYOND CODE</h3>
            <GlassPanel className={styles.textPanel}>
              <h4 className={styles.textPanelHighlight}>"My work isn't limited to writing code."</h4>
              <p>As Technical Head, my role involves technical decision-making, understanding requirements, and working collaboratively with a team to solve practical problems. It's about maintaining real systems and improving how students interact with our digital platforms.</p>
            </GlassPanel>
          </motion.div>
        </div>



        {/* SECTION 8 — WHERE I'M HEADED */}
        <motion.div 
          className={styles.headedSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className={styles.sectionLabel}>WHAT I'M BUILDING TOWARD</h3>
          <GlassPanel className={styles.headedPanel}>
            <div className={styles.equation}>
              <span className={styles.eqItem}>Software Development</span>
              <span className={styles.eqPlus}>+</span>
              <span className={styles.eqItem}>AI / Data</span>
              <span className={styles.eqPlus}>+</span>
              <span className={styles.eqItem}>Problem Solving</span>
              <span className={styles.eqPlus}>+</span>
              <span className={styles.eqItem}>Real-world Experience</span>
            </div>
            <div className={styles.headedText}>
              <p>I am currently developing myself into a stronger software engineer by combining these disciplines.</p>
              <p className={styles.headedHighlight}>Currently seeking internship opportunities where I can learn, contribute, and grow.</p>
            </div>
          </GlassPanel>
        </motion.div>

      </div>
    </section>
  );
};
