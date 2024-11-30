import React from 'react';
import { Code, Globe, Rocket, Sword, Shield, Crosshair } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Barbarian's Forge",
      description: "Full-stack battle-tested application with real-time features",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=400",
      icon: <Sword className="w-12 h-12 text-red-500 glow-animation" />,
      level: 8,
      power: 95,
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/rohitmanohar2108",
      demo: "https://demo.com"
    },
    {
      title: "Archer's Watch",
      description: "Long-range monitoring dashboard with precise analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
      icon: <Crosshair className="w-12 h-12 text-green-500 glow-animation" />,
      level: 6,
      power: 85,
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Dragon's Vault",
      description: "Secure authentication system with unbreakable defenses",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=400",
      icon: <Shield className="w-12 h-12 text-blue-500 glow-animation" />,
      level: 7,
      power: 90,
      tech: ["React Native", "Firebase", "Redux"],
      link: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 coc-container">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-16">Battle Projects</h2>
        <div className="section-divider mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="coc-card p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-yellow-600"
                />
                <div className="absolute -top-4 right-4 bg-yellow-600 px-4 py-1 rounded-full">
                  <span className="text-white font-bold">Lvl {project.level}</span>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 achievement-badge">
                  {project.icon}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">{project.title}</h3>
                <div className="resource-bar mb-4">
                  <div className="resource-fill" style={{ width: `${project.power}%` }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-black text-sm font-bold">
                    Power: {project.power}/100
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-yellow-600/30 text-yellow-400 
                               rounded-full text-sm border border-yellow-600 hover-pulse"
                    >
                      <Code className="w-4 h-4 inline-block mr-1" />
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between gap-4 mt-6 cursor-pointer z-20 relative">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="coc-button flex-1 text-center hover-shake"
                  >
                    <Globe className="w-4 h-4 text-black inline-block mr-2" />
                    View Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="coc-button flex-1 text-center hover-shake"
                  >
                    <Rocket className="w-4 h-4 text-black inline-block mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;