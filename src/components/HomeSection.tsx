import React from 'react';
import { Award, Briefcase, Coffee, Users } from 'lucide-react';

const HomeSection = () => {
  const stats = [
    { icon: Award, label: 'Experience', value: '5+ Years' },
    { icon: Briefcase, label: 'Projects', value: '100+' },
    { icon: Coffee, label: 'Coffee', value: '1000+' },
    { icon: Users, label: 'Clients', value: '50+' }
  ];

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 animate-fadeIn">
          <h1 className="text-3xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in creating beautiful and functional web applications.
            My focus is on delivering high-quality solutions that meet client needs and exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center justify-center animate-slideUp">
              <Icon size={24} className="text-blue-500 mb-2" />
              <span className="text-2xl font-bold text-white mb-1">{value}</span>
              <span className="text-gray-400 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 animate-fadeIn">
        <h2 className="text-2xl font-bold text-white mb-6">What I Do!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['UI/UX Design', 'Web Development', 'Mobile Apps', 'Branding', 'SEO', 'Marketing'].map((service) => (
            <div key={service} className="bg-gray-700/30 rounded-2xl p-6 hover:bg-pink-600/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
              <p className="text-gray-400">
                Creating amazing user experiences and solving complex problems with elegant solutions.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;