import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Stack from './components/Marquee.jsx';
import { FanCard, GridCard } from './components/ProjectCard.jsx';
import { useProjects } from './useProjects.js';
import { Icon } from './icons.jsx';
import photo from './assets/photo.webp';
import { profile, experience, education, achievements, certifications } from './data.js';

const Scene = lazy(() => import('./components/Scene.jsx'));

const rise = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { type: 'spring', stiffness: 110, damping: 20 },
};

function useWidth() {
  const [w, setW] = useState(() => (typeof window === 'undefined' ? 1200 : window.innerWidth));
  useEffect(() => {
    const on = () => setW(window.innerWidth);
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return w;
}

function Loader({ onDone }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div className="loader" exit={{ opacity: 0, scale: 1.04 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <motion.div
            className="loader-mark"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            PA
          </motion.div>
          <div className="loader-bar">
            <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.3, ease: 'easeInOut' }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Nav() {
  return (
    <header className="nav">
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#top" className="mark" aria-label="Purva A — home">
        PA
      </a>
      <div className="nav-right">
        <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Icon name="siGithub" size={18} color="#fff" />
        </a>
        <a className="nav-cta" href={`mailto:${profile.email}`}>
          Get in touch
        </a>
        <a href="#about" className="avatar" aria-label="About Purva">
          <img src={photo} alt="" />
        </a>
      </div>
    </header>
  );
}

function useOnScreen(ref) {
  const [on, setOn] = useState(true);
  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting));
    io.observe(ref.current);
    return () => io.disconnect();
  }, [ref]);
  return on;
}

function Hero({ ready, featured }) {
  const w = useWidth();
  const ref = useRef(null);
  const visible = useOnScreen(ref);
  const cards = featured.slice(0, w < 700 ? 3 : 5);
  const mid = (cards.length - 1) / 2;
  const spread = w < 700 ? 92 : w < 1100 ? 180 : 238;
  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-bg">
        <Suspense fallback={null}>{ready && <Scene active={visible} />}</Suspense>
      </div>
      <div className="hero-copy">
        <motion.p className="pill" initial={{ opacity: 0, y: 12 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
          <span className="pulse" /> {profile.role}
        </motion.p>
        <h1 className="h1">
          {['Purva A', profile.title].map((line, i) => (
            <span className="line" key={line}>
              <motion.span
                initial={{ y: '110%' }}
                animate={ready ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 0.75 }}>
          {profile.summary}
        </motion.p>
        <motion.div className="cta-row" initial={{ opacity: 0, y: 12 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9 }}>
          <a className="btn btn-primary" href="#projects">
            View projects
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Icon name="siLinkedin" size={15} color="currentColor" /> LinkedIn
          </a>
        </motion.div>
      </div>

      <div className="fan" style={{ '--n': cards.length }}>
        {cards.map((p, i) => {
          const d = i - mid;
          return (
            <FanCard
              key={p.key}
              p={p}
              style={{ zIndex: 10 - Math.abs(Math.round(d)) }}
              initial={{ x: 0, y: 420, rotate: 0, opacity: 0 }}
              animate={ready ? { x: d * spread, y: Math.abs(d) * (w < 700 ? 22 : 38), rotate: d * 7, opacity: 1, scale: d === 0 ? 1.06 : 1 } : {}}
              whileHover={{ y: Math.abs(d) * 20 - 36, rotate: d * 3, scale: 1.08, zIndex: 20 }}
              transition={{ type: 'spring', stiffness: 90, damping: 16, delay: ready ? 0.5 + Math.abs(d) * 0.12 : 0 }}
            />
          );
        })}
      </div>
    </section>
  );
}

function About({ count }) {
  return (
    <section className="section wrap about" id="about">
      <motion.div className="photo-card" {...rise}>
        <div className="photo-ring">
          <img src={photo} alt="Portrait of Purva A" />
        </div>
        <div className="photo-meta">
          <b>{profile.name}</b>
          <span>{profile.location}</span>
        </div>
        <div className="photo-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </motion.div>
      <div className="about-copy">
        <p className="eyebrow">About</p>
        <h2 className="h2">Data engineering and applied machine learning</h2>
        {profile.about.map((t) => (
          <p className="body" key={t}>
            {t}
          </p>
        ))}
        <div className="stats">
          {profile.stats.map(([n, l]) => (
            <motion.div className="stat" key={l} {...rise}>
              <b>{n}</b>
              <span>{l}</span>
            </motion.div>
          ))}
          <motion.div className="stat" {...rise}>
            <b>{count}</b>
            <span>Public projects on GitHub</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Projects({ projects }) {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="head-row">
          <div>
            <h2 className="h2">Projects</h2>
          </div>
          <a className="btn btn-ghost" href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer">
            All repositories ↗
          </a>
        </div>
        <div className="pgrid">
          {projects.map((p, i) => (
            <GridCard key={p.key} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section wrap" id="experience">
      <p className="eyebrow">Experience</p>
      <h2 className="h2">Where I have worked</h2>
      <div className="timeline">
        {experience.map((e) => (
          <motion.article className="job" key={e.role} {...rise}>
            <div className="job-side">
              <span className="job-when">{e.when}</span>
              <span className="job-where">{e.where}</span>
            </div>
            <div className="job-main">
              <h3>
                {e.role} <span>· {e.org}</span>
              </h3>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="pc-tags muted">
                {e.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section wrap edu" id="education">
      <div>
        <p className="eyebrow">Education</p>
        <h2 className="h2">Education</h2>
        {education.map(([deg, school, when, grade]) => (
          <motion.div className="edu-card" key={deg} {...rise}>
            <h4>{deg}</h4>
            <p>{school}</p>
            <span>
              {when} · {grade}
            </span>
          </motion.div>
        ))}
      </div>
      <div>
        <p className="eyebrow">Recognition</p>
        <h2 className="h2">Achievements</h2>
        <ul className="ach">
          {achievements.map(([type, text, year]) => (
            <motion.li key={text} {...rise}>
              <span className="ach-type">{type}</span>
              <p>{text}</p>
              <span className="ach-year">{year}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section wrap" id="certifications">
      <div className="head-row">
        <div>
          <p className="eyebrow">Certifications & courses</p>
          <h2 className="h2">Continuous learning</h2>
        </div>
        <p className="cert-count">{certifications.length} certifications and courses</p>
      </div>
      <div className="cert-grid">
        {certifications.map(([title, provider], i) => (
          <motion.div
            className="cert"
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 140, damping: 20, delay: (i % 3) * 0.05 }}
          >
            <span className="cert-provider">{provider}</span>
            <p>{title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <motion.div className="wrap contact-card" {...rise}>
        <p className="eyebrow">Contact</p>
        <h2 className="h2">Let’s work together</h2>
        <p className="body">{profile.openTo}</p>
        <div className="cta-row center">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            {profile.phone}
          </a>
        </div>
      </motion.div>
      <footer className="foot wrap">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> ·{' '}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </span>
      </footer>
    </section>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);
  const projects = useProjects();
  return (
    <>
      <Loader onDone={() => setReady(true)} />
      <Nav />
      <main>
        <Hero ready={ready} featured={projects} />
        <Stack />
        <About count={projects.length} />
        <Projects projects={projects} />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
