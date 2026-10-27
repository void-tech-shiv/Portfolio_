import { Link } from 'react-router-dom';
export function NotFound() {
  return <section style={{minHeight:'75vh',display:'grid',placeItems:'center',padding:'8rem 1.5rem',textAlign:'center'}}>
    <div><p style={{color:'var(--color-accent-primary)',fontFamily:'var(--font-mono)'}}>ERROR / 404</p>
    <h1 style={{fontSize:'clamp(3rem,8vw,7rem)',lineHeight:1.1}}>Lost in the matrix?</h1>
    <p style={{margin:'1.2rem 0 2rem',color:'var(--color-text-secondary)'}}>This route does not exist. Let's get you back on track.</p>
    <Link to="/" style={{padding:'1rem 1.5rem',border:'1px solid var(--color-accent-primary)',borderRadius:8,color:'var(--color-accent-primary)'}}>RETURN HOME →</Link></div>
  </section>;
}
