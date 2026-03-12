import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <Link to="/" className="site-title">COMBAT SIDE STROKE</Link>
          <a href="https://www.tiktok.com/@combatsidestroke" target="_blank" rel="noopener noreferrer" className="tiktok-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
        <nav className="main-nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/technique" className="nav-item">Technique</Link>
          <Link to="/blog" className="nav-item">Navy SEAL Swim Blog</Link>
          <Link to="/training" className="nav-item">Training</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
