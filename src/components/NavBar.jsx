import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ margin: '0 1rem' }}>Home</Link>
        <Link to="/work" onClick={() => setIsMenuOpen(false)} style={{ margin: '0 1rem' }}>Work</Link>
        <Link to="/project" onClick={() => setIsMenuOpen(false)} style={{ margin: '0 1rem' }}>Projects</Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ margin: '0 1rem' }}>Contact</Link>
      </div>
    </nav>
  );
}