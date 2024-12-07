import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Navbar from './components/navibar.jsx'
import Background from './components/background.jsx'
import Projects from './pages/Projects.jsx'
import Features from './pages/Features.jsx'

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </>
  )
}

export default App
