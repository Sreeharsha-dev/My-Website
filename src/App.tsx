import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
          <Routes>
            <Route path="/" element={
              <>
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <main>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Contact />
                </main>
                <Footer />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;