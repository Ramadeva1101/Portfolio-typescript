import React from 'react';
import { Phone, Mail, MapPin, Calendar, Download, Facebook, Twitter, Github, Linkedin } from 'lucide-react';

const Sidebar = () => {
  const contactInfo = [
    { id: 'phone', icon: Phone, label: 'Phone', value: '+1 234 567 890' },
    { id: 'email', icon: Mail, label: 'Email', value: 'john@example.com' },
    { id: 'location', icon: MapPin, label: 'Location', value: 'New York, USA' },
    { id: 'birthday', icon: Calendar, label: 'Birthday', value: 'May 27, 1990' },
  ];

  const socialLinks = [
    { id: 'facebook', icon: Facebook, href: '#', label: 'Facebook' },
    { id: 'twitter', icon: Twitter, href: '#', label: 'Twitter' },
    { id: 'github', icon: Github, href: '#', label: 'GitHub' },
    { id: 'linkedin', icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl sticky top-8">
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-50"></div>
          <img
            src="/src/lib/profile.png"
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full border-2 border-gray-400"
          />
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">I Gede Ramadeva</h1>
        <p className="text-blue-500 mb-6">Web Developer</p>

        <div className="w-full space-y-4 mb-8">
          {contactInfo.map(({ id, icon: Icon, label, value }) => (
            <div key={id} className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center">
                <Icon size={20} className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-400">{label}</p>
                <p className="text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mb-6">
          <Download size={20} />
          <span>Download CV</span>
        </button>

        <div className="flex gap-4">
          {socialLinks.map(({ id, icon: Icon, href, label }) => (
            <a
              key={id}
              href={href}
              aria-label={label}
              className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-pink-500 transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;