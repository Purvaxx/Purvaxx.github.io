import { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GITHUB_USER, curatedProjects } from '../data.js';
import { BlobSticker, GhostSticker, StarSticker, TermSticker } from './Stickers.jsx';

const palette = [
  { bg: '#c58cff', ink: '#1b0f2b' },
  { bg: '#ff5d5d', ink: '#2a0707' },
  { bg: '#5ec8ff', ink: '#06202e' },
  { bg: '#3ddc97', ink: '#04261a' },
  { bg: '#ffc53d', ink: '#2b1d00' },
  { bg: '#ff6a1a', ink: '#2b0f00' },
  { bg: '#ff8fd1', ink: '#2b0720' },
];
const mascots = [GhostSticker, BlobSticker, TermSticker, StarSticker];

const CACHE_KEY = 'purvaxx-repos-v1';

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function writeCache(v) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(v));
  } catch {
    /* storage unavailable */
  }
}

async function loadRepos() {
  const cached = readCache();
  if (cached?.length) return cached;
  // 1) live from GitHub, 2) snapshot baked in at deploy time
  const sources = [
    `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
    './repos.json',
  ];
  for (const url of sources) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();
      if (Array.isArray(data) && data.length) {
        writeCache(data);
        return data;
      }
    } catch {
      /* try next source */
    }
  }
  return [];
}

const prettify = (name) =>
  name
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (c) => c.toUpperCase());

function mergeProjects(repos) {
  const used = new Set();
  const list = repos
    .filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== `${GITHUB_USER.toLowerCase()}.github.io`)
    .map((r) => {
      const lower = r.name.toLowerCase();
      const cur = curatedProjects.find((c, i) => !used.has(i) && c.match.some((m) => lower.includes(m)));
      if (cur) used.add(curatedProjects.indexOf(cur));
      return {
        key: r.id,
        name: cur?.name || prettify(r.name),
        kicker: cur?.kicker || r.language || 'Project',
        description: cur?.description || r.description || 'A build from my GitHub. Open it to see the code.',
        tags: cur?.tags || [r.language, ...(r.topics || []).slice(0, 3)].filter(Boolean),
        url: r.html_url,
        homepage: r.homepage,
        stars: r.stargazers_count,
        updated: r.pushed_at,
      };
    });
  // Keep curated projects that aren't (yet) public repos.
  curatedProjects.forEach((c, i) => {
    if (!used.has(i)) {
      list.push({
        key: c.name,
        ...c,
        url: c.url || `https://github.com/${GITHUB_USER}`,
      });
    }
  });
  return list;
}

function Card({ p, i }) {
  const { bg, ink } = palette[i % palette.length];
  const Mascot = mascots[i % mascots.length];
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 18 });
  const baseTilt = [-2.5, 1.5, -1, 2.5, -1.8, 1][i % 6];

  return (
    <motion.a
      href={p.url}
      target="_blank"
      rel="noreferrer"
      className="pcard"
      style={{ '--bg': bg, '--ink': ink, rotateX: rx, rotateY: ry, rotate: baseTilt }}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 140, damping: 16, delay: (i % 3) * 0.08 }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 2 }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="pcard-top">
        <span className="pcard-kicker">{p.kicker}</span>
        {typeof p.stars === 'number' && <span className="pcard-stars">★ {p.stars}</span>}
      </div>
      <h3 className="pcard-title">{p.name}</h3>
      <p className="pcard-desc">{p.description}</p>
      <div className="pcard-tags">
        {p.tags?.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="pcard-foot">
        <span className="pcard-btn">View code ↗</span>
        {p.homepage && (
          <span
            className="pcard-btn ghost"
            onClick={(e) => {
              e.preventDefault();
              window.open(p.homepage, '_blank', 'noopener');
            }}
          >
            Live
          </span>
        )}
      </div>
      <div className="pcard-mascot">
        <Mascot size={96} />
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    let alive = true;
    loadRepos().then((r) => alive && setRepos(r));
    return () => {
      alive = false;
    };
  }, []);
  const projects = useMemo(() => mergeProjects(repos || []), [repos]);

  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <p className="eyebrow">// straight from github.com/{GITHUB_USER}</p>
        <h2 className="h2">
          Things I built <span className="hl hl-orange">on my own time.</span>
        </h2>
        <p className="lede">
          {repos === null
            ? 'Fetching repositories from GitHub…'
            : repos.length
              ? `${projects.length} projects, pulled live from GitHub. New repos show up here automatically.`
              : 'Highlights below. GitHub didn’t answer just now, so these are the hand-picked ones.'}
        </p>
        <div className="pgrid">
          {projects.map((p, i) => (
            <Card key={p.key} p={p} i={i} />
          ))}
        </div>
        <div className="center">
          <a className="btn btn-light" href={`https://github.com/${GITHUB_USER}?tab=repositories`} target="_blank" rel="noreferrer">
            All repositories on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
