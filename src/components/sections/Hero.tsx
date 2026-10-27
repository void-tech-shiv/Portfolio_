import { motion } from 'framer-motion';
import { ArrowUpRight, MoveDown, Layers3, ShieldCheck, BrainCircuit, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar3D } from './Avatar3D';
import styles from './Hero.module.css';

const chapters = [
  {
    no:'01 / ENGINEERING', icon:<Layers3 size={19}/>, title:'I design. I build. I ship.',
    copy:'From ideas to working products, I focus on useful engineering and thoughtful interfaces.',
    tags:['TypeScript','React','Systems'], link:'/projects', action:'View shipped work'
  },
  {
    no:'02 / INTELLIGENCE', icon:<BrainCircuit size={19}/>, title:'Practical AI, not just prompts.',
    copy:'I experiment with machine learning and build software that puts data and automation to work.',
    tags:['AI / ML','Python','Data'], link:'/skills', action:'Explore my stack'
  },
  {
    no:'03 / SECURITY', icon:<ShieldCheck size={19}/>, title:'Build securely. Think critically.',
    copy:'Security-minded tools, privacy-first workflows and systems that take reliability seriously.',
    tags:['Security','Architecture','Privacy'], link:'/contact', action:'Work together'
  }
];
export const Hero = () => (
  <>
    <section className={styles.journey} id="journey">
      <div className={styles.copy}>
        <div className={styles.intro}>
          <motion.div className={styles.eyebrow} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.55}}>
            <span className={styles.pulse} /> OPEN TO INTERNSHIPS & COLLABORATIONS
          </motion.div>
          <motion.p className={styles.overline} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.15}}>SOFTWARE ENGINEER IN THE MAKING // INDIA</motion.p>
          <motion.h1 className={styles.title} initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.12}}>
            Building what<br/><em>comes next.</em>
          </motion.h1>
          <motion.p className={styles.subtitle} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.3}}>
            Hey, I'm <strong>Shivanshu Satyajeet.</strong> I build digital experiences, AI-powered tools and security-focused software — with an obsession for turning ideas into things that work.
          </motion.p>
          <motion.div className={styles.actions} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.42}}>
            <Link className={styles.primary} to="/projects">EXPLORE MY WORK <ArrowUpRight size={18}/></Link>
            <Link className={styles.secondary} to="/contact">LET'S CONNECT <Mail size={17}/></Link>
          </motion.div>
          <motion.div className={styles.footerLine} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.65}}>
            <div><span>NOW BUILDING</span><strong>Software • AI • Security</strong></div>
            <div><span>CURRENT ROLE</span><strong>Technical Head · Force Vega Racing</strong></div>
          </motion.div>
          <div className={styles.scrollHint}><MoveDown size={16}/> SCROLL TO EXPLORE THE SYSTEM</div>
        </div>
        <div className={styles.chapters}>
          {chapters.map(item=><motion.article key={item.no} className={styles.chapter} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.55}}>
            <div className={styles.chapterTop}><span>{item.no}</span><span>{item.icon}</span></div>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
            <div className={styles.tags}>{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
            <Link className={styles.chapterLink} to={item.link}>{item.action}<ArrowUpRight size={18}/></Link>
          </motion.article>)}
        </div>
      </div>
      <aside className={styles.avatarColumn} aria-label="Interactive full-body avatar scene">
        <Avatar3D />
        <div className={styles.avatarCaption}><span>SYS.001 / SHIVANSHU</span><span>REACTIVITY: ACTIVE</span></div>
      </aside>
    </section>
    <section className={styles.finalCTA} aria-labelledby="final-cta">
      <div className={styles.ctaGlow} aria-hidden="true"/>
      <span className={styles.ctaEyebrow}>NEXT MISSION / YOUR IDEA</span>
      <h2 id="final-cta">Let's make something<br/><em>extraordinary.</em></h2>
      <p>Looking for a developer who loves figuring things out? Let's talk.</p>
      <div className={styles.ctaLinks}>
        <Link className={styles.primary} to="/contact">START A CONVERSATION <ArrowUpRight size={18}/></Link>
        <a href="https://github.com/void-tech-shiv" rel="noopener noreferrer" target="_blank" className={styles.secondary}>GITHUB <Github size={18}/></a>
      </div>
    </section>
  </>
);
