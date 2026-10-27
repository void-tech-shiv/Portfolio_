import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { certificates, type Certificate } from '../../data/certificates';
import { CertificateViewer } from './CertificateViewer';
import { ExternalLink, Eye } from 'lucide-react';
import styles from './Certifications.module.css';

export const Certifications=()=>{
  const [selected,setSelected]=useState<Certificate|null>(null);
  return <section id="certifications" className={styles.section}><div className={styles.container}>
    <SectionHeader title="CERTIFICATIONS" number="06"/>
    <div className={styles.vaultHeader}><h2>CREDENTIAL VAULT</h2><div className={styles.vaultStatus}><span className={styles.statusDot}/>LEARNING & GROWING</div></div>
    <div className={styles.grid}>{certificates.map((cert,i)=><motion.div key={cert.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.4,delay:(i%4)*.07}}>
      <GlassCard className={styles.card}>
        <div className={styles.cardInner}><div className={styles.imageWrapper}><img src={cert.image} alt={cert.title} className={styles.certImage} loading="lazy" decoding="async"/><div className={styles.imageReflection}/></div>
          <div className={styles.content}><div className={styles.cardHeader}><span className={styles.issuer}>{cert.issuer}</span><span className={styles.date}>{cert.date}</span></div>
            <h3 className={styles.title}>{cert.title}</h3>
            <div className={styles.cardFooter}>
              <span className={styles.verifiedBadge}>{cert.verificationUrl?'VERIFICATION LINK':'PREVIEW AVAILABLE'}</span>
              <button type="button" onClick={()=>setSelected(cert)} className={styles.viewAction} aria-label={'View '+cert.title}><Eye size={15}/> PREVIEW</button>
              {cert.verificationUrl&&<a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className={styles.viewAction} aria-label={'Verify '+cert.title}>VERIFY <ExternalLink size={14}/></a>}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>)}</div>
  </div>
  <AnimatePresence>{selected&&<CertificateViewer certificate={selected} onClose={()=>setSelected(null)}/>}</AnimatePresence>
  </section>;
};
