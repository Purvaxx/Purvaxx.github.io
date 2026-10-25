import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Icon } from '../icons.jsx';

function useTilt(max = 10) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [max, -max]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-max, max]), { stiffness: 220, damping: 20 });
  const handlers = {
    onPointerMove: (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    },
    onPointerLeave: () => {
      mx.set(0);
      my.set(0);
    },
  };
  return { rotateX, rotateY, handlers };
}

function Face({ p, detailed }) {
  return (
    <>
      <div className="pc-head">
        <div>
          <h3 className="pc-title">{p.title}</h3>
          <p className="pc-kicker">{p.kicker}</p>
        </div>
        {p.live ? (
          <span className="pc-badge">
            <i className="dot" /> Live
          </span>
        ) : (
          <span className="pc-badge">
            <Icon name="siGithub" size={13} color="#fff" /> Code
          </span>
        )}
      </div>
      {detailed && <p className="pc-desc">{p.description}</p>}
      <div className="pc-art" aria-hidden>
        <div className="pc-orb">
          <Icon name={p.icon} size={detailed ? 64 : 76} color="#fff" />
        </div>
      </div>
      {detailed && (
        <div className="pc-foot">
          <div className="pc-tags">
            {p.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="pc-links">
            <a href={p.url} target="_blank" rel="noreferrer" className="pc-link">
              Source ↗
            </a>
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" className="pc-link solid">
                Live demo ↗
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// Compact card used in the hero fan.
export function FanCard({ p, style, ...motionProps }) {
  const { rotateX, rotateY, handlers } = useTilt(8);
  return (
    <motion.a
      href={p.live || p.url}
      target="_blank"
      rel="noreferrer"
      className="pc pc-fan"
      style={{ '--from': p.theme.from, '--to': p.theme.to, rotateX, rotateY, ...style }}
      {...handlers}
      {...motionProps}
    >
      <Face p={p} />
    </motion.a>
  );
}

// Full card used in the projects grid.
export function GridCard({ p, i }) {
  const { rotateX, rotateY, handlers } = useTilt(6);
  return (
    <motion.article
      className="pc pc-grid"
      style={{ '--from': p.theme.from, '--to': p.theme.to, rotateX, rotateY }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay: (i % 3) * 0.08 }}
      {...handlers}
    >
      <Face p={p} detailed />
    </motion.article>
  );
}
