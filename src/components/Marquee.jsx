import { stackRows, skillGroups } from '../data.js';
import { Icon } from '../icons.jsx';

function Row({ items, reverse, speed }) {
  const loop = [...items, ...items];
  return (
    <div className={`marquee ${reverse ? 'reverse' : ''}`} style={{ '--speed': `${speed}s` }}>
      <div className="marquee-track">
        {loop.map(([name, icon, color], i) => (
          <div className="chip" key={name + i} aria-hidden={i >= items.length}>
            <span className="chip-logo">
              <Icon name={icon} color={color} size={26} />
            </span>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="wrap head-row">
        <div>
          <p className="eyebrow">Technical stack</p>
          <h2 className="h2">Tools I work with</h2>
        </div>
      </div>
      <div className="marquee-zone">
        <Row items={stackRows[0]} speed={40} />
        <Row items={stackRows[1]} speed={46} reverse />
      </div>
      <div className="wrap skills">
        {skillGroups.map(([k, v]) => (
          <div className="skill" key={k}>
            <span>{k}</span>
            <p>{v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
