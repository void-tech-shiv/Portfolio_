import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { GlassButton } from '../common/GlassButton';
import { ArrowRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';
import portraitImg from '../../../public/assets/photos/portrait.png';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  // Reactive portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const portraitX = useSpring(mouseX, springConfig);
  const portraitY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // Max 15px movement
    const y = (e.clientY / innerHeight - 0.5) * 30;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section id="home" className={styles.heroSection} onMouseMove={handleMouseMove}>
      <div className={styles.container}>
        
        <div className={styles.content}>


          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            SHIVANSHU<br />
            SATYAJEET
          </motion.h1>

          <motion.div 
            className={styles.roles}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2>SOFTWARE DEVELOPER</h2>
            <div className={styles.tags}>
              <span className={styles.tag}>AI / ML</span>
              <span className={styles.tagDot}>•</span>
              <span className={styles.tag}>WEB</span>
              <span className={styles.tagDot}>•</span>
              <span className={styles.tag}>SECURITY</span>
            </div>
          </motion.div>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            I BUILD DIGITAL SYSTEMS THAT SOLVE REAL PROBLEMS.<br /><br />
            <span style={{ opacity: 0.8, fontSize: '0.9em', lineHeight: '1.6', display: 'inline-block' }}>
              I am a software developer who enjoys building practical software, AI/ML systems, web applications, and security-focused tools.
            </span>
          </motion.p>

          <motion.div 
            className={styles.secondaryRole}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className={styles.roleLabel}>TECHNICAL HEAD</span>
            <span className={styles.roleOrg}>FORCE VEGA RACING</span>
          </motion.div>

          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <GlassButton onClick={() => navigate('/projects')} icon={<ArrowRight size={18} />}>
              EXPLORE PROJECTS
            </GlassButton>
            <GlassButton href="/assets/resume.pdf" variant="secondary" icon={<Download size={18} />}>
              VIEW RESUME
            </GlassButton>
          </motion.div>
        </div>

        <motion.div 
          className={styles.visuals}
          style={{ y: y1 }}
        >
          <motion.div 
            className={styles.portraitContainer}
            style={{ x: portraitX, y: portraitY }}
          >
            {/* Ambient Lighting */}
            <div className={styles.ambientCyan} />
            <div className={styles.ambientPurple} />

            {/* Circular HUD */}
            <div className={styles.hudContainer}>
              <motion.div className={styles.hudCircleOuter} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} />
              <motion.div className={styles.hudCircleArc1} animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} />
              <motion.div className={styles.hudCircleArc2} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} />
              <div className={styles.hudTicks} />
            </div>

            {/* Premium Frame & Portrait */}
            <div className={styles.portraitWrapper}>
              <div className={styles.frameCornerTopLeft} />
              <div className={styles.frameCornerTopRight} />
              <div className={styles.frameCornerBottomLeft} />
              <div className={styles.frameCornerBottomRight} />
              
              <div className={styles.portraitInner}>
                <img 
                  src={portraitImg} 
                  alt="Shivanshu Satyajeet" 
                  className={styles.portraitImg}
                />
                <div className={styles.scanLine} />
                <div className={styles.portraitGlassOverlay} />
              </div>
            </div>

            {/* Identity Label */}
            <motion.div 
              className={styles.identityBadge}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <span className={styles.statusDot} />
              IDENTITY / VERIFIED
            </motion.div>

            {/* Technical Metadata Labels */}
            <div className={styles.metadataTopRight}>
              <span className={styles.metaLine}></span>
              <span>PROFILE / 001</span>
            </div>
            
            <div className={styles.metadataRight}>
              <span>SYSTEM / DEVELOPER</span>
              <span className={styles.metaLineShort}></span>
            </div>

            <div className={styles.metadataRightLower}>
              <span>AI / ML</span>
              <span className={styles.metaLineShort}></span>
            </div>

            <div className={styles.metadataBottomLeft}>
              <div className={styles.coordBox}>
                <span>LAT: 45.912</span>
                <span>LNG: -12.004</span>
              </div>
            </div>

            <div className={styles.metadataLeft}>
              <span className={styles.metaLineShort}></span>
              <span>BUILD / SHIP / IMPROVE</span>
            </div>

            {/* System Status Bar */}
            <motion.div 
              className={styles.systemStatusBar}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className={styles.statusLight} />
              <span className={styles.statusTextActive}>SYSTEM / ONLINE</span>
              <span className={styles.statusDivider}></span>
              <span>SOFTWARE</span>
              <span className={styles.statusDivider}></span>
              <span>AI / ML</span>
              <span className={styles.statusDivider}></span>
              <span>SECURITY</span>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
