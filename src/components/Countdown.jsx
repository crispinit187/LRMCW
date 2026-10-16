import { useEffect, useState } from 'react';

const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

function remaining(target) {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  const t = Math.floor(diff / 1000);
  return {
    days: Math.floor(t / 86400),
    hours: Math.floor((t % 86400) / 3600),
    minutes: Math.floor((t % 3600) / 60),
    seconds: t % 60,
  };
}

export default function Countdown({ startsAt }) {
  const target = new Date(startsAt).getTime();
  const [left, setLeft] = useState(() => remaining(target));

  useEffect(() => {
    setLeft(remaining(target));
    const id = setInterval(() => setLeft(remaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!left) return <p className="cd-done">The concert is today.</p>;

  const cells = [
    ['Days', left.days],
    ['Hours', left.hours],
    ['Minutes', left.minutes],
    ['Seconds', left.seconds],
  ];

  return (
    <div className="countdown" role="timer" aria-label="Time until the concert">
      {cells.map(([label, value]) => (
        <div className="cd" key={label}>
          <b>{pad(value)}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
