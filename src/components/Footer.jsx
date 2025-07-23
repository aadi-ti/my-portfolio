import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const socialLinks = [
  { icon: FaGithub, label: "GitHub", url: "https://github.com/aadi-ti" },
  { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/aditi-joshi-428b01268/" },
  // { icon: FaTwitter, label: "Twitter", url: "#" },
];

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const year = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % socialLinks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: activeIndex * 48,
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  }, [activeIndex, controls]);

  return (
    <footer
      style={{
        marginTop: 40,
        padding: "1rem 2rem",
        backgroundColor: "#222322",
        color: "#f5f5dc",
        fontFamily: "'Fira Mono', monospace",
        fontWeight: "600",
        fontSize: "0.9rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "0 0 18px 18px",
        userSelect: "none",
        position: "relative",
      }}
    >
      <div>© {year} Aditi Mihirkumar Joshi</div>

      <div
        style={{
          position: "relative",
          display: "flex",
          gap: 16,
          width: socialLinks.length * 48,
          padding: "4px 0",
        }}
      >
        {/* Sliding underline */}
        <motion.div
          animate={controls}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 40,
            height: 3,
            borderRadius: 2,
            backgroundColor: "#e69587",
          }}
        />

        {socialLinks.map(({ icon: Icon, label, url }) => (
          <a
            key={label}
            href={url}
            aria-label={label}
            style={{
              color: "#e69587",
              fontSize: "1.3rem",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              userSelect: "none",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
}
