import { useState } from "react";

const skills = [
  { name: "HTML", icon: "⬡", color: "#f43a97" },
  { name: "CSS", icon: "◈", color: "#bb6eaa" },
  { name: "JavaScript", icon: "◆", color: "#f43a97" },
  { name: "GitHub", icon: "◇", color: "#bb6eaa" },
  { name: "React", icon: "◎", color: "#f43a97" },
  { name: "Next.js", icon: "▣", color: "#685173" },
  { name: "Node.js", icon: "◉", color: "#bb6eaa" },
  { name: "MongoDB", icon: "◍", color: "#f43a97" },
  { name: "Vue.js", icon: "◌", color: "#685173" },
  { name: "Photoshop", icon: "⬡", color: "#bb6eaa" },
  { name: "InDesign", icon: "◈", color: "#f43a97" },
  { name: "Illustrator", icon: "◆", color: "#685173" },
  { name: "Procreate", icon: "◇", color: "#bb6eaa" },
  { name: "Affinity", icon: "◎", color: "#f43a97" },
  { name: "ClipStudio Paint", icon: "▣", color: "#685173" },
];

const doubled = [...skills, ...skills];

export default function TechTicker() {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #C5B6C9, #E0CFD7)",
        width: "100%",
        padding: "3rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Zone ticker */}
      <div
        style={{ width: "100%", overflow: "hidden", position: "relative", padding: "0.5rem 0" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fondu bords */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
          background:
            "linear-gradient(to right, #C5B6C9 0%, transparent 8%, transparent 92%, #E0CFD7 100%)",
        }} />

        {/* Rangée 1 — vers la gauche */}
        <div style={{
          display: "flex",
          gap: "0.75rem",
          width: "max-content",
          animation: "ticker-fwd 28s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}>
          {doubled.map((skill, i) => (
            <Pill
              key={`a-${i}`}
              skill={skill}
              isHovered={hovered === `a-${i}`}
              onEnter={() => setHovered(`a-${i}`)}
              onLeave={() => setHovered(null)}
              variant="solid"
            />
          ))}
        </div>

        {/* Rangée 2 — vers la droite */}
        <div style={{
          display: "flex",
          gap: "0.75rem",
          width: "max-content",
          marginTop: "0.75rem",
          animation: "ticker-rev 22s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}>
          {[...doubled].reverse().map((skill, i) => (
            <Pill
              key={`b-${i}`}
              skill={skill}
              isHovered={hovered === `b-${i}`}
              onEnter={() => setHovered(`b-${i}`)}
              onLeave={() => setHovered(null)}
              variant="ghost"
            />
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes ticker-fwd {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ticker-rev {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

function Pill({ skill, isHovered, onEnter, onLeave, variant }) {
  const isSolid = variant === "solid";

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.45rem",
        padding: "0.45rem 1.1rem",
        borderRadius: "999px",
        border: isHovered
          ? `1.5px solid ${skill.color}`
          : isSolid
          ? "1.5px solid rgba(104,81,115,0.35)"
          : "1.5px solid rgba(104,81,115,0.15)",
        background: isHovered
          ? `linear-gradient(135deg, ${skill.color}22, ${skill.color}11)`
          : isSolid
          ? "rgba(255,255,255,0.45)"
          : "rgba(255,255,255,0.15)",
        backdropFilter: "blur(6px)",
        color: isHovered ? skill.color : isSolid ? "#685173" : "#a08aaa",
        fontSize: "clamp(0.65rem, 1.4vw, 0.8rem)",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        cursor: "default",
        transition: "all 0.2s ease",
        userSelect: "none",
        whiteSpace: "nowrap",
        boxShadow: isHovered
          ? `0 0 14px ${skill.color}44, 0 2px 8px rgba(104,81,115,0.15)`
          : isSolid
          ? "0 2px 6px rgba(104,81,115,0.1)"
          : "none",
      }}
    >
      <span style={{ fontSize: "0.65em", opacity: isHovered ? 1 : 0.6 }}>
        {skill.icon}
      </span>
      {skill.name}
    </div>
  );
}
