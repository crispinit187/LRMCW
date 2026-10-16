import WaterBackground from './components/WaterBackground.jsx';
import ChristmasTree from './components/ChristmasTree.jsx';
import logo from './assets/nac-logo.png';
import {
  organiser,
  hero,
  facts,
  updates,
  notes,
  pieces,
  target,
  verse,
  footer,
} from './data/content.js';

const SMALL_TREES = [
  { width: 46, lights: 8, seed: 11 },
  { width: 70, lights: 12, seed: 23 },
  { width: 96, lights: 16, seed: 31 },
  { width: 70, lights: 12, seed: 47 },
  { width: 46, lights: 8, seed: 53 },
];

function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3v11.3A3.5 3.5 0 1 0 11 17.5V8h6V3H9z" />
    </svg>
  );
}

export default function App() {
  return (
    <>
      <WaterBackground />
      <div className="veil" aria-hidden="true" />

      <div className="wrap">
        <header className="hero">
          <div>
            <div className="brand">
              <img src={logo} alt="New Apostolic Church emblem" width="56" height="56" />
              <div className="eyebrow">
                {organiser.church}
                <br />
                {organiser.unit}
              </div>
            </div>
            <span className="invite">{hero.invite}</span>
            <h1>
              {hero.titleStart}
              <em>{hero.titleEmphasis}</em>
              {hero.titleEnd}
            </h1>
            <p className="lede">{hero.lede}</p>
          </div>
          <div className="hero-tree" aria-hidden="true">
            <ChristmasTree width="100%" lights={22} seed={7} full />
          </div>
        </header>

        <div className="panel facts" role="group" aria-label="Practice details">
          {facts.map((f) => (
            <div className="fact" key={f.label}>
              <div className="label">{f.label}</div>
              <div className="value">{f.value}</div>
              {f.sub && <div className="sub">{f.sub}</div>}
            </div>
          ))}
        </div>

        <section id="updates">
          <h2>Updates</h2>
          <ul className="panel updates">
            {updates.map((u, i) => (
              <li key={u.date + u.title}>
                <time dateTime={u.date}>{u.label}</time>
                <div>
                  <h3>
                    {u.title}
                    {i === 0 && <span className="pill">Latest</span>}
                  </h3>
                  <p>{u.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="notes">
          <div className="cols">
            <div>
              <h2>Please note</h2>
              <ul className="panel notes">
                {notes.map((text) => (
                  <li key={text}>
                    <span>
                      <NoteIcon />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Combined pieces</h2>
              <ol className="pieces">
                {pieces.map((p) => (
                  <li key={p.title}>
                    <small>{p.label}</small>
                    {p.title}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="target">
          <h2>Our target</h2>
          <div className="panel target">
            <div className="big">{target.figure}</div>
            <div>
              <p className="lead">{target.lead}</p>
              <p className="sub">{target.detail}</p>
            </div>
          </div>
        </section>

        <div className="verse">
          <blockquote>{verse.text}</blockquote>
          <cite>{verse.reference}</cite>
        </div>

        <div className="treeline" aria-hidden="true">
          {SMALL_TREES.map((t) => (
            <ChristmasTree key={t.seed} width={t.width} lights={t.lights} seed={t.seed} />
          ))}
        </div>

        <footer>
          <strong>{footer.line1}</strong>
          <br />
          {footer.line2}
          <div className="credit">
            <span>Built by</span>
            <span className="wordmark">
              Crispin<b>IT</b>
              <i>Labs</i>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
