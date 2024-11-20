import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
      tags: ['Vue.js', 'Firebase', 'Tailwind'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      tags: ['Next.js', 'GraphQL', 'Chart.js'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <div className="pt-24">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Recent Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <a
                  href={project.demoLink}
                  className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-gray-900" />
                </a>
                <a
                  href={project.githubLink}
                  className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Github className="w-5 h-5 text-gray-900" />
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;