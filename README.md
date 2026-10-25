# purvaxx.github.io

Personal portfolio of Purva A, built with React, three.js (react-three-fiber) and Framer Motion.

- **Hero**: a 3D grid room with floating shapes (react-three-fiber), camera dolly-in and pointer parallax, plus a fan of featured project cards.
- **Stack**: two logo marquees scrolling in opposite directions.
- **Projects**: every public, non-fork repo from github.com/Purvaxx, fetched live, with a snapshot baked in at deploy time as a fallback. Write-ups for known repos live in `src/data.js` (`projectDetails`).

## Develop

```bash
npm install
npm run dev
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The previous single-file site is kept at `legacy/index.html`.
