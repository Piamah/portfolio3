import React, { useState } from "react";
import logo from "../images/logo.webp";

export default function Header() {

  return (
    <header className="flex justify-between items-center bg-gradient-to-br from-purple-50 to-pink-50 text-[var(--secondary)] px-4 py-3 relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/Piamah"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <img src={logo} alt="Logo Piama" className="w-auto h-10 md:h-12" />
        </a>
      </div>

      <a
        href="/"
        className="text-lg md:text-xl font-semibold hover:text-[var(--text)] transition-colors"
      >
        Athénaïs Lecomte
      </a>
    </header>
  );
}
