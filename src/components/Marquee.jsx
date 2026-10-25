import { siAdobephotoshop,siAmazonwebservices,siApachekafka,siCanva,siDart,siDocker,siExpress,siFlutter,siGit,siGithubactions,siHibernate,siHuggingface,siJavascript,siLinux,siMongodb,siMysql,siNodedotjs,siNotion,siOpenjdk,siPandas,siPostgresql,siPython,siPytorch,siReact,siScikitlearn,siSpringboot } from 'simple-icons';
const icons = { siAdobephotoshop,siAmazonwebservices,siApachekafka,siCanva,siDart,siDocker,siExpress,siFlutter,siGit,siGithubactions,siHibernate,siHuggingface,siJavascript,siLinux,siMongodb,siMysql,siNodedotjs,siNotion,siOpenjdk,siPandas,siPostgresql,siPython,siPytorch,siReact,siScikitlearn,siSpringboot };
import { stackRows } from '../data.js';

function Logo({ icon, color }) {
  const si = icons[icon];
  if (!si) return <span className="chip-fallback">{'</>'}</span>;
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden>
      <path d={si.path} fill={color} />
    </svg>
  );
}

function Row({ items, reverse, speed }) {
  // Items are rendered twice so the loop is seamless.
  const loop = [...items, ...items];
  return (
    <div className={`marquee ${reverse ? 'reverse' : ''}`} style={{ '--speed': `${speed}s` }}>
      <div className="marquee-track">
        {loop.map(([name, icon, color], i) => (
          <div className="chip" key={name + i} style={{ '--tilt': `${(i % 3) - 1}deg` }} aria-hidden={i >= items.length}>
            <span className="chip-logo">
              <Logo icon={icon} color={color} />
            </span>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="stack" id="skills">
      <div className="wrap">
        <p className="eyebrow">// the stack</p>
        <h2 className="h2">
          Tools I poke at <span className="hl hl-purple">until they ship.</span>
        </h2>
      </div>
      <div className="marquee-zone">
        <Row items={stackRows[0]} speed={38} />
        <Row items={stackRows[1]} speed={44} reverse />
        <div className="band">
          <div className="band-track">
            {[...Array(2)].map((_, k) => (
              <span key={k}>
                OPEN TO WORK ✦ SDE ✦ DATA ✦ PRODUCT ✦ BUSINESS ANALYST ✦ CHENNAI ✦ BENGALURU ✦ HYDERABAD ✦ MUMBAI ✦&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
