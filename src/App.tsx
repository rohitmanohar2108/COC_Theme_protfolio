import React from 'react';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/animations.css';
import './styles/theme.css';
import './styles/button.css';

function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;