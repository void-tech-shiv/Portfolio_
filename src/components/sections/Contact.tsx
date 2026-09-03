import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { ArrowUpRight } from 'lucide-react';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaXTwitter, FaTelegram, FaSnapchat } from 'react-icons/fa6';
import styles from './Contact.module.css';

const contactMethods = [
  {
    label: "Email",
    value: "itsupport.shiv@gmail.com",
    button: "SEND EMAIL",
    url: "mailto:itsupport.shiv@gmail.com",
    brandIcon: <FiMail />,
    color: "#EA4335",
    rgb: "234, 67, 53"
  },
  {
    label: "GitHub",
    value: "void-tech-shiv",
    button: "VIEW GITHUB",
    url: "https://github.com/void-tech-shiv",
    brandIcon: <FaGithub />,
    color: "#FFFFFF",
    rgb: "255, 255, 255"
  },
  {
    label: "LinkedIn",
    value: "Shivanshu Satyajeet",
    button: "CONNECT",
    url: "https://www.linkedin.com/in/shivanshusatyajeet/",
    brandIcon: <FaLinkedin />,
    color: "#0A66C2",
    rgb: "10, 102, 194"
  },
  {
    label: "X / Twitter",
    value: "@xt_shivanshu",
    button: "VIEW PROFILE",
    url: "https://x.com/xt_shivanshu",
    brandIcon: <FaXTwitter />,
    color: "#FFFFFF",
    rgb: "255, 255, 255"
  },
  {
    label: "Telegram",
    value: "@xtshivanshu",
    button: "MESSAGE",
    url: "https://t.me/xtshivanshu",
    brandIcon: <FaTelegram />,
    color: "#229ED9",
    rgb: "34, 158, 217"
  },
  {
    label: "Snapchat",
    value: "@xt.shivanshu",
    button: "VIEW PROFILE",
    url: "https://www.snapchat.com/add/xt.shivanshu?share_id=eYUdlIRtpis&locale=en-IN",
    brandIcon: <FaSnapchat />,
    color: "#FFFC00",
    rgb: "255, 252, 0"
  }
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="CONTACT" number="07" />

        <div className={styles.grid}>
          {/* Left Side: Typography and Details */}
          <div className={styles.contentInfo}>
            <motion.h2 
              className={styles.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              LET'S BUILD<br />
              <span className={styles.accentText}>SOMETHING</span><br />
              INTERESTING.
            </motion.h2>
            
            <motion.p 
              className={styles.copy}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have an idea, project, collaboration, or opportunity? Let's build something useful together.
            </motion.p>

            <motion.div
              className={styles.statusIndicator}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className={styles.statusDot} />
              AVAILABLE FOR OPPORTUNITIES
            </motion.div>

            <motion.div 
              className={styles.contactDetails}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.detailGroup}>
                <span className={styles.label}>EMAIL</span>
                <span className={styles.value}>itsupport.shiv@gmail.com</span>
              </div>
              
              <div className={styles.detailGroup}>
                <span className={styles.label}>AVAILABLE FOR</span>
                <span className={styles.valueLight}>Projects • Collaborations • Internships • Technical Opportunities</span>
              </div>

              <div className={styles.detailGroup}>
                <span className={styles.label}>LOCATION</span>
                <span className={styles.valueLight}>India</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Contact Cards Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard className={styles.panelContainer}>
              <div className={styles.panelHeader}>
                <h3 className={styles.panelTitle}>CONNECT WITH ME</h3>
              </div>
              
              <div className={styles.cardsGrid}>
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactCard}
                    style={{ '--brand-color': method.color, '--brand-rgb': method.rgb } as React.CSSProperties}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className={styles.cardLeft}>
                      <div className={styles.cardIconContainer}>
                        {method.brandIcon}
                      </div>
                      <div className={styles.cardInfo}>
                        <span className={styles.cardLabel}>{method.label}</span>
                        <span className={styles.cardValue}>{method.value}</span>
                      </div>
                    </div>
                    
                    <div className={styles.cardAction}>
                      {method.button}
                      <ArrowUpRight size={16} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
