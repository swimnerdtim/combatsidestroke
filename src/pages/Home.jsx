import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Full-width hero with combat swimmer image */}
      <section className="hero-fullwidth">
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000" 
            alt="Combat Swimmer" 
            className="hero-bg-image"
          />
          <div className="hero-overlay-dark"></div>
        </div>
        <div className="hero-content-left">
          <h1 className="hero-title-white">BECOME A FORCE<br/>IN THE WATER.</h1>
          <div className="hero-buttons">
            <a href="https://apps.apple.com/jp/app/swimnerd/id1422771098?l=en-US" target="_blank" rel="noopener noreferrer" className="btn-blue">
              JOIN THE CSS WORKOUT GROUP
            </a>
            <Link to="/training" className="btn-red">
              12 WEEK CSS TRAINING PROGRAM
            </Link>
          </div>
        </div>
      </section>

      {/* Nate intro section */}
      <section className="nate-intro">
        <div className="intro-container">
          <div className="intro-text-side">
            <h2 className="intro-heading-lower">what up! my name is nate.</h2>
            <h3 className="intro-subheading-lower">i help people become <em>special</em> in the water.</h3>
            <div className="intro-buttons">
              <a href="https://apps.apple.com/jp/app/swimnerd/id1422771098?l=en-US" target="_blank" rel="noopener noreferrer" className="btn-blue">
                JOIN THE CSS WORKOUT GROUP
              </a>
              <Link to="/training" className="btn-red">
                12 WEEK CSS TRAINING PROGRAM
              </Link>
            </div>
          </div>
          <div className="intro-image-side">
            <img 
              src="/combatsidestroke/nate-photo.jpg" 
              alt="Nate" 
              className="nate-photo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
