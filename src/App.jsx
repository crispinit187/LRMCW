import { useEffect, useState } from 'react';
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

export default function App() {
  const [route, setRoute] = useState(currentRoute);

  useEffect(() => {
    const onChange = () => {
      setRoute(currentRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return (
    <>
      <WaterBackground />
      <div className="veil" aria-hidden="true" />
      {route === 'plan' ? <PracticePlan /> : <Home />}
    </>
  );
}
