import { useEffect, useState } from 'react';
import { GITHUB_USER, projectDetails, repoSnapshot, featuredOrder, cardThemes } from './data.js';

const CACHE_KEY = 'purvaxx-repos-v2';

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

async function fetchRepos() {
  const cached = readCache();
  if (cached?.length) return cached;
  const sources = [`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, './repos.json'];
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
  return repoSnapshot;
}

const prettify = (name) =>
  name
    .replace(/[-_]+/g, ' ')
    .replace(/\s+main$/i, '')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

export function toProjects(repos) {
  const site = `${GITHUB_USER}.github.io`.toLowerCase();
  const list = repos
    .filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== site)
    .map((r) => {
      const key = r.name.toLowerCase();
      const d = projectDetails[key] || {};
      return {
        key,
        title: d.title || prettify(r.name),
        kicker: d.kicker || r.language || 'Project',
        description: d.description || r.description || '',
        tags: d.tags || [r.language].filter(Boolean),
        icon: d.icon || (r.language === 'Python' ? 'siPython' : r.language === 'JavaScript' ? 'siJavascript' : 'siGithub'),
        url: r.html_url,
        live: r.homepage || null,
        pushed: r.pushed_at,
      };
    });
  const rank = (p) => {
    const i = featuredOrder.indexOf(p.key);
    return i === -1 ? featuredOrder.length : i;
  };
  list.sort((a, b) => rank(a) - rank(b) || String(b.pushed).localeCompare(String(a.pushed)));
  return list.map((p, i) => ({ ...p, theme: cardThemes[i % cardThemes.length] }));
}

export function useProjects() {
  const [projects, setProjects] = useState(() => toProjects(readCache() || repoSnapshot));
  useEffect(() => {
    let alive = true;
    fetchRepos().then((r) => alive && setProjects(toProjects(r)));
    return () => {
      alive = false;
    };
  }, []);
  return projects;
}
