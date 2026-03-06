import React from "react";
import { GoLinkExternal } from "react-icons/go";

const Card = ({ title, subtitle, tech, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between w-[260px] min-h-[180px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-pointer no-underline"
      style={{
        background: "rgba(255,255,255,0.32)",
        border: "1.5px solid rgba(104,81,115,0.18)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(104,81,115,0.1), inset 0 1px 0 rgba(255,255,255,0.55)",
      }}
    >

      {/* Glow hover en arrière-plan */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 0%, #f43a9710 0%, transparent 65%)" }}
      />

      <div className="relative z-10 p-5 flex flex-col gap-3 h-full">

        {/* Tags tech */}
        <div className="flex flex-wrap gap-1.5">
          {tech.split("-").map((t, i) => (
            <span
              key={i}
              className="text-[0.55rem] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full font-Jost font-semibold"
              style={{
                background: "rgba(244,58,151,0.1)",
                border: "1px solid rgba(244,58,151,0.2)",
                color: "#f43a97",
              }}
            >
              {t.trim()}
            </span>
          ))}
        </div>

        {/* Titre */}
        <h3
          className="font-DMSerifDisplay text-[1.05rem] leading-snug tracking-[0.02em] transition-colors duration-200 group-hover:text-[#f43a97]"
          style={{ color: "#685173" }}
        >
          {title}
        </h3>

        {/* Sous-titre */}
        <p
          className="font-Jost text-[0.78rem] leading-relaxed opacity-70 flex-1"
          style={{ color: "#685173" }}
        >
          {subtitle}
        </p>

        {/* Footer — lien */}
        <div className="flex items-center justify-between mt-2 pt-3"
          style={{ borderTop: "1px solid rgba(104,81,115,0.1)" }}
        >
          <span
            className="font-Jost text-[0.6rem] tracking-[0.2em] uppercase opacity-50"
            style={{ color: "#685173" }}
          >
            Voir le projet
          </span>
          <span
            className="w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #f43a97, #bb6eaa)",
              boxShadow: "0 2px 10px rgba(244,58,151,0.3)",
            }}
          >
            <GoLinkExternal className="text-white text-[0.7rem]" />
          </span>
        </div>

      </div>
    </a>
  );
};

export default Card;