// src/pages/Home.jsx
import '../css/layout.css'
import '../pages/Home.css'

export default function Home() {
  return (
    <div className="page-container">
      <div className="hero-section">
        <img src="/icon.svg" alt="Hero" className="hero-image" />
        <h1 className="hero-title">Bento React Template</h1>
        <p className="hero-text">Build beautiful, responsive web applications with our iOS-inspired design system</p>
        <img src="/icons/arrow-down-line.svg" alt="Scroll down" className="scroll-arrow" />
      </div>
      
      <div className="bento-grid">
        <div className="bento-item large">
          <h2>Modern React Template</h2>
          <p>A beautiful, iOS-inspired design system featuring glass morphism, smooth animations, and a responsive bento grid layout. Perfect for creating modern web applications with style.</p>
          <p>Built with React, React Router, and modern CSS features like backdrop-filter and CSS Grid.</p>
        </div>
        <div className="bento-item">
          <h2>Welcome</h2>
          <p>This is a modern, iOS-inspired React template.</p>
        </div>
        <div className="bento-item">
          <h2>Features</h2>
          <p>Discover the power of minimal design and smooth interactions.</p>
        </div>
        <div className="bento-item">
          <h2>Get Started</h2>
          <p>Begin building your next project with this template.</p>
        </div>
      </div>
    </div>
  )
}  