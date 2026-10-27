import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const origin = 'https://itsupportshiv.vercel.app';
const info: Record<string, { title: string; description: string }> = {
  '/': { title: 'Shivanshu Satyajeet — Software Developer', description: 'Explore Shivanshu Satyajeet’s software engineering, AI/ML, cybersecurity and web projects.' },
  '/about': { title: 'About Shivanshu Satyajeet', description: 'Learn about Shivanshu, a B.Tech AI & Data Science student building practical software systems.' },
  '/projects': { title: 'Software, AI & Security Projects — Shivanshu', description: 'Discover software, AI/ML, security and web projects with source code and working demos.' },
  '/experience': { title: 'Experience — Shivanshu Satyajeet', description: 'Explore technical leadership, engineering experience and development responsibilities.' },
  '/skills': { title: 'Technical Skills — Shivanshu Satyajeet', description: 'Explore programming, full-stack web development, AI/ML and cybersecurity skills.' },
  '/certifications': { title: 'Certifications — Shivanshu Satyajeet', description: 'Browse earned technical certificates and available verification links.' },
  '/contact': { title: 'Contact Shivanshu Satyajeet', description: 'Collaborate with Shivanshu on software engineering, web, AI and security projects.' }
};
function setMeta(key: string, value: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}
export function RouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = info[pathname] ?? { title: 'Page Not Found — Shivanshu Satyajeet', description: 'Explore Shivanshu Satyajeet’s portfolio.' };
    const url = origin + pathname;
    document.title = page.title;
    setMeta('description', page.description);
    setMeta('og:title', page.title, true);
    setMeta('og:description', page.description, true);
    setMeta('og:url', url, true);
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
    if (!info[pathname]) setMeta('robots', 'noindex,follow');
    else document.head.querySelector('meta[name="robots"]')?.remove();
  }, [pathname]);
  return null;
}
