import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content-center">
          <h1 className="hero-heading">Become a Force<br/>in the Water</h1>
          <div className="hero-ctas">
            <a 
              href="https://apps.apple.com/jp/app/swimnerd/id1422771098?l=en-US" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button cta-primary"
            >
              Join the CSS Workout Group
            </a>
            <Link to="/training" className="cta-button cta-secondary">
              12 Week CSS Training Program
            </Link>
          </div>
        </div>
      </section>

      {/* Nate Section */}
      <section className="nate-section">
        <div className="nate-container">
          <div className="nate-text">
            <h2>What's up! My name is Nate.</h2>
            <h3>I help people become <em>special</em> in the water.</h3>
            <div className="nate-ctas">
              <a 
                href="https://apps.apple.com/jp/app/swimnerd/id1422771098?l=en-US" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button cta-primary"
              >
                Join the CSS Workout Group
              </a>
              <Link to="/training" className="cta-button cta-secondary">
                12 Week CSS Training Program
              </Link>
            </div>
          </div>
          <div className="nate-image">
            <img src="/combatsidestroke/nate-photo.jpg" alt="Nate" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
