import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Notfound = () => {
  const [hover, setHover] = useState(false);

  return (
    <div style={styles.container}>
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="Forbidden"
        style={styles.image}
      />
      <h1 style={styles.heading}>403</h1>
      <p style={styles.paragraph}>
        Forbidden - You don't have permission to access this page.
      </p>
      <a
        href="http://localhost:3000/store/"
        style={{ ...styles.link, ...(hover ? styles.linkHover : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        
      >
        Go to Homepage
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    background: "white",
    padding: "30px 15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "64px",
    margin: "0",
    color: "#d9534f",
  },
  paragraph: {
    fontSize: "20px",
    margin: "10px 0 20px",
    color: "#6c757d",
  },
  link: {
    display: "inline-block",
    padding: "10px 25px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s, transform 0.3s",
  },
  linkHover: {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  },
};

export default Notfound;
