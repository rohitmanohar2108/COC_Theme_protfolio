import React from 'react';
import { Sword, Shield, Trophy, Gem, Star, Book, Code2, Database, Globe, Flame } from 'lucide-react';
import useTypewriter from '../hooks/useTypewriter'


const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const roles = [
    "Web Developer",
    "UI/UX Designer",
    "Frontend Dev",
  ];

  const displayText = useTypewriter(roles, 100, 50, 2000);


  return (
    <section className="hero-section">
      <div className="hero-content text-center px-4">
        <div className="mb-8 relative">
          <div className="achievement-badge mx-auto mb-4 hover-float">
            <img 
              src="http://localhost:3000/rohit.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-600 px-4 py-0.5 rounded-full">
            <span className="text-white text-sm font-bold">{displayText}</span>
          </div>
        </div>

        <h1 className="hero-title mb-6">Rohit Manohar</h1>
        <p className="text-yellow-400 text-xl mb-8 max-w-2xl mx-auto">
          A passionate Software Engineering student questing through the realms of code, 
          building digital fortresses and conquering technical challenges.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <div className="stat-card hover-pulse">
            <Code2 className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-white">
              <div className="font-bold">Frontend</div>
              <div className="text-sm">React • Next.js • GSAP • Angular</div>
            </div>
          </div>
          <div className="stat-card hover-pulse">
            <Database className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-white">
              <div className="font-bold">Backend</div>
              <div className="text-sm">Node.js • Firebase • MongoDB</div>
            </div>
          </div>
          <div className="stat-card hover-pulse">
            <Globe className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-white">
              <div className="font-bold">Cloud</div>
              <div className="text-sm">AWS • Docker • Microsoft Azure</div>
            </div>
          </div>
          <div className="stat-card hover-pulse">
            <Flame className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-white">
              <div className="font-bold">DevOps</div>
              <div className="text-sm">CI/CD • Testing • Docker • Github </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="coc-button "
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="coc-button"
          >
            Connect Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;