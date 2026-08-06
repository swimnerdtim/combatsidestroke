import './Training.css';

const workouts = [
  {
    id: 1,
    name: 'Technique & Aerobic Base',
    duration: '~90 min',
    total: '~4,900m',
    blocks: [
      {
        heading: 'Warmup',
        lines: [
          '500 choice no equipment',
          '300 pull Lung Buster b/e 3/5/7 x 50',
          '200 kick with a board, easy',
        ],
      },
      {
        heading: 'Drill Block',
        note: '2x (1st round without fins, 2nd round with fins):',
        lines: [
          '6x50 Posture, Line, and Balance Kicking Drills @ :15 sec rest',
          '— 1 on your right side, hands at your sides',
          '— 1 on your left side, hands at your sides',
          '— 1 on your right side, right hand out in front',
          '— 1 on your left side, left hand out in front',
          '— 1 on your right side, right hand out front, left arm to the sky (arms in an L)',
          '— 1 on your left side, left hand out front, right arm to the sky (arms in an L)',
        ],
      },
      {
        heading: 'Main Set 1',
        lines: [
          '10x100 going 25 scull head up / 25 dog paddle / 25 fingertip drag / 25 freestyle @ :20 sec rest',
        ],
      },
      {
        heading: 'Main Set 2',
        note: '2x',
        lines: [
          '5x100 CSS descend 1-5 @ 2:15',
          '100 easy free @ 2:15',
        ],
      },
      {
        heading: 'Speed Finish',
        lines: ['8x50 CSS build to fast @ 1:15'],
      },
      {
        heading: 'Cooldown',
        lines: ['200 easy free @ 3:00'],
      },
    ],
  },
  {
    id: 2,
    name: 'CSS Speed Ladder',
    duration: '~90 min',
    total: '~4,850m',
    blocks: [
      {
        heading: 'Warmup',
        lines: [
          '400 choice no equipment',
          '300 CSS 50 RT / 50 LT / 50 Single Arm CSS',
          '200 pull b/e 5',
        ],
      },
      {
        heading: 'Build',
        lines: ['3x100 Freestyle descend 1 to 3 @ 2:00'],
      },
      {
        heading: 'Drill Block',
        lines: ['8x75 going 25 scull head up / 25 Single Arm CSS / 25 CSS @ 1:45'],
      },
      {
        heading: 'Main Set 1',
        note: '2x',
        lines: [
          '12x50 CSS',
          '— 4 @ 1:15',
          '— 3 @ 1:10',
          '— 2 @ 1:05',
          '— 3 @ 1:00 all out',
          '100 easy free @ 2:00',
        ],
      },
      {
        heading: 'Main Set 2',
        lines: ['5x100 CSS Best Average @ 2:30 — record your times'],
      },
      {
        heading: 'Aerobic Flush',
        lines: ['6x100 pull long & strong b/e 3/5/7 x 33 @ 2:00'],
      },
      {
        heading: 'Cooldown',
        lines: ['6x50 easy free @ 1:10'],
      },
    ],
  },
  {
    id: 3,
    name: 'Kick Emphasis',
    duration: '~90 min',
    total: '~4,700m',
    blocks: [
      {
        heading: 'Warmup',
        lines: [
          '400 choice no equipment',
          '300 breaststroke kick with a board',
          '200 CSS (100 RT / 100 LT)',
        ],
      },
      {
        heading: 'Kick Main Set',
        note: '2x',
        lines: [
          '5x100 kick with fins and a board @ 2:00',
          '4x50 CSS with Fins @ 1:00',
          '5x100 FKOB with fins @ 2:00',
          '4x50 CSS with Fins @ 1:00',
        ],
      },
      {
        heading: 'No-Fins Block',
        lines: [
          '300 easy no fins',
          '8x50 CSS no fins fast as possible @ 2:00',
        ],
      },
      {
        heading: 'Aerobic Finish',
        lines: ['4x150 with fins going 50 dog paddle / 50 fingertip drag / 50 catch up @ 3:00'],
      },
      {
        heading: 'Cooldown',
        lines: ['200 easy free'],
      },
    ],
  },
  {
    id: 4,
    name: 'S/P/K/P/CSS Distance',
    duration: '~90 min',
    total: '~4,850m',
    blocks: [
      {
        heading: 'Warmup / Base Set',
        note: '5x200 Swim / Pull / Kick / Pull / CSS @ :20 sec rest',
        lines: [
          '— Swim = choice no equipment',
          '— Pull = b/e 5/7/9/11 x 50',
          '— Kick = FKOB with fins',
          '— CSS = 50 RT / 50 LT',
        ],
      },
      {
        heading: 'Main Set',
        note: '2x (1st round kick with fins, 2nd round CSS with fins)',
        lines: [
          '4x100 long & strong @ 2:00',
          '1x400 negative split @ 8:00',
          '4x50 CSS descend 1-4 @ 1:10',
          '100 easy freestyle @ 3:00',
        ],
      },
      {
        heading: 'Aerobic Set',
        lines: ['4x200 Freestyle with fins, aerobic @ 3:30'],
      },
      {
        heading: 'Speed Finish',
        lines: ['8x25 CSS all out max speed @ :45'],
      },
      {
        heading: 'Cooldown',
        lines: ['4x50 easy free @ 1:10'],
      },
    ],
  },
  {
    id: 5,
    name: 'Sprint Series & Broken 450',
    duration: '~90 min',
    total: '~4,800m',
    blocks: [
      {
        heading: 'Warmup',
        lines: [
          '400 choice no equipment',
          '3x100 FKOB with fins @ 2:00',
          '300 Pull b/e 3/5/7 x 50',
        ],
      },
      {
        heading: 'Drill Block',
        lines: ['12x75 going 25 Dog Paddle / 25 Fingertip Drag / 25 Catch Up @ 1:45'],
      },
      {
        heading: 'Speed Prep',
        note: '8x25 Sprint Series @ :45',
        lines: [
          '(25 streamline flutter kick on surface / dog paddle / Tarzan / freestyle — half fast, half easy)',
        ],
      },
      {
        heading: 'Main Set',
        note: "Broken 450's (get your time, subtract 1:00) — 3x, 1:00 rest between rounds",
        lines: [
          '200 CSS :30 sec rest',
          '100 CSS :20 sec rest',
          '100 CSS :10 sec rest',
          '50 CSS',
        ],
      },
      {
        heading: 'Aerobic Flush',
        lines: ['6x100 CSS long & strong @ 2:10'],
      },
      {
        heading: 'Cooldown',
        lines: ['4x50 easy free @ 1:10'],
      },
    ],
  },
];

function Training() {
  return (
    <div className="training-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">TRAINING WORKOUTS</h1>
          <p className="page-subtitle">
            5 Combat Side Stroke Workouts — No Breath Holding (~90 Minutes Each)
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="training-note">
            <p>
              These 5 workouts contain zero breath-holding work — no BOBs, no drownproofing,
              no vertical pullouts, no underwater swims, no no-breather sets, no mask retrievals,
              no eyes-closed treading. Everything here is standard-breathing aerobic, technique,
              and speed work. Each session is built to run about <strong>90 minutes</strong>.
              Great for a pool without deep water, for newer athletes, or for days you want a
              full training block without the breath-control stress.
            </p>
          </div>

          <div className="workouts-list">
            {workouts.map((w) => (
              <article key={w.id} className="workout-card">
                <div className="workout-head">
                  <h2 className="workout-title">
                    <span className="workout-num">Workout #{w.id}</span>
                    {w.name}
                  </h2>
                  <div className="workout-meta">
                    <span>⏱ {w.duration}</span>
                    <span>📏 {w.total}</span>
                  </div>
                </div>

                <div className="workout-body">
                  {w.blocks.map((b, i) => (
                    <div key={i} className="workout-block">
                      <h3 className="block-heading">{b.heading}</h3>
                      {b.note && <p className="block-note">{b.note}</p>}
                      <ul className="block-lines">
                        {b.lines.map((line, j) => (
                          <li
                            key={j}
                            className={line.startsWith('—') ? 'sub-line' : ''}
                          >
                            {line.startsWith('—') ? line.slice(1).trim() : line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="workout-credit">
            by Nathan Tschohl · combatsidestroke@gmail.com · combatsidestroke.com
          </p>
        </div>
      </section>
    </div>
  );
}

export default Training;
