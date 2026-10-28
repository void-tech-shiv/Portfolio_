import { ArrowUpRight, Github, Linkedin, Mail, Send } from 'lucide-react';
import styles from './Contact.module.css';

const links = [
  { label: 'Email', value: 'itsupport.shiv@gmail.com', url: 'mailto:itsupport.shiv@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'github.com/void-tech-shiv', url: 'https://github.com/void-tech-shiv', icon: Github },
  { label: 'LinkedIn', value: 'Shivanshu Satyajeet', url: 'https://www.linkedin.com/in/shivanshusatyajeet/', icon: Linkedin },
  { label: 'Telegram', value: '@xtshivanshu', url: 'https://t.me/xtshivanshu', icon: Send },
];

export const Contact = () => (
  <section className={styles.section} aria-labelledby="contact-title">
    <div className={styles.container}>
      <p className={styles.label}>CONTACT / PROJECT ENQUIRIES</p>
      <h1 id="contact-title">Let's work on<br /><span>something useful.</span></h1>
      <p className={styles.intro}>Need a website, portfolio or help fixing an existing project? Send me a brief note about what you're working on, your timeline and the main requirements.</p>
      <a className={styles.primary} href="mailto:itsupport.shiv@gmail.com?subject=Website%20project%20enquiry">Email me about your project <ArrowUpRight size={18} aria-hidden="true" /></a>
      <div className={styles.details}>
        <div><span>BEST FIRST STEP</span><p>Share the goal, deadline and any reference sites you like.</p></div>
        <div><span>AVAILABLE FOR</span><p>Freelance websites, collaboration and internship opportunities.</p></div>
      </div>
      <div className={styles.links}>
        {links.map(link => <a key={link.label} href={link.url} target={link.url.startsWith('mailto:') ? undefined : '_blank'} rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}>
          <link.icon size={21} aria-hidden="true" /><span><small>{link.label}</small><strong>{link.value}</strong></span><ArrowUpRight size={18} className={styles.arrow} aria-hidden="true" />
        </a>)}
      </div>
    </div>
  </section>
);
