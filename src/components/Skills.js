function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Technical Skills</h3>
          <ul>
            <li>
              <img src="/html.png" alt="HTML" className="skill-icon" />
              HTML
            </li>
            <li>
              <img src="/css.png" alt="CSS" className="skill-icon" />
              CSS
            </li>
            <li>
              <img src="/javascript.png" alt="JavaScript" className="skill-icon" />
              JavaScript
            </li>
            <li>
              <img src="/react.png" alt="React" className="skill-icon" />
              React
            </li>
            <li>
              <img src="/mysql.png" alt="MySQL" className="skill-icon" />
              MySQL
            </li>
            <li>
              <img src="/php.png" alt="PHP" className="skill-icon" />
              PHP
            </li>
            <li>
              <img src="/laravel.png" alt="Laravel" className="skill-icon" />
              Laravel
            </li>
            <li>
              <img src="/c.png" alt="C" className="skill-icon" />
              C
            </li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication Skills</li>
            <li>Collaboration</li>
            <li>Leadership Skills</li>
            <li>Attention to Details</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
