import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen bg-gradient-static ${
      darkMode ? 'dark' : ''
    }`}>
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <Sidebar />
          </div>
          <div className="lg:col-span-8">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;