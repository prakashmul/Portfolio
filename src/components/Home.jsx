import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "./HeroSection";
import Education from "./Education";
import Skills from "./Skills";
import PersonalExperience from "./PersonalExperience";
import Achievements from "./Achievements";
import Contact from "./Contact";
import PageTransition from "./PageTransition";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const id = location.state.scrollToId;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Clear state after scrolling so it doesn't re-scroll on next renders
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <>
      <section id="home">
        <PageTransition>
          <HeroSection />
        </PageTransition>
      </section>

      <section id="education">
        <PageTransition>
          <Education />
        </PageTransition>
      </section>

      <section id="skills">
        <PageTransition>
          <Skills />
        </PageTransition>
      </section>

      <section id="experience">
        <PageTransition>
          <PersonalExperience />
        </PageTransition>
      </section>

      <section id="achievements">
        <PageTransition>
          <Achievements />
        </PageTransition>
      </section>

      <section id="contact">
        <PageTransition>
          <Contact />
        </PageTransition>
      </section>
    </>
  );
}
