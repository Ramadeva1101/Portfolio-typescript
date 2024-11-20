import React from 'react';
import { Database, Globe, Server } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'laravel', level: 90 },
        { name: 'next js', level: 85 },
        { name: 'Boostrap', level: 80 },
        { name: 'Tailwind CSS', level: 95 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'PHP', level: 80 },
        { name: 'Java', level: 70 }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 75 }
      ]
    }
  ];

  return (
    <div className="grid gap-6">
      {skillCategories.map(({ title, icon: Icon, skills }) => (
        <div key={title} className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 animate-fadeIn">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center">
              <Icon size={24} className="text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>

          <div className="grid gap-6">
            {skills.map(({ name, level }) => (
              <div key={name} className="animate-slideUp">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{name}</span>
                  <span className="text-gray-400">{level}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;