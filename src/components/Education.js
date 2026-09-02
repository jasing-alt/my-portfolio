function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="education-level">
          <h3>College</h3>
          <div className="education-level-content">
            <div className="education-image">
              <img 
                src="/usjrlogo.jpg" 
                alt="University of San Jose-Recoletos" 
                className="education-logo"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400?text=USJR";
                }}
              />
            </div>
            <div className="education-item">
              <h4>University of San Jose-Recoletos</h4>
              <p className="degree">Bachelor of Science in Computer Technology</p>
              <p className="duration">2024-2026 (Current)</p>
            </div>
          </div>
        </div>

        <div className="education-level">
          <h3>Senior High School</h3>
          <div className="education-level-content">
            <div className="education-image">
              <img 
                src="/annexlogo.png" 
                alt="San Andres National High School" 
                className="education-logo"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400?text=SANHS";
                }}
              />
            </div>
            <div className="education-item">
              <h4>San Andres National High School Cabadiangan Annex</h4>
              <p className="degree">Humanities and Social Sciences</p>
              <p className="duration">2022-2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
