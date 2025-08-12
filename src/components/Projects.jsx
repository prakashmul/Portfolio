import React from "react";

const projects = [
  {
    name: "E-Commerce Website",
    description: "This E-Commerce platform delivers a fast, responsive shopping experience. The React front-end with Tailwind CSS offers intuitive product listings, a cart, and secure checkout, while the Node.js/Express.js back-end and MongoDB ensure smooth operations and scalable data storage.",
    github: "https://github.com/prakashmul/Ecommerce",
  },
  {
    name: "Our Store",
    description: "Our Store is a simple website made with HTML, CSS, and JavaScript to display products with their details. It has a clean design that makes it easy for users to browse and learn about items.",
    github: "https://github.com/prakashmul/Our-Store",
  },
  {
    name: "TODO App",
    description: "This To-Do app, made with HTML, CSS, and JavaScript, lets users easily add, edit, and delete tasks. It has a clean, responsive design for simple and clear task management.",
    github: "https://github.com/prakashmul/todo-app",
  },
  {
    name: "Movie Website",
    description: "This movie website displays a collection of Nepali, Hindi, and English films, along with trending titles and upcoming releases for the year. It’s designed for easy browsing and keeping up with the latest in cinema.",
    github: "https://github.com/prakashmul/movie-website",
  },
  {
    name: "Cafe Website",
    description: "Online food ordering app that allows users to order their favorite food online with just a few taps. It also has wide selection of options to choose from. It provides easy to use interface to order food online.",
    github: "https://github.com/prakashmul/Cafe-Website",
  },
  {
    name: "Portfolio",
    description: "A personal portfolio website built with React.js, JavaScript, and CSS, featuring a clean, responsive design to showcase my projects, skills, and experience in an interactive and engaging way.",
    github: "https://github.com/prakashmul/Portfolio",
  },
];

export default function Projects() {
  return (
    <>
      <style>{`
        .projects-container {
          max-width: 900px;
          margin: 40px auto;
          padding: 0 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .projects-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 50px;
          color: #232323;
          padding-top: 60px;

        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .project-card {
          background: radial-gradient(ellipse at 70% 50%, #353535 60%, #232323 100%);
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          padding: 20px;
          min-height: 300px; ////
          position: relative; ///
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          animation: fadeInUp 0.6s forwards;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        .project-name {
          font-size: 1.3rem;
          margin-bottom: 10px;
          font-weight: 700;
          color: #fff;
        }

        .project-description {
          font-size: 1rem;
          margin-bottom: 15px;
          color: #fff;
          min-height: 48px;
        }

        /* Your hero-btn styles applied to the project button */
        .hero-btn {
          display: inline-block;
          padding: 14px 32px;
          border: 2px solid #fff;
          border-radius: 6px;
          color: #fff;              /* White font */
          font-size: 1.08rem;
          font-weight: 600;
          text-decoration: none;
          background: radial-gradient(ellipse at 70% 50%, #353535 60%, #232323 100%);         /* Black background */
          transition: background 0.2s, color 0.2s;
          letter-spacing: 0.04em;

          position: absolute;
          bottom: 15px; /* Gap from bottom */
          left: 15px; 
        }

        .hero-btn:hover {
          background: #fff;
          color: #232323;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-grid">
          {projects.map(({ name, description, github }, index) => (
            <div
              key={name}
              className="project-card"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => window.open(github, "_blank")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") window.open(github, "_blank");
              }}
            >
              <div className="project-name">{name}</div>
              <div className="project-description">{description}</div>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn"
                onClick={(e) => e.stopPropagation()}
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
