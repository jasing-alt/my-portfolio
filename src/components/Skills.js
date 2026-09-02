function Skills() {
  const technicalSkills = [
    { src: "/html.png", alt: "HTML" },
    { src: "/css.png", alt: "CSS" },
    { src: "/javascript.png", alt: "JavaScript" },
    { src: "/react.png", alt: "React" },
    { src: "/mysql.png", alt: "MySQL" },
    { src: "/php.png", alt: "PHP" },
    { src: "/laravel.png", alt: "Laravel" },
    { src: "/c.png", alt: "C" },
  ];

  const softSkills = [
    "Communication Skills",
    "Teamwork and Collaboration",
    "Leadership Skills",
    "Adaptability",
    "Resilience",
    "Emotional Intelligence",
    "Problem-Solving",
    "Time Management",
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Technical Skills</h3>
          <ul className="skills-grid technical-skills">
            {technicalSkills.map((skill) => (
              <li key={skill.alt} className="skill-badge logo-badge" title={skill.alt}>
                <img src={skill.src} alt={skill.alt} className="skill-icon" />
              </li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul className="skills-grid soft-skills">
            {softSkills.map((skill) => (
              <li key={skill} className="skill-badge text-badge">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
