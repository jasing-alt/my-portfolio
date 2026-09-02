function Projects() {
  const projects = [
    {
      id: 1,
      title: "ResQLink",
      category: "Capstone Project | Emergency Response System",
      description: "ResQLink is a web and mobile emergency response platform designed to improve communication between dispatchers and responders during emergency situations. The system enables real-time information exchange between the mobile application and web dashboard, allowing faster coordination and situational awareness.",
      features: [
        "Emergency incident reporting",
        "Dispatcher dashboard",
        "Responder monitoring",
        "Real-time status updates",
        "Mobile-to-web data synchronization",
        "Emergency coordination tools"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "Composer", "API Integration"],
      contribution: "Worked on system development, database integration, API-related functionality, and implementation of emergency response workflows.",
      featured: true,
      links: {
        github: "#",
        demo: "#",
        caseStudy: "#"
      }
    },
    {
      id: 2,
      title: "Barangay Document Request System",
      category: "Web Application",
      description: "A web-based platform that streamlines the process of requesting and managing barangay documents. Residents can submit document requests online while administrators can manage, process, and monitor requests efficiently.",
      features: [
        "Online document requests",
        "Request tracking",
        "Administrative dashboard",
        "Resident record management",
        "Status monitoring"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "Composer"],
      contribution: "Assisted in developing the application, implementing database functionality, and building user interface components.",
      featured: false,
      links: {
        github: "#",
        demo: "#",
        caseStudy: "#"
      }
    },
    {
      id: 3,
      title: "Budget Tracker Mobile App",
      category: "UI/UX Design Project",
      description: "A mobile budgeting application concept focused on helping users track expenses, manage budgets, and visualize spending habits. This project was a UI/UX design project and was not developed into a functional application.",
      features: [
        "Expense tracking",
        "Budget management",
        "Spending visualization",
        "User flows and wireframes",
        "Interactive prototypes"
      ],
      technologies: ["Figma"],
      contribution: "Created user flows, wireframes, high-fidelity designs, and interactive prototypes.",
      featured: false,
      links: {
        figma: "#",
        caseStudy: "#"
      }
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`project-card ${project.featured ? 'featured' : ''}`}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <p className="project-category">{project.category}</p>
            </div>

            <p className="project-description">{project.description}</p>

            {project.features.length > 0 && (
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-technologies">
              <h4>Technologies:</h4>
              <div className="tech-badges">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <p className="project-contribution">{project.contribution}</p>

            <div className="project-links">
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  className="project-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  GitHub
                </a>
              )}
              {project.links.demo && (
                <a 
                  href={project.links.demo} 
                  className="project-link"
                  aria-label={`View ${project.title} demo`}
                >
                  Live Demo
                </a>
              )}
              {project.links.figma && (
                <a 
                  href={project.links.figma} 
                  className="project-link"
                  aria-label={`View ${project.title} on Figma`}
                >
                  Figma
                </a>
              )}
              {project.links.caseStudy && (
                <a 
                  href={project.links.caseStudy} 
                  className="project-link"
                  aria-label={`View ${project.title} case study`}
                >
                  Case Study
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
