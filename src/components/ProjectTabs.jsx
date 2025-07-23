import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const darkHighlight = "#e69587";

const Highlight = ({ children, color }) => (
  <span style={{ color: color || darkHighlight, fontWeight: "600" }}>
    {children}
  </span>
);

const initialProjects = [
  {
    label: "Dietician Portfolio",
    icon: "🥗",
    description: (
      <>
        <p>
          <Highlight>Dietician Portfolio Platform</Highlight> is a full-stack web app designed for nutritionists and clients to build and manage personalized diet plans collaboratively.
        </p>
        <p>
          <b>Frontend:</b> Crafted with <Highlight>React</Highlight> and <Highlight>TailwindCSS</Highlight> for a clean, responsive interface.
        </p>
        <p>
          <b>Backend & Database:</b> Built on <Highlight>Supabase</Highlight> for authentication, real-time updates, and secure data storage.
        </p>
        <p>
          <b>Serverless Functions:</b> Uses <Highlight>Netlify Functions</Highlight> to handle uploads and trigger email notifications via <Highlight>Nodemailer</Highlight>.
        </p>
      </>
    ),
  },
  {
    label: "Resume Critiquer",
    icon: "📄",
    description: (
      <>
        <p>
          <Highlight>Resume Critiquer</Highlight> is an AI-powered web tool that provides role-specific feedback by analyzing uploaded resumes.
        </p>
        <p>
          <b>Built with:</b> <Highlight>Streamlit</Highlight> for quick, intuitive UI.
        </p>
        <p>
          <b>AI & NLP:</b> Combines <Highlight>OpenAI GPT</Highlight> with <Highlight>HuggingFace Transformers</Highlight> to generate intelligent, context-aware suggestions.
        </p>
        <p>
          <b>Parsing:</b> Utilizes <Highlight>PyPDF2</Highlight> to extract structured content from PDF resumes.
        </p>
      </>
    ),
  },
  {
    label: "Parking Detector",
    icon: "🚗",
    description: (
      <>
        <p>
          The <Highlight>Parking Space Detector</Highlight> is a real-time computer vision solution that tracks available parking spots via video feeds.
        </p>
        <p>
          <b>Tech Stack:</b> Developed in <Highlight>Python</Highlight> using <Highlight>OpenCV</Highlight> for image processing.
        </p>
        <p>
          <b>Purpose:</b> Designed to optimize parking space usage and minimize the need for manual supervision.
        </p>
      </>
    ),
  },
  {
    label: "Job Portal Backend",
    icon: "💼",
    description: (
      <>
        <p>
          A secure, scalable API for a job search platform with role-based access, robust filtering, and authentication.
        </p>
        <p>
          <b>Backend:</b> <Highlight>Node.js</Highlight> with <Highlight>Express.js</Highlight> for modular RESTful services.
        </p>
        <p>
          <b>Database:</b> <Highlight>PostgreSQL</Highlight> integrated via <Highlight>Sequelize ORM</Highlight> for structured modeling.
        </p>
        <p>
          <b>Architecture:</b> Built for maintainability and future extensibility.
        </p>
      </>
    ),
  },
  {
    label: "AI Web Scraper",
    icon: "🤖",
    description: (
      <>
        <p>
          A modular web scraper enhanced with AI to extract, filter, and summarize online content automatically.
        </p>
        <p>
          <b>Core:</b> <Highlight>Python</Highlight> + <Highlight>BeautifulSoup</Highlight> for dynamic web parsing.
        </p>
        <p>
          <b>AI Integration:</b> Powered by <Highlight>OpenAI GPT</Highlight> to generate intelligent summaries.
        </p>
        <p>
          <b>Automation:</b> Supports keyword filtering and auto-pipeline workflows for scalable extraction.
        </p>
      </>
    ),
  },
];

// Shuffle helper function
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ProjectsShuffle() {
  const [order, setOrder] = useState(initialProjects);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => shuffle(prev));
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        justifyContent: "center",
        padding: 24,
        maxWidth: 1100,
        margin: "3rem auto",
        fontFamily: "'Fira Mono', 'Fira Code', 'Source Code Pro', monospace",
        color: "#f5f5dc",
        backgroundColor: "#1e1f1e",
        borderRadius: 18,
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
        userSelect: "none",
      }}
    >
      {order.map(({ label, icon, description }) => (
        <motion.div
          key={label}
          layout
          transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 15px 25px rgba(230, 149, 135, 0.5)",
            cursor: "pointer",
            transition: { duration: 0.3 },
          }}
          style={{
            background: "linear-gradient(145deg, #2c2d2b, #222322)",
            borderRadius: 16,
            padding: 24,
            boxShadow: "0 6px 12px rgba(0,0,0,0.4)",
            width: 320,
            minHeight: 300,
            color: "#f5f5dc",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            overflow: "hidden",
            userSelect: "text",
            transition: "color 0.3s ease",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: "1.5rem",
              userSelect: "none",
            }}
          >
            <span style={{ fontSize: "2rem" }}>{icon}</span> {label}
          </h3>
          <div
            style={{
              flexGrow: 1,
              overflowY: "auto",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "inherit",
            }}
          >
            {description}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
