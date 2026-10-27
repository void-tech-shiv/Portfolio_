import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, ArrowUpRight, Command } from 'lucide-react';
import styles from './CommandPalette.module.css';

const pages = [
  ['Home','/','3D experience and introduction'],
  ['About','/about','Who I am'],
  ['Projects','/projects','Software and engineering work'],
  ['Experience','/experience','Technical roles'],
  ['Skills','/skills','Tools and technologies'],
  ['Certifications','/certifications','Courses and credentials'],
  ['Contact','/contact','Collaborations and opportunities'],
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault(); setOpen(v => !v);
      }
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (open) { searchRef.current?.focus(); document.body.style.overflow = 'hidden'; }
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  const matches = useMemo(() => pages.filter(p => p.join(' ').toLowerCase().includes(query.toLowerCase().trim())), [query]);
  function go(path: string) { navigate(path); setOpen(false); setQuery(''); }
  return (
    <>
      <button type="button" className={styles.trigger} onClick={() => setOpen(true)} title="Search site (Ctrl+K)" aria-label="Open site command menu">
        <Search size={15} /><span>Quick jump</span><kbd>⌘ K</kbd>
      </button>
      {open && <div className={styles.backdrop} onMouseDown={() => setOpen(false)}>
        <section className={styles.dialog} role="dialog" aria-modal="true" aria-label="Quick navigation" onMouseDown={e => e.stopPropagation()}>
          <div className={styles.search}><Command size={19} /><input ref={searchRef} value={query} onChange={e => setQuery(e.target.value)} placeholder="Where would you like to go?" aria-label="Filter portfolio pages" onKeyDown={e => { if (e.key === 'Enter' && matches[0]) go(matches[0][1]); }} /><button onClick={() => setOpen(false)}>ESC</button></div>
          <div className={styles.results}>
            {matches.length ? matches.map(item => <button type="button" key={item[1]} onClick={() => go(item[1])}><span><strong>{item[0]}</strong><small>{item[2]}</small></span><ArrowUpRight size={17} /></button>) : <p>No pages match that search.</p>}
          </div>
          <div className={styles.help}>Enter opens first result · Escape closes</div>
        </section>
      </div>}
    </>
  );
}
