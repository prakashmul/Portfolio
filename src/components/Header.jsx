import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      // If already on homepage, just scroll
      scrollToSection(sectionId);
    } else {
      // Navigate to homepage and pass sectionId in state
      navigate("/", { state: { scrollToId: sectionId } });
      closeMenu();
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} dark-bg`}>
      <div className="header-container">
        <div class="logo">
          <a href="/" class="logo-text">Prakash Mul</a>
        </div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            Home
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("skills");
            }}
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("experience");
            }}
          >
            Experience
          </a>
          <a
            href="#achievements"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("achievements");
            }}
          >
            Achievements
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            Contact
          </a>

          <span className="divider" />
          <a
            href="https://github.com/prakashmul"
            className="icon-link"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/prakash-mul-71b50a249/"
            className="icon-link"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://www.facebook.com/prakash.mul.9"
            className="icon-link"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook />
          </a>
        </nav>
        <div
          className={`mobile-menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
