import React from "react"
import logo from "../images/logo.webp"


const Header = () => {
  return (
    <header className="flex justify-between items-center bg-[var(--bg)] text-[var(--secondary)] px-4 py-3">
      <a
        href="https://github.com/Piamah"
        target="_blank"
        rel="noreferrer"
        className="flex items-center"
      >
        <img
          src={logo}
          alt="Logo Piama"
          className="w-auto h-10 md:h-12"
        />
      </a>

      <a
        href="/"
        className="text-lg md:text-xl font-semibold hover:text-[var(--text)] transition-colors"
      >
        Athénaïs Lecomte
      </a>
    </header>
  )
}

export default Header
