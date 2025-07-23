import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

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
    "Multidisciplinary",
  ];

  return (
    <motion.div
      style={{ marginTop: 30 }}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.4, duration: 1 }}
      viewport={{ once: true }}
    >
      <h5 style={{ color: darkHighlight, marginBottom: 16 }}>What defines me</h5>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {traits.map((trait, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#2e2f2e",
              color: "#f5f5dc",
              border: `1px solid ${darkHighlight}`,
              borderRadius: 14,
              padding: "6px 12px",
              fontSize: "0.9rem",
              fontWeight: 500,
              fontFamily: "'Fira Mono', 'Fira Code', monospace",
            }}
          >
            {trait}
          </span>
        ))}
      </div>
    </motion.div>
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
            src="/hero-image.png"
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
