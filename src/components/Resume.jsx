import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const darkBackground = "#1e1f1e";
const darkText = "#f5f5dc";
const darkHighlight = "#e69587";

const linkStyle = {
  color: darkHighlight,
  textDecoration: "none",
  fontWeight: 600,
};

const sectionTitleStyle = {
  fontSize: "1.4rem",
  fontWeight: "700",
  marginTop: "2rem",
  marginBottom: "1rem",
  borderBottom: `2px solid ${darkHighlight}`,
  paddingBottom: "0.3rem",
  color: darkHighlight,
  fontFamily: "'Fira Mono', 'Fira Code', monospace",
};

const headingStyle = {
  fontFamily: "'Fira Mono', 'Fira Code', monospace",
  color: darkText,
  fontWeight: "700",
  fontSize: "2rem",
  marginBottom: "0.3rem",
};

const subheadingStyle = {
  fontWeight: "600",
  fontSize: "1.1rem",
  marginBottom: "0.2rem",
  color: darkText,
};

const textStyle = {
  fontSize: "1rem",
  lineHeight: "1.5",
  marginBottom: "0.5rem",
  fontFamily: "'Fira Mono', 'Fira Code', monospace",
  color: darkText,
};

const listStyle = {
  paddingLeft: "1.2rem",
  marginBottom: "0.5rem",
  color: darkText,
};

export default function Resume() {
  return (
    <Container
      fluid
      className="p-4 p-md-5 rounded shadow-lg"
      style={{
        backgroundColor: darkBackground,
        borderRadius: 12,
        maxWidth: 1100,
        color: darkText,
        fontFamily: "'Fira Mono', 'Fira Code', monospace",
        marginTop: "3rem",
      }}
    >
      <Row>
        <Col>
          {/* Header */}
          <header style={{ marginBottom: "2rem" }}>
            <h1 style={headingStyle}>ADITI MIHIRKUMAR JOSHI</h1>
            <p style={{ ...textStyle, fontWeight: "600" }}>
              Phone: <span style={{ color: darkHighlight }}>6358850257</span> ⋄ Email:{" "}
              <a href="mailto:aditi.mihirkumar2022@vitstudent.ac.in" style={linkStyle}>
                aditi.mihirkumar2022@vitstudent.ac.in
              </a>{" "}
              ⋄ LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/aditi-joshi-428b01268/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                Aditi Joshi
              </a>{" "}
              ⋄ Portfolio:{" "}
              <a
                href="https://your-portfolio-link.com"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                portfolio
              </a>
            </p>
          </header>

          {/* Education */}
          <section>
            <h2 style={sectionTitleStyle}>EDUCATION</h2>
            <div>
              <p style={subheadingStyle}>B.Tech. in Computer Science Engineering</p>
              <p style={textStyle}>2022 - 2026</p>
              <p style={textStyle}>Vellore Institute of Technology, Chennai</p>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <p style={subheadingStyle}>Higher Secondary School</p>
              <p style={textStyle}>H.B. Kapadia Higher Secondary School</p>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <p style={subheadingStyle}>High School</p>
              <p style={textStyle}>Zydus School of Excellence - Godhavi</p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 style={sectionTitleStyle}>EXPERIENCE</h2>
            <div>
              <p style={subheadingStyle}>
                Software Intern – Backend Developer{" "}
                <span style={{ fontWeight: "400", color: darkText }}>
                  (May 2024 – July 2024)
                </span>
              </p>
              <p style={textStyle}>Momentum Ventures, Ahmedabad, Gujarat</p>
              <ul style={listStyle}>
                <li>
                  Engineered RESTful APIs using Node.js and Express.js for applicant and
                  recruiter workflows in a job portal.
                </li>
                <li>Modeled and integrated scalable databases using PostgreSQL and Sequelize ORM.</li>
              </ul>
            </div>
            <div>
              <p style={subheadingStyle}>Software Intern (2020 – 2022)</p>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 style={sectionTitleStyle}>PROJECTS</h2>

            <div style={{ marginBottom: "1rem" }}>
              <p style={subheadingStyle}>Dietician Portfolio Platform</p>
              <p style={{ ...textStyle, fontStyle: "italic" }}>
                <a
                  href="https://github.com/aadi-ti/dietician-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  GitHub
                </a>{" "}
                |{" "}
                <a
                  href="https://hplus.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Live Demo
                </a>
              </p>
              <ul style={listStyle}>
                <li>
                  Developed an interactive intake platform using TailwindCSS, Supabase,
                  and Netlify Functions.
                </li>
                <li>
                  Implemented secure uploads, automatic database logging, and email
                  triggers via Nodemailer.
                </li>
              </ul>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <p style={subheadingStyle}>Resume Critiquer – AI Career Assistant</p>
              <p style={{ ...textStyle, fontStyle: "italic" }}>
                <a
                  href="https://github.com/aadi-ti/resume-critiquer"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  GitHub
                </a>
              </p>
              <ul style={listStyle}>
                <li>
                  Created a resume evaluation tool using Streamlit and OpenAI for
                  role-specific feedback.
                </li>
                <li>
                  Parsed PDFs with PyPDF2 and generated actionable insights using
                  HuggingFace transformers.
                </li>
              </ul>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <p style={subheadingStyle}>Parking Space Detector – CV Tool</p>
              <p style={{ ...textStyle, fontStyle: "italic" }}>
                <a
                  href="https://github.com/aadi-ti/parking-space-detector"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  GitHub
                </a>
              </p>
              <ul style={listStyle}>
                <li>
                  Designed a CV-based system using OpenCV to identify available parking
                  from static footage.
                </li>
                <li>
                  Automated space detection to improve utilization and reduce manual
                  intervention.
                </li>
              </ul>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <p style={subheadingStyle}>Job Portal Backend (Ongoing)</p>
              <p style={{ ...textStyle, fontStyle: "italic" }}>
                <a
                  href="https://github.com/aadi-ti/job-portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  GitHub
                </a>
              </p>
              <ul style={listStyle}>
                <li>
                  Architecting a recruitment platform with dashboard interfaces,
                  authentication, and job filtering.
                </li>
                <li>
                  Building secure, modular APIs and structuring a scalable PostgreSQL
                  schema.
                </li>
              </ul>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <p style={subheadingStyle}>AI-Powered Web Scraper</p>
              <p style={{ ...textStyle, fontStyle: "italic" }}>
                <a
                  href="https://github.com/aadi-ti/ai-scraper"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  GitHub
                </a>
                {/* <a
                  href="https://demo-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Demo
                </a> */}
              </p>
              <ul style={listStyle}>
                <li>
                  Built a scraper using BeautifulSoup and Python to extract and summarize
                  online content via OpenAI.
                </li>
                <li>
                  Added keyword filtering and modular configuration for intelligent data
                  capture.
                </li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 style={sectionTitleStyle}>SKILLS</h2>
            <p style={{ ...subheadingStyle, marginBottom: "0.5rem" }}>Languages</p>
            <p style={textStyle}>JavaScript, Python, Java</p>

            <p style={{ ...subheadingStyle, marginBottom: "0.5rem" }}>Web Frameworks</p>
            <p style={textStyle}>
              HTML, CSS, React.js, Node.js, Express.js, PostgreSQL, Supabase
            </p>

            <p style={{ ...subheadingStyle, marginBottom: "0.5rem" }}>Libraries</p>
            <p style={textStyle}>Streamlit, Gradio, Crew AI</p>

            <p style={{ ...subheadingStyle, marginBottom: "0.5rem" }}>Tools</p>
            <p style={textStyle}>
              NumPy, Pandas, OpenCV, PyPDF2, Hugging Face, Nodemailer, BeautifulSoup
            </p>

            <p style={{ ...subheadingStyle, marginBottom: "0.5rem" }}>Design</p>
            <p style={textStyle}>VS Code, Postman, GitHub, Netlify, Figma, Canva</p>

            <p style={{ ...subheadingStyle, marginBottom: "0.5rem" }}>Core Competencies</p>
            <p style={textStyle}>API Design, DB Modeling, Optimization, Collaboration, Version Control</p>
          </section>

          {/* Leadership */}
          <section>
            <h2 style={sectionTitleStyle}>LEADERSHIP</h2>
            <p style={subheadingStyle}>Team Lead – Enactus VIT Chennai</p>
            <ul style={listStyle}>
              <li>
                Led Project Pooranya with 30+ team members to upcycle fast fashion waste
                into sustainable products.
              </li>
              <li>
                Led the Creative Team in crafting brand identity, UI/UX content, and
                digital outreach strategies.
              </li>
            </ul>
          </section>

          {/* Achievements */}
          <section>
            <h2 style={sectionTitleStyle}>ACHIEVEMENTS</h2>
            <ul style={listStyle}>
              <li>
                Enactus Nationals 2024 – Ranked among the top 20 teams nationwide for
                impact innovation.
              </li>
              <li>Winner – Illuminate (Jain University) for Project Samudra.</li>
            </ul>
          </section>
        </Col>
      </Row>
    </Container>
  );
}
