# Njabulo Mbele — Portfolio

A clean, professional portfolio website built with **Astro** and **Tailwind CSS v4**.
Showcases 8 fullstack projects from [github.com/njabulombele](https://github.com/njabulombele).

## Features

- **Zero JS by default** — Astro ships static HTML, only small islands of interactivity (theme toggle, project filter)
- **Light / dark mode** — respects system preference, toggle persists via localStorage
- **Responsive** — looks great on mobile, tablet, and desktop
- **Project filter** — filter by category (Fullstack, Backend, Frontend, AI/ML)
- **Scroll animations** — subtle reveal-on-scroll with IntersectionObserver
- **SEO optimized** — Open Graph tags, semantic HTML, fast load times
- **Accessible** — keyboard navigation, ARIA labels, reduced-motion support

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro 5](https://astro.build) | Static site framework (content-first, zero JS) |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling (via `@tailwindcss/vite`) |
| TypeScript | Type-safe data files |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4334)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg           # NM monogram favicon
├── src/
│   ├── components/
│   │   ├── Header.astro       # Sticky nav + theme toggle + mobile menu
│   │   ├── Hero.astro         # Name, title, avatar, CTAs
│   │   ├── About.astro        # Bio + highlight stats
│   │   ├── Skills.astro       # Categorized tech stack grid
│   │   ├── Projects.astro    # Filterable project grid
│   │   ├── ProjectCard.astro  # Individual project card
│   │   ├── Contact.astro      # GitHub + email CTAs
│   │   └── Footer.astro       # Brand, links, social
│   ├── data/
│   │   ├── profile.ts         # Edit your name, bio, skills, socials
│   │   └── projects.ts        # Edit your project list
│   ├── layouts/
│   │   └── Layout.astro        # HTML shell, SEO, fonts, theme script
│   ├── pages/
│   │   └── index.astro        # Assembles all sections
│   └── styles/
│       └── global.css         # Tailwind import + theme config
├── astro.config.mjs
└── package.json
```

## Customizing

### Update your info

Edit `src/data/profile.ts` to change:
- Your name, title, tagline
- About paragraphs
- Email address (replace the placeholder)
- Skills list
- Social links
- Resume URL (add a PDF to `public/` and uncomment the link)

### Add or edit projects

Edit `src/data/projects.ts`. Each project needs:
- `name` — repo name on GitHub
- `title` — display name
- `description` — what it does
- `tech` — array of technologies
- `category` — one of: `Fullstack`, `Backend`, `Frontend`, `AI/ML`
- `githubUrl` — link to the repo
- `demoUrl` — live demo link (or `null` if none)
- `featured` — `true` to show a "Featured" badge
- `year` — year string

### Change colors

The accent color is defined in `src/styles/global.css` under `@theme`.
Change the `--color-accent-*` values to rebrand.

## Deployment

The build output in `dist/` is fully static. Deploy to any static host:

- **Vercel** — `vercel` (auto-detects Astro)
- **Netlify** — `netlify deploy --prod` or drag `dist/` folder
- **GitHub Pages** — push `dist/` to `gh-pages` branch
- **Cloudflare Pages** — connect repo, build command `npm run build`, output `dist/`

## License

Personal portfolio for Njabulo Mbele. Feel free to use the structure as a template.
