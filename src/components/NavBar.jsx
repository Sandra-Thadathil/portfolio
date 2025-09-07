import { Link } from 'react-router-dom';
import './NavBar.css'; 

export default function NavBar() {
  return (
    <nav>
      <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
      <Link to="/work" style={{ margin: '0 1rem' }}>Work</Link>
      <Link to="/project" style={{ margin: '0 1rem' }}>Projects</Link>
      <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
    </nav>
  );
}