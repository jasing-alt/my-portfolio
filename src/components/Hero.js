import React from 'react';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:jassyfaburada@GPUShaderModule.com';
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-greeting">Hi, I'm Jassy</h1>
        <h2 className="hero-title">Software Developer</h2>
        <p className="hero-subtitle">
          I create responsive, user-friendly web applications with clean code and creative design.
          Let's build something amazing together.
        </p>
        
        <div className="hero-cta">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
            aria-label="View my projects"
          >
            View Projects
          </button>
          <button 
            className="btn btn-secondary"
            onClick={handleEmailClick}
            aria-label="Send me an email"
          >
            Contact Me
          </button>
        </div>

        <div className="hero-social">
          <p className="social-label">Connect with me:</p>
          <div className="social-links">
            <a 
              href="https://github.com/jasing-alt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Visit my GitHub profile"
            >
              GitHub
            </a>
            <a 
              href="mailto:jassyfaburada@GPUShaderModule.com"
              className="social-link"
              aria-label="Send me an email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
