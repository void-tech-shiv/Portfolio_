import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn, ExternalLink } from 'lucide-react';
import { type Certificate } from '../../data/certificates';
import { GlassButton } from '../common/GlassButton';
import styles from './CertificateViewer.module.css';

interface CertificateViewerProps {
  certificate: Certificate;
  onClose: () => void;
}

export const CertificateViewer: React.FC<CertificateViewerProps> = ({ certificate, onClose }) => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <motion.div 
        className={styles.viewer}
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.label}>CERTIFICATE / {certificate.id.toUpperCase()}</span>
            <h3 className={styles.title}>{certificate.title}</h3>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.imageContainer} onClick={() => setZoomed(!zoomed)}>
          <div className={styles.zoomHint}>
            <ZoomIn size={20} />
            <span>CLICK TO {zoomed ? 'ZOOM OUT' : 'ZOOM IN'}</span>
          </div>
          <img 
            src={certificate.image} 
            alt={certificate.title} 
            className={`${styles.image} ${zoomed ? styles.zoomed : ''}`}
          />
        </div>

        <div className={styles.footer}>
          <div className={styles.info}>
            <span><strong>ISSUER:</strong> {certificate.issuer}</span>
            <span><strong>DATE:</strong> {certificate.date}</span>
          </div>
          
          <div className={styles.actions}>
            {certificate.verificationUrl && (
              <GlassButton href={certificate.verificationUrl} icon={<ExternalLink size={18} />}>
                VERIFY CREDENTIAL
              </GlassButton>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
