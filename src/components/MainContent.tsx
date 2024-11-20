import React, { useState } from 'react';
import { Home, Code2, Briefcase, Mail } from 'lucide-react';
import HomeSection from './HomeSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'skills', icon: Code2, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <div className="space-y-8">
      <nav className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-2">
        <div className="flex justify-between items-center">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300
                ${activeSection === id 
                  ? 'bg-gradient-to-r from-[#0A192F] to-[#432E54] text-white' 
                  : 'text-gray-400 hover:text-white'}`}
            >
              <Icon size={18} />
              <span className="hidden md:inline">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="min-h-[calc(100vh-12rem)] bg-gradient-custom">
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </div>
    </div>
  );
};

export default MainContent;