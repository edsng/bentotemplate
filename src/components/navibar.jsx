import { NavLink } from 'react-router-dom'
import '../css/navibar.css'

export default function Navbar() {
  return (
    <nav className="sidebar">
      <div className="logo-container">
        <img src="/icon.svg" alt="Logo" className="nav-logo" />
      </div>
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          end
        >
          <img src="/icons/home-6-line.svg" alt="" className="nav-icon" />
          Home
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <img src="/icons/instance-line.svg" alt="" className="nav-icon" />
          Projects
        </NavLink>
        <NavLink 
          to="/features" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <img src="/icons/box-2-fill.svg" alt="" className="nav-icon" />
          Features
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <img src="/icons/account-box-line.svg" alt="" className="nav-icon" />
          About
        </NavLink>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/edwsng/" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src="/icons/linkedin-box-fill.svg" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/edsng" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src="/icons/github-fill.svg" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://docs.google.com/document/d/1IXSPeeWzdQOGPxRNA1LVZF2PR7a-5xvlymQfJBaZaFc/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src="/icons/article-fill.svg" alt="Resume" className="social-icon" />
        </a>
        <a href="https://www.edwsng.com/" target="_blank" rel="noopener noreferrer" className="social-link" title="More Links">
          <img src="/icons/share-box-line.svg" alt="More Links" className="social-icon" />
        </a>
      </div>
    </nav>
  )
}
