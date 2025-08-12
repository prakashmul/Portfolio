import React, { useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import HeroImg from "./images/Photopng.png"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: "success",
          message:
            "Message sent successfully! You will receive a confirmation email shortly.",
        });
        form.current.reset(); // Reset form
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending message:", error);

      let errorMessage = "Failed to send message. Please try again later.";

      if (error.text) {
        errorMessage = error.text;
      } else if (error.message) {
        errorMessage = error.message;
      }

      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactWrapper id="contact">
      <h2 className="section-title">Contact</h2>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="left-section" variants={cardVariants}>
          <Card />
        </motion.div>
        <motion.div className="right-section" variants={cardVariants}>
          <div className="contact-info">
            {/* <h3>Get In Touch</h3>
            <p>
              Feel free to contact me for collaborations and opportunities.
            </p> */}

            {submitStatus && (
              <div className={`status-message ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} ref={form}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@gmail.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Type your message..."
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </ContactWrapper>
  );
};

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <center>
          <div className="profileimage">
            {/* <svg
              className="pfp"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 122.88"
            >
              <g>
                <path d="M61.44,0c8.32,0,16.25,1.66,23.5,4.66l0.11,0.05c7.47,3.11,14.2,7.66,19.83,13.3l0,0c5.66,5.65,10.22,12.42,13.34,19.95 c3.01,7.24,4.66,15.18,4.66,23.49c0,8.32-1.66,16.25-4.66,23.5l-0.05,0.11c-3.12,7.47-7.66,14.2-13.3,19.83l0,0 c-5.65,5.66-12.42,10.22-19.95,13.34c-7.24,3.01-15.18,4.66-23.49,4.66c-8.31,0-16.25-1.66-23.5-4.66l-0.11-0.05 c-7.47-3.11-14.2-7.66-19.83-13.29L18,104.87C12.34,99.21,7.78,92.45,4.66,84.94C1.66,77.69,0,69.76,0,61.44s1.66-16.25,4.66-23.5 l0.05-0.11c3.11-7.47,7.66-14.2,13.29-19.83L18.01,18c5.66-5.66,12.42-10.22,19.94-13.34C45.19,1.66,53.12,0,61.44,0L61.44,0z M16.99,94.47l0.24-0.14c5.9-3.29,21.26-4.38,27.64-8.83c0.47-0.7,0.97-1.72,1.46-2.83c0.73-1.67,1.4-3.5,1.82-4.74 c-1.78-2.1-3.31-4.47-4.77-6.8l-4.83-7.69c-1.76-2.64-2.68-5.04-2.74-7.02c-0.03-0.93,0.13-1.77,0.48-2.52 c0.36-0.78,0.91-1.43,1.66-1.93c0.35-0.24,0.74-0.44,1.17-0.59c-0.32-4.17-0.43-9.42-0.23-13.82c0.1-1.04,0.31-2.09,0.59-3.13 c1.24-4.41,4.33-7.96,8.16-10.4c2.11-1.35,4.43-2.36,6.84-3.04c1.54-0.44-1.31-5.34,0.28-5.51c7.67-0.79,20.08,6.22,25.44,12.01 c2.68,2.9,4.37,6.75,4.73,11.84l-0.3,12.54l0,0c1.34,0.41,2.2,1.26,2.54,2.63c0.39,1.53-0.03,3.67-1.33,6.6l0,0 c-0.02,0.05-0.05,0.11-0.08,0.16l-5.51,9.07c-2.02,3.33-4.08,6.68-6.75,9.31C73.75,80,74,80.35,74.24,80.7 c1.09,1.6,2.19,3.2,3.6,4.63c0.05,0.05,0.09,0.1,0.12,0.15c6.34,4.48,21.77,5.57,27.69,8.87l0.24,0.14 c6.87-9.22,10.93-20.65,10.93-33.03c0-15.29-6.2-29.14-16.22-39.15c-10-10.03-23.85-16.23-39.14-16.23 c-15.29,0-29.14,6.2-39.15,16.22C12.27,32.3,6.07,46.15,6.07,61.44C6.07,73.82,10.13,85.25,16.99,94.47L16.99,94.47L16.99,94.47z" />
              </g>
            </svg> */}
            <img
              src={HeroImg} // replace with your actual image path or import
              alt="Prakash"
              className="pfp"
            />
          </div>
          <div className="Name">
            <p>Prakash Mul</p>
          </div>
          <div className="socialbar">
            <a
              id="github"
              href="https://github.com/prakashmul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 16 16"
                className="bi bi-github"
                fill="currentColor"
                height={25}
                width={25}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a
              id="instagram"
              href="https://www.instagram.com/prakash_mul/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 16 16"
                className="bi bi-instagram"
                fill="currentColor"
                height={25}
                width={25}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a
              id="facebook"
              href="https://www.facebook.com/prakash.mul.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 16 16"
                className="bi bi-facebook"
                fill="currentColor"
                height={25}
                width={25}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/prakash-mul-71b50a249/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 16 16"
                className="bi bi-linkedin"
                fill="currentColor"
                height={25}
                width={25}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
        </center>
      </div>
    </StyledWrapper>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 120px 20px;
  background: white;

  .section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 80px;
    letter-spacing: -0.025em;
    text-align: center;
  }

  .contact-container {
    display: flex;
    gap: 60px;
    align-items: flex-start;
    max-width: 1200px;
    width: 100%;
    margin-bottom: 60px;
  }

  .left-section {
    flex-shrink: 0;
  }

  .right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contact-info {
    background: #f8fafc;
    border-radius: 20px;
    padding: 40px;
    border: 1px solid #e2e8f0;
    color: #1f2937;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .contact-info h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    font-weight: 600;
    color: #1f2937;
  }

  .contact-info > p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    opacity: 0.8;
    line-height: 1.6;
    color: #4b5563;
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
    background: white;
    border-radius: 15px;
    border: 1px solid #e5e7eb;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }

  .contact-item:hover {
    background: #f9fafb;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .contact-item .icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f4f6;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .contact-item h4 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    font-weight: 600;
    color: #1f2937;
  }

  .contact-item p {
    font-size: 1rem;
    opacity: 0.8;
    margin: 0;
    color: #6b7280;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .form-group label {
    font-size: 1rem;
    font-weight: 500;
    color: #1f2937;
    margin-bottom: 2px;
  }

  .form-group input,
  .form-group textarea {
    padding: 12px 14px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    font-size: 1rem;
    background: #fff;
    color: #1f2937;
    resize: none;
    outline: none;
    transition: border 0.2s;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border: 1.5px solid #6366f1;
  }

  .submit-btn {
    background: #1f2937;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px 0;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s;
  }

  .submit-btn:hover {
    background: #111827;
  }

  .submit-btn:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }

  .status-message {
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-weight: 500;
    text-align: center;
  }

  .status-message.success {
    background: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
  }

  .status-message.error {
    background: #fef2f2;
    color: #dc2626;
    border: 1px solid #fecaca;
  }

  /* Tablet landscape */
  @media (max-width: 1200px) {
    .contact-container {
      gap: 50px;
      max-width: 1000px;
    }

    .contact-info {
      padding: 35px;
    }
  }

  /* Tablet portrait */
  @media (max-width: 900px) {
    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
      margin-bottom: 60px;
    }

    .contact-container {
      gap: 40px;
      max-width: 800px;
    }

    .contact-info {
      padding: 30px;
    }

    .contact-info h3 {
      font-size: 1.8rem;
    }
  }

  /* Mobile landscape */
  @media (max-width: 768px) {
    padding: 15px;

    .section-title {
      font-size: 2.5rem;
      margin-bottom: 50px;
    }

    .contact-container {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }

    .contact-info {
      padding: 30px;
      width: 100%;
      max-width: 500px;
    }

    .contact-info h3 {
      font-size: 1.6rem;
      margin-bottom: 15px;
    }

    .contact-info > p {
      font-size: 1rem;
      margin-bottom: 30px;
    }
  }

  /* Mobile portrait */
  @media (max-width: 600px) {
    padding: 10px;

    .section-title {
      font-size: 2rem;
      margin-bottom: 40px;
    }

    .contact-container {
      gap: 30px;
    }

    .contact-info {
      padding: 25px;
    }

    .contact-info h3 {
      font-size: 1.4rem;
      margin-bottom: 12px;
    }

    .contact-info > p {
      font-size: 0.95rem;
      margin-bottom: 25px;
    }

    .form-group {
      gap: 4px;
    }

    .form-group label {
      font-size: 0.95rem;
    }

    .form-group input,
    .form-group textarea {
      padding: 10px 12px;
      font-size: 0.95rem;
    }

    .submit-btn {
      padding: 10px 0;
      font-size: 1rem;
    }
  }

  /* Small mobile */
  @media (max-width: 480px) {
    .section-title {
      font-size: 1.8rem;
      margin-bottom: 30px;
    }

    .contact-container {
      gap: 25px;
    }

    .contact-info {
      padding: 20px;
    }

    .contact-info h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
    }

    .contact-info > p {
      font-size: 0.9rem;
      margin-bottom: 20px;
    }

    .form-group {
      gap: 3px;
    }

    .form-group label {
      font-size: 0.9rem;
    }

    .form-group input,
    .form-group textarea {
      padding: 8px 10px;
      font-size: 0.9rem;
    }

    .submit-btn {
      padding: 8px 0;
      font-size: 0.95rem;
    }
  }

  /* Extra small mobile */
  @media (max-width: 360px) {
    .section-title {
      font-size: 1.6rem;
      margin-bottom: 25px;
    }

    .contact-info {
      padding: 15px;
    }

    .contact-info h3 {
      font-size: 1.2rem;
    }

    .form-group input,
    .form-group textarea {
      padding: 6px 8px;
      font-size: 0.85rem;
    }
  }
`;

const StyledWrapper = styled.div`
  .card {
    width: 300px;
    border-radius: 28px;
    padding: 32px 24px;
    background: linear-gradient(135deg, #f8fafc 60%, #e0e7ef 100%);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.2s, transform 0.2s;
    border: 1.5px solid #e5e7eb;
  }

  .card:hover {
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px) scale(1.025);
  }

  .profileimage {
    background: linear-gradient(135deg, #f1f5f9 60%, #e0e7ef 100%);
    border: 4px solid #e5e7eb;
    margin-top: 0;
    border-radius: 50%;
    width: 110px;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
    margin-bottom: 18px;
  }

  .pfp {
    border-radius: 50%;
    fill: #1f2937;
    width: 110px;
    height: 90px;
    display: block;
  }

  .Name {
    color: #1f2937;
    font-family: "Poppins", "Segoe UI", Arial, sans-serif;
    padding: 0 0 10px 0;
    font-size: 1.25rem;
    margin-top: 0;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.01em;
    margin-bottom: 10px;
  }

  .socialbar {
    border-radius: 10px;
    margin-top: 18px;
    color: #1f2937;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    display: flex;
    justify-content: center;
    gap: 10px;
    transition: border 0.2s;
  }

  .card a {
    transition: 0.2s;
    color: #1f2937;
    font-size: 1.55em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: none;
    box-shadow: none;
  }

  .card a:hover {
    color: #fff;
    background: #6366f1;
    box-shadow: 0 4px 16px rgba(99, 102, 241, 0.1);
    transform: translateY(-3px) scale(1.12);
  }

  .card a:focus {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
  }

  #github:hover {
    background: #23272f;
    color: #fff;
  }

  #instagram:hover {
    background: #d62976;
    color: #fff;
  }

  #facebook:hover {
    background: #3b5998;
    color: #fff;
  }

  #linkedin:hover {
    background: #0077b5;
    color: #fff;
  }

  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    justify-content: center;
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    z-index: 0;
    border-radius: 50%;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon::after {
    content: "";
    position: absolute;
    display: inline-block;
    height: 100%;
    width: 100%;
    background-color: transparent;
    z-index: -1;
    border-radius: 50%;
    top: 100%;
  }
  .wrapper .icon:hover:after {
    animation: bg-pos 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1 both;
    animation-timing-function: ease-in-out;
  }

  .wrapper .icon:hover {
    color: #fff;
    overflow: unset;
    transition: color 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    animation: overflow-toggle 0.7s;
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }
  .wrapper .facebook::after {
    background-color: #1877f2;
  }
  .wrapper .twitter::after {
    background-color: #1da1f2;
  }
  .wrapper .instagram::after {
    background-color: #e4405f;
  }

  .wrapper .facebook:hover .tooltip,
  .wrapper .facebook:hover .tooltip::before {
    background: #1877f2;
    color: #fff;
  }

  .wrapper .twitter:hover .tooltip,
  .wrapper .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: #fff;
  }

  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #fff;
  }

  @keyframes bg-pos {
    0% {
      top: 100%;
    }
    100% {
      top: 0;
    }
  }

  @keyframes overflow-toggle {
    0% {
      overflow: hidden;
    }
    100% {
      overflow: visible;
    }
  }
`;

export default Contact;
