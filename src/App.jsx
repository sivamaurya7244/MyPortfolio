import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Experiance from './components/Experiance.jsx';
import Portfolio from './components/Portfolio.jsx';
import CodeShowcase from './components/CodeShowcase.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ResumeModal from './components/ResumeModal.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme-v2');
    return saved !== null ? saved === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme-v2', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme-v2', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 selection:bg-blue-500 selection:text-white">
      {/* Top Fixed Navigation (Hidden when printing resume) */}
      <div className="print:hidden print-hide-area">
        <Navbar 
          onOpenResume={() => setIsResumeOpen(true)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      {/* Main Content Sections (Hidden when printing resume) */}
      <main className="print:hidden print-hide-area">
        <Home onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Experiance />
        <Portfolio onSelectProject={setSelectedProject} />
        <CodeShowcase />
        <Contact />
      </main>

      {/* Footer (Hidden when printing resume) */}
      <div className="print:hidden print-hide-area">
        <Footer />
      </div>

      {/* Interactive Modals */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      
      {/* Toast Notification Provider */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: darkMode ? '#0f172a' : '#ffffff',
            color: darkMode ? '#f8fafc' : '#0f172a',
            border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
            borderRadius: '12px',
            fontSize: '13px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: darkMode ? '#0f172a' : '#ffffff'
            }
          },
          error: {
            iconTheme: {
              primary: '#f43f5e',
              secondary: darkMode ? '#0f172a' : '#ffffff'
            }
          }
        }}
      />
    </div>
  );
}

export default App;
