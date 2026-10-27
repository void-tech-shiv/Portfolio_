import fs from 'node:fs';
import path from 'node:path';
const origin='https://itsupportshiv.vercel.app';
const pages=JSON.parse(fs.readFileSync(new URL('../portfolio-pages.json',import.meta.url),'utf8'));
const homepage=fs.readFileSync('dist/index.html','utf8');
const escape=(s)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
for(const page of pages){
  const out=path.join('dist',page.route,'index.html');
  const url=origin+'/'+page.route;
  const html=homepage
    .replace(/<title>[^<]*<\/title>/,()=>'<title>'+escape(page.title)+'</title>')
    .replace(/(<meta name="description" content=")[^"]*(")/,(_,a,b)=>a+escape(page.description)+b)
    .replace(/(<link rel="canonical" href=")[^"]*(")/,(_,a,b)=>a+url+b)
    .replace(/(<meta property="og:title" content=")[^"]*(")/,(_,a,b)=>a+escape(page.title)+b)
    .replace(/(<meta property="og:description" content=")[^"]*(")/,(_,a,b)=>a+escape(page.description)+b)
    .replace(/(<meta property="og:url" content=")[^"]*(")/,(_,a,b)=>a+url+b);
  fs.mkdirSync(path.dirname(out),{recursive:true});
  fs.writeFileSync(out,html);
  console.log('Generated',out);
}
