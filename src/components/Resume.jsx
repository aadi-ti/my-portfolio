import React from "react";
import { Button } from "react-bootstrap";
import  resume from "../assets/Aditi_Resume (7).pdf";

const darkHighlight = "#e69587";
const darkText = "#f5f5dc";

export default function Resume() {
  return (
    <div style={{ paddingLeft: "4rem", paddingRight: "4rem" }}>
      <Button
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: darkHighlight,
          borderColor: darkHighlight,
          color: darkText,
          fontFamily: "'Fira Mono', 'Fira Code', monospace",
          fontWeight: 700,
          fontSize: "1.1rem",
          padding: "0.5rem 1.5rem",
          textAlign: "left",
        }}
        variant="primary"
      >
        View Resume
      </Button>
    </div>
  );
}
