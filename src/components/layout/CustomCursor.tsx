import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

export const CustomCursor=()=>{
  const x=useMotionValue(-100),y=useMotionValue(-100);
  const ringX=useSpring(x,{stiffness:260,damping:25}),ringY=useSpring(y,{stiffness:260,damping:25});
  const [active,setActive]=useState(false),[hover,setHover]=useState(false);
  useEffect(()=>{
    const media=window.matchMedia('(pointer: fine)');
    const setup=()=>{
      const allowed=media.matches&&document.documentElement.dataset.reduceMotion!=='true';
      setActive(allowed);document.documentElement.classList.toggle('custom-cursor-enabled',allowed);
    };
    setup();media.addEventListener('change',setup);
    const cursor=(e:MouseEvent)=>{x.set(e.clientX);y.set(e.clientY);};
    const over=(e:MouseEvent)=>{
      const target=e.target as HTMLElement|null;
      setHover(Boolean(target?.closest('a,button,[role="button"],input')));
    };
    const observer=new MutationObserver(setup);
    observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-reduce-motion']});
    window.addEventListener('mousemove',cursor,{passive:true});window.addEventListener('mouseover',over);
    return()=>{media.removeEventListener('change',setup);observer.disconnect();window.removeEventListener('mousemove',cursor);window.removeEventListener('mouseover',over);document.documentElement.classList.remove('custom-cursor-enabled');};
  },[x,y]);
  if(!active)return null;
  return <>
    <motion.div className={styles.cursorDot} style={{x,y,translateX:-4,translateY:-4,scale:hover?1.7:1}} aria-hidden="true"/>
    <motion.div className={styles.cursorRing} style={{x:ringX,y:ringY,translateX:-16,translateY:-16,scale:hover?1.5:1,opacity:hover?.8:.3}} aria-hidden="true"/>
  </>;
};
