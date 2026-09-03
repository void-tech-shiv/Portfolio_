import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { PageTransition } from './components/layout/PageTransition';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { WelcomeScreen } from './components/layout/WelcomeScreen';
import { AudioController } from './components/layout/AudioController';

function App() {
  const location = useLocation();
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('bg-audio') as HTMLAudioElement;
    const targetVolume = 0.15;
    let hasStarted = false;
    let fadeInterval: number;
    
    if (audio) {
      audio.volume = 0;
      
      const fadeIn = () => {
        let vol = 0;
        fadeInterval = window.setInterval(() => {
          vol += 0.01;
          if (vol >= targetVolume) {
            audio.volume = targetVolume;
            window.clearInterval(fadeInterval);
          } else {
            audio.volume = vol;
          }
        }, 100);
      };

      const handleInteraction = () => {
        if (hasStarted) return;
        hasStarted = true;
        
        audio.play().then(() => {
          fadeIn();
        }).catch(e => console.warn("Playback failed:", e));
        
        ['click', 'keydown', 'touchstart', 'mousemove'].forEach(evt => 
          document.removeEventListener(evt, handleInteraction)
        );
      };

      // Attempt autoplay
      audio.play().then(() => {
        hasStarted = true;
        fadeIn();
      }).catch((error) => {
        console.warn("Autoplay blocked. Waiting for interaction.", error);
        ['click', 'keydown', 'touchstart', 'mousemove'].forEach(evt => 
          document.addEventListener(evt, handleInteraction)
        );
      });
    }

    return () => {
      if (fadeInterval) window.clearInterval(fadeInterval);
    };
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <>
      <audio id="bg-audio" loop preload="auto">
        <source src="/audio/portfolio-ambient.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {!hasEntered && <WelcomeScreen onEnter={handleEnter} />}
      </AnimatePresence>

      {hasEntered && <AudioController audioElementId="bg-audio" />}

      <Layout>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname}>
          <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
          <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
          <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default App;
