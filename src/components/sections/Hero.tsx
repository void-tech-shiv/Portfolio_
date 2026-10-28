import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Code2, Github, Mail } from 'lucide-react';
import { projects } from '../../data/projects';
import { Avatar3D } from './Avatar3D';
import styles from './Hero.module.css';

const featured = projects.filter(project => ['passcheck', 'pdfkit', 'skilltrack'].includes(project.id));
const services = [
  { number: '01', title: 'Business websites', detail: 'Fast, responsive one-page sites with clear services, a contact flow and basic search setup.' },
  { number: '02', title: 'Developer portfolios', detail: 'Personal sites that make projects, skills and experience easy to explore.' },
  { number: '03', title: 'Fixes and improvements', detail: 'UI polish, responsive fixes, performance clean-up and deployment help for existing sites.' },
];

export const Hero = () => {
  const [showExperiment, setShowExperiment] = useState(false);

  return (
    <>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}><span className={styles.statusDot} /> SHIVANSHU SATYAJEET <span className={styles.eyebrowDivider}>/</span> SOFTWARE DEVELOPER</p>
          <h1 id="home-title">Thoughtful websites.<br /><span>Software that works.</span></h1>
          <p className={styles.lead}>
            I'm Shivanshu, a B.Tech AI & Data Science student at KL University. I work with React, TypeScript and Python to build websites, practical tools and software projects.
          </p>
          <div className={styles.actions}>
            <Link to="/projects" className={styles.primary}>Explore my projects <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <a href="mailto:itsupport.shiv@gmail.com?subject=Website%20project%20enquiry" className={styles.secondary}>Discuss a project <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <div className={styles.facts} aria-label="Quick facts">
            <div><span>Focus</span><strong>Web development · AI · Security</strong></div>
            <div><span>Currently</span><strong>Building projects & taking enquiries</strong></div>
          </div>
        </div>
        <div className={styles.portraitShell}>
          <div className={styles.portrait}>
            <img src="/assets/photos/portrait.png" alt="Portrait of Shivanshu Satyajeet" />
          </div>
          <div className={styles.portraitNote}><span>SHIVANSHU / 2026</span><span>INDIA</span></div>
        </div>
      </section>

      <section className={styles.work} aria-labelledby="selected-work">
        <div className={styles.sectionIntro}>
          <div><p className={styles.sectionLabel}>01 / SELECTED WORK</p><h2 id="selected-work">Projects worth exploring.</h2></div>
          <Link className={styles.textLink} to="/projects">View all projects <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className={styles.projectGrid}>
          {featured.map(project => (
            <article className={styles.projectCard} key={project.id}>
              <div className={styles.projectMedia}>
                {project.image
                  ? <img src={project.image} alt={project.title + ' project preview'} loading="lazy" decoding="async" />
                  : <Code2 size={38} aria-hidden="true" />}
                <span className={styles.projectIndex}>{project.number}</span>
              </div>
              <div className={styles.projectContent}>
                <p className={styles.projectMeta}>{project.category} <span aria-hidden="true">·</span> {project.status}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tech}>{project.technologies.slice(0, 3).map(t => <span key={t}>{t}</span>)}</div>
                <div className={styles.projectActions}>
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Source code <Github size={15} aria-hidden="true" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.services} aria-labelledby="what-i-do">
        <div className={styles.sectionIntro}>
          <div><p className={styles.sectionLabel}>02 / HOW I CAN HELP</p><h2 id="what-i-do">Simple scope. Solid execution.</h2></div>
          <p className={styles.sectionAside}>For small businesses, students and teams that need a website or a reliable fix — without unnecessary complexity.</p>
        </div>
        <div className={styles.serviceList}>
          {services.map(service => (
            <div className={styles.service} key={service.number}>
              <span className={styles.serviceNumber}>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
              <ArrowDownRight className={styles.serviceArrow} size={20} aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.experiment} aria-labelledby="experiment-heading">
        <div className={styles.experimentCopy}>
          <p className={styles.sectionLabel}>03 / SIDE PROJECT</p>
          <h2 id="experiment-heading">An interactive experiment.</h2>
          <p>I also like building things just to understand how they work. This WebGL character is a small graphics experiment — not a 3D scan of me.</p>
          <button className={styles.experimentButton} type="button" onClick={() => setShowExperiment(value => !value)} aria-expanded={showExperiment} aria-controls="model-preview">
            {showExperiment ? 'Close 3D preview' : 'Open 3D preview'} <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>
        {showExperiment && <div className={styles.modelFrame} id="model-preview"><Avatar3D /></div>}
      </section>

      <section className={styles.contact} aria-labelledby="contact-heading">
        <div>
          <p className={styles.sectionLabel}>HAVE SOMETHING IN MIND?</p>
          <h2 id="contact-heading">Tell me what you're building.</h2>
          <p>Share a short brief, the timeline and what you need. I'll reply with questions or a suggested next step.</p>
        </div>
        <a href="mailto:itsupport.shiv@gmail.com?subject=Let%27s%20work%20together" className={styles.contactLink}>Get in touch <Mail size={19} aria-hidden="true" /></a>
      </section>
    </>
  );
};
