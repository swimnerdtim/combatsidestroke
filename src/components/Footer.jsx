import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src={logo} alt="Combat Sidestroke" className="footer-logo-img" />
            <p className="footer-tagline">
              Become a force in the water.
            </p>
            <div className="footer-socials">
              <a href="https://www.tiktok.com/@combatsidestroke" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@combatsidestroke" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/" onClick={handleLinkClick}>Home</Link>
              <Link to="/technique" onClick={handleLinkClick}>Technique</Link>
              <Link to="/training" onClick={handleLinkClick}>Training</Link>
              <Link to="/videos" onClick={handleLinkClick}>Videos</Link>
              <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-contact">
              <a href="mailto:combatsidestroke@gmail.com">combatsidestroke@gmail.com</a>
              <a href="tel:+17579556273">757-955-6273</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Combat Sidestroke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
