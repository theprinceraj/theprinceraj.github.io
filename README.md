<div align="center">
  <h1>theprinceraj.github.io</h1>
  <p><b>Personal Portfolio & Project Showcase</b></p>
  <p>
    <img src="https://avatars.githubusercontent.com/u/116755566?v=4" alt="Avatar" width="100" />
  </p>
</div>

---

## 🚀 Overview

This is the personal homepage, project showcase, blog index and contact point for <b>@theprinceraj</b>, built with **Next.js 16**, **React 18** and **Tailwind CSS**.

- **Live site:** [theprinceraj.in](https://theprinceraj.in)

## ✨ Features

- Responsive design for desktop, tablet, and mobile
- Featured projects, testimonials, toolbox and hobbies sections
- Blog index linking to posts on Medium
- Animated hero section (Framer Motion)
- SEO and AI-crawler files generated at build time: `sitemap.xml`, `robots.txt`, `rss.xml`, `llms.txt` and `llms.full.txt`
- JSON-LD structured data for search engines

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)
- [SVGR](https://react-svgr.com/) for SVG icons
- [Bun](https://bun.sh/) as the package manager

## 📁 Project Structure

```
├── .github/             # GitHub Pages redirect site and its workflow
├── public/              # Static files served as-is (images, resume and patent PDFs)
├── src/
│   ├── app/             # Pages, layout, and the sitemap/robots/rss/llms routes
│   ├── assets/          # SVG icons and images imported by components
│   ├── components/      # Reusable React components
│   ├── content/         # All site content (see below)
│   ├── lib/             # Builders for rss.xml, llms.txt and llms.full.txt
│   └── sections/        # Page sections (Hero, Projects, About, ...)
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## 📝 Editing Content

All text and data live in `src/content/`. Pages and the generated files read from there, so you edit each fact in one place.

| File | What it holds |
| --- | --- |
| `site-content.ts` | Site origin, email, blogs, footer links, testimonials, SEO keywords |
| `projects.ts` | Every project. Entries with `featured` appear as homepage cards; all of them appear in the llms files |
| `about-content.ts` | Toolbox items and hobbies |
| `llms-content.ts` | Profile text, expertise, patent, professional and freelance work used only by the llms files |

`sitemap.xml`, `robots.txt`, `rss.xml`, `llms.txt` and `llms.full.txt` are built from this content on every build. Do not add copies of them to `public/`.

## 🧑‍💻 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js 20+ with npm)

### Installation

```bash
$ git clone https://github.com/theprinceraj/theprinceraj.github.io.git
$ cd theprinceraj.github.io
$ bun install
```

### Development

```bash
$ bun run dev
```

Visit [http://localhost:4000](http://localhost:4000) to view the site.

### Build for Production

```bash
$ bun run build
$ bun run start
```

## 🚢 Deployment

The site is deployed by **Vercel**, which builds every push and serves [theprinceraj.in](https://theprinceraj.in). The text routes (`rss.xml`, `llms.txt`, `llms.full.txt`) use `export const dynamic = "force-static"` so they are prerendered at build time.

**GitHub Pages** does not host the site. It serves only `.github/pages-redirect/`, which sends visitors from `prince.is-a.dev` (and `theprinceraj.github.io`) to the same path on theprinceraj.in. Pages stays enabled because this repo holds the `prince.is-a.dev` domain, and other repos' Pages sites, such as [`/qoody/`](https://prince.is-a.dev/qoody/), are served under it. `.github/workflows/pages-redirect.yml` redeploys the redirect only when those files change.

## 📄 License

This project is open source and available under the MIT License.

---

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/theprinceraj">theprinceraj</a></sub>
</div>
