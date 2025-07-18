import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';

import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;