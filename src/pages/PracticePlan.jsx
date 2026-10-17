import { useEffect, useState } from 'react';
import PdfButton from '../components/PdfButton.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import { downloads, practicePlan } from '../data/content.js';

function Row({ item, index, open, onToggle }) {
  const panelId = `plan-panel-${index}`;
  const hasTeam = item.team && item.team.length > 0;

  return (
    <li className={`plan-row${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="plan-head"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="plan-time">{item.time}</span>
        <span className="plan-activity">{item.activity}</span>
        <svg className="chev" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.4 9l5.6 5.6L17.6 9 19 10.4l-7 7-7-7L6.4 9z" />
        </svg>
      </button>

      {item.pdf && (
        <div className="plan-pdf">
          <PdfButton href={item.pdf.href} name={item.pdf.name} />
        </div>
      )}

      {open && (
        <div className="plan-panel" id={panelId}>
          <div className="plan-block">
            <div className="label">Team leader</div>
            <p>{item.leader}</p>
          </div>

          {hasTeam && (
            <div className="plan-block">
              <div className="label">Members in team</div>
              {item.team.map((g, i) => (
                <div className="team-group" key={g.label || i}>
                  {g.label && <div className="team-label">{g.label}</div>}
                  <p>{g.names.join(', ')}</p>
                </div>
              ))}
            </div>
          )}

          {item.note && (
            <div className="plan-block">
              <div className="label">Note</div>
              <p>{item.note}</p>
            </div>
          )}

          {!hasTeam && !item.note && (
            <div className="plan-block">
              <div className="label">Members in team</div>
              <p className="muted">None listed in the plan.</p>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

export default function PracticePlan() {
  const [openSet, setOpenSet] = useState(() => new Set());
  const items = practicePlan.items;
  const allOpen = openSet.size === items.length;

  useEffect(() => {
    const previous = document.title;
    document.title = 'Practice Plan | Regional Combined Male Choir Practice';
    return () => {
      document.title = previous;
    };
  }, []);

  const toggle = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const toggleAll = () => setOpenSet(allOpen ? new Set() : new Set(items.map((_, i) => i)));

  return (
    <div className="wrap">
      <div className="toolbar">
        <PdfButton
          href={downloads.plan}
          name="Choir-Practice-Plan-17-October-2026.pdf"
          label="Download Practice Plan"
          title="Download the practice plan document"
        />
        <a className="back" href="#/">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M11 5l-7 7 7 7 1.4-1.4L7.8 13H20v-2H7.8l4.6-4.6L11 5z" />
          </svg>
          Back to main page
        </a>
      </div>

      <header className="plan-hero">
        <div className="eyebrow">{practicePlan.group}</div>
        <h1>{practicePlan.title}</h1>
        <p className="plan-meta">
          {practicePlan.when}
          <span aria-hidden="true"> | </span>
          {practicePlan.venue}
          <span aria-hidden="true"> | </span>
          {practicePlan.hours}
        </p>
        <p className="theme-line">{practicePlan.theme}</p>
      </header>

      <div className="plan-controls">
        <span className="sub">Tap an activity to see its team leader and members.</span>
        <button type="button" className="link-btn" onClick={toggleAll}>
          {allOpen ? 'Hide all' : 'Show all'}
        </button>
      </div>

      <ol className="panel plan-list">
        {items.map((item, i) => (
          <Row key={item.time} item={item} index={i} open={openSet.has(i)} onToggle={() => toggle(i)} />
        ))}
      </ol>

      <p className="plan-note">Note: {practicePlan.footnote}</p>

      <SiteFooter />
    </div>
  );
}
