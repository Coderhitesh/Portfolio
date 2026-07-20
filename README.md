# Hitesh Yadav — Portfolio

Next.js 15 (App Router, JavaScript) + Tailwind CSS 3. No TypeScript.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

> Fonts load from Google Fonts at build time (Bricolage Grotesque, Instrument Sans, IBM Plex Mono) — internet needed on first build.

## Edit content

All resume content lives in one file: `components/data.js`
(profile, stats, skills, experience, projects, education).

## Structure

```
app/
  layout.jsx      fonts + metadata (SEO/OG)
  page.jsx        section composition
  globals.css     theme, reveal animations, focus styles
components/
  data.js         ALL content here
  Navbar.jsx      sticky request-bar nav + mobile menu
  Hero.jsx        typed JSON "API response" hero
  Sections.jsx    marquee, about/stats, stack layers
  Work.jsx        experience timeline, projects grid
  Contact.jsx     POST /contact CTA + footer
```
