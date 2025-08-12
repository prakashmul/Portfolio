import React from "react";
import styled from "styled-components";

const Achievements = () => {
  const leadershipData = [
    {
      id: 1,
      title: "MERN STACK TRAINING",
      description:
        "I completed MERN Stack training at New Era IT Institute, gaining hands-on experience building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. The training covered frontend and backend development, RESTful APIs, and deployment practices, enabling me to design, develop, and manage dynamic, database-driven applications.",
      icon: (
        <svg
          viewBox="0 0 16 16"
          className="bi bi-people-fill"
          fill="currentColor"
          height={40}
          width={40}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "HR – KBC IT CLUB",
      description:
        "Worked as an HR at KBC IT Club, handling recruitment, onboarding, employee engagement, and coordination between teams to support a productive work environment.",
      icon: (
        <svg
          viewBox="0 0 16 16"
          className="bi bi-award-fill"
          fill="currentColor"
          height={40}
          width={40}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "WORDCAMP NEPAL – 2022 & 2024",
      description:
        "Participated in WordCamp Nepal 2022 and 2023, engaging with the WordPress community, attending sessions on web development trends, and networking with industry professionals.",
      icon: (
        <svg
          viewBox="0 0 16 16"
          className="bi bi-laptop"
          fill="currentColor"
          height={40}
          width={40}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'React Bootcamp',
      description:
        "Completed a React Bootcamp organized by Evolve IT Hub Nepal, gaining practical experience in building dynamic user interfaces, managing state, and integrating APIs using modern React practices.",
      icon: (
        <svg
          viewBox="0 0 16 16"
          className="bi bi-calendar-event"
          fill="currentColor"
          height={40}
          width={40}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
        </svg>
      ),
    },
  ];

  return (
    <StyledWrapper id="achievements">
      <div className="leadership-container">
        <div className="section-header">
          <h2 className="section-title">Experience and Achievements</h2>
        </div>

        <div className="cards-container">
          {leadershipData.map((item) => (
            <section key={item.id} id={`card${item.id}`} className="card">
              <div className="card__front">
                <div className="card__icon">{item.icon}</div>
                <p className="card__title">{item.title}</p>
              </div>
              <div className="card__content">
                <p className="card__description">{item.description}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: radial-gradient(ellipse at 70% 50%, #353535 60%, #232323 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 20px;

  .leadership-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
    letter-spacing: -0.025em;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }

  .section-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    width: 100%;
    max-width: 800px;
  }

  section.card {
    position: relative;
    width: 90%;
    height: 220px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(10px);
  }

  .card__front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 1;
    transform: rotateX(0deg);
  }

  .card:hover .card__front {
    opacity: 0;
    transform: rotateX(90deg);
  }

  .card__icon {
    margin-bottom: 20px;
  }

  .card__icon svg {
    fill: #ffffff;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 3px;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    background-color: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .card__content {
    color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 25px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.9);
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 1.3rem;
    color: #ffffff;
    font-weight: 700;
    line-height: 1.3;
    text-align: center;
  }

  .card__description {
    margin: 0;
    font-size: 0.80rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
    text-align: left;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .leadership-container {
      padding: 60px 20px;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
    }

    .cards-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      max-width: 600px;
    }

    section.card {
      height: 220px;
    }

    .card__title {
      font-size: 1.2rem;
    }

    .card__description {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 480px) {
    .cards-container {
      grid-template-columns: 1fr;
      gap: 25px;
      max-width: 400px;
    }

    section.card {
      height: 240px;
    }

    .card__content {
      padding: 20px;
    }

    .card__title {
      font-size: 1.1rem;
    }

    .card__description {
      font-size: 0.85rem;
    }
  }
`;

export default Achievements;
