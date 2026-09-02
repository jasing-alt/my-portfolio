function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-image">
          <img 
            src="/me.png" 
            alt="Jassy Faburada" 
            className="me"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400?text=JF";
            }}
          />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>A Computer Technology student at USJR majoring in Software Development. I enjoy creating responsive websites using HTML, CSS, JavaScript, PHP, and React, always aiming for clean design and practical functionality.<br></br>

        <br></br> Beyond coding, I find inspiration in hip‑hop dance and anime, which fuel my creativity and balance my technical journey. These passions remind me to stay disciplined yet imaginative in everything I do. <br></br>

         <br>
         </br>Looking ahead, I hope to grow as a freelancer, collaborate on diverse projects, and eventually build my own applications that reflect both my skills and creativity. I approach each step with humility, knowing that learning never stops.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
