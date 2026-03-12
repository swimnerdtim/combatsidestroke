import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container-wide">
          <div className="hero-content">
            <h1 className="hero-title">BECOME A FORCE<br/>IN THE WATER.</h1>
            <div className="hero-actions">
              <Link to="/technique" className="btn btn-primary">
                Learn the Technique
              </Link>
              <a href="https://apps.apple.com/jp/app/swimnerd/id1422771098?l=en-US" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                Get Training
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2 className="intro-heading">what up! my name is nate.</h2>
              <h3 className="intro-subheading">i help people become special in the water.</h3>
              <p className="intro-description">
                Combat Side Stroke (CSS) is the essential swimming technique for Navy SEALs and special operations forces. 
                It's quiet, efficient, and powerful — designed for long-distance ocean swims while maintaining tactical awareness.
              </p>
              <p className="intro-description">
                Whether you're preparing for BUD/S, improving your PST scores, or just want to master this unique stroke, 
                I've got the training and technique breakdowns you need.
              </p>
              <div className="intro-stats">
                <div className="stat">
                  <div className="stat-number">5.5</div>
                  <div className="stat-label">Mile Swim<br/>BUD/S Phase 3</div>
                </div>
                <div className="stat">
                  <div className="stat-number">450m</div>
                  <div className="stat-label">PST<br/>Swim Test</div>
                </div>
                <div className="stat">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Hours<br/>of Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Master CSS?</h2>
            <p>Join the CSS workout group and get access to structured training programs, technique analysis, and everything you need to excel in the water.</p>
            <div className="cta-actions">
              <Link to="/technique" className="btn btn-secondary">
                Learn the Technique
              </Link>
              <Link to="/training" className="btn btn-primary">
                Start Training
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
