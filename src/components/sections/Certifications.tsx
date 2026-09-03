import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { certificates, type Certificate } from '../../data/certificates';
import { CertificateViewer } from './CertificateViewer';
import { ExternalLink } from 'lucide-react';
import styles from './Certifications.module.css';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="CERTIFICATIONS" number="06" />
        
        <div className={styles.vaultHeader}>
          <h2>VERIFIED CREDENTIAL VAULT</h2>
          <div className={styles.vaultStatus}>
            <span className={styles.statusDot} />
            SECURE CONNECTION
          </div>
        </div>

        <div className={styles.grid}>
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                interactive
                className={styles.card}
                onClick={() => setSelectedCert(cert)}
              >
                <div className={styles.cardInner}>
                  <div className={styles.imageWrapper}>
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className={styles.certImage}
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    <div className={styles.imageReflection} />
                  </div>
                  
                  <div className={styles.content}>
                    <div className={styles.cardHeader}>
                      <span className={styles.issuer}>{cert.issuer}</span>
                      <span className={styles.date}>{cert.date}</span>
                    </div>
                    
                    <h3 className={styles.title}>{cert.title}</h3>
                    
                    <div className={styles.cardFooter}>
                      <div className={styles.verifiedBadge}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        VERIFIED
                      </div>
                      
                      {cert.verificationUrl ? (
                      <a 
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewAction}
                        onClick={(e) => e.stopPropagation()}
                      >
                        VIEW
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className={styles.viewAction}>
                        VIEW
                        <ExternalLink size={14} />
                      </span>
                    )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateViewer 
            certificate={selectedCert} 
            onClose={() => setSelectedCert(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};
