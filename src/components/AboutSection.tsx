import React from 'react';
import { Code2, Palette, Globe } from 'lucide-react';

const AboutSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with modern design principles.',
    },
    {
      icon: Palette,
      title: 'App Development',
      description: 'Building responsive and performant web applications using modern frameworks.',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Developing full-stack web solutions with cutting-edge technologies.',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a Creative Director and UI/UX Designer from New York, USA, working in web development
          and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6">What I do!</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-gray-700/30 rounded-xl p-6 hover:bg-pink-600/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-600/30 transition-colors">
                <Icon size={24} className="text-pink-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;