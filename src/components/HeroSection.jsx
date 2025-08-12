import React from "react";
import "./HeroSection.css";
import heroImg from "./images/Photopng.png";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-intro">HI, I'M Prakash</div>
          <h1 className="hero-title">
            I'M A<br />
            <span className="hero-typewriter">
              WEB{' '} <br />
              <Typewriter
                words={["DEVELOPER", "DESIGNER"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </h1>

          <p className="hero-desc">
            I’m a web developer with strong skills in building websites and web
            applications. I work with both the frontend and backend. I’m experienced in
            using HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB to
            create fast, user-friendly, and scalable websites. I also use tools like
            Tailwind CSS for easy styling. I’m always eager to learn new things and improve my
            work to deliver the best results.
          </p>
          <div className="btn">
            <Link to="/projects" className="hero-btn">
              VIEW MY PROJECTS
            </Link>
          <Link to="/cv" className="hero-btn">
              VIEW MY CV
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <img src={heroImg} alt="Prakash" className="hero-img" />
        </div>
      </div>
    </section>
  );
}
