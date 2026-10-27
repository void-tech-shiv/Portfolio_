import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn, ExternalLink } from 'lucide-react';
import { type Certificate } from '../../data/certificates';
import { GlassButton } from '../common/GlassButton';
import styles from './CertificateViewer.module.css';

interface Props { certificate:Certificate; onClose:()=>void; }
export const CertificateViewer=({certificate,onClose}:Props)=>{
  const [zoomed,setZoomed]=useState(false);
  const ref=useRef<HTMLDivElement>(null);
  const close=useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    const previous=document.activeElement as HTMLElement|null,overflow=document.body.style.overflow;
    document.body.style.overflow='hidden';close.current?.focus();
    const key=(e:KeyboardEvent)=>{
      if(e.key==='Escape')onClose();
      if(e.key==='Tab'&&ref.current){
        const controls=Array.from(ref.current.querySelectorAll<HTMLElement>('button,[href]'));
        if(!controls.length)return;
        if(e.shiftKey&&document.activeElement===controls[0]){e.preventDefault();controls[controls.length-1].focus();}
        else if(!e.shiftKey&&document.activeElement===controls[controls.length-1]){e.preventDefault();controls[0].focus();}
      }
    };
    document.addEventListener('keydown',key);
    return()=>{document.body.style.overflow=overflow;document.removeEventListener('keydown',key);previous?.focus();};
  },[onClose]);
  return <div className={styles.overlay} onMouseDown={onClose}>
    <motion.div ref={ref} role="dialog" aria-modal="true" aria-labelledby="certificate-dialog-title" className={styles.viewer}
      onMouseDown={e=>e.stopPropagation()} initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.97}}>
      <div className={styles.header}><div className={styles.meta}><span className={styles.label}>CERTIFICATE / {certificate.id.toUpperCase()}</span><h2 id="certificate-dialog-title" className={styles.title}>{certificate.title}</h2></div>
        <button type="button" ref={close} className={styles.closeBtn} onClick={onClose} aria-label="Close certificate"><X size={24}/></button>
      </div>
      <button type="button" className={styles.imageContainer} onClick={()=>setZoomed(!zoomed)} aria-label={zoomed?'Zoom out certificate':'Zoom in certificate'} aria-pressed={zoomed}>
        <span className={styles.zoomHint}><ZoomIn size={19}/> {zoomed?'ZOOM OUT':'ZOOM IN'}</span>
        <img src={certificate.image} alt={certificate.title} className={styles.image+(zoomed?' '+styles.zoomed:'')} decoding="async"/>
      </button>
      <div className={styles.footer}><div className={styles.info}><span><strong>ISSUER:</strong> {certificate.issuer}</span><span><strong>DATE:</strong> {certificate.date}</span></div>
        <div className={styles.actions}>{certificate.verificationUrl?<GlassButton href={certificate.verificationUrl} icon={<ExternalLink size={18}/>}>VERIFY CREDENTIAL</GlassButton>:<span className={styles.info}>External verification link not provided</span>}</div>
      </div>
    </motion.div>
  </div>;
};
