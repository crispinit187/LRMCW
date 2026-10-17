import { useEffect, useRef, useState } from 'react';
import WaterBackground from './components/WaterBackground.jsx';
import Home from './pages/Home.jsx';
import PracticePlan from './pages/PracticePlan.jsx';

// Hash routing keeps this a plain static site on GitHub Pages:
//   #/                 main page
//   #/practice-plan    practice plan page
function currentRoute() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash.startsWith('/practice-plan') ? 'plan' : 'home';
}

const FADE_OUT_MS = 200;

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const [route, setRoute] = useState(currentRoute);
  const [leaving, setLeaving] = useState(false);
  const timer = useRef(0);

  useEffect(() => {
    const swap = () => {
      setRoute(currentRoute());
      setLeaving(false);
      window.scrollTo(0, 0);
    };

    const onChange = () => {
      window.clearTimeout(timer.current);
      if (currentRoute() === routeRef.current || prefersReducedMotion()) {
        swap();
        return;
      }
      setLeaving(true);
      timer.current = window.setTimeout(swap, FADE_OUT_MS);
    };

    window.addEventListener('hashchange', onChange);
    return () => {
      window.removeEventListener('hashchange', onChange);
      window.clearTimeout(timer.current);
    };
  }, []);

  // Keep the displayed route available to the listener without re-subscribing.
  const routeRef = useRef(route);
  routeRef.current = route;

  return (
    <>
      <WaterBackground />
      <div className="veil" aria-hidden="true" />
      <div key={route} className={`page${leaving ? ' leaving' : ''}`}>
        {route === 'plan' ? <PracticePlan /> : <Home />}
      </div>
    </>
  );
}
