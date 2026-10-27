import assert from 'node:assert/strict';
import fs from 'node:fs';
const routes=JSON.parse(fs.readFileSync('portfolio-pages.json','utf8'));
for(const file of ['dist/index.html','dist/robots.txt','dist/sitemap.xml','dist/favicon.svg',...routes.map(x=>'dist/'+x.route+'/index.html')]){
  assert.ok(fs.existsSync(file),'Expected built file: '+file);
}
const root=fs.readFileSync('dist/index.html','utf8');
assert.ok(root.includes('meta name="description"'),'Homepage description missing');
for(const page of routes) {
  const html=fs.readFileSync('dist/'+page.route+'/index.html','utf8');
  assert.ok(html.includes('<title>'+page.title+'</title>'),'Title missing: '+page.route);
  assert.ok(html.includes('rel="canonical" href="https://itsupportshiv.vercel.app/'+page.route+'"'),'Canonical missing: '+page.route);
}
console.log('Static SEO pages and assets verified');
