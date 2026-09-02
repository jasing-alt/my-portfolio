import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const appStyle = {
    backgroundImage: 'radial-gradient(ellipse at center, rgba(255, 192, 203, 0.8) 0%, rgba(255, 182, 193, 0.5) 30%, rgba(255, 240, 245, 0.3) 60%, rgba(255, 255, 255, 0) 100%)',
    backgroundColor: '#FFFFFF',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  };

  return (
    <div style={appStyle}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;

