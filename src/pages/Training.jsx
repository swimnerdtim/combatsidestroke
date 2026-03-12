import './Training.css';

function Training() {
  return (
    <div className="training-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">TRAINING PROGRAMS</h1>
          <p className="page-subtitle">Structured workouts to dominate your PST and BUD/S preparation</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          
          <div className="training-intro">
            <h2>Join the CSS Workout Group</h2>
            <p>
              Get access to professional swim coaching, structured training programs, and personalized feedback 
              to maximize your combat side stroke performance.
            </p>
          </div>

          <div className="training-programs">
            
            <div className="program-card featured">
              <div className="program-badge">FEATURED</div>
              <h3>12 Week Combat Side Stroke Training Program</h3>
              <div className="program-price">$9.99</div>
              <p className="program-description">
                This comprehensive swimming program for combat side stroke includes 60 workouts and 4 test sets 
                to track your progress over 12 weeks.
              </p>
              <ul className="program-features">
                <li>60 structured workouts</li>
                <li>4 test sets to track progress</li>
                <li>Technique drills and conditioning</li>
                <li>PST preparation focus</li>
                <li>Progressive difficulty</li>
              </ul>
              <a href="https://apps.apple.com/jp/app/swimnerd/id1422771098?l=en-US" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Get Started
              </a>
            </div>

            <div className="program-card">
              <h3>Swimnerd App</h3>
              <div className="program-price">Custom Pricing</div>
              <p className="program-description">
                Upload your stroke technique videos for professional evaluation, receive custom workouts, 
                and access the full library of CSS training resources.
              </p>
              <ul className="program-features">
                <li>Video technique analysis</li>
                <li>Custom workout plans</li>
                <li>Professional coach feedback</li>
                <li>Progress tracking</li>
                <li>Community support</li>
              </ul>
              <a href="https://apps.apple.com/jp/app/swimnerd/id1422771098?l=en-US" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Download App
              </a>
            </div>

          </div>

          <div className="training-goals">
            <h2>Training Targets</h2>
            <div className="goals-grid">
              <div className="goal-card">
                <div className="goal-icon">🎯</div>
                <h4>PST Standards</h4>
                <div className="goal-time">450m CSS</div>
                <p>SEAL candidates must complete 500 yards (450m) of combat side stroke within time standards</p>
              </div>
              <div className="goal-card">
                <div className="goal-icon">🏊</div>
                <h4>BUD/S Phase 3</h4>
                <div className="goal-time">5.5 Miles</div>
                <p>Long-distance ocean swim competency in CSS</p>
              </div>
              <div className="goal-card">
                <div className="goal-icon">⚡</div>
                <h4>Speed Development</h4>
                <div className="goal-time">Sub 9:00</div>
                <p>Elite PST performance for competitive candidates</p>
              </div>
            </div>
          </div>

          <div className="training-cta">
            <h2>Ready to Start Training?</h2>
            <p>
              Whether you're preparing for BUD/S, improving your PST scores, or mastering combat side stroke, 
              we have the training programs and coaching to help you succeed.
            </p>
            <div className="cta-actions">
              <a href="https://apps.apple.com/jp/app/swimnerd/id1422771098?l=en-US" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Get the Swimnerd App
              </a>
              <a href="https://swimpractice.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Visit Swimnerd.com
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Training;
