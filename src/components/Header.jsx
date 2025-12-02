import React, { useState } from "react";
import logo from "../images/logo.webp";

export default function Header() {

  return (
    <header className="flex justify-between items-center bg-[var(--menu)] px-4 py-3 relative z-50 shadow-lg">
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

      <p
        href="/"
        className="font-Azonix text-gray-800 text-[16px]"
      >
        Athénaïs Lecomte
      </p>
    </header>
  );
}
