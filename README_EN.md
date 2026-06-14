# Retro Pixel Art Portfolio & Blog Starter Template (Next.js & Tailwind CSS)

A customizable retro 8-bit / 16-bit pixel art styled personal portfolio and blog starter theme template. Designed specifically for creative developers, pixel artists, indie game devs, and retro aesthetics lovers. Highly optimized for both traditional SEO (Search Engine Optimization) and modern GEO (Generative Engine Optimization / AI Search Engine Indexing).

## Performance & UX Optimization Highlights

* High-Performance Page Transitions: Rebuilt blog-card, works-card, and services-section. Replaced heavy JavaScript animation libraries (Framer Motion) with hardware-accelerated CSS Transitions and keyframe animations using `steps()` timing function. Cut First Load JS size down to just 193 bytes for listings, resulting in instant, millisecond-level route navigation.
* Robust Custom Cursor: Powered by CSS 3D transform (translate3d) for buttery smooth cursor tracking on desktops. Implemented touch detection to automatically destroy the custom cursor on mobile and tablet devices. Isolated cursor hiding to ensure the system cursor is immediately restored if the React application encounters a runtime crash.
* Zero Hydration Mismatches: Resolved the common next-themes React hydration mismatch error by adding a `mounted` state check inside the ThemeToggle component. This ensures HTML structures rendered on the server align perfectly with the client's initial render.
* Compact Footer Redesign: Streamlined the footer to remove redundant navigation blocks, presenting copyright information and social links in a clean, single-row flex layout.
* Built-in SEO & GEO Best Practices: Utilizes semantic HTML5 tags and precise heading hierarchies. Generates static exports (SSG) for all blogs and works, boosting crawler visibility and generative AI contextual understanding.

## Features

* Hero Section: retro computer display SVG / CSS animations to make your introduction stand out.
* About Section: Adaptive pixelated skill bars and chronological experience milestones.
* Connect Form: Pixel art styled inputs and validation, completed with a slide-in successful submission toast alert.
* Centralized Data Store (lib/data.ts): Manages all 6 blogs and 6 works, ensuring full dynamic path generation without dead links.
* Dark / Light Mode Toggle: Seamless color palette transitions in a blocky retro look.
* Localized Pixel Assets: Replaced high-noise stretched stock photos with high-fidelity, native pixel art WebP graphics in local directories.

## Tech Stack

* Core Framework: Next.js (App Router, Static Exports enabled)
* Render Engine: React 18 & TypeScript
* Styling Engine: Tailwind CSS & Autoprefixer
* Motion Engine: Compositor Thread CSS Animations & Framer Motion
* Icon Library: Lucide React
* Date Helpers: date-fns

## Getting Started & Installation

### Requirements

Ensure Node.js (v18+) and npm or yarn are installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd pixel-portfolio
   ```
3. Install the packages:
   ```bash
   npm install
   ```

### Development Server

Start the local server:
```bash
npm run dev
```
The site will run at `http://localhost:3000`.

### Production Build (Static Site Generation)

NextJS will compile optimized static files to the `out` folder, ready to be hosted on GitHub Pages, Vercel, Netlify, or Cloudflare Pages:
```bash
npm run build
```
