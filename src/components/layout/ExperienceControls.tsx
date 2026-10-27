import { useEffect, useState } from 'react';
import { Palette, Waves, VolumeX } from 'lucide-react';
import styles from './ExperienceControls.module.css';

export function ExperienceControls() {
  const [violet, setViolet] = useState(() => localStorage.getItem('portfolio-accent') === 'violet');
  const [reduced, setReduced] = useState(() => localStorage.getItem('portfolio-motion') === 'reduce' || (!localStorage.getItem('portfolio-motion') && window.matchMedia('(prefers-reduced-motion: reduce)').matches));
  useEffect(() => {
    document.documentElement.dataset.accent = violet ? 'violet' : 'cyan';
    document.documentElement.dataset.reduceMotion = String(reduced);
  }, [violet, reduced]);
  function changeAccent() {
    const value = !violet;
    setViolet(value);
    document.documentElement.dataset.accent = value ? 'violet' : 'cyan';
    localStorage.setItem('portfolio-accent', value ? 'violet' : 'cyan');
  }
  function changeMotion() {
    const value = !reduced;
    setReduced(value);
    document.documentElement.dataset.reduceMotion = String(value);
    localStorage.setItem('portfolio-motion', value ? 'reduce' : 'full');
  }
  return (
    <div className={styles.controls} aria-label="Experience preferences">
      <button type="button" onClick={changeAccent} aria-label={violet ? 'Switch to cyan accent' : 'Switch to violet accent'} title="Change accent palette"><Palette size={17} /></button>
      <button type="button" onClick={changeMotion} aria-label={reduced ? 'Enable motion effects' : 'Reduce motion effects'} title={reduced ? 'Enable motion' : 'Reduce motion'} aria-pressed={reduced}>
        {reduced ? <VolumeX size={17} /> : <Waves size={17} />}
      </button>
    </div>
  );
}
