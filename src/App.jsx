import { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import Intro from './components/Intro.jsx';
import Marquee from './components/Marquee.jsx';
import Projects from './components/Projects.jsx';
import { BlobSticker, GhostSticker, StarSticker, Sparkle } from './components/Stickers.jsx';
import { profile, manual, whatIDo, experience, education, awards, certifications } from './data.js';

const Scene = lazy(() => import('./components/Scene.jsx'));

const rise = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { type: 'spring', stiffness: 120, damping: 18 },
};

function Nav() {
  return (
    <header className="nav">
      <a href="#hero" className="logo">
        <span className="logo-dot" /> purva<span className="dim">.dev</span>
      </a>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Stack</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
      </nav>
      <a className="btn btn-yellow btn-sm" href={`mailto:${profile.email}`}>
        Say hi
      </a>
    </header>
  );
}

function Hero({ ready }) {
  const words = ['Many', 'stacks.', 'One', 'curious', 'mind.'];
  return (
    <section className="hero" id="hero">
      <div className="grid-floor" aria-hidden />
      <div className="hero-copy">
        <motion.p className="pill" initial={{ opacity: 0, y: 10 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}>
          <span className="pulse" /> {profile.role}
        </motion.p>
        <h1 className="h1">
          {words.map((w, i) => (
            <motion.span
              key={w}
              className={`word ${i === 1 ? 'hl hl-yellow' : ''} ${i === 4 ? 'hl hl-purple' : ''}`}
              initial={{ y: 80, opacity: 0, rotate: 6 }}
              animate={ready ? { y: 0, opacity: 1, rotate: 0 } : {}}
              transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.15 + i * 0.07 }}
            >
              {w}
            </motion.span>
          ))}
        </h1>
        <motion.p className="lede" initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          {profile.intro}
        </motion.p>
        <motion.div className="hero-cta" initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.75 }}>
          <a className="btn btn-yellow" href="#projects">See projects</a>
          <a className="btn btn-dark" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="btn btn-dark" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </motion.div>
        <div className="stats">
          {profile.stats.map(([n, l], i) => (
            <motion.div
              className="stat"
              key={l}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', delay: 0.9 + i * 0.1 }}
            >
              <b>{n}</b>
              <span>{l}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="hero-3d">
        <Suspense fallback={<div className="scene-fallback"><BlobSticker size={200} /></div>}>
          <Scene />
        </Suspense>
        <span className="hint">psst — I follow your cursor</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about wrap" id="about">
      <motion.div className="manual" {...rise}>
        <div className="manual-head">
          <span className="dots"><i /><i /><i /></span>
          purva.manual — read-only
        </div>
        <h3>User Manual: Purva v1.0</h3>
        <dl>
          {manual.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="manual-mascot"><GhostSticker size={110} /></div>
      </motion.div>
      <div className="whatido">
        <p className="eyebrow">// where I add value</p>
        <h2 className="h2">Not just a data role. <span className="hl hl-yellow">A range of them.</span></h2>
        <div className="wgrid">
          {whatIDo.map(([tag, title, body], i) => (
            <motion.div className="wcard" key={title} {...rise} transition={{ ...rise.transition, delay: i * 0.06 }}>
              <span className="wtag">{String(i + 1).padStart(2, '0')} · {tag}</span>
              <h4>{title}</h4>
              <p>{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="wrap exp" id="experience">
      <p className="eyebrow">// experience</p>
      <h2 className="h2">Where the <span className="hl hl-orange">pipelines run.</span></h2>
      <div className="exp-list">
        {experience.map((e, i) => (
          <motion.article className="exp-card" key={e.role} style={{ '--accent': e.color }} {...rise} transition={{ ...rise.transition, delay: i * 0.1 }}>
            <div className="exp-side">
              <span className="exp-when">{e.when}</span>
              <h3>{e.role}</h3>
              <p className="exp-org">{e.org}</p>
            </div>
            <ul>
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <div className="pcard-tags dark">{e.tags.map((t) => <span key={t}>{t}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="wrap edu" id="education">
      <div className="edu-col">
        <p className="eyebrow">// education</p>
        <h2 className="h2">Foundations <span className="hl hl-purple">& wins.</span></h2>
        {education.map(([deg, school, meta]) => (
          <motion.div className="edu-card" key={deg} {...rise}>
            <h4>{deg}</h4>
            <p>{school}</p>
            <span>{meta}</span>
          </motion.div>
        ))}
        <div className="certs">
          {certifications.map((c) => <span key={c}>{c}</span>)}
        </div>
      </div>
      <motion.div className="awards" {...rise}>
        <h3>Awards, patents & papers</h3>
        <ul>
          {awards.map(([y, t]) => (
            <li key={t}><b>{y}</b><span>{t}</span></li>
          ))}
        </ul>
        <div className="awards-star"><StarSticker size={90} /></div>
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="scallop scallop-top" />
      <div className="wrap contact-inner">
        <motion.div className="peek" initial={{ y: 80 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120, damping: 10 }}>
          <BlobSticker size={150} />
        </motion.div>
        <motion.div className="notif" {...rise}>
          <div className="notif-icon"><BlobSticker size={56} /></div>
          <div>
            <div className="notif-top"><b>Purva is open to work</b><span>just now</span></div>
            <p>SDE, Business Analyst & Product roles — wherever technology meets problems worth solving.</p>
          </div>
        </motion.div>
        <h2 className="h2 dark-ink">Let’s build something <span className="hl hl-ink">worth shipping.</span></h2>
        <div className="hero-cta center">
          <a className="btn btn-ink" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn btn-outline" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
        </div>
        <p className="locs">{profile.locations.join(' · ')}</p>
      </div>
      <footer className="foot">
        <Sparkle size={16} color="#111" /> Built with React, three.js & a lot of “what if?” · © {new Date().getFullYear()} Purva A
      </footer>
    </section>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);
  return (
    <>
      <Intro onDone={() => setReady(true)} />
      <Nav />
      <main>
        <Hero ready={ready} />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}
