import React from 'react';
import { Home, Code2, Briefcase, Mail, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection, darkMode, toggleDarkMode }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'skills', icon: Code2, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>Portfolio</span>
          </div>

          <div className="flex items-center space-x-8">
            {navItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300
                  ${activeSection === id 
                    ? 'bg-blue-500 text-white' 
                    : `${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                  }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors
                ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;