import { useState } from 'react';
import workouts from '../data/workouts.json';
import './Training.css';

function renderLine(line, i) {
  if (line.trim() === '') return <div key={i} className="wk-gap" />;
  return (
    <div key={i} className="wk-line">
      {line}
    </div>
  );
}

function Training() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="training-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">TRAINING WORKOUTS</h1>
          <p className="page-subtitle">
            12 Week Combat Sidestroke Training Plan — 60 Workouts
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="breath-warning">
            <div className="breath-warning-icon">⚠️</div>
            <div className="breath-warning-body">
              <h2>Breath-Holding Warning — Read First</h2>
              <p>
                <strong>Most of these workouts involve breath holding</strong> — Bobs, treads,
                vertical pullouts, underwater swims, no-breather sets, mask retrievals, and
                eyes-closed treading. Breath-holding and hypoxic training carry a real risk of
                shallow water blackout, which can be fatal.
              </p>
              <p>
                <strong>Never train breath holding alone.</strong> Always have a qualified coach
                or lifeguard on deck watching you, never hyperventilate before submerging, and
                stop immediately if you feel dizzy or lightheaded. Train within your limits and
                use your judgment. You assume all risk for these workouts.
              </p>
            </div>
          </div>

          <div className="training-intro-note">
            <p>
              This is the full 12-week plan — 60 progressive Combat Sidestroke workouts building
              technique, conditioning, and comfort in the water for your PST and BUD/S preparation.
              Tap any workout to expand it.
            </p>
          </div>

          <div className="workouts-list">
            {workouts.map((w) => {
              const open = openId === w.num;
              const lines = w.text.split('\n');
              const firstLine = lines.find((l) => l.trim() !== '') || '';
              return (
                <article
                  key={w.num}
                  className={`workout-card ${open ? 'open' : ''}`}
                >
                  <button
                    className="workout-head"
                    onClick={() => setOpenId(open ? null : w.num)}
                    aria-expanded={open}
                  >
                    <span className="workout-num">Workout #{w.num}</span>
                    {!open && <span className="workout-peek">{firstLine}</span>}
                    <span className="workout-toggle">{open ? '−' : '+'}</span>
                  </button>
                  {open && (
                    <div className="workout-body">
                      {lines.map(renderLine)}
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <p className="workout-credit">
            12 Week Combat Sidestroke Training Plan · by Nathan Tschohl ·
            combatsidestroke@gmail.com · combatsidestroke.com
          </p>
        </div>
      </section>
    </div>
  );
}

export default Training;
