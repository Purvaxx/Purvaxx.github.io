import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlobSticker, GhostSticker, StarSticker, TermSticker, Sparkle } from './Stickers.jsx';

const letters = ['P', 'U', 'R', 'V', 'A'];
const tileColors = ['#ffc53d', '#c58cff', '#ff6a1a', '#5ec8ff', '#ff5d8f'];

const pop = (delay, rotate = 0) => ({
  initial: { scale: 0, rotate: rotate - 40, opacity: 0 },
  animate: { scale: 1, rotate, opacity: 1 },
  transition: { type: 'spring', stiffness: 260, damping: 13, delay },
});

export default function Intro({ onDone }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const t = setTimeout(() => setShow(false), reduce ? 400 : 3100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div
          className="intro"
          onClick={() => setShow(false)}
          exit={{ y: '-110%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="intro-stage">
            <motion.div className="intro-sticker s1" {...pop(0.15, -12)}>
              <BlobSticker size={150} />
            </motion.div>
            <motion.div className="intro-sticker s2" {...pop(0.35, 10)}>
              <GhostSticker size={140} />
            </motion.div>
            <motion.div className="intro-sticker s3" {...pop(0.55, 14)}>
              <StarSticker size={120} />
            </motion.div>
            <motion.div className="intro-sticker s4" {...pop(0.75, -8)}>
              <TermSticker size={130} />
            </motion.div>

            <div className="intro-word">
              {letters.map((l, i) => (
                <motion.span
                  key={l + i}
                  className="intro-tile"
                  style={{ background: tileColors[i] }}
                  initial={{ y: 140, rotate: i % 2 ? 18 : -18, opacity: 0 }}
                  animate={{ y: 0, rotate: i % 2 ? 4 : -4, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 12, delay: 0.9 + i * 0.09 }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
            <motion.p
              className="intro-sub"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              many stacks · one curious mind
            </motion.p>
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                className="intro-spark"
                style={{ left: `${12 + i * 15}%`, top: `${i % 2 ? 14 : 86}%` }}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1], rotate: 90 }}
                transition={{ delay: 1.1 + i * 0.1, duration: 0.6 }}
              >
                <Sparkle size={22} color={tileColors[i % 5]} />
              </motion.span>
            ))}
          </div>
          <div className="scallop scallop-bottom" />
          <span className="intro-skip">click to skip</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
