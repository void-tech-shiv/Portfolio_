import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { skills } from '../../data/skills';
import { projects } from '../../data/projects';
import clsx from 'clsx';
import styles from './Skills.module.css';

export const Skills = () => {
  const [hovered,setHovered]=useState<string|null>(null);
  const [selected,setSelected]=useState<string|null>(null);
  const active=hovered??selected;
  const related=active?projects.filter(p=>p.technologies.some(t=>t.toLowerCase()===active.toLowerCase())):[];
  return <section id="skills" className={styles.section}><div className={styles.container}>
    <SectionHeader title="SKILLS" number="05" />
    <div className={styles.grid}>
      <div className={styles.skillsArea}>
        {skills.map((group,i)=><motion.div key={group.title} className={styles.skillCluster} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.4,delay:i*.06}}>
          <h2 className={styles.categoryTitle}>{group.title}</h2>
          <div className={styles.skillList}>{group.skills.map(skill=><button type="button" key={skill}
            className={clsx(styles.skillNode,active===skill&&styles.activeNode)}
            aria-pressed={selected===skill} onMouseEnter={()=>setHovered(skill)}
            onMouseLeave={()=>setHovered(null)} onFocus={()=>setHovered(skill)}
            onBlur={()=>setHovered(null)} onClick={()=>setSelected(v=>v===skill?null:skill)}>{skill}</button>)}</div>
        </motion.div>)}
      </div>
      <div className={styles.hudArea}><GlassCard className={styles.hudPanel}>
        <div className={styles.hudHeader}><span className={styles.hudLabel}>SKILL EXPLORER</span><span className={styles.hudStatus}>{active?'ACTIVE':'IDLE'}</span></div>
        <div className={styles.hudContent}>{active?<div><h3 className={styles.hudTitle}>TARGET: <span>{active}</span></h3>
          {related.length?<><p className={styles.hudSubtitle}>FEATURED IN PROJECTS:</p><ul className={styles.hudProjects}>{related.map(p=><li key={p.id}>{p.title}</li>)}</ul></>:<p className={styles.hudEmpty}>NO PUBLIC PROJECTS INDEXED YET.</p>}
          </div>:<div className={styles.hudIdle}><p>SELECT ANY SKILL TO EXPLORE RELATED WORK.</p><div className={styles.hudGrid}/></div>}</div>
      </GlassCard></div>
    </div></div></section>;
};
