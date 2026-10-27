# Shivanshu Satyajeet — Interactive Portfolio

React 19 / TypeScript / Vite portfolio featuring a scroll-controlled, dependency-free WebGL full-body avatar, a futuristic glass UI, and accessible project, skills, certification and contact pages.

## Features
- **3D avatar:** a stylized *procedural humanoid placeholder* rendered using WebGL 1 (no external 3D packages or GPU assets). It reacts to scroll progress and pointer movement.
- **Journey:** animated engineering, AI and security chapters and high-signal project and contact calls to action.
- **Quick navigation:** \`Ctrl/⌘ + K\` command palette.
- **Personalization:** cyan/violet accent and reduced-motion controls saved in browser local storage.
- **Accessibility:** keyboard navigable project details, certificate previews, skills, modal focus handling, skip link and mobile menu.
- **SEO:** route-specific static HTML metadata generated at build time, sitemap, robots and canonical URLs.
- **Performance:** route-level JS code splitting and lazy-loading for below-the-fold assets.

## Local development

\`\`\`sh
npm ci
npm run dev
\`\`\`

## Quality checks

\`\`\`sh
npm run lint
npm run build
node scripts/check-dist.mjs
npm run preview
\`\`\`

Quality checks also run on pull requests through GitHub Actions.

## Customizing your avatar

\`src/components/sections/Avatar3D.tsx\` procedurally assembles a **stylized robot**, **not an accurate 3D scan or likeness** of Shivanshu. To show a real full-body 3D representation, supply a properly licensed GLB/GLTF scan and integrate a model loader. Keep a light, static fallback for unsupported WebGL devices.

## Content and assets

Edit \`src/data/projects.ts\`, \`certificates.ts\`, \`experience.ts\`, \`skills.ts\` and \`social.ts\` to update profile details.

The former resume CTA was removed because \`public/assets/resume.pdf\` does not exist. Add a verified resume before restoring a download link. The missing ambient MP3 and intrusive auto-audio behavior were also removed.

## SEO caveat

Build script writes **route-specific metadata HTML shells**, not full SSR/prerendered React markup. Search engines with JS rendering can index client-rendered body content, but true server-side/prerendered route content would require a separate rendering solution.
