import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiStreamlit,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiHuggingface,
  SiNetlify,
  SiFigma,
  SiCanva,
  SiGithub,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";

const skillsList = [
  { label: "Python", icon: <SiPython /> },
  { label: "JavaScript", icon: <SiJavascript /> },
  { label: "HTML5", icon: <SiHtml5 /> },
  { label: "CSS3", icon: <SiCss3 /> },
  { label: "React", icon: <SiReact /> },
  { label: "Node.js", icon: <SiNodedotjs /> },
  { label: "Express.js", icon: <SiExpress /> },
  { label: "PostgreSQL", icon: <SiPostgresql /> },
  { label: "Supabase", icon: <SiSupabase /> },
  { label: "Streamlit", icon: <SiStreamlit /> },
  { label: "NumPy", icon: <SiNumpy /> },
  { label: "Pandas", icon: <SiPandas /> },
  { label: "OpenCV", icon: <SiOpencv /> },
  { label: "Hugging Face", icon: <SiHuggingface /> },
  { label: "Netlify", icon: <SiNetlify /> },
  { label: "Figma", icon: <SiFigma /> },
  { label: "Canva", icon: <SiCanva /> },
  { label: "GitHub", icon: <SiGithub /> },
  { label: "Postman", icon: <SiPostman /> },
  { label: "TailwindCSS", icon: <SiTailwindcss /> },
];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Skills() {
  const [skills, setSkills] = useState(skillsList);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkills((prev) => shuffle(prev));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#1e1f1e",
        padding: "3rem 2rem",
        borderRadius: "18px",
        maxWidth: 1100,
        margin: "3rem auto",
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
        fontFamily: "'Fira Code', monospace",
        color: "#f5f5dc",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "700",
          fontSize: "1.8rem",
          letterSpacing: "1px",
        }}
      >
        Skills & Tools
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "center",
        }}
      >
        {skills.map(({ label, icon }) => (
          <motion.div
            key={label}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{
              scale: 1.07,
              backgroundColor: "#2f312f",
              transition: { duration: 0.3 },
            }}
            style={{
              background: "#2a2b29",
              border: "1px solid #3a3b39",
              borderRadius: 14,
              padding: "1.4rem",
              width: 110,
              height: 130,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "inset 0 0 0 1px #2f2f2f",
              cursor: "default",
            }}
          >
            <div style={{ fontSize: "2.8rem", marginBottom: "0.7rem" }}>{icon}</div>
            <span style={{ fontSize: "0.9rem", color: "#f5f5dc" }}>{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
