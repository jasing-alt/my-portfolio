import React, { useState, useEffect } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
        <div className="logo">
            <h1 className="name">Jassy Faburada</h1>
            <p className="subtitle">Web Developer</p>
        </div>
      <nav>
        <ul className="nav-links">
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''}>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          </li>
          <li className={activeSection === 'education' ? 'active' : ''}>
            <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
