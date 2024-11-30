import React from 'react';
import { Book, Award, Star, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      title: "B.tech in Computer Science and Engineering",
      institution: "National Institute of Technology Karnataka, Surathkal",
      period: "2022-2026",
      achievements: [
        "Dean's List: 3 Consecutive Semesters",
        "Lead Developer: University Hackathon",
        "Teaching Assistant: Data Structures"
      ],
      level: 3,
      progress: 75
    },
    {
      title: "Secondary Education",
      institution: "Dharampeth M.P. Deo Memorial Science College, Nagpur",
      period: "2020-2022",
      achievements: [
        "Top Student Award",
        "Built 5 Production Projects",
        "Mentored Junior Developers"
      ],
      level: 4,
      progress: 100
    }
  ];

  return (
    <section className="py-20 coc-container">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Education Quest Log</h2>
        <div className="section-divider mb-12"></div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="coc-card p-6 relative">
              <div className="absolute -top-66 right-4 bg-yellow-600 px-4 py-1 rounded-full">
                <span className="text-white text-sm font-bold ">Lvl {edu.level}</span>
              </div>

              <div className="flex items-start gap-6">
                <div className="achievement-badge flex-shrink-0">
                  <Book className="w-8 h-8 text-brown-800" />
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">{edu.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">{edu.institution}</span>
                    <Calendar className="w-5 h-5 text-yellow-400 ml-4" />
                    <span className="text-gray-300">{edu.period}</span>
                  </div>

                  <div className="resource-bar mb-4">
                    <div 
                      className="resource-fill" 
                      style={{ width: `${edu.progress}%` }}
                    ></div>
                    <span className="absolute inset-0 flex items-center justify-center text-black text-sm font-bold">
                      Progress: {edu.progress}%
                    </span>
                  </div>

                  <div className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
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

export default Education;