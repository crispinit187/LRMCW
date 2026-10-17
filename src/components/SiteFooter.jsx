import ChristmasTree from './ChristmasTree.jsx';
import { footer } from '../data/content.js';

const SMALL_TREES = [
  { width: 46, lights: 8, seed: 11 },
  { width: 70, lights: 12, seed: 23 },
  { width: 96, lights: 16, seed: 31 },
  { width: 70, lights: 12, seed: 47 },
  { width: 46, lights: 8, seed: 53 },
];

export default function SiteFooter() {
  return (
    <>
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
    </>
  );
}
