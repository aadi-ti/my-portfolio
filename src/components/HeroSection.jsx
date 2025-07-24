import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
const darkHighlight = "#e69587";

const Highlight = ({ children, color }) => (
  <span style={{ color: color || darkHighlight, fontWeight: "600" }}>
    {children}
  </span>
);

const Cursor = ({ color }) => (
  <span
    style={{
      display: "inline-block",
      marginLeft: 2,
      width: 10,
      color: color || darkHighlight,
      fontWeight: "bold",
      animation: "blink 1s step-start 0s infinite",
      userSelect: "none",
    }}
  >
    |
    <style>{`
      @keyframes blink {
        0%, 50% { opacity: 1; }
        50.01%, 100% { opacity: 0; }
      }
    `}</style>
  </span>
);

function useTypewriter(text, speed = 150, pause = 2000) {
  const [displayed, setDisplayed] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    let timeoutId;

    const type = () => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
        timeoutId = setTimeout(type, speed);
      } else {
        timeoutId = setTimeout(() => {
          setDisplayed("");
          i = 0;
          timeoutId = setTimeout(type, speed);
        }, pause);
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, [text, speed, pause]);

  return displayed;
}

const darkBackground = "#2a2b29"; // card background similar to skills
const darkBorder = "#3a3b39";
// const darkHighlight = "#e69587";
const darkText = "#f5f5dc";

const WhatDefinesMe = () => {
  const traits = [
    "Systems Thinker",
    "Connector",
    "Creative Builder",
    "Empathetic Communicator",
    "Tech Explorer",
    "Strategic Ideator",
    "Curious Researcher",
    "Meaning-Driven",
    "Experimental",
  ];

  return (
    <div
      style={{
        padding: "2rem 1rem",
        maxWidth: 1100,
        margin: "3rem auto",
        fontFamily: "'Fira Mono', 'Fira Code', monospace",
        color: darkText,
      }}
    >
      <h3
        style={{
          color: darkHighlight,
          fontstyle:"bold",
          marginBottom: 16,
          fontWeight: 700,
          fontSize: "1.2rem",
          letterSpacing: "0.5px",
        }}
      >
        What Defines Me
      </h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "flex-start",
        }}
      >
        {traits.map((trait, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.08,
              y: -8,
              // boxShadow: `0 8px 15px rgba(230, 149, 135, 0.4)`,
              transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 20 },
            }}
            style={{
              backgroundColor: darkBackground,
              border: `1px solid ${darkBorder}`,
              borderRadius: 14,
              padding: "8px 20px",
              fontSize: "1rem",
              fontWeight: 600,
              color: darkText,
              cursor: "pointer",
              userSelect: "none",
              boxShadow: "inset 0 0 0 1px #2f2f2f",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
          >
            {trait}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function HeroSection() {
  const theme = {
    background: "#1e1f1e",
    text: "#f5f5dc",
    highlight: darkHighlight,
  };

  const typedHeadline = useTypewriter("Hello, I’m Aditi", 150, 2000);

  return (
    <Container
      fluid
      className="p-4 p-md-5 rounded shadow-lg"
      style={{
        maxWidth: 1100,
        backgroundColor: theme.background,
        color: theme.text,
        fontFamily: "'Fira Mono', 'Fira Code', monospace",
        transition: "background-color 0.4s ease, color 0.4s ease",
        minHeight: 320,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Row className="w-100 align-items-center">
        <Col md={7}>
          <h1
            style={{
              fontWeight: "700",
              fontSize: "2.8rem",
              letterSpacing: "0.07em",
              marginBottom: "1rem",
              whiteSpace: "pre-wrap",
              minHeight: "3.5rem",
              fontFamily: "'Fira Mono', 'Fira Code', monospace",
            }}
          >
            {typedHeadline
              .split(" ")
              .map((word, idx) =>
                word.toLowerCase() === "aditi" ? (
                  <Highlight key={idx} color={theme.highlight}>
                    {word}{" "}
                  </Highlight>
                ) : (
                  word + " "
                )
              )}
            <Cursor color={theme.highlight} />
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.5",
              maxWidth: 600,
              marginBottom: 0,
              fontWeight: 500,
              fontFamily: "'Fira Mono', 'Fira Code', monospace",
            }}
          >
            A curious mind at the intersection of technology, creativity, and
            impact. I build things that work, look good, and solve real
            problems — all while learning, growing, and questioning what more
            can be done.
          </p>

          <WhatDefinesMe />
        </Col>

        <Col md={5} className="text-center mt-4 mt-md-0">
          <img
            src={hero}
            alt="Hero Visual"
            style={{
              maxWidth: "100%",
              borderRadius: 14,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
