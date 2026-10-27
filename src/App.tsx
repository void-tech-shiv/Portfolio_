import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { PageTransition } from './components/layout/PageTransition';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { RouteMeta } from './components/layout/RouteMeta';
import { CommandPalette } from './components/layout/CommandPalette';
import { ExperienceControls } from './components/layout/ExperienceControls';
import { NotFound } from './components/layout/NotFound';

const Hero = lazy(() => import('./components/sections/Hero').then(m => ({ default: m.Hero })));
const About = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })));
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const Experience = lazy(() => import('./components/sections/Experience').then(m => ({ default: m.Experience })));
const Skills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })));
const Certifications = lazy(() => import('./components/sections/Certifications').then(m => ({ default: m.Certifications })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));

export default function App() {
  const location = useLocation();
  return <>
    <RouteMeta />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<div className="route-loading" role="status">Loading experience…</div>}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
    <ExperienceControls />
    <CommandPalette />
  </>;
}
