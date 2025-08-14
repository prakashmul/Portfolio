import React from "react";
import cvImage from "./images/cv.png";

export default function CV() {
  const containerStyle = {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    marginBottom: "30px",
  };

  const imgStyle = {
    maxWidth: "100%",
    height: "auto",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Curriculum Vitae</h1>
      <img src={cvImage} alt="CV" style={imgStyle} />
    </div>
  );
}
