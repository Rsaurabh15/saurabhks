import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;