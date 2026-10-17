import ChristmasTree from '../components/ChristmasTree.jsx';
import Countdown from '../components/Countdown.jsx';
import PdfButton from '../components/PdfButton.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import logo from '../assets/nac-logo.png';
import {
  organiser,
  hero,
  facts,
  concert,
  updates,
  notes,
  pieces,
  target,
  verse,
} from '../data/content.js';

function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3v11.3A3.5 3.5 0 1 0 11 17.5V8h6V3H9z" />
    </svg>
  );
}

export default function Home() {
  return (
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
          <p className="theme-line">{hero.theme}</p>
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

      <div className="cta">
        <a className="btn" href="#/practice-plan">
          View Practice Plan
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13 5l7 7-7 7-1.4-1.4L16.2 13H4v-2h12.2l-4.6-4.6L13 5z" />
          </svg>
        </a>
      </div>

      <section id="concert">
        <h2>Christmas Concert</h2>
        <div className="panel concert">
          <div>
            <div className="label">{concert.name}</div>
            <div className="value">{concert.date}</div>
            <div className="sub">{concert.detail}</div>
          </div>
          <Countdown startsAt={concert.startsAt} />
          <div className="guest">
            <span className="label">Guest of Honour</span>
            <span
              className="guest-line"
              {...(concert.guestOfHonour ? {} : { role: 'img', 'aria-label': 'To be announced' })}
            >
              {concert.guestOfHonour}
            </span>
          </div>
        </div>
      </section>

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
                  <div className="piece-dl">
                    <PdfButton href={p.pdf} name={p.pdfName} title={`Download ${p.title}`} />
                  </div>
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

      <SiteFooter />
    </div>
  );
}
