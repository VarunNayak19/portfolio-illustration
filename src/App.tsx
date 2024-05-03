import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import { useTheme } from './ThemeContext';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
      //use theme
      const { isDarkMode } = useTheme();
      document.body.className = isDarkMode ? 'bg-black' : 'bg-white';
  return (
    <div className={`relative ${isDarkMode ? 'bg-black':'bg-white'}`}>
        <NavBar />
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
    </div>
  )
}

export default App
