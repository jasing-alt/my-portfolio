import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const appStyle = {
    backgroundImage: 'linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 25%, #FFD1DC 50%, #FFE4E1 75%, #FFF0F5 100%)',
    backgroundSize: 'cover',
  };

  return (
    <div style={appStyle}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;

