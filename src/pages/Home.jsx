import './Home.css';
import natePhoto from '../assets/nate-photo.jpg';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content-center">
          <h1 className="hero-heading">Become a Force<br/>in the Water</h1>
        </div>
      </section>

      {/* Nate Section */}
      <section className="nate-section">
        <div className="nate-container">
          <div className="nate-text">
            <h2>What's up! My name is Nate.</h2>
            <h3>I help people become <em>special</em> in the water.</h3>
          </div>
          <div className="nate-image">
            <img src={natePhoto} alt="Nate" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
