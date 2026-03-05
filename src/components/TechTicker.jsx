import { useState, useRef } from "react";

const skills = [
  { name: "HTML", color: "#E34F26", icon: "⬡" },
  { name: "CSS", color: "#1572B6", icon: "◈" },
  { name: "JavaScript", color: "#F7DF1E", icon: "◆" },
  { name: "Tailwind", color: "#3178C6", icon: "◇" },
  { name: "React", color: "#61DAFB", icon: "◎" },
  { name: "Next.js", color: "#FFFFFF", icon: "▣" },
  { name: "Node.js", color: "#339933", icon: "◉" },
  { name: "Vue.js", color: "#3776AB", icon: "◍" },
  { name: "Github", color: "#F05032", icon: "◌" },
  { name: "MongoDB", color: "#47A248", icon: "▣" },
  { name: "Photoshop", color: "#E10098", icon: "⬡" },
  { name: "InDesign", color: "#2496ED", icon: "◈" },
  { name: "Illustrator", color: "#06B6D4", icon: "◆" },
  { name: "Procreate", color: "#4FC08D", icon: "◇" },
  { name: "Affinity", color: "#F24E1E", icon: "◎" },
];

const doubled = [...skills, ...skills];

export default function TechTicker() {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        background: "#0A0A0F",
        minHeight: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Courier New', monospace",
        gap: "3rem",
        padding: "2rem 0",
      }}
    >
      {/* Ticker wrapper */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          padding: "1rem 0",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #0A0A0F 0%, transparent 8%, transparent 92%, #0A0A0F 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />

        {/* Scrolling track — forward */}
        <div style={{
          display: "flex",
          gap: "1rem",
          width: "max-content",
          animation: `ticker-forward 30s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}>
          {doubled.map((skill, i) => (
            <SkillPill
              key={`fwd-${i}`}
              skill={skill}
              isHovered={hovered === `fwd-${i}`}
              onEnter={() => setHovered(`fwd-${i}`)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>

        {/* Scrolling track — reverse */}
        <div style={{
          display: "flex",
          gap: "1rem",
          width: "max-content",
          marginTop: "1rem",
          animation: `ticker-reverse 25s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}>
          {[...doubled].reverse().map((skill, i) => (
            <SkillPill
              key={`rev-${i}`}
              skill={skill}
              isHovered={hovered === `rev-${i}`}
              onEnter={() => setHovered(`rev-${i}`)}
              onLeave={() => setHovered(null)}
              dim
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker-forward {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ticker-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

function SkillPill({ skill, isHovered, onEnter, onLeave, dim }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 1.2rem",
        borderRadius: "999px",
        border: `1px solid ${isHovered ? skill.color : dim ? "#1a1a1a" : "#222"}`,
        background: isHovered
          ? `${skill.color}18`
          : dim ? "transparent" : "#111114",
        color: isHovered ? skill.color : dim ? "#2a2a2a" : "#888",
        fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        cursor: "default",
        transition: "all 0.25s ease",
        userSelect: "none",
        whiteSpace: "nowrap",
        boxShadow: isHovered ? `0 0 16px ${skill.color}33` : "none",
      }}
    >
      <span style={{ fontSize: "0.7em", opacity: isHovered ? 1 : 0.5 }}>{skill.icon}</span>
      {skill.name}
    </div>
  );
}
