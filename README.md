# purvaxx.github.io

Personal portfolio of Purva A, built with React, three.js (react-three-fiber) and Framer Motion.

- **Intro**: sticker-style mascots pop in, then a scalloped curtain lifts.
- **Hero**: a 3D mascot that follows your cursor.
- **Stack**: two logo marquees scrolling in opposite directions.
- **Projects**: every public, non-fork repo from github.com/Purvaxx, fetched live, with a snapshot baked in at deploy time as a fallback.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The previous single-file site is kept at `legacy/index.html`.
