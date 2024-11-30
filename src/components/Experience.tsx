import React from 'react';
import { Briefcase, Code, Star, Target } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Developer Intern",
      company: "Tech Warriors Inc.",
      period: "Summer 2023",
      responsibilities: [
        "Developed and maintained web applications",
        "Collaborated with senior developers",
        "Implemented responsive designs"
      ],
      technologies: ["React", "Node.js", "MongoDB"],
      level: 2,
      power: 85
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      responsibilities: [
        "Built custom websites for clients",
        "Managed project timelines",
        "Implemented SEO strategies"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      level: 3,
      power: 90
    }
  ];

  return (
    <section className="py-20 coc-container">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Battle Experience</h2>
        <div className="section-divider mb-12"></div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="coc-card p-6 relative">
              <div className="absolute -top-66 right-4 bg-yellow-600 px-4 py-1 rounded-full">
                <span className="text-white text-sm font-bold ">Lvl {exp.level}</span>
              </div>

              <div className="flex items-start gap-6">
                <div className="achievement-badge flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-brown-800" />
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">{exp.company}</span>
                    <span className="text-gray-500 mx-2">•</span>
                    <span className="text-gray-300">{exp.period}</span>
                  </div>

                  <div className="resource-bar mb-6">
                    <div 
                      className="resource-fill" 
                      style={{ width: `${exp.power}%` }}
                    ></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                      Power Level: {exp.power}/100
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-yellow-400 font-bold mb-2">Battle Achievements</h4>
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-300">{resp}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-yellow-400 font-bold mb-2">Weapons Mastered</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-yellow-600/30 text-yellow-400 
                                     rounded-full text-sm border border-yellow-600"
                          >
                            <Code className="w-4 h-4 inline-block mr-1" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;